import { t } from '../../lib/tag.js';

/**
 * Mock exam C: the hardest paper. Leans on the newer and less frequent topics
 * (long-term value, real vs nominal NPV, IRR by interpolation, risk analysis,
 * bond YTM, WACC with two kinds of debt, supernormal-growth DDM, M&M dividend
 * irrelevance with numbers, working capital financing).
 */
export default {
  kind: 'paper',
  group: 'mocks',
  id: 'mock-c',
  title: 'Mock Exam C (harder)',
  short: 'Mock C',
  accent: 'oligopoly',
  summary: t`The hardest practice paper: the newer topics from December 2025 (long-term value, inflation, the two-stage DDM) and the calculations that have not yet appeared but plausibly could (real vs nominal NPV, IRR by interpolation, bond yield to maturity, WACC with two kinds of debt). If you can do this paper, the real one should feel comfortable.`,
  meta: [
    ['Status', 'Predicted mock exam (not a real paper) with a full answer key and marking guide'],
    ['Format', '2 hours, closed book, non-programmable calculator'],
    ['Rubric', 'Answer Question 1 (compulsory) and two of Questions 2–5'],
    ['Marks', 'Question 1: 40 marks · Questions 2–5: 30 marks each · Total 100'],
  ],
  timing: t`About **48 minutes on Question 1** and **36 minutes on each optional question**.`,
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      compulsory: true,
      parts: [
        {
          id: 'mockc-q1a',
          label: '1(a)',
          marks: 20,
          type: 'essay',
          topics: ['firm-objective', 'governance'],
          prompt: t`"Maximising shareholder value and creating long-term value are the same thing." Critically discuss this statement with reference to Schoenmaker & Schramade, and explain what role institutional investors can play in encouraging long-term value creation. Use examples.`,
          approach: 'Argue both sides: when they coincide (long-run shareholder value internalises much) and when they diverge (externalities, short horizons, measurement). Then the investor role (stewardship, engagement, voting, ESG integration) with an evaluation.',
          answer: [
            {
              heading: 'The two objectives',
              list: [
                '**Shareholder value:** maximise the (present) value of shareholders\' claims, usually seen through the share price.',
                '**Long-term value creation (Schoenmaker & Schramade):** the firm should create value across its financial, social and environmental impacts, over a long horizon, so the value it creates for shareholders is not at the expense of other stakeholders or the environment.',
              ],
            },
            {
              heading: 'When they coincide',
              list: ['If markets price everything correctly and investors look far ahead, long-term shareholder value already rewards treating customers, staff and the environment well (reputation, loyalty, lower regulatory risk).', '"Enlightened" shareholder value: many social and environmental issues become financially material over time (e.g. carbon pricing making polluting assets worth less, "stranded assets").'],
            },
            {
              heading: 'When they diverge',
              list: [
                '**Externalities:** costs a firm imposes on others (pollution, emissions) that are not priced do not reduce shareholder value, so maximising it can destroy wider value.',
                '**Short horizons:** quarterly reporting, short bonus periods and short-term investors make managers favour near-term profit over long-term investment (agency problem).',
                '**Measurement:** social and environmental value is hard to measure, so it is under-weighted.',
                '**Example:** cutting safety or maintenance spending raises short-term profit but can lead to disasters that destroy both financial and social value (the 2010 Deepwater Horizon spill is a frequently cited case).',
              ],
            },
            {
              heading: 'Role of institutional investors',
              list: [
                '**Stewardship and engagement:** pension funds and asset managers own large stakes and can push boards on strategy, pay and climate plans; stewardship codes set expectations.',
                '**Voting:** on directors, pay (say-on-pay) and shareholder resolutions (e.g. climate resolutions).',
                '**Long-term mandates:** pension funds have long liabilities, so they should value long-term outcomes.',
                '**ESG integration and exclusion:** including environmental and social risks in valuation; divesting from some sectors.',
                '**Evaluation:** engagement can work (collective engagement initiatives have won emissions commitments from large companies), but passive funds may engage weakly, managers of funds face their own short-term performance pressure, and "greenwashing" makes claims hard to verify.',
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['The two objectives overlap in the long run but are not the same: short horizons and unpriced externalities can make shareholder value maximisation destroy wider value. Long-term investors, with better reporting and incentives, can narrow the gap.'],
            },
            { heading: 'Marking guide (20)', table: { columns: ['Element', 'Marks'], rows: [['Both objectives defined, Schoenmaker & Schramade referenced', '4'], ['Arguments that they coincide', '3'], ['Arguments that they diverge, with examples', '5'], ['Role of institutional investors', '5'], ['Critical evaluation and conclusion', '3']] } },
          ],
          tips: ['"Critically discuss" a quotation: argue both sides, then reach a view.', 'Check your lecture notes on Schoenmaker & Schramade for their exact framework and terms; use them if you can.'],
        },
        {
          id: 'mockc-q1b',
          label: '1(b)',
          marks: 20,
          type: 'calc',
          topics: ['capital-budgeting', 'cash-flow-estimation', 'macro'],
          prompt: t`A project costs €300,000 and is expected to generate €120,000 a year for 3 years **in today's prices** (real terms). Inflation is expected to be 3% a year and the firm's **nominal** cost of capital is 11.24%. **(i)** Calculate the NPV correctly in two ways (real and nominal). (12 marks) **(ii)** A junior analyst discounts the €120,000 at 11.24%. What NPV does she get, and why is it wrong? (4 marks) **(iii)** Why does consistency between cash flows and discount rates matter more when inflation is high? (4 marks)`,
          approach: t`Fisher: $(1 + r_{nom}) = (1 + r_{real})(1 + \pi)$. Either discount real cash flows at the real rate, or inflate them and discount at the nominal rate: the NPV is the same.`,
          working: [
            t`**Real rate:** $1 + r_{real} = \dfrac{1.1124}{1.03} = 1.08 \Rightarrow r_{real} = 8\%$`,
            t`**Method 1 (real):** $NPV = -300{,}000 + 120{,}000 \times \dfrac{1 - 1.08^{-3}}{0.08} = -300{,}000 + 120{,}000 \times 2.5771 = €9{,}252$`,
            t`**Method 2 (nominal):** cash flows $120{,}000 \times 1.03^t$: 123,600; 127,308; 131,127. $$NPV = -300{,}000 + \frac{123{,}600}{1.1124} + \frac{127{,}308}{1.1124^2} + \frac{131{,}127}{1.1124^3} = €9{,}252$$`,
            t`**(ii) Analyst's mistake:** $-300{,}000 + 120{,}000 \times 2.4336 = -€7{,}974$`,
          ],
          result: t`Correct NPV **≈ +€9,250** (accept); the mixed-up method gives **≈ −€7,970** (wrongly reject).`,
          answer: [
            { heading: '(ii) Why it is wrong', list: ['She discounts **real** cash flows at a **nominal** rate, which includes 3% inflation. That penalises the cash flows for inflation they do not contain, so the NPV is biased **down** and a good project is rejected.'] },
            { heading: '(iii) Why consistency matters more with high inflation', list: ['The gap between nominal and real rates is roughly the inflation rate, so the error grows with inflation and with the project\'s length (compounding).', 'Some items do not rise with inflation (depreciation tax shields are fixed in nominal terms, as are fixed-price contracts), so they must be treated as nominal.', 'High inflation is also more uncertain, so forecasts need scenario analysis.'] },
            { heading: 'Marking guide (20)', table: { columns: ['Element', 'Marks'], rows: [['Fisher equation and real rate', '3'], ['Real-terms NPV', '4'], ['Nominal cash flows', '2'], ['Nominal-terms NPV', '3'], ['(ii) Wrong NPV and explanation', '4'], ['(iii) Consistency, depreciation, uncertainty', '4']] } },
          ],
          tips: ['Common mistake: subtracting inflation (11.24% − 3% = 8.24%) instead of dividing; for exam purposes the approximation is accepted only if you say so.'],
          formulas: ['fisher', 'npv', 'time-value'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'mockc-q2a',
          label: '2(a)',
          marks: 15,
          type: 'calc',
          topics: ['capital-budgeting'],
          prompt: t`A project costs €50,000 and returns €20,000, €25,000 and €15,000 over three years. **(i)** Calculate its NPV at 8%, 10% and 12%, and estimate its IRR by interpolation. (9 marks) **(ii)** Calculate its discounted payback at 8%. (3 marks) **(iii)** Give an example of cash flows for which the IRR rule fails, and explain why. (3 marks)`,
          working: [
            t`**NPV at 8%:** $-50{,}000 + 18{,}519 + 21{,}433 + 11{,}907 = €1{,}859$`,
            t`**NPV at 10%:** $-50{,}000 + 18{,}182 + 20{,}661 + 11{,}270 = €113$`,
            t`**NPV at 12%:** $-50{,}000 + 17{,}857 + 19{,}930 + 10{,}677 = -€1{,}536$`,
            t`**Interpolate between 10% and 12%:** $$IRR \approx 10\% + \frac{113}{113 + 1{,}536} \times 2\% = 10.14\%$$`,
            t`**Discounted payback at 8%:** cumulative PV −50,000 → −31,481 → −10,048 → +1,859, so $2 + 10{,}048/11{,}907 = 2.84$ years`,
          ],
          result: t`NPV €1,859 / €113 / −€1,536; IRR **≈ 10.1%**; discounted payback **≈ 2.8 years**.`,
          answer: [
            { heading: '(iii) When IRR fails', list: [t`**Multiple IRRs:** cash flows $-100, +230, -132$ (e.g. a mine with a clean-up cost) have IRRs of both **10%** and **20%**: NPV is zero at each. With a 15% cost of capital, the IRR rule gives no clear answer; NPV at 15% is positive (€0.19), so accept.`, 'Also: borrowing-type cash flows (+ then −), where a higher IRR is worse; and mutually exclusive projects of different size.'] },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['Three NPVs', '6'], ['Interpolation', '3'], ['Discounted payback', '3'], ['Failure example and explanation', '3']] } },
          ],
          tips: ['Interpolate between the two rates where the NPV changes sign, not any two rates.'],
          formulas: ['irr', 'npv', 'payback'],
        },
        {
          id: 'mockc-q2b',
          label: '2(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`The project in (a) has an IRR only just above the firm's 10% cost of capital. Discuss how the firm should analyse the risk in its forecasts before deciding, including the role of real options.`,
          answer: [
            { heading: 'Why risk analysis matters here', list: ['NPV at 10% is only €113: a tiny forecast error flips the decision. "An NPV is only as good as its inputs."'] },
            { heading: 'Techniques', list: [
              { label: 'Sensitivity analysis', items: ['Vary one input at a time (each year\'s cash flow, the discount rate) to see which matters most; here a fall of only about 0.5% in the year-2 cash flow would wipe out the NPV.'] },
              { label: 'Break-even analysis', items: ['Find the level of sales or price at which NPV = 0 and judge how likely the outcome is to fall below it.'] },
              { label: 'Scenario analysis', items: ['Consistent pessimistic, base and optimistic cases with probabilities; expected NPV and the downside.'] },
              { label: 'Simulation (Monte Carlo)', items: ['Distributions for each input give a distribution of NPV and the probability of a loss.'] },
              { label: 'Real options', items: ['Standard NPV ignores managers\' ability to react: the option to **expand** if demand is strong, **abandon** and sell the assets if weak, or **wait** for information. These options add value, so a marginal NPV project may be worth taking if it carries valuable options (or worth delaying).'] },
              { label: 'Check the inputs', items: ['Remove sunk costs and interest; include opportunity costs and side effects; correct optimism bias (compare with post-audits of past projects).'] },
            ] },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['Link to the marginal NPV from (a)', '2'], ['Sensitivity and break-even', '4'], ['Scenario and simulation', '4'], ['Real options with examples', '4'], ['Conclusion', '1']] } },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'mockc-q3a',
          label: '3(a)',
          marks: 10,
          type: 'calc',
          topics: ['bond-yields'],
          prompt: t`A 4-year bond with a 3% annual coupon and a face value of €100 trades at €92.50. Calculate its current yield and estimate its yield to maturity. Explain why the two differ.`,
          working: [
            t`**Current yield:** $\dfrac{3}{92.50} = 3.24\%$`,
            t`**Approximate YTM:** $$\frac{C + (F - P)/n}{(F + P)/2} = \frac{3 + 7.5/4}{(100 + 92.5)/2} = \frac{4.875}{96.25} = 5.06\%$$`,
            t`**Exact YTM** (trial and error): at 5% the price would be €92.91; at 5.2% €92.24; so $y \approx 5.12\%$`,
          ],
          result: t`Current yield **3.24%**; YTM **≈ 5.1%**.`,
          answer: [
            { heading: 'Why they differ', list: ['Current yield counts only the coupon income.', 'YTM also counts the **€7.50 capital gain** as the price rises to €100 by maturity, spread over 4 years. For a discount bond: coupon (3%) < current yield (3.24%) < YTM (5.1%).'] },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Current yield', '2'], ['YTM method (approximation or trial)', '5'], ['Explanation of the difference', '3']] } },
          ],
          formulas: ['bond-pricing'],
        },
        {
          id: 'mockc-q3b',
          label: '3(b)',
          marks: 10,
          type: 'essay',
          topics: ['bond-yields', 'macro'],
          prompt: t`Explain why deflation can be as damaging to an economy as high inflation, and how each affects bondholders and borrowers.`,
          answer: [
            { heading: 'High inflation', list: ['Erodes purchasing power and savings; uncertainty makes planning and long-term contracts harder; menu costs; arbitrary redistribution.', '**Bondholders lose** (fixed coupons worth less; prices fall as yields rise); **borrowers with fixed-rate debt gain** (real burden shrinks).'] },
            { heading: 'Deflation', list: ['Consumers delay spending expecting lower prices, so demand falls → lower output, wages and jobs → further price falls (deflationary spiral; Japan in the 1990s–2000s).', '**Real debt burden rises** (Fisher debt deflation): borrowers default, banks cut lending.', 'Central banks are constrained because nominal rates cannot go much below zero, so real rates stay high.', '**Bondholders of safe issuers gain** (fixed payments worth more in real terms), but credit risk on corporate bonds rises.'] },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Costs of high inflation', '3'], ['Costs of deflation (spiral, debt burden, zero bound)', '4'], ['Effects on bondholders and borrowers', '3']] } },
          ],
          formulas: ['fisher'],
        },
        {
          id: 'mockc-q3c',
          label: '3(c)',
          marks: 10,
          type: 'essay',
          topics: ['equity-bonds'],
          prompt: t`From the issuing company's perspective, compare raising funds through debt and through equity.`,
          answer: [
            { table: { columns: ['', 'Debt', 'Equity'], rows: [['Cost', 'Cheaper: lower required return; interest tax-deductible', 'Dearer: higher required return; dividends not deductible'], ['Obligations', 'Compulsory interest and repayment', 'No compulsory payments'], ['Risk to the firm', 'Raises financial risk and distress costs; covenants', 'Reduces risk; permanent capital'], ['Control', 'No dilution', 'Dilutes existing owners'], ['Signal', 'Confidence in future cash flows', 'May signal overvaluation (pecking order); price often falls'], ['Agency', 'Disciplines managers (less free cash flow)', 'More free cash flow for managers']] } },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Cost and tax', '3'], ['Risk and obligations', '3'], ['Control, signalling, agency', '4']] } },
          ],
          formulas: ['mm-propositions'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      parts: [
        {
          id: 'mockc-q4a',
          label: '4(a)',
          marks: 15,
          type: 'calc',
          topics: ['cost-of-capital'],
          prompt: t`Boyne plc has 5 million shares trading at €12, a beta of 1.1, a bank loan of €20 million at 6% (its book value equals its market value), and a €30 million bond trading at 104 with a yield to maturity of 4.5%. The risk-free rate is 3%, the market risk premium is 6% and the tax rate is 12.5%. Calculate Boyne's WACC.`,
          approach: 'Three sources of capital: equity, the loan and the bond, each with its own market value and cost. The bond trades above par, so its yield is below its coupon: use the yield.',
          working: [
            t`**Cost of equity:** $3\% + 1.1 \times 6\% = 9.6\%$`,
            t`**After-tax costs of debt:** loan $6\% \times 0.875 = 5.25\%$; bond $4.5\% \times 0.875 = 3.94\%$`,
            t`**Market values:** $E = 5m \times 12 = €60m$; loan €20m; bond $30m \times 1.04 = €31.2m$; $V = €111.2m$`,
            t`**Weights:** equity 53.96%; loan 17.99%; bond 28.06%`,
            t`**WACC:** $0.5396(9.6\%) + 0.1799(5.25\%) + 0.2806(3.94\%) = 5.18\% + 0.94\% + 1.10\% = 7.23\%$`,
          ],
          result: t`WACC **≈ 7.2%**`,
          answer: [{ heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['Cost of equity', '2'], ['Both after-tax costs of debt', '3'], ['Market values (bond above par)', '4'], ['Weights', '3'], ['WACC', '3']] } }],
          tips: ['Common mistakes: using €30m for the bond; merging the two debts at one rate; using the bond\'s coupon.'],
          formulas: ['wacc', 'capm'],
        },
        {
          id: 'mockc-q4b',
          label: '4(b)',
          marks: 15,
          type: 'calc',
          topics: ['dividends'],
          prompt: t`Explain Modigliani and Miller's argument that dividend policy is irrelevant, using a numerical example of a "homemade dividend", and explain which of their assumptions are most likely to fail in practice.`,
          working: [
            t`**Example:** you own 1,000 shares at €20 (€20,000). The firm pays a €1 dividend: you receive €1,000 and the share price falls to €19, so wealth $= 1{,}000 \times 19 + 1{,}000 = €20{,}000$.`,
            t`**No dividend, homemade instead:** the price stays €20; sell 50 shares for €1,000; wealth $= 950 \times 20 + 1{,}000 = €20{,}000$.`,
            t`**Reinvest instead:** if you did not want the €1,000 dividend, buy 52.6 shares at €19: back to €20,000 in shares.`,
          ],
          result: 'Wealth is the same whatever the payout, so investors can make their own dividend policy.',
          answer: [
            { heading: 'The argument', list: ['Value depends on the firm\'s investment decisions (its cash flows), not on how they are split between dividends and retained earnings.', 'Investment fixed: any dividend must be financed by cash the firm would otherwise hold or by issuing shares, which offsets the gain.'] },
            { heading: 'Assumptions that fail', list: ['**Taxes:** dividends and gains taxed differently → clienteles and buyback preference.', '**Transaction costs:** selling shares costs money; issuing new shares costs more.', '**Information asymmetry:** dividends signal managers\' confidence.', '**Agency costs:** payouts restrict wasteful spending.', '**Behaviour:** investors treat dividends as spendable income.'] },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['M&M argument and assumptions', '4'], ['Numerical homemade-dividend example', '5'], ['Assumptions that fail, explained', '6']] } },
          ],
          formulas: ['gordon-growth'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'mockc-q5a',
          label: '5(a)',
          marks: 15,
          type: 'calc',
          topics: ['valuation', 'cost-of-capital'],
          prompt: t`Tolka Tech has just paid a dividend of €1.50. Dividends are expected to grow at 15% a year for three years, then at 4% a year forever. Shareholders require 12%. **(i)** Value the share. (10 marks) **(ii)** The share actually trades at €30, and next year's dividend is expected to be €1.725. If the market assumed **constant** growth, what growth rate would it be pricing in? (5 marks)`,
          working: [
            t`**Dividends:** $D_1 = 1.725$; $D_2 = 1.984$; $D_3 = 2.281$; $D_4 = 2.281 \times 1.04 = 2.373$`,
            t`**Terminal value at year 3:** $P_3 = \dfrac{D_4}{r - g} = \dfrac{2.373}{0.12 - 0.04} = €29.66$`,
            t`**PV:** $\dfrac{1.725}{1.12} + \dfrac{1.984}{1.12^2} + \dfrac{2.281}{1.12^3} + \dfrac{29.66}{1.12^3} = 1.540 + 1.581 + 1.624 + 21.109 = €25.85$`,
            t`**(ii) Implied growth:** $P_0 = \dfrac{D_1}{r - g} \Rightarrow g = r - \dfrac{D_1}{P_0} = 12\% - \dfrac{1.725}{30} = 12\% - 5.75\% = 6.25\%$`,
          ],
          result: t`Value **≈ €25.85**; the €30 price implies constant growth of **6.25%**, above the 4% long-run forecast: the market is more optimistic (or requires less than 12%).`,
          answer: [{ heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['High-growth dividends', '3'], ['D₄ and terminal value', '3'], ['Discounting (terminal value back 3 years)', '4'], ['Implied growth rearrangement', '3'], ['Interpretation', '2']] } }],
          tips: ['Common mistake: discounting the terminal value by 4 years instead of 3 (it is the value at the end of year 3).'],
          formulas: ['gordon-growth', 'dividend-growth-cost-of-equity'],
        },
        {
          id: 'mockc-q5b',
          label: '5(b)',
          marks: 15,
          type: 'essay',
          topics: ['working-capital'],
          prompt: t`A toy retailer's sales are heavily concentrated before Christmas. Describe how it should finance its working capital, comparing conservative, aggressive and matching strategies, and explain the risks of each.`,
          answer: [
            { heading: 'The retailer\'s pattern', list: ['A **permanent** base of working capital all year, plus a large **temporary** peak (stock built up from September, receivables and cash rising in December).'] },
            { heading: 'Strategies', table: { columns: ['Strategy', 'How', 'Pros', 'Risks'], rows: [['Conservative', 'Long-term finance covers the permanent base **and** most of the peak; surplus cash in quiet months', 'Safe; low refinancing risk', 'Expensive (paying for funds not always needed); lower return'], ['Aggressive', 'Short-term borrowing funds the peak and part of the permanent base', 'Cheaper (short rates usually lower); higher return', 'Refinancing risk if the bank withdraws the overdraft; interest-rate risk'], ['Matching (moderate)', 'Long-term finance for permanent needs; short-term (overdraft, trade credit) for the seasonal peak', 'Balances cost and risk', 'Forecast errors: a weak Christmas leaves unsold stock financed short term']] } },
            { heading: 'Other considerations', list: ['Negotiate longer supplier credit for pre-Christmas stock (trade credit), but weigh lost discounts.', 'Inventory risk: toys go out of fashion, so excess stock must be discounted in January.', 'Cash conversion cycle peaks before Christmas: forecast cash needs monthly.'] },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['Permanent vs temporary working capital', '3'], ['Three strategies explained', '6'], ['Risks of each', '4'], ['Applied to the toy retailer', '2']] } },
          ],
          formulas: ['working-capital'],
        },
      ],
    },
  ],
};
