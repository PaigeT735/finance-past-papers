/**
 * Past-paper question part: the question is always visible; the model answer
 * opens underneath (same card shell and open/close behaviour as formula cards).
 */
import { rich, tex, escapeHtml } from '../lib/rich.js';
import { icons } from '../lib/icons.js';
import { cardIndex } from '../content/index.js';
import { topicById } from '../content/topics.js';

const label = (text, hint = '') => `<h4 class="block__label">${text}${hint ? `<span class="block__hint">${hint}</span>` : ''}</h4>`;
const paras = (v) => [].concat(v ?? []).map((p) => `<p>${rich(p)}</p>`).join('');
const list = (items) => `<ul class="list">${items.map((i) => `<li>${rich(i)}</li>`).join('')}</ul>`;

function table(tb) {
  const head = tb.columns.map((c) => `<th scope="col">${rich(c)}</th>`).join('');
  const body = tb.rows.map((r) => `<tr>${r.map((c) => `<td>${rich(c)}</td>`).join('')}</tr>`).join('');
  return `<div class="ctable__scroll mini-table"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

/** One block of a model answer: heading + any of paras / formula / list / table. */
function answerBlock(b) {
  return `<section class="block block--answer">
    ${b.heading ? label(escapeHtml(b.heading)) : ''}
    ${paras(b.paras)}
    ${b.formula ? `<div class="answer-formula">${tex(b.formula, true)}</div>` : ''}
    ${b.list ? list(b.list) : ''}
    ${b.table ? table(b.table) : ''}
  </section>`;
}

function givenBlock(given) {
  if (!given?.length) return '';
  const rows = given.map(([k, v]) => `<dt>${rich(k)}</dt><dd>${rich(v)}</dd>`).join('');
  return `<section class="block block--given">${label('What you are given')}<dl class="vars">${rows}</dl></section>`;
}

function workingBlock(steps, result) {
  if (!steps?.length) return '';
  return `<section class="block block--example">${label('Step-by-step working')}
    <div class="example">
      <ol class="example__steps">${steps.map((s) => `<li><div>${rich(s)}</div></li>`).join('')}</ol>
      ${result ? `<div class="example__answer"><span class="example__answer-label">Answer</span><span>${rich(result)}</span></div>` : ''}
    </div>
  </section>`;
}

function formulaLinks(ids) {
  const links = (ids ?? [])
    .map((id) => cardIndex.get(id))
    .filter(Boolean)
    .map(({ card, section }) => `<a href="#/papers/${section.id}/${card.id}" data-accent="${section.accent}"><i></i>${escapeHtml(card.title)}</a>`)
    .join('');
  return links ? `<div class="related"><span class="related__label">Formulas used</span>${links}</div>` : '';
}

export function renderQuestionPart(part, question, section) {
  const topics = (part.topics ?? [])
    .map((id) => topicById.get(id))
    .filter(Boolean)
    .map((tp) => `<span class="badge badge--topic">${escapeHtml(tp.label)}</span>`)
    .join('');
  const badges = [
    `<span class="badge badge--paper">${part.marks} marks</span>`,
    question.compulsory ? '<span class="badge badge--must">Compulsory</span>' : '',
    part.type === 'calc' ? '<span class="badge">Calculation</span>' : '',
  ].join('');

  const hints = part.type === 'calc' ? 'approach · working · answer · traps' : 'approach · model answer · exam tips';

  return `
  <article class="fcard qcard" id="${part.id}" data-card="${part.id}" data-type="${part.type}" data-open="false" aria-labelledby="${part.id}-title">
    <div class="fcard__head">
      <div class="fcard__meta">
        <span class="fcard__code">${escapeHtml(section.short)}</span>${badges}
        <button class="fcard__link" type="button" data-copy-link="#/papers/${section.id}/${part.id}" aria-label="Copy link to question ${escapeHtml(part.label)}">${icons.link}Link</button>
      </div>
      <h3 class="fcard__title" id="${part.id}-title">Question ${escapeHtml(part.label)}</h3>
      ${topics ? `<div class="qcard__topics">${topics}</div>` : ''}
    </div>
    <div class="fcard__formula qcard__prompt">${rich(part.prompt)}</div>
    <button class="fcard__toggle" type="button" aria-expanded="false" aria-controls="${part.id}-body">
      <span class="fcard__toggle-text"><span class="fcard__toggle-show">Show answer</span><span class="fcard__toggle-hide">Hide answer</span></span>
      <span class="fcard__toggle-hint">${hints}</span>${icons.chevron}
    </button>
    <div class="fcard__body" id="${part.id}-body">
      <div class="fcard__inner" inert>
        <div class="fcard__content">
          ${part.approach ? `<section class="block block--when">${label('How to approach it')}<div class="block__lead">${paras(part.approach)}</div></section>` : ''}
          ${givenBlock(part.given)}
          ${workingBlock(part.working, part.result)}
          ${(part.answer ?? []).map(answerBlock).join('')}
          ${part.tips?.length ? `<section class="block block--clues">${label('Exam tips')}<div class="callout">${list(part.tips)}</div></section>` : ''}
          ${formulaLinks(part.formulas)}
        </div>
      </div>
    </div>
  </article>`;
}
