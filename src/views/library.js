/**
 * Revision views
 *   #/papers                     index of every paper, question and topic
 *   #/papers/:section            continuous page, scrolled to a paper (or the formula sheet)
 *   #/papers/:section/:anchorId  ... scrolled to a question part or formula card
 */
import { SECTIONS, PAPERS, FORMULA_SHEET, sectionById, cardCode, partsByTopic } from '../content/index.js';
import { TOPICS } from '../content/topics.js';
import { renderCard, setCardOpen } from '../components/card.js';
import { renderQuestionPart } from '../components/question.js';
import { rich, escapeHtml } from '../lib/rich.js';
import { icons } from '../lib/icons.js';
import { moveInk } from '../components/sidebar.js';

/** Short label for the in-page nav: "Marginal rate of substitution (MRS)" -> "MRS". */
function navLabel(card) {
  if (card.nav) return card.nav;
  const paren = card.title.match(/\(([^)]+)\)\s*$/);
  if (paren && paren[1].length <= 5 && paren[1] === paren[1].toUpperCase()) return paren[1];
  return card.title.split(/:\s|\s\(|,\s/)[0];
}

const partCount = (paper) => paper.questions.reduce((n, q) => n + q.parts.length, 0);
const snippet = (str, n = 78) => {
  const plain = String(str).replace(/\$[^$]*\$/g, '…').replace(/\*\*/g, '');
  return plain.length > n ? plain.slice(0, n).trimEnd() + '…' : plain;
};

/** Topic grid, shared by the index page and the home page. */
export function renderTopicGrid() {
  const byTopic = partsByTopic();
  return TOPICS.filter((tp) => byTopic.get(tp.id)?.length)
    .map((tp) => {
      const links = byTopic
        .get(tp.id)
        .map(({ part, section }) => `<li><a href="#/papers/${section.id}/${part.id}"><span>${escapeHtml(section.short)}</span><span>Q${escapeHtml(part.label)} · ${escapeHtml(snippet(part.prompt, 60))}</span></a></li>`)
        .join('');
      return `<section class="lib-block panel topic-block"><div class="lib-block__head"><span class="lib-block__title">${escapeHtml(tp.label)}</span></div><ul>${links}</ul></section>`;
    })
    .join('');
}

/* ---------- Index ---------- */
function renderIndex() {
  const papers = PAPERS.map((p) => {
    const items = p.questions
      .flatMap((q) => q.parts.map((part) => `<li><a href="#/papers/${p.id}/${part.id}"><span>${escapeHtml(part.label)}</span><span>${escapeHtml(snippet(part.prompt))} <em class="lib-marks">${part.marks}m</em></span></a></li>`))
      .join('');
    return `
      <section class="lib-block panel" data-accent="${p.accent}">
        <div class="lib-block__head"><span class="lib-block__num">Paper</span><a class="lib-block__title" href="#/papers/${p.id}">${escapeHtml(p.title)}</a></div>
        <ul>${items}</ul>
      </section>`;
  }).join('');

  const formulas = `
      <section class="lib-block panel" data-accent="${FORMULA_SHEET.accent}">
        <div class="lib-block__head"><span class="lib-block__num">Revision</span><a class="lib-block__title" href="#/papers/${FORMULA_SHEET.id}">${escapeHtml(FORMULA_SHEET.title)}</a></div>
        <ul>${FORMULA_SHEET.cards.map((c, i) => `<li><a href="#/papers/${FORMULA_SHEET.id}/${c.id}"><span>${cardCode(FORMULA_SHEET, i)}</span><span>${escapeHtml(c.title)}</span></a></li>`).join('')}</ul>
      </section>`;

  return `
  <div class="page"><div class="page__inner">
    <header class="lib-head">
      <div class="eyebrow">Introduction to Finance</div>
      <h1 class="lib-head__title">All papers &amp; topics</h1>
      <p class="lib-head__lede">Every question on one page, plus the same questions grouped by topic, so you can see what comes up again and again.</p>
    </header>
    <div class="lib-grid">${papers}${formulas}</div>
    <div class="subhead"><span class="eyebrow">By topic</span><h2>Questions grouped by topic</h2></div>
    <div class="lib-grid">${renderTopicGrid()}</div>
  </div></div>`;
}

/* ---------- Continuous page: every paper, then the formula sheet ---------- */
function toolbar(filters) {
  return `
    <div class="toolbar">
      <div class="toolbar__left">${filters}<span class="toolbar__count" data-count></span></div>
      <div class="toolbar__right">
        <button class="btn" type="button" data-action="expand-all">${icons.expand}Expand all</button>
        <button class="btn" type="button" data-action="collapse-all">${icons.collapse}Collapse all</button>
      </div>
    </div>`;
}

function paperBlock(paper) {
  const meta = `
    <aside class="method panel paper-meta" aria-label="Exam details">
      <div class="eyebrow">Exam details</div>
      <dl class="meta-list">${paper.meta.map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`).join('')}</dl>
      ${paper.timing ? `<p class="paper-meta__timing">${rich(paper.timing)}</p>` : ''}
    </aside>`;

  const filters = `<div class="segmented" role="group" aria-label="Filter ${escapeHtml(paper.title)} questions">
      <button type="button" data-filter="all" aria-pressed="true">All</button>
      <button type="button" data-filter="essay" aria-pressed="false">Essays</button>
      <button type="button" data-filter="calc" aria-pressed="false">Calculations</button>
    </div>`;

  const questions = paper.questions.map((q) => {
    const marks = q.parts.reduce((n, p) => n + p.marks, 0);
    return `
      <div class="qgroup">
        <div class="qgroup__head">
          <span class="qgroup__num">Question ${q.number}</span>
          <span class="qgroup__meta">${q.compulsory ? 'Compulsory' : 'Optional'} · ${marks} marks</span>
        </div>
        <div class="cards">${q.parts.map((part) => renderQuestionPart(part, q, paper)).join('')}</div>
      </div>`;
  }).join('');

  return `
  <section class="flow-section" id="${paper.id}" data-section="${paper.id}" data-accent="${paper.accent}" aria-labelledby="${paper.id}-heading">
    <header class="section-hero">
      <div class="section-hero__eyebrow"><span class="eyebrow">Past paper</span><span class="eyebrow">${paper.questions.length} questions · ${partCount(paper)} parts</span></div>
      <h2 class="section-hero__title" id="${paper.id}-heading">${escapeHtml(paper.title)}</h2>
      <p class="section-hero__lede">${rich(paper.summary)}</p>
    </header>
    ${meta}
    ${toolbar(filters)}
    ${questions}
    <div class="empty-filter" data-empty hidden>No questions match this filter.</div>
  </section>`;
}

function formulaBlock(section) {
  return `
  <section class="flow-section" id="${section.id}" data-section="${section.id}" data-accent="${section.accent}" aria-labelledby="${section.id}-heading">
    <header class="section-hero">
      <div class="section-hero__eyebrow"><span class="eyebrow">Revision</span><span class="eyebrow">${section.cards.length} formulas</span></div>
      <h2 class="section-hero__title" id="${section.id}-heading">${escapeHtml(section.title)}</h2>
      <p class="section-hero__lede">${rich(section.summary)}</p>
    </header>
    ${toolbar('')}
    <div class="cards">${section.cards.map((c, idx) => renderCard(c, section, idx)).join('')}</div>
  </section>`;
}

function chips(section) {
  if (section.kind === 'paper') {
    return section.questions
      .flatMap((q) => q.parts.map((part) => `<a class="tab" href="#/papers/${section.id}/${part.id}" data-target="${part.id}" title="Question ${escapeHtml(part.label)}">Q${escapeHtml(part.label)}</a>`))
      .join('');
  }
  return section.cards.map((c, idx) => `<a class="tab" href="#/papers/${section.id}/${c.id}" data-target="${c.id}" title="${escapeHtml(c.title)}"><span class="tab__code">${cardCode(section, idx)}</span>${escapeHtml(navLabel(c))}</a>`).join('');
}

function renderFlow() {
  const groups = SECTIONS.map((section) => `
    <div class="tabs__track" data-group="${section.id}" data-accent="${section.accent}" hidden>
      ${chips(section)}
      <span class="ink" aria-hidden="true"></span>
    </div>`).join('');

  return `
  <nav class="subnav" aria-label="Questions in this paper">
    <div class="subnav__inner">
      <span class="subnav__label" data-subnav-label></span>
      <div class="tabs" data-subnav>${groups}</div>
    </div>
  </nav>
  <div class="page">
    <div class="section-wrap flow">${SECTIONS.map((s) => (s.kind === 'paper' ? paperBlock(s) : formulaBlock(s))).join('')}</div>
  </div>`;
}

let suppressHashUntil = 0; // don't rewrite the address while scrolling to a requested spot

function focusAnchor(root, anchorId, { smooth = true } = {}) {
  if (!anchorId) return;
  suppressHashUntil = performance.now() + (smooth ? 1400 : 900);
  const el = root.querySelector(`#${CSS.escape(anchorId)}`);
  if (!el) return;
  const isCard = el.classList.contains('fcard');
  if (isCard) {
    if (el.hidden) applyFilter(el.closest('.flow-section'), 'all');
    setCardOpen(el, true);
  }
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    // On first load, fonts and maths can still shift the layout: settle once more.
    if (!smooth) {
      const target = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
      const settle = () => { if (Math.abs(el.getBoundingClientRect().top - target) > 8) el.scrollIntoView({ block: 'start' }); };
      document.fonts?.ready.then(() => setTimeout(settle, 60));
      setTimeout(settle, 450);
    }
    if (isCard) {
      el.classList.remove('is-flash');
      void el.offsetWidth; // restart animation
      el.classList.add('is-flash');
    }
  });
}

function applyFilter(scope, filter) {
  let shown = 0;
  const cards = scope.querySelectorAll('.fcard');
  cards.forEach((card) => {
    const visible = filter === 'all' || card.dataset.type === filter;
    card.hidden = !visible;
    const chip = document.querySelector(`.subnav [data-target="${card.id}"]`);
    if (chip) chip.hidden = !visible;
    if (visible) shown += 1;
  });
  scope.querySelectorAll('.qgroup').forEach((g) => { g.hidden = !g.querySelector('.fcard:not([hidden])'); });
  scope.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
  const count = scope.querySelector('[data-count]');
  const noun = scope.querySelector('.qcard') ? 'questions' : 'formulas';
  if (count) count.textContent = shown === cards.length ? `${cards.length} ${noun}` : `${shown} of ${cards.length} ${noun}`;
  const empty = scope.querySelector('[data-empty]');
  if (empty) empty.hidden = shown > 0;
}

function mountFlow(root, params, ctx) {
  root.querySelectorAll('.flow-section').forEach((sec) => applyFilter(sec, 'all'));

  root.addEventListener('click', (e) => {
    const toggle = e.target.closest('.fcard__toggle');
    if (toggle) {
      const card = toggle.closest('.fcard');
      setCardOpen(card, card.dataset.open !== 'true');
      return;
    }
    const scope = e.target.closest('.flow-section');
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (scope && (action === 'expand-all' || action === 'collapse-all')) {
      scope.querySelectorAll('.fcard:not([hidden])').forEach((c) => setCardOpen(c, action === 'expand-all'));
      return;
    }
    const filterBtn = e.target.closest('[data-filter]');
    if (scope && filterBtn) {
      applyFilter(scope, filterBtn.dataset.filter);
      root.__spy?.();
      return;
    }
    const copy = e.target.closest('[data-copy-link]');
    if (copy) {
      const url = `${location.origin}${location.pathname}${copy.dataset.copyLink}`;
      const done = () => ctx.toast('Link copied');
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(url).then(done, () => ctx.toast(url));
      else ctx.toast(url);
    }
  });

  /* Scroll-spy: as you scroll, track the section (top tabs) and the card (sub-nav) in view */
  const sections = [...root.querySelectorAll('.flow-section')];
  const strip = root.querySelector('[data-subnav]');
  const label = root.querySelector('[data-subnav-label]');
  const topTabs = document.querySelector('[data-slot="tabs"]');
  const subnav = root.querySelector('.subnav');
  let curSection = null;
  let curChip = null;

  const setSection = (sec) => {
    if (sec === curSection) return;
    curSection = sec;
    const section = sectionById.get(sec.dataset.section);
    strip.querySelectorAll('[data-group]').forEach((g) => { g.hidden = g.dataset.group !== section.id; });
    strip.querySelectorAll('a[aria-current]').forEach((a) => a.removeAttribute('aria-current'));
    strip.scrollLeft = 0;
    label.textContent = section.kind === 'paper' ? `Paper · ${section.short}` : section.title;
    subnav.dataset.accent = section.accent;
    document.body.dataset.accent = section.accent;
    document.title = `${section.title} · Finance Past Papers`;
    // top tabs
    topTabs.querySelectorAll('[data-nav]').forEach((a) => {
      if (a.dataset.nav === `section:${section.id}`) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.querySelectorAll('.sidebar [data-nav]').forEach((a) => {
      if (a.dataset.nav === `section:${section.id}`) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    moveInk(topTabs, topTabs.querySelector('[aria-current="page"]'));
    // keep the address in step without triggering navigation
    const want = `#/papers/${section.id}`;
    if (performance.now() > suppressHashUntil && !location.hash.startsWith(want + '/') && location.hash !== want) history.replaceState(null, '', want);
    curChip = null;
  };

  const spy = () => {
    const line = 112 + window.innerHeight * 0.22;
    let sec = sections[0];
    for (const s of sections) if (s.getBoundingClientRect().top <= line) sec = s;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) sec = sections[sections.length - 1];
    setSection(sec);

    const group = strip.querySelector(`[data-group="${sec.dataset.section}"]`);
    const chips = [...group.querySelectorAll('a[data-target]')].filter((c) => !c.hidden);
    let chip = chips[0];
    for (const c of chips) {
      const el = root.querySelector(`#${CSS.escape(c.dataset.target)}`);
      if (el && el.getBoundingClientRect().top <= line) chip = c;
    }
    if (atBottom) chip = chips[chips.length - 1];
    if (chip !== curChip) {
      curChip = chip;
      group.querySelectorAll('a[data-target]').forEach((c) => c.setAttribute('aria-current', String(c === chip)));
      moveInk(strip, chip);
    }
  };

  // Links to a section or card on this page scroll smoothly instead of re-routing
  const onLinkClick = (e) => {
    const a = e.target.closest('a[href^="#/papers/"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const m = a.getAttribute('href').match(/^#\/papers\/([^/]+)(?:\/([^/]+))?$/);
    if (!m || !sectionById.has(m[1])) return;
    const id = m[2] || m[1];
    if (!root.querySelector(`#${CSS.escape(id)}`)) return;
    e.preventDefault();
    document.getElementById('sidebar')?.setAttribute('data-open', 'false');
    document.querySelector('.backdrop')?.setAttribute('data-open', 'false');
    if (location.hash !== a.getAttribute('href')) history.pushState(null, '', a.getAttribute('href'));
    focusAnchor(root, id);
  };
  document.addEventListener('click', onLinkClick);
  ctx.onLeave(() => document.removeEventListener('click', onLinkClick));

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; spy(); });
  };
  const onResize = () => {
    if (curChip) moveInk(strip, curChip, { scroll: false });
    moveInk(topTabs, topTabs.querySelector('[aria-current="page"]'), { scroll: false });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  ctx.onLeave(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); });
  root.__spy = () => { curChip = null; spy(); };

  if (params.anchor) focusAnchor(root, params.anchor, { smooth: false });
  else if (params.section && params.section !== SECTIONS[0]) focusAnchor(root, params.section.id, { smooth: false });
  requestAnimationFrame(spy);
  document.fonts?.ready.then(() => root.__spy?.());
}

export default {
  key: (p) => (p.section ? 'library:flow' : 'library:index'),

  match(seg) {
    if (seg[0] !== 'papers') return null;
    if (seg.length === 1) return {};
    const section = sectionById.get(seg[1]);
    if (!section || seg.length > 3) return null;
    return { section, anchor: seg[2] };
  },

  render(p) {
    if (!p.section) {
      return { title: 'All papers & topics', nav: 'library', html: renderIndex() };
    }
    return {
      title: p.section.title,
      nav: `section:${p.section.id}`,
      accent: p.section.accent,
      html: renderFlow(),
    };
  },

  mount(root, p, ctx) {
    if (p.section) mountFlow(root, p, ctx);
  },

  /** Already on the continuous page: just scroll to the section or card. */
  update(root, p) {
    if (!p.section) return;
    focusAnchor(root, p.anchor || p.section.id);
  },
};
