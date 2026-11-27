import { t } from '../lib/tag.js';

/**
 * Trends & Predictions: built from the five past papers on this site
 * (Apr 2020, May 2021, May 2022, Dec 2024, Dec 2025). No lecture notes,
 * slides or problem sets were available, so every claim here is based on
 * the papers alone.
 */
const Y = '✓';
const C = '✓ (Q1)';

export default {
  kind: 'guide',
  group: 'ref',
  id: 'trends',
  title: 'Trends & Predictions',
  short: 'Trends',
  accent: 'general',
  summary: t`What has come up in the five past papers on this site, what repeats, what is likely this time, and how to revise. **Based on the past papers only:** no lecture notes or slides were available, so treat predictions as evidence-based guesses, not certainties. The three **Mock** tabs put these predictions into full practice papers.`,
  sections: [
    /* ------------------------------------------------------------------ */
    {
      id: 'evidence',
      title: 'What this is based on',
      blocks: [
        {
          list: [
            '**Five papers:** April 2020, May 2021, May 2022, December 2024 and December 2025 (no 2023 paper was available).',
            '**Not available:** lecture notes, slides, tutorials, problem sets or readings. The December 2025 paper cites **Schoenmaker & Schramade** (long-term value creation), which suggests the current course uses their book Principles of Sustainable Finance; that material is not on this site, so check your notes for it.',
            'Five papers is a small sample: patterns below are strong where a topic appears in **all five**, weaker where it appears once or twice.',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'format',
      title: 'Exam format',
      blocks: [
        {
          table: {
            columns: ['Paper', 'Setting', 'Time', 'Question 1', 'Optional (2 of Q2–5)', 'Calculations'],
            rows: [
              ['Apr 2020', 'Online, open book', '1.5 h (+30 min upload)', '30 marks (10 + 20)', '35 marks each (20 + 15)', 'None'],
              ['May 2021', 'Online, open book', '1.5 h (+30 min upload)', '40 marks (4 × 10)', '30 marks each (essays)', 'None'],
              ['May 2022', 'Exam hall, closed book', '2 h', '40 marks (15 + 15 + 10)', '30 marks each', 'WACC; NPV with tax, depreciation and working capital'],
              ['Dec 2024', 'Exam hall, closed book', '2 h', '40 marks (20 + 20)', '30 marks each', 'WACC'],
              ['Dec 2025', 'Exam hall, closed book', '2 h', '40 marks (20 + 20)', '30 marks each', 'WACC; two-stage dividend discount model'],
            ],
          },
        },
        {
          heading: 'What to expect',
          list: [
            'The current format (Dec 2024 and Dec 2025): **2 hours, closed book, non-programmable calculator**, Question 1 compulsory (**two 20-mark essays**), then **two of Questions 2–5** at 30 marks each, split 15 + 15, 20 + 10 or 10 + 10 + 10.',
            '**Timing:** about 48 minutes on Question 1 and 36 on each optional question.',
            'The exam is mostly **essays** (roughly 70–80% of marks), with one or two **calculation** parts in the optional questions.',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'map',
      title: 'Topic map: every paper',
      blocks: [
        {
          paras: ['✓ = examined; (Q1) = in the compulsory question. Question numbers show where.'],
          table: {
            columns: ['Topic', 'Apr 2020', 'May 2021', 'May 2022', 'Dec 2024', 'Dec 2025', 'Count'],
            rows: [
              ['**Agency problems / governance / objective of the firm**', `${C} 1b`, `${Y} Q2`, `${C} 1a`, `${C} 1b`, `${C} 1a`, '**5 / 5**'],
              ['**Working capital**', `${Y} 5b`, `${C} 1c`, `${Y} 2b`, `${Y} 4a`, `${C} 1b`, '**5 / 5**'],
              ['**Capital budgeting methods other than NPV** (payback, IRR, PI, ARR)', `${Y} 3a`, `${C} 1d (IRR)`, `${C} 1b`, `${Y} 3a`, `${Y} 2a`, '**5 / 5**'],
              ['**Capital structure theories** (M&M, trade-off, pecking order)', `${Y} 4a`, `${Y} Q5`, `${Y} 2a`, `${Y} 3b`, `${Y} 3b`, '**5 / 5**'],
              ['**Dividend policy / returning cash**', `${Y} 5a (+ 4b buybacks)`, `${Y} Q3`, `${Y} Q4`, `${Y} 5a`, `${Y} 5b`, '**5 / 5**'],
              ['**Why calculate WACC / cost of capital for projects**', `${Y} 2b`, `${Y} Q4`, `${Y} 3c`, `${Y} 2c`, `${Y} 4b`, '**5 / 5**'],
              ['**WACC calculation** (CAPM + dividend growth model + bond at a discount)', '', '', `${Y} 3a–b`, `${Y} 2a`, `${Y} 4a`, '3 / 5 (all 3 closed-book exams)'],
              ['Relevant cash flows / NPV inputs', '', '', `${Y} 5b`, `${C} 1a`, `${Y} 2b`, '3 / 5 (last 3 in a row)'],
              ['Debt vs equity: investor and/or issuer view', '', '', `${C} 1c`, `${Y} 4b`, `${Y} 3a`, '3 / 5 (last 3 in a row)'],
              ['Bond prices and yields', `${Y} 2a (+ 1a)`, `${C} 1a`, '', `${Y} 5b`, '', '3 / 5'],
              ['CAPM intuition', `${Y} 3b`, `${C} 1b`, '', `${Y} 2b`, '', '3 / 5'],
              ['NPV calculation (tax, depreciation, salvage, working capital)', '', '', `${Y} 5a`, '', '', '1 / 5'],
              ['Dividend discount model calculation', '', '', '', '', `${Y} 5c`, '1 / 5 (new)'],
              ['Inflation and deflation in the economy', '', '', '', '', `${Y} 5a`, '1 / 5 (new)'],
              ['Share buybacks (on their own)', `${Y} 4b`, '', '', '', '', '1 / 5'],
              ['Secondary-market prices (why firms monitor them)', `${C} 1a`, '', '', '', '', '1 / 5'],
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'patterns',
      title: 'Patterns and trends',
      blocks: [
        {
          heading: 'Fixed every year',
          list: [
            '**Six topics appear in all five papers:** agency/governance, working capital, capital budgeting methods, capital structure theories, dividend policy and the purpose of WACC. With only five questions per paper, most of each exam is these six topics in a new order.',
            '**Agency problems are in the compulsory Question 1** in four of five papers, including the last three in a row. The 2025 version reframed it around Schoenmaker & Schramade\'s **long-term value creation**.',
          ],
        },
        {
          heading: 'The wording repeats almost word for word',
          list: [
            '"Explain the intuition behind the CAPM": 2020, 2021, 2024.',
            '"Why do investors and firms calculate the WACC": 2020, 2022, 2024 (and 2025: "Why might the WACC of a firm be calculated?").',
            '"Describe what is meant by working capital … potential conflicts … how much to hold": 2021, 2022, 2024.',
            '"Apart from NPV … capital budgeting … uses and drawbacks": 2022, 2024, 2025 (2020 similar).',
            '"Describe the main theories … debt and equity … capital structure": every year.',
            '**Practical meaning:** a prepared, well-structured answer for each recurring question is the single best investment of revision time.',
          ],
        },
        {
          heading: 'Trends',
          list: [
            '**Calculations rose after the move back to closed-book exams:** none in 2020–21; one or two per paper since 2022. A **WACC calculation** has appeared in every closed-book paper, always in an optional question, always with a bond trading below par and both CAPM and dividend-growth inputs.',
            '**The WACC question alternates the dividend trap:** "expected to pay" (D₁, May 2022) vs "recently paid" (D₀, needs × (1 + g), Dec 2024).',
            '**Each recent paper adds something new:** 2022 an NPV with tax and working capital; 2024 relevant cash flows in Question 1; 2025 a two-stage DDM, inflation/deflation and long-term value. Expect at least one new angle.',
            '**Cash-flow estimation is rising:** what to include/exclude or "NPV is only as good as its inputs" in each of the last three papers.',
            '**Debt vs equity** appeared in each of the last three papers (investor view, issuer view, or why mix both).',
          ],
        },
        {
          heading: 'Connections examiners like',
          list: [
            'Agency ↔ dividends (free cash flow), ↔ debt (discipline), ↔ capital structure (agency costs of debt).',
            'WACC ↔ CAPM ↔ capital budgeting (discount rate) ↔ capital structure (M&M: debt changes WACC).',
            'Bonds ↔ cost of debt (use the yield, not the coupon) ↔ inflation and interest rates.',
            'Dividends ↔ DDM valuation ↔ cost of equity (dividend growth model).',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'predictions',
      title: 'Predictions',
      blocks: [
        {
          paras: ['Probabilities are judgements from the five papers, not certainties.'],
          table: {
            columns: ['Likelihood', 'Topic', 'Evidence and likely form'],
            rows: [
              ['**High**', 'Agency problems / long-term value (probably in Q1)', '5/5 papers, Q1 in the last three. Expect "why managers may not act in the firm\'s long-term interest + measures + do they work".'],
              ['**High**', 'WACC calculation + why WACC is calculated', 'Calculation in all three closed-book papers; purpose in all five. Expect a bond below par, CAPM and DGM, a tax rate.'],
              ['**High**', 'Capital structure theories', '5/5. M&M with and without taxes, trade-off, pecking order, and how optimal structure varies by firm or "in reality".'],
              ['**High**', 'Dividend policy', '5/5. Why it matters despite M&M; signalling, clienteles, taxes, buybacks.'],
              ['**High**', 'Working capital', '5/5. Components, conflicts, factors affecting how much to hold.'],
              ['**High**', 'Capital budgeting methods (payback, IRR, PI, ARR)', '5/5. Uses and drawbacks; possibly with a short calculation.'],
              ['**Medium–high**', 'Relevant cash flows / NPV inputs', 'Last three papers in a row.'],
              ['**Medium**', 'Debt vs equity (investor or issuer)', 'Last three papers in a row.'],
              ['**Medium**', 'CAPM intuition', '3/5, but absent in 2025: a return is plausible.'],
              ['**Medium**', 'Bond prices and yields', '3/5, last in 2024.'],
              ['**Medium**', 'DDM / share valuation calculation', 'New in 2025; new calculation types have tended to stay.'],
              ['**Medium**', 'NPV calculation with tax, depreciation and working capital', 'Only 2022, but it is the natural calculation for the capital budgeting topic.'],
              ['**Lower**', 'Inflation and deflation', 'New in 2025 only.'],
              ['**Lower**', 'Share buybacks as a full question; secondary-market prices', '2020 only.'],
            ],
          },
        },
        {
          heading: 'Not seen recently but plausible',
          list: [
            '**A numerical NPV with depreciation, tax, salvage and working capital** (last in 2022).',
            '**Bond pricing or YTM calculation**: bonds are examined in words but never yet numerically.',
            '**IRR, payback or PI calculations** to go with the "methods" essay.',
            t`**M&M with numbers** ($V_L = V_U + T_cD$, cost of equity rising with leverage).`,
            '**Real vs nominal discount rates** (Fisher), given the 2025 inflation question.',
            '**Sustainable finance / long-term value** beyond the agency framing (Schoenmaker & Schramade).',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'ranked',
      title: 'Ranked topics to prioritise',
      blocks: [
        {
          table: {
            columns: ['Rank', 'Topic', 'Why', 'Goal'],
            rows: [
              ['1', 'Agency problems & long-term value', 'Almost certainly compulsory', 'A 20-mark answer: definition, 5+ examples, 6+ remedies each with an example and limitation'],
              ['2', 'WACC calculation', 'Every closed-book paper; reliable marks', 'Do one in under 15 minutes without notes'],
              ['3', 'Capital structure theories', '5/5', 'Both M&M propositions with and without tax, trade-off, pecking order, evidence'],
              ['4', 'Dividend policy & buybacks', '5/5', 'M&M irrelevance + 6 reasons it matters, with examples'],
              ['5', 'Working capital', '5/5, sometimes compulsory', 'Components, CCC, conflicts per component, financing strategies'],
              ['6', 'Capital budgeting methods', '5/5', 'How, uses, drawbacks for payback, discounted payback, IRR, PI, ARR'],
              ['7', 'Relevant cash flows / NPV inputs + NPV calculation', 'Rising trend', 'Include/exclude list; a full NPV with tax and working capital'],
              ['8', 'Purpose of WACC / project-specific rates', '5/5', 'Firm and investor reasons; why not one rate for all projects'],
              ['9', 'Debt vs equity', 'Last three papers', 'The four-box table and why investors mix both'],
              ['10', 'CAPM intuition', '3/5', 'Systematic vs specific risk, beta, SML, limits'],
              ['11', 'Bonds: prices, yields, coupon vs yield', '3/5', 'Inverse relationship, causes, a quick price calculation'],
              ['12', 'DDM (one- and two-stage)', 'New in 2025', 'Two-stage valuation in under 10 minutes'],
              ['13', 'Inflation/deflation; secondary markets', 'Single appearances', 'One page of notes each'],
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'question-types',
      title: 'The 10 most likely question types',
      blocks: [
        {
          list: [
            '**1. "Why might managers not act in the (long-term) interest of shareholders? Describe measures and whether they work."** (20 marks, Q1)',
            '**2. A WACC calculation** from bond, share and beta data, with an after-tax cost of debt and two cost-of-equity methods. (10–15 marks)',
            '**3. "Why do firms and investors calculate WACC?"** or "should one rate be used for all projects?" (10–15 marks)',
            '**4. "Describe the main capital structure theories … how applicable in reality / how they vary by firm type."** (15–20 marks)',
            '**5. "Why does dividend policy matter despite M&M?" / "How should a firm return cash?"** (10–30 marks)',
            '**6. "What is working capital … components … conflicts / factors in how much to hold."** (15–20 marks)',
            '**7. "Apart from NPV, what capital budgeting methods … uses and drawbacks."** (15–20 marks)',
            '**8. "Which cash flows should be included / excluded?" or "NPV is only as good as its inputs."** (15–20 marks)',
            '**9. "Pros and cons of debt and equity for investors and/or firms."** (10–15 marks)',
            '**10. A short calculation:** two-stage DDM, NPV with tax and working capital, or bond price/yield. (10–15 marks)',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'formulas',
      title: 'Key formulas and concepts',
      blocks: [
        {
          paras: ['The full set, with worked examples, is on the **Formula Sheet** tab. These are the ones the papers actually use.'],
          table: {
            columns: ['Concept', 'Formula / key idea'],
            rows: [
              ['WACC', t`$WACC = \frac{E}{V}r_E + \frac{D}{V}r_D(1 - T)$, market values; $D$ = face × price/100`],
              ['CAPM', t`$r_E = r_f + \beta(r_m - r_f)$`],
              ['Dividend growth model', t`$r_E = \frac{D_1}{P_0} + g$; $\;D_1 = D_0(1 + g)$ if "recently paid"`],
              ['Gordon growth / two-stage DDM', t`$P_0 = \frac{D_1}{r - g}$; two-stage: PV of each high-growth dividend + $\frac{P_N}{(1+r)^N}$ with $P_N = \frac{D_{N+1}}{r - g}$`],
              ['NPV / IRR / PI', t`$NPV = -C_0 + \sum \frac{C_t}{(1+r)^t}$; IRR makes NPV = 0; $PI = \frac{PV(\text{inflows})}{C_0}$`],
              ['Operating cash flow', t`$OCF = (R - E)(1 - T) + T \times Dep$`],
              ['After-tax salvage', t`$S - T(S - BV)$; working capital: build-up = outflow, recovered at the end`],
              ['Bond price', t`$P = \sum \frac{C}{(1+y)^t} + \frac{F}{(1+y)^n}$; coupon < yield ⇔ price < par`],
              ['M&M', t`$V_L = V_U$ (no tax); $V_L = V_U + T_cD$; $r_E = r_0 + (r_0 - r_D)(1 - T_c)\frac{D}{E}$`],
              ['Working capital', t`$NWC = CA - CL$; $CCC = \text{inventory days} + \text{receivable days} - \text{payable days}$`],
              ['Fisher', t`$(1 + r_{\text{nominal}}) = (1 + r_{\text{real}})(1 + \pi)$`],
              ['Agency costs', 'Monitoring + bonding + residual loss'],
              ['Pecking order', 'Retained earnings → debt → equity'],
              ['Dividend irrelevance (M&M 1961)', 'Value depends on investment policy; homemade dividends'],
            ],
          },
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'traps',
      title: 'Common traps',
      blocks: [
        {
          list: [
            '**Cost of debt = yield, not coupon.** The coupon only tells you the bond trades at a discount (coupon < yield) or premium.',
            '**Debt in WACC at market value:** €50m face trading at 91 is €45.5m.',
            '**D₀ vs D₁:** "recently paid" → multiply by (1 + g); "expected" → use as given.',
            '**Tax:** after-tax cost of debt only; never adjust the cost of equity for tax.',
            '**Two cost-of-equity answers:** show both (CAPM and DGM) and say which you use, or average them.',
            '**NPV:** add back depreciation (keep its tax shield); exclude interest and sunk costs; include opportunity costs and working capital; recover working capital at the end; tax the salvage gain over book value.',
            '**Two-stage DDM:** the terminal value at year N uses D(N+1), and must itself be discounted back N years.',
            '**Nominal vs real:** discount nominal cash flows at a nominal rate.',
            '**M&M tax shield:** the annual saving is T × interest; T × D is its present value.',
            '**Essays:** lists without explanation score low. For each point: explain → example → evaluate. Answer every part of the question ("and do they work?", "for investors **and** firms", "how applicable in reality?").',
            '**Rubric:** answer exactly two optional questions; extra ones are not marked.',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'plan',
      title: 'Revision plan',
      blocks: [
        {
          paras: ['Ordered by exam probability and how many marks each hour of revision buys. Each session is about 2–3 hours.'],
          table: {
            columns: ['Session', 'Focus', 'What to do'],
            rows: [
              ['1', 'WACC + CAPM + DGM', 'Redo the WACC questions from May 2022, Dec 2024, Dec 2025 and the three mocks without notes. Learn the D₀/D₁ and market-value traps.'],
              ['2', 'Agency & long-term value', 'Write a full 20-mark plan from memory; compare with May 2022 Q1a, Dec 2024 Q1b, Dec 2025 Q1a, Apr 2020 Q1b, May 2021 Q2.'],
              ['3', 'Capital structure + debt vs equity', 'M&M formulas with and without tax, trade-off, pecking order, examples by industry; the four-box debt/equity table.'],
              ['4', 'Dividends + buybacks + DDM', 'M&M irrelevance with the homemade-dividend example; 6 reasons it matters; one- and two-stage DDM calculations.'],
              ['5', 'Capital budgeting + cash flows', 'Methods essay; include/exclude list; the May 2022 Q5 NPV and the mock NPVs.'],
              ['6', 'Working capital + bonds + CAPM intuition', 'Working capital essay with CCC; bond price/yield causes and one price calculation; CAPM in five sentences.'],
              ['7', 'Timed mocks', 'Sit Mock A, B or C in 2 hours closed book, then mark yourself with the marking guides. Note the weakest topic and revisit it.'],
              ['Final day', 'Lighter topics + review', 'Inflation/deflation, secondary markets; re-read the traps list and the formula sheet.'],
            ],
          },
        },
        {
          heading: 'Exam technique',
          list: [
            'Pick your optional questions in the first five minutes: prefer ones with a calculation you can do reliably.',
            'For 20-mark essays: definition → 4–6 developed points with examples → evaluation → conclusion. For 10-mark parts: 3–4 points.',
            'In calculations write the formula first, then the numbers: method marks survive arithmetic slips.',
          ],
        },
      ],
    },
  ],
};
