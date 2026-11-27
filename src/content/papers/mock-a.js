import { t } from '../../lib/tag.js';

/**
 * Mock exam A: the most likely paper. Follows the Dec 2024 / Dec 2025 format
 * and the topics that appear in every past paper.
 */
const META = [
  ['Status', 'Predicted mock exam (not a real paper) with a full answer key and marking guide'],
  ['Format', '2 hours, closed book, non-programmable calculator'],
  ['Rubric', 'Answer Question 1 (compulsory) and two of Questions 2–5'],
  ['Marks', 'Question 1: 40 marks · Questions 2–5: 30 marks each · Total 100'],
];

export default {
  kind: 'paper',
  group: 'mocks',
  id: 'mock-a',
  title: 'Mock Exam A (most likely)',
  short: 'Mock A',
  accent: 'consumer',
  summary: t`A full practice paper built from the topics that appear in **every** past paper, in the current format. Sit it in 2 hours without notes, then open each answer: every part has the full working, a **marking guide** and the common mistakes.`,
  meta: META,
  timing: t`About **48 minutes on Question 1** and **36 minutes on each optional question**. Choose your two optional questions in the first five minutes.`,
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      compulsory: true,
      parts: [
        {
          id: 'mocka-q1a',
          label: '1(a)',
          marks: 20,
          type: 'essay',
          topics: ['firm-objective', 'governance'],
          prompt: t`Schoenmaker & Schramade argue that the objective of the firm should be long-term value creation rather than short-term profit. Explain why managers may focus on the short term instead, and critically evaluate four mechanisms designed to align managers with the long-term interests of the firm. Use examples.`,
          approach: 'Three parts: (1) the objective (long-term value), (2) why managers drift to the short term (agency problem plus short-term pressures), (3) four mechanisms, each with an example **and** an evaluation. The word "critically" means each mechanism needs a "but".',
          answer: [
            {
              heading: 'The objective: long-term value creation',
              list: [
                'Traditional finance: maximise **shareholder value** (the share price).',
                'Schoenmaker & Schramade argue firms should create **long-term value**, taking into account the financial, social and environmental value the firm creates or destroys, because ignoring social and environmental effects eventually damages financial value too (regulation, reputation, stranded assets).',
                'Short-term profit can conflict with this: cutting R&D, training, safety or environmental spending raises this year\'s profit but destroys long-term value.',
              ],
            },
            {
              heading: 'Why managers focus on the short term',
              list: [
                { label: 'The agency problem', items: ['Managers (agents) run the firm for shareholders (principals) but have their own interests: pay, status, job security.', 'Information asymmetry: outsiders cannot easily see whether managers are investing for the long term.'] },
                { label: 'Short-term incentives', items: ['Annual bonuses tied to earnings or the current share price; options that vest quickly.', 'Average CEO tenure is a few years, so long-term benefits may arrive after they leave.'] },
                { label: 'Market pressure', items: ['Quarterly earnings reporting and analysts\' forecasts: missing a target can hit the share price.', 'Short-term investors and activists pushing for buybacks or payouts.', 'Takeover threat if the share price falls.'] },
                { label: 'Measurement', items: ['Long-term and non-financial value (customer trust, employee skills, environmental impact) is hard to measure, so it is undervalued.'] },
              ],
            },
            {
              heading: 'Four mechanisms, critically evaluated',
              list: [
                { label: '1. Long-term executive pay', items: ['Shares that vest over 3–5 years, holding periods after vesting, clawbacks, and ESG or customer targets in bonuses.', 'Example: long-term incentive plans paid in shares only if total shareholder return beats peers over 3 years.', '**But:** share-based pay can still encourage boosting the price around vesting dates; ESG targets can be vague or easy to hit; pay can become excessive.'] },
                { label: '2. Independent board of directors', items: ['Non-executive directors approve strategy and long-term investment, set pay and can replace the CEO; separate chair and CEO.', '**But:** directors may lack independence or information; boards failed to stop Enron (2001) and Wirecard (2020).'] },
                { label: '3. Engaged long-term shareholders (stewardship)', items: ['Pension funds and other institutional investors vote at AGMs (say-on-pay) and engage with management; stewardship codes encourage this.', '**But:** small shareholders free-ride; passive index funds own a lot but may engage little; some activists push the short term.'] },
                { label: '4. Transparent reporting and audit', items: ['Audited accounts, integrated reporting of financial and non-financial (ESG) performance, and governance codes reduce information asymmetry.', '**But:** audits can fail; ESG reporting can be selective ("greenwashing"); stopping quarterly guidance is voluntary.'] },
                { label: 'Others you could use', items: ['Debt (less free cash flow to waste, but can increase short-termism under distress); takeover threat (disciplines, but can itself create short-term pressure); dividends.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['No single mechanism removes the short-term bias. Combining long-term pay, an independent board, engaged long-term investors and transparent reporting aligns managers best, but agency costs can only be reduced, not eliminated.'],
            },
            {
              heading: 'Marking guide (20)',
              table: { columns: ['Element', 'Marks'], rows: [['Objective explained (long-term vs short-term value)', '3'], ['Why managers focus on the short term (agency, incentives, market pressure), with examples', '5'], ['Four mechanisms clearly explained with examples (2 each)', '8'], ['Critical evaluation of each mechanism', '3'], ['Conclusion and structure', '1']] },
            },
          ],
          tips: ['Common mistake: describing four mechanisms with no evaluation. "Critically evaluate" means a limitation for each.', 'Use the words agency problem, information asymmetry, agency costs.'],
        },
        {
          id: 'mocka-q1b',
          label: '1(b)',
          marks: 20,
          type: 'calc',
          topics: ['working-capital'],
          prompt: t`Brennan Retail has inventory of €1.2m, receivables of €0.8m and cash of €0.3m. It owes suppliers €0.9m and has a bank overdraft of €0.4m. Annual sales are €9.6m and cost of sales is €7.3m. **(i)** Calculate net working capital and the cash conversion cycle (use 365 days). (6 marks) **(ii)** A supplier offers terms of "2/10, net 30". Calculate the implied annual cost of not taking the discount. (4 marks) **(iii)** Discuss the conflicts Brennan faces in deciding how much working capital to hold. (10 marks)`,
          approach: t`(i) NWC = CA − CL. Inventory and payable days use **cost of sales**; receivable days use **sales**. (ii) Giving up 2% to keep €98 for 20 more days. (iii) The liquidity vs profitability trade-off applied to each component.`,
          given: [['Current assets', 'Inventory €1.2m, receivables €0.8m, cash €0.3m'], ['Current liabilities', 'Payables €0.9m, overdraft €0.4m'], ['Sales / cost of sales', '€9.6m / €7.3m']],
          working: [
            t`**Net working capital:** $NWC = (1.2 + 0.8 + 0.3) - (0.9 + 0.4) = 2.3 - 1.3 = €1.0m$`,
            t`**Inventory days:** $\dfrac{1.2}{7.3} \times 365 = 60.0$ days`,
            t`**Receivable days:** $\dfrac{0.8}{9.6} \times 365 = 30.4$ days`,
            t`**Payable days:** $\dfrac{0.9}{7.3} \times 365 = 45.0$ days`,
            t`**Cash conversion cycle:** $CCC = 60.0 + 30.4 - 45.0 = 45.4$ days`,
            t`**(ii) Cost of skipping the discount:** paying on day 30 instead of day 10 means giving up €2 to keep €98 for 20 more days: $$\frac{2}{98} \times \frac{365}{20} = 2.04\% \times 18.25 = 37.2\%\ \text{a year}$$ (compounded: $(1 + 2/98)^{365/20} - 1 = 44.6\%$)`,
          ],
          result: t`NWC **€1.0m**; CCC **≈ 45 days**; skipping the discount costs **≈ 37% a year**, so Brennan should take the discount unless it can only borrow at more than that.`,
          answer: [
            {
              heading: '(iii) The conflicts',
              list: [
                { label: 'Liquidity vs profitability', items: ['Cash ties up €1m for about 45 days. Holding more is safer (bills paid, stock available) but earns little and must be financed by the overdraft.'] },
                { label: 'Inventory (60 days)', items: ['A retailer needs stock to avoid lost sales, but holding costs, markdowns and obsolescence rise; cutting to 45 days would free about €0.3m.'] },
                { label: 'Receivables (30 days)', items: ['Credit to (business) customers boosts sales but delays cash and risks bad debts.'] },
                { label: 'Payables (45 days)', items: ['Paying later keeps cash, but (ii) shows skipping a 2/10 discount costs about 37% a year, far more than an overdraft. Stretching suppliers further also damages relationships.'] },
                { label: 'Financing', items: ['The €0.4m overdraft is cheap and flexible but can be withdrawn (refinancing risk); a conservative firm would fund permanent working capital with long-term finance.'] },
                { label: 'Seasonality', items: ['Retail needs peak before Christmas; matching short-term finance to seasonal stock is sensible.'] },
              ],
            },
            {
              heading: 'Marking guide (20)',
              table: { columns: ['Element', 'Marks'], rows: [['NWC correct', '1'], ['Inventory, receivable and payable days (correct bases)', '3'], ['CCC', '2'], ['Cost of trade credit: formula and answer', '3'], ['Interpretation of (ii)', '1'], ['(iii) Liquidity vs profitability explained', '3'], ['(iii) Conflicts for each component, with Brennan\'s numbers', '5'], ['(iii) Financing / conclusion', '2']] },
            },
          ],
          tips: ['Common mistake: dividing inventory and payables by **sales** instead of cost of sales.', 'Common mistake: forgetting the overdraft is a current liability.', 'Linking your discussion to the numbers you calculated earns the top marks.'],
          formulas: ['working-capital'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'mocka-q2a',
          label: '2(a)',
          marks: 20,
          type: 'calc',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`Corrib Engineering is considering a new production line costing €500,000, depreciated straight-line to zero over its 4-year life. It expects to sell the equipment for €60,000 at the end of year 4. Revenue in year 1 is €400,000 and grows by 3% a year; operating costs are 50% of revenue. The project needs €40,000 of working capital at the start, recovered at the end. The tax rate is 25% and the discount rate is 12%. Calculate the project's cash flows, NPV, IRR (approximately) and payback period, and recommend whether to accept it.`,
          approach: t`Same three blocks as May 2022 Q5: investment (cost, after-tax salvage), operating (OCF with depreciation tax shield) and working capital. Then discount.`,
          given: [['Equipment', '€500,000; 4 years; straight line to zero; salvage €60,000'], ['Revenue', '€400,000 in year 1, +3% a year'], ['Costs', '50% of revenue'], ['Working capital', '€40,000 at the start, recovered in year 4'], [t`Tax / discount rate`, '25% / 12%']],
          working: [
            t`**Depreciation:** $500{,}000 / 4 = €125{,}000$ a year; tax shield $= 0.25 \times 125{,}000 = €31{,}250$`,
            t`**Revenue:** 400,000; 412,000; 424,360; 437,091. **Costs (50%):** 200,000; 206,000; 212,180; 218,545`,
            t`**OCF** $= (R - E)(1 - T) + T \times Dep$: year 1 $= 200{,}000(0.75) + 31{,}250 = €181{,}250$; year 2 €185,750; year 3 €190,385; year 4 €195,159`,
            t`**After-tax salvage:** book value 0, so the whole €60,000 is taxed: $60{,}000 - 0.25(60{,}000) = €45{,}000$`,
            t`**Total cash flows:** year 0: $-500{,}000 - 40{,}000 = -540{,}000$; years 1–3: 181,250, 185,750, 190,385; year 4: $195{,}159 + 45{,}000 + 40{,}000 = 280{,}159$`,
            t`**NPV at 12%:** $$-540{,}000 + \frac{181{,}250}{1.12} + \frac{185{,}750}{1.12^2} + \frac{190{,}385}{1.12^3} + \frac{280{,}159}{1.12^4}$$ $$= -540{,}000 + 161{,}830 + 148{,}079 + 135{,}512 + 178{,}046 = €83{,}468$$`,
            t`**IRR:** the rate where NPV = 0 is about **18.7%** (trial: NPV is still positive at 18%, negative at 19%)`,
            t`**Payback:** cumulative −540,000 → −358,750 → −173,000 → +17,385, so payback $= 2 + 173{,}000/190{,}385 = 2.9$ years`,
          ],
          result: t`NPV **≈ €83,500**, IRR **≈ 18.7%** > 12%, payback **≈ 2.9 years**: **accept**.`,
          answer: [
            {
              heading: 'Cash flow table (€)',
              table: {
                columns: ['', 'Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4'],
                rows: [
                  ['Equipment / salvage (after tax)', '−500,000', '', '', '', '+45,000'],
                  ['Operating cash flow', '', '181,250', '185,750', '190,385', '195,159'],
                  ['Working capital', '−40,000', '', '', '', '+40,000'],
                  ['**Total**', '**−540,000**', '**181,250**', '**185,750**', '**190,385**', '**280,159**'],
                  ['PV at 12%', '−540,000', '161,830', '148,079', '135,512', '178,046'],
                ],
              },
            },
            {
              heading: 'Recommendation',
              list: ['Accept: positive NPV adds about €83,500 to shareholder value; IRR well above the 12% hurdle.', 'Risk check: if revenue were 10% lower every year, NPV would fall to about €36,000, still positive; revenue could fall about 18% before NPV hits zero.'],
            },
            {
              heading: 'Marking guide (20)',
              table: { columns: ['Element', 'Marks'], rows: [['Depreciation and tax shield', '2'], ['Revenue and costs with growth', '2'], ['OCF each year', '4'], ['After-tax salvage', '2'], ['Working capital in year 0 and recovery in year 4', '2'], ['Discounting and NPV', '4'], ['IRR estimate and payback', '2'], ['Recommendation with reason', '2']] },
            },
          ],
          tips: ['Common mistake: deducting depreciation as a cash outflow, or forgetting to add it back.', 'Common mistake: forgetting tax on the salvage, or forgetting to recover working capital.', 'Write the formula before each calculation: method marks survive arithmetic slips.'],
          formulas: ['project-cash-flows', 'npv', 'irr', 'payback'],
        },
        {
          id: 'mocka-q2b',
          label: '2(b)',
          marks: 10,
          type: 'essay',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`Corrib's board is told that "an NPV is only as good as its inputs". Explain what this means for the analysis in (a), and describe two techniques the firm could use to deal with this uncertainty.`,
          answer: [
            {
              heading: 'What it means',
              list: ['NPV is a calculation on **forecasts**: revenue growth, costs, salvage, working capital, the tax rate and the discount rate. Errors in any input flow straight into the answer ("garbage in, garbage out").', 'In (a): revenue and the 50% cost ratio are estimates; the salvage value is a guess four years out; the 12% rate depends on beta and market estimates.', 'Managers may also be **optimistic** (bias) to get pet projects approved; cash flows can be wrongly included (sunk costs, interest) or left out (opportunity costs, cannibalisation).'],
            },
            {
              heading: 'Two techniques',
              list: [
                { label: 'Sensitivity analysis', items: ['Change one input at a time and see how NPV moves; find the break-even value.', 'From (a): revenue 10% lower → NPV ≈ €36,000; revenue can fall about 18% before NPV = 0. Revenue is a key variable to check.'] },
                { label: 'Scenario analysis', items: ['Recalculate NPV for consistent pessimistic, base and optimistic cases (e.g. recession: lower revenue **and** lower salvage).'] },
                { label: 'Also', items: ['Simulation (Monte Carlo) for a distribution of NPVs; real options (the value of being able to expand or abandon later); post-audits of past projects to correct bias.'] },
              ],
            },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Meaning of the statement, with input examples from (a)', '4'], ['Two techniques explained', '4'], ['Applied to Corrib (e.g. break-even revenue)', '2']] } },
          ],
          tips: ['Use the numbers from part (a): applying the technique beats describing it in general.'],
          formulas: ['npv'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'mocka-q3a',
          label: '3(a)',
          marks: 15,
          type: 'calc',
          topics: ['cost-of-capital'],
          prompt: t`Liffey Holdings has an €80 million bond trading at 94, with a 4% coupon and a yield to maturity of 5.2%. It has 3 million shares trading at €40. Its beta is 1.2, the risk-free rate is 2.5% and the expected market return is 10%. Liffey **recently paid** a dividend of €2.10 per share, which is expected to grow at 5% a year. The corporate tax rate is 12.5%. Calculate Liffey's cost of debt, cost of equity (using two methods) and WACC.`,
          approach: t`Cost of debt = yield (5.2%), after tax. CAPM and DGM; "recently paid" means $D_0$, so $D_1 = 2.10 \times 1.05$. Market-value weights.`,
          working: [
            t`**After-tax cost of debt:** $5.2\% \times (1 - 0.125) = 4.55\%$ (not the 4% coupon)`,
            t`**CAPM:** $r_E = 2.5\% + 1.2(10\% - 2.5\%) = 2.5\% + 9.0\% = 11.5\%$`,
            t`**DGM:** $D_1 = 2.10 \times 1.05 = €2.205$; $\;r_E = \dfrac{2.205}{40} + 0.05 = 5.51\% + 5\% = 10.51\%$`,
            t`**Average:** $(11.5\% + 10.51\%)/2 = 11.01\%$`,
            t`**Market values:** $E = 3m \times €40 = €120m$; $\;D = €80m \times 0.94 = €75.2m$; $\;V = €195.2m$`,
            t`**Weights:** $E/V = 61.48\%$, $D/V = 38.52\%$`,
            t`**WACC (CAPM):** $0.6148(11.5\%) + 0.3852(4.55\%) = 7.07\% + 1.75\% = 8.82\%$`,
            t`**WACC (DGM):** $0.6148(10.51\%) + 1.75\% = 8.22\%$; **(average):** $8.52\%$`,
          ],
          result: t`$r_D$ after tax **4.55%**; $r_E$ **11.5%** (CAPM) / **10.51%** (DGM); WACC **≈ 8.8%** (8.2% DGM, 8.5% average)`,
          answer: [{ heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['After-tax cost of debt using the yield', '2'], ['CAPM', '2'], ['DGM with D₁ = D₀(1 + g)', '3'], ['Market value of equity and debt', '3'], ['Weights', '2'], ['WACC and statement of which cost of equity is used', '3']] } }],
          tips: ['Common mistakes: using the 4% coupon; using €80m face value; using €2.10 instead of €2.205; applying tax to the cost of equity.'],
          formulas: ['wacc', 'capm', 'dividend-growth-cost-of-equity'],
        },
        {
          id: 'mocka-q3b',
          label: '3(b)',
          marks: 15,
          type: 'essay',
          topics: ['cost-of-capital', 'capital-budgeting'],
          prompt: t`Liffey is considering expanding into renewable energy development, a business much riskier than its existing operations. Comparable listed renewable developers have equity betas of about 1.6. Should Liffey evaluate this project using the WACC from (a)? Explain, estimate a more suitable discount rate, and discuss the consequences of using a single company-wide rate.`,
          approach: 'The discount rate must reflect the **project\'s** risk, not the firm\'s. Use the comparable beta (pure play) in CAPM, keep Liffey\'s financing weights, compute a project WACC, then explain what goes wrong with one rate.',
          working: [
            t`**Project cost of equity (pure play):** $2.5\% + 1.6 \times 7.5\% = 14.5\%$`,
            t`**Project WACC (same financing mix):** $0.6148(14.5\%) + 0.3852(4.55\%) = 8.91\% + 1.75\% = 10.67\%$`,
          ],
          result: t`Use about **10.7%**, not 8.8%.`,
          answer: [
            {
              heading: 'Explanation',
              list: [
                'WACC reflects the **average risk of Liffey\'s existing assets**. It is the right hurdle rate only for projects of the same risk.',
                'The cost of capital depends on the **use** of the money (the project\'s systematic risk), not the source.',
                { label: 'Consequences of one company-wide rate', items: ['Risky projects are judged against too low a rate, so value-destroying ones get accepted.', 'Safe projects face too high a rate, so good ones get rejected.', 'Over time the firm drifts into riskier businesses, and its overall risk and WACC rise.'] },
                { label: 'Refinements', items: ['Unlever the comparable firms\' betas and relever at Liffey\'s debt ratio (their gearing may differ).', 'Divisional rates, or risk classes (e.g. +3% for new markets).', 'Check that a renewable project\'s financing (e.g. project finance with more debt) is reflected.'] },
              ],
            },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['WACC suits only average-risk projects: why', '4'], ['Pure-play cost of equity and project rate', '4'], ['Consequences of a single rate (accept/reject errors)', '4'], ['Refinements and conclusion', '3']] } },
          ],
          tips: ['Key sentence: "the discount rate depends on the risk of the project, not the firm".'],
          formulas: ['wacc', 'capm'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      parts: [
        {
          id: 'mocka-q4a',
          label: '4(a)',
          marks: 15,
          type: 'essay',
          topics: ['equity-bonds'],
          prompt: t`A 30-year-old investor is deciding between a portfolio of corporate bonds and a portfolio of shares. Discuss the advantages and disadvantages of each from the investor's point of view, and explain why she might choose to hold a mixture of both.`,
          answer: [
            {
              heading: 'Bonds',
              list: ['**Pros:** fixed, predictable coupons; repayment of face value at maturity; rank ahead of shareholders in insolvency; lower volatility.', '**Cons:** return capped at the yield; default risk; interest-rate risk (prices fall when rates rise, e.g. 2022); inflation erodes fixed payments; reinvestment risk.'],
            },
            {
              heading: 'Shares',
              list: ['**Pros:** higher expected long-run returns (equity risk premium); unlimited upside; dividends; some protection against inflation because firms can raise prices; voting rights.', '**Cons:** volatile (large falls in crises, e.g. 2008, 2020); dividends not guaranteed; last in line in insolvency; can lose everything in a single company.'],
            },
            {
              heading: 'Why hold both',
              list: ['**Diversification:** bonds and shares are not perfectly correlated (bonds often rise when shares fall in recessions as rates are cut), so combining them reduces risk for a given expected return.', '**Matching goals and horizon:** a 30-year-old with a long horizon can hold mostly shares (time to recover from falls) and some bonds for stability; the bond share usually rises with age.', '**Liquidity and income:** bonds for near-term needs, shares for long-term growth.', '**Risk tolerance:** the mix lets her choose her position between safety and return.', 'Note: in 2022, rising inflation hit both at once, so the diversification benefit is not guaranteed.'],
            },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['Bond pros and cons', '4'], ['Equity pros and cons', '4'], ['Diversification explained (correlation)', '4'], ['Applied to a young investor / conclusion', '3']] } },
          ],
          tips: ['The question is from the **investor\'s** side only: don\'t spend time on the issuing firm.'],
        },
        {
          id: 'mocka-q4b',
          label: '4(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-structure'],
          prompt: t`Describe the main theories of capital structure, and explain how the optimal capital structure might differ between a regulated electricity utility and a young biotechnology firm.`,
          answer: [
            {
              heading: 'The theories',
              list: [
                t`**M&M (1958):** perfect markets, $V_L = V_U$: capital structure irrelevant.`,
                t`**M&M (1963):** interest tax shield, $V_L = V_U + T_cD$: debt adds value; implies (almost) all debt.`,
                '**Trade-off:** tax shield vs costs of financial distress (bankruptcy costs, lost customers, under-investment) and agency costs of debt → target debt ratio.',
                '**Pecking order:** asymmetric information → retained earnings, then debt, then equity; no target ratio.',
                '**Agency theory:** debt disciplines managers but creates shareholder–bondholder conflicts.',
              ],
            },
            {
              heading: 'Utility vs biotech',
              table: {
                columns: ['Factor', 'Electricity utility', 'Young biotech'],
                rows: [
                  ['Cash flows', 'Stable, regulated', 'Negative or very uncertain (drug trials)'],
                  ['Taxable profits (value of tax shield)', 'High', 'Little or none to shield'],
                  ['Assets', 'Tangible (networks, plants): good collateral', 'Intangible (patents, staff): lost in distress'],
                  ['Cost of financial distress', 'Low', 'Very high'],
                  ['Information asymmetry', 'Low', 'High (hard to value research)'],
                  ['**Predicted structure**', '**High debt** (trade-off)', '**Mainly equity** (venture capital, share issues)'],
                ],
              },
            },
            {
              heading: 'Evaluation',
              list: ['The trade-off theory explains the contrast well.', 'The pecking order fits the utility\'s preference for internal funds but not the biotech, which issues equity first because it has no profits or collateral to borrow against.'],
            },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['M&M with and without taxes', '3'], ['Trade-off theory', '3'], ['Pecking order (and agency)', '3'], ['Applied comparison utility vs biotech', '5'], ['Conclusion', '1']] } },
          ],
          tips: ['Apply the theories to the two firms: a general description alone caps you at about half marks.'],
          formulas: ['mm-propositions'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'mocka-q5a',
          label: '5(a)',
          marks: 10,
          type: 'calc',
          topics: ['valuation'],
          prompt: t`Shannon plc has just paid a dividend of €2.50 per share. Dividends are expected to grow at 8% a year for the next two years and then at 4% a year indefinitely. The required return on its equity is 10%. Value one share.`,
          approach: t`Two stages: discount each high-growth dividend, then value the constant-growth part at the end of year 2 with Gordon ($P_2 = D_3/(r - g)$) and discount it back two years.`,
          working: [
            t`$D_1 = 2.50 \times 1.08 = €2.70$; $\;D_2 = 2.70 \times 1.08 = €2.916$; $\;D_3 = 2.916 \times 1.04 = €3.0326$`,
            t`**Value at year 2:** $P_2 = \dfrac{D_3}{r - g} = \dfrac{3.0326}{0.10 - 0.04} = €50.54$`,
            t`**Discount to today:** $$P_0 = \frac{2.70}{1.10} + \frac{2.916 + 50.54}{1.10^2} = 2.455 + 44.18 = €46.64$$`,
          ],
          result: t`$P_0 \approx$ **€46.64**`,
          answer: [{ heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['D₁ and D₂ grown from D₀', '2'], ['D₃ at the new growth rate', '2'], ['Terminal value P₂ with Gordon', '3'], ['Discounting everything to today', '3']] } }],
          tips: ['Common mistakes: using D₂ instead of D₃ in the terminal value; forgetting to discount P₂ back two years; starting from €2.50 as D₁.'],
          formulas: ['gordon-growth'],
        },
        {
          id: 'mocka-q5b',
          label: '5(b)',
          marks: 10,
          type: 'essay',
          topics: ['dividends'],
          prompt: t`Shannon's board is considering cutting its dividend to fund a large new investment programme. Explain how the market might react and why, and what Shannon could do to limit any negative reaction.`,
          answer: [
            { heading: 'Likely reaction', list: ['**Signalling:** investors read cuts as a sign of trouble because firms smooth dividends (Lintner) and cut only when forced. The share price usually falls (e.g. Shell\'s 2020 cut).', '**Clientele:** income investors (retirees, income funds) may sell, adding pressure.', 'Under M&M the cut is irrelevant if the money funds positive-NPV projects, but information asymmetry means the market may not believe that.'] },
            { heading: 'How to limit the reaction', list: ['**Communicate clearly**: explain the investment programme, its expected returns and timescale.', 'Cut once, clearly, with a credible new policy rather than repeated small cuts.', 'Consider alternatives: keep the dividend and borrow (if debt capacity allows), offer scrip dividends (shares instead of cash), or reduce buybacks first.', 'Show insiders\' confidence, e.g. directors buying shares.'] },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Signalling explained', '3'], ['Clientele and M&M point', '3'], ['Ways to limit the reaction', '4']] } },
          ],
        },
        {
          id: 'mocka-q5c',
          label: '5(c)',
          marks: 10,
          type: 'essay',
          topics: ['macro', 'bond-yields'],
          prompt: t`Explain how a sharp, unexpected rise in inflation affects (i) the price of existing fixed-coupon bonds and (ii) firms' cost of capital and investment decisions.`,
          answer: [
            { heading: '(i) Bond prices', list: [t`Investors demand higher nominal yields to protect real returns (Fisher: $1 + r_{nom} = (1 + r_{real})(1 + \pi)$), and central banks raise rates.`, 'Coupons are fixed, so prices fall until yields rise; long-maturity bonds fall most. Example: euro government and corporate bonds fell sharply in 2022 as inflation surged and the ECB raised rates.'] },
            { heading: '(ii) Cost of capital and investment', list: ['Higher risk-free rates raise the cost of equity (CAPM) and the cost of new debt, so WACC rises and fewer projects have positive NPVs.', 'Uncertain inflation makes cash-flow forecasts harder; firms must discount nominal cash flows at nominal rates consistently.', 'Some firms gain (pricing power, existing fixed-rate debt now worth less in real terms); others lose (rising input and wage costs, variable-rate borrowers).'] },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Bond price mechanism and maturity effect', '4'], ['Cost of capital channel', '3'], ['Effects on investment, winners and losers', '3']] } },
          ],
          formulas: ['fisher', 'bond-pricing'],
        },
      ],
    },
  ],
};
