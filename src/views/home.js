/** Home / overview. */
import { PAPERS, FORMULA_SHEET, STATS } from '../content/index.js';
import { SITE } from '../config/site.js';
import { rich, escapeHtml } from '../lib/rich.js';
import { icons } from '../lib/icons.js';
import { renderTopicGrid } from './library.js';

const LEGEND = [
  ['block--when', 'How to approach it', 'What the examiner is really asking for, and how to structure your answer.'],
  ['block--given', 'Step-by-step working', 'For calculations: the given data, every step, and the final answer.'],
  ['block--answer', 'Model answer', 'Headed points you can adapt, with more ideas than you need, so pick the strongest.'],
  ['block--clues', 'Exam tips', 'Traps to avoid and the touches that lift an answer to a top grade.'],
];

export default {
  key: () => 'home',
  match: (seg) => (seg.length === 0 ? {} : null),

  render() {
    const papers = PAPERS.map((p) => {
      const parts = p.questions.reduce((n, q) => n + q.parts.length, 0);
      return `
      <a class="index__row" href="#/papers/${p.id}" data-accent="${p.accent}">
        <span class="index__num">Paper</span>
        <span>
          <span class="index__title">${escapeHtml(p.title)}</span>
          <span class="index__summary">${rich(p.summary)}</span>
        </span>
        <span class="index__count">${p.questions.length} questions<br>${parts} answered parts<span class="index__arrow">${icons.arrow}</span></span>
      </a>`;
    }).join('') + `
      <a class="index__row" href="#/papers/${FORMULA_SHEET.id}" data-accent="${FORMULA_SHEET.accent}">
        <span class="index__num">Sheet</span>
        <span>
          <span class="index__title">${escapeHtml(FORMULA_SHEET.title)}</span>
          <span class="index__summary">${rich(FORMULA_SHEET.summary)}</span>
        </span>
        <span class="index__count">${FORMULA_SHEET.cards.length} formulas<span class="index__arrow">${icons.arrow}</span></span>
      </a>`;

    const legend = LEGEND.map(([cls, title, text]) => `<div class="legend__item"><div class="block ${cls}"><div class="block__label">${title}</div></div><p>${text}</p></div>`).join('');

    const html = `
    <div class="page"><div class="page__inner">
      <section class="hero">
        <div class="eyebrow">${escapeHtml(SITE.course)}</div>
        <h1 class="hero__title">Past papers, <em>fully answered.</em></h1>
        <p class="hero__lede">Every Introduction to Finance past paper with a model answer for each question: how to approach it, a structured answer you can learn from, step-by-step working for the calculations, and the exam tips that pick up extra marks.</p>
        <div class="hero__actions">
          <button class="btn btn--primary" type="button" data-action="focus-search">${icons.search}Search the papers <kbd>/</kbd></button>
          <a class="btn" href="#/papers/${PAPERS[0].id}">Start with ${escapeHtml(PAPERS[0].title)}</a>
        </div>
        <div class="stats">
          <div class="stat"><div class="stat__num">${STATS.papers}</div><div class="stat__label">Past paper${STATS.papers === 1 ? '' : 's'}</div></div>
          <div class="stat"><div class="stat__num">${STATS.parts}</div><div class="stat__label">Answered question parts</div></div>
          <div class="stat"><div class="stat__num">${STATS.calcs}</div><div class="stat__label">Worked calculations</div></div>
          <div class="stat"><div class="stat__num">${STATS.formulas}</div><div class="stat__label">Formulas on the sheet</div></div>
        </div>
      </section>

      <section class="home-section" aria-labelledby="papers-title">
        <div class="home-section__head">
          <div><div class="eyebrow">Papers</div><h2 class="home-section__title" id="papers-title">Past papers</h2></div>
          <p class="home-section__intro">Newest first. Each paper opens in its own tab, one question at a time.</p>
        </div>
        <div class="index panel">${papers}</div>
      </section>

      <section class="home-section" aria-labelledby="topics-title">
        <div class="home-section__head">
          <div><div class="eyebrow">By topic</div><h2 class="home-section__title" id="topics-title">What comes up</h2></div>
          <p class="home-section__intro">Each question tagged by topic. As more papers are added, this shows which topics come up most often.</p>
        </div>
        <div class="lib-grid">${renderTopicGrid()}</div>
      </section>

      <section class="home-section" aria-labelledby="legend-title">
        <div class="home-section__head">
          <div><div class="eyebrow">How to use it</div><h2 class="home-section__title" id="legend-title">Inside each answer</h2></div>
          <p class="home-section__intro">Each paper has its own tab. Work through it one question at a time, try each part yourself, then open the answer dropdown to check.</p>
        </div>
        <div class="legend legend--4">${legend}</div>
      </section>
    </div></div>`;

    return { title: null, nav: 'home', html };
  },

  mount(root, _params, ctx) {
    root.querySelector('[data-action="focus-search"]')?.addEventListener('click', () => ctx.focusSearch());
  },
};
