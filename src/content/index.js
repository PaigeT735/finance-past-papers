/**
 * Content registry.
 * To add a past paper: create a file in ./papers/ (copy 2025-12.js as a template)
 * and add it to PAPERS below, newest first.
 */
import dec2025 from './papers/2025-12.js';
import dec2024 from './papers/2024-12.js';
import may2022 from './papers/2022-05.js';
import may2021 from './papers/2021-05.js';
import apr2020 from './papers/2020-04.js';
import mockA from './papers/mock-a.js';
import mockB from './papers/mock-b.js';
import mockC from './papers/mock-c.js';
import GUIDE_PAGE from './guide.js';
import formulaSheet from './formula-sheet.js';
import { TOPICS } from './topics.js';

export const PAPERS = [dec2025, dec2024, may2022, may2021, apr2020, mockA, mockB, mockC];
export const GUIDE = GUIDE_PAGE;
export const FORMULA_SHEET = formulaSheet;

/** Pages in tab order: formula sheet, trends, past exams (newest first), then the mock exams. */
export const SECTIONS = [FORMULA_SHEET, GUIDE, ...PAPERS];
export const sectionById = new Map(SECTIONS.map((s) => [s.id, s]));

/** Question parts: partId -> { part, question, section } */
export const partIndex = new Map();
PAPERS.forEach((section) => section.questions.forEach((question) => question.parts.forEach((part) => partIndex.set(part.id, { part, question, section }))));

/** Formula cards: cardId -> { card, section, index } */
export const cardIndex = new Map();
FORMULA_SHEET.cards.forEach((card, index) => cardIndex.set(card.id, { card, section: FORMULA_SHEET, index }));

/** Display code for formula cards, e.g. "F.03" */
export function cardCode(section, index) {
  return `F.${String(index + 1).padStart(2, '0')}`;
}

/** Topic id -> list of { part, question, section } across all papers */
export function partsByTopic() {
  const map = new Map(TOPICS.map((t) => [t.id, []]));
  partIndex.forEach((entry) => entry.part.topics?.forEach((id) => map.get(id)?.push(entry)));
  return map;
}

const allParts = [...partIndex.values()];
export const STATS = {
  papers: PAPERS.length,
  questions: PAPERS.reduce((n, p) => n + p.questions.length, 0),
  parts: allParts.length,
  calcs: allParts.filter((e) => e.part.type === 'calc').length,
  formulas: FORMULA_SHEET.cards.length,
};
