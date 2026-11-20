/**
 * Site-wide configuration and the navigation registry.
 * New papers appear in the navigation automatically once added to src/content/index.js.
 */
import { PAPERS, FORMULA_SHEET } from '../content/index.js';

export const SITE = {
  name: 'Finance',
  title: 'Finance Past Papers',
  course: 'BUU22550 · Introduction to Finance',
  docTitle: 'Introduction to Finance',
  sub: 'BUU22550 · Intro to Finance',
};

export const NAV_GROUPS = [
  {
    id: 'start',
    label: 'Start',
    items: [
      { id: 'home', label: 'Overview', href: '#/' },
      { id: 'library', label: 'All papers & topics', href: '#/papers' },
    ],
  },
  {
    id: 'papers',
    label: 'Past papers',
    items: () =>
      PAPERS.map((p, i) => ({
        id: `section:${p.id}`,
        label: p.title,
        href: `#/papers/${p.id}`,
        accent: p.accent,
        num: String(i + 1).padStart(2, '0'),
        count: p.questions.reduce((n, q) => n + q.parts.length, 0),
      })),
  },
  {
    id: 'revision',
    label: 'Revision',
    items: [{ id: `section:${FORMULA_SHEET.id}`, label: FORMULA_SHEET.title, href: `#/papers/${FORMULA_SHEET.id}`, accent: FORMULA_SHEET.accent, count: FORMULA_SHEET.cards.length }],
  },
];
