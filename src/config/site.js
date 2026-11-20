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
    id: 'pages',
    label: 'Pages',
    items: [
      { id: `section:${FORMULA_SHEET.id}`, label: FORMULA_SHEET.title, href: `#/papers/${FORMULA_SHEET.id}`, accent: FORMULA_SHEET.accent },
      ...PAPERS.map((p) => ({ id: `section:${p.id}`, label: p.title, href: `#/papers/${p.id}`, accent: p.accent })),
    ],
  },
];
