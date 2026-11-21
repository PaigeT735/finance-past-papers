/**
 * Topic registry. Every question part lists topic ids, so the home page can
 * group questions by topic across all papers. Add new topics here as needed.
 */
export const TOPICS = [
  { id: 'firm-objective', label: 'Objective of the firm & agency' },
  { id: 'governance', label: 'Corporate governance' },
  { id: 'working-capital', label: 'Working capital' },
  { id: 'capital-budgeting', label: 'Capital budgeting & NPV' },
  { id: 'cash-flow-estimation', label: 'Cash flow estimation & risk analysis' },
  { id: 'equity-bonds', label: 'Equity & bonds as investments' },
  { id: 'bond-yields', label: 'Bond prices & yields' },
  { id: 'capital-structure', label: 'Capital structure' },
  { id: 'cost-of-capital', label: 'Cost of capital & WACC' },
  { id: 'valuation', label: 'Share valuation (DDM)' },
  { id: 'dividends', label: 'Dividend policy' },
  { id: 'macro', label: 'Inflation, deflation & the economy' },
];

export const topicById = new Map(TOPICS.map((t) => [t.id, t]));
