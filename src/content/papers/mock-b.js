import { t } from '../../lib/tag.js';

/**
 * Mock exam B: same core topics as the past papers, tested from new angles
 * (applied cash-flow scenario, two agency relationships, mutually exclusive
 * projects, bond pricing, M&M with numbers, buybacks, CAPM with the SML).
 */
export default {
  kind: 'paper',
  group: 'mocks',
  id: 'mock-b',
  title: 'Mock Exam B (new angles)',
  short: 'Mock B',
  accent: 'production',
  summary: t`A second full practice paper: the core topics again, but applied to scenarios and with more numbers, which tests whether you can use the ideas rather than recite them. Every part has the full working, a **marking guide** and the common mistakes.`,
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
          id: 'mockb-q1a',
          label: '1(a)',
          marks: 20,
          type: 'calc',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`Lír Foods is evaluating a new production plant. Its analyst lists: (1) €150,000 already spent on market research; (2) new machinery costing €2,000,000; (3) a site the firm already owns, which it could otherwise sell for €900,000 after tax; (4) €80,000 a year of head-office overhead to be allocated to the plant (total head-office costs will not change); (5) the new product will reduce contribution from an existing product by €200,000 a year; (6) the plant will be financed by a loan with interest of €90,000 a year; (7) €120,000 of extra working capital, recovered at the end. For **each** item, state whether it should be included in the NPV analysis and why. Then calculate the year-0 cash flow. The tax rate is 25%.`,
          approach: 'The test for every item: does it change because of the decision? Include incremental, after-tax cash flows; exclude sunk costs, unchanged overheads and financing.',
          answer: [
            {
              heading: 'Item by item',
              table: {
                columns: ['Item', 'Include?', 'Why'],
                rows: [
                  ['(1) Market research €150,000', '**Exclude**', 'Sunk: already spent whatever the decision.'],
                  ['(2) Machinery €2,000,000', '**Include** (year 0)', 'Incremental investment; its depreciation also gives a tax shield in later years.'],
                  ['(3) Site worth €900,000', '**Include** (year 0)', 'Opportunity cost: by using the site the firm gives up the sale proceeds.'],
                  ['(4) Overhead allocation €80,000', '**Exclude**', 'Total head-office costs do not change: it is an accounting allocation, not an incremental cash flow.'],
                  ['(5) Lost contribution €200,000/yr', '**Include** (after tax: −€150,000/yr)', 'Cannibalisation is an incremental side effect of the project.'],
                  ['(6) Interest €90,000/yr', '**Exclude**', 'Financing costs are already in the discount rate (WACC); deducting them would double-count.'],
                  ['(7) Working capital €120,000', '**Include**', 'Outflow at the start, inflow when recovered at the end.'],
                ],
              },
            },
          ],
          working: [
            t`**Year-0 cash flow** = machinery + opportunity cost of the site + working capital`,
            t`$= -2{,}000{,}000 - 900{,}000 - 120{,}000 = -€3{,}020{,}000$`,
            t`**Each later year:** include $-200{,}000 \times (1 - 0.25) = -€150{,}000$ of lost contribution (after tax) alongside the plant's own after-tax cash flows.`,
          ],
          result: t`Year-0 cash flow **−€3,020,000**; exclude research, overheads and interest.`,
          tips: ['Common mistakes: including sunk research costs or interest; forgetting the opportunity cost of an asset the firm already owns; forgetting that cannibalisation must be after tax.', 'Mark scheme rewards the **reason**, not just "include/exclude".'],
          formulas: ['project-cash-flows', 'npv'],
        },
        {
          id: 'mockb-q1b',
          label: '1(b)',
          marks: 20,
          type: 'essay',
          topics: ['firm-objective', 'governance', 'capital-structure'],
          prompt: t`Explain the agency problems that can arise between (i) shareholders and managers and (ii) shareholders and bondholders. For each, describe how it can be mitigated and assess how effective these measures are. Use examples.`,
          approach: 'Two agency relationships, each with problems → remedies → evaluation. Most answers only cover (i), so (ii) is where marks are won.',
          answer: [
            {
              heading: '(i) Shareholders and managers',
              list: [
                { label: 'Problems', items: ['Separation of ownership and control plus information asymmetry: managers pursue perks, empire building (overpaying for acquisitions), short-termism (cutting R&D to hit bonuses), excessive caution, entrenchment.'] },
                { label: 'Mitigation and assessment', items: ['**Long-term share-based pay:** aligns wealth, but can encourage short-term price boosting and excessive pay.', '**Independent board:** monitors and fires, but may lack independence or information.', '**Shareholder voice and activism:** institutional investors vote and engage, but small investors free-ride.', '**Takeover threat:** disciplines, but costly and blockable.', '**Debt and dividends:** reduce free cash flow (Jensen), but too much debt creates the problems in (ii).'] },
              ],
            },
            {
              heading: '(ii) Shareholders and bondholders',
              list: [
                { label: 'Why it arises', items: ['Shareholders have limited liability and keep all the upside; bondholders\' return is capped at the coupon. In a firm near distress, shareholders (via managers) gain from actions that hurt lenders.'] },
                { label: 'Problems', items: ['**Risk shifting (asset substitution):** switching to very risky projects; if they succeed shareholders win, if they fail lenders bear the loss.', '**Under-investment (debt overhang):** refusing positive-NPV projects funded by shareholders when most of the gain would go to repay lenders.', '**Cash-out / claim dilution:** paying large dividends or issuing new senior debt that reduces existing lenders\' security.'] },
                { label: 'Mitigation and assessment', items: ['**Covenants:** limits on dividends, extra debt, asset sales and minimum interest cover. Effective, but restrict flexibility and need monitoring.', '**Security and seniority** over assets.', '**Higher interest rates:** lenders price in the risk, which shifts the agency cost back to shareholders.', '**Short-term debt and convertible bonds:** reduce the incentive to take extra risk.', '**Credit ratings and reputation:** firms that exploit lenders pay more next time.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['Both agency problems create costs the firm ultimately bears. Contracts (pay, covenants) and monitoring (boards, ratings) reduce them, but none removes them; this is one reason the trade-off theory counts agency costs of debt as a limit on borrowing.'],
            },
            { heading: 'Marking guide (20)', table: { columns: ['Element', 'Marks'], rows: [['(i) Problems with examples', '4'], ['(i) Remedies and assessment', '5'], ['(ii) Why the conflict arises', '2'], ['(ii) Risk shifting, under-investment, claim dilution', '4'], ['(ii) Covenants etc. and assessment', '4'], ['Conclusion', '1']] } },
          ],
          tips: ['Name the shareholder–bondholder problems precisely (risk shifting, debt overhang): that is what separates strong answers.'],
          formulas: ['mm-propositions'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'mockb-q2a',
          label: '2(a)',
          marks: 15,
          type: 'calc',
          topics: ['capital-budgeting'],
          prompt: t`A firm must choose between two mutually exclusive projects, each costing €100,000 (cost of capital 10%). Project A returns €60,000, €50,000 and €30,000 in years 1–3; Project B returns €10,000, €40,000 and €110,000. Calculate each project's payback period, NPV and IRR (the IRRs are about 21.5% and 19.9%). Which should the firm choose, and why do the methods disagree?`,
          working: [
            t`**Payback A:** −100,000 + 60,000 = −40,000; + 50,000 → paid back during year 2: $1 + 40/50 = 1.8$ years`,
            t`**Payback B:** −100,000 + 10,000 + 40,000 = −50,000; year 3: $2 + 50/110 = 2.45$ years`,
            t`**NPV A:** $-100{,}000 + \frac{60{,}000}{1.1} + \frac{50{,}000}{1.1^2} + \frac{30{,}000}{1.1^3} = -100{,}000 + 54{,}545 + 41{,}322 + 22{,}539 = €18{,}407$`,
            t`**NPV B:** $-100{,}000 + 9{,}091 + 33{,}058 + 82{,}645 = €24{,}793$`,
            t`**IRR:** A ≈ 21.5%; B ≈ 19.9% (given; check: NPV of each is zero at its rate)`,
            t`**Crossover rate** (where both NPVs are equal): the IRR of B − A = (0, −50,000, −10,000, +80,000) ≈ **16.9%**`,
          ],
          result: t`Choose **B**: higher NPV (€24,793 vs €18,407), even though A has the higher IRR and quicker payback.`,
          answer: [
            {
              heading: 'Why they disagree',
              list: ['**Timing:** A returns cash early, B late. Payback and IRR favour early cash; NPV values each euro at the actual 10% cost of capital.', 'Below the crossover rate of 16.9%, B has the higher NPV; above it, A does. At 10% B wins.', 'IRR implicitly assumes early cash is reinvested at the IRR (21.5%), which is unrealistic when the cost of capital is 10%.', 'Payback ignores B\'s large year-3 cash flow altogether.', '**NPV measures the value created**, so for mutually exclusive projects it is the right rule.'],
            },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['Payback for both', '2'], ['NPV for both (method + answer)', '5'], ['IRR interpretation', '2'], ['Choice with reason', '2'], ['Why they disagree (timing, reinvestment, crossover)', '4']] } },
          ],
          tips: ['Common mistake: choosing A because of its higher IRR. For mutually exclusive projects always follow NPV.'],
          formulas: ['npv', 'irr', 'payback'],
        },
        {
          id: 'mockb-q2b',
          label: '2(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-budgeting'],
          prompt: t`Given their weaknesses, why do so many firms still use payback and IRR? When might the profitability index be preferred to NPV?`,
          answer: [
            { heading: 'Why payback is still used', list: ['Simple and quick; easy to explain.', 'Liquidity: cash-constrained or small firms care how fast cash comes back.', 'Rough risk control: distant cash flows are less certain, and in fast-changing industries (tech) projects may become obsolete.', 'A screening tool before full NPV analysis.'] },
            { heading: 'Why IRR is still used', list: ['A percentage return is intuitive and easy to compare with the cost of capital and with other returns.', 'Shows the margin of safety (how much the cost of capital could rise).', 'Does not need a discount rate to compute, useful when the rate is uncertain.', 'Gives the same accept/reject answer as NPV for independent, conventional projects.', 'Survey evidence (Graham and Harvey, 2001): IRR and NPV are the most used, payback close behind.'] },
            { heading: 'When PI is preferred', list: [t`**Capital rationing:** with a fixed budget, rank projects by $PI = PV/\text{cost}$ to get the most NPV per euro; e.g. budget €1m, projects with PI 1.4, 1.3, 1.1: choose from the top until the money runs out.`, 'Not for mutually exclusive projects of different size, and not with constraints in several periods.'] },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['Reasons for payback', '5'], ['Reasons for IRR', '5'], ['PI under capital rationing, with limits', '5']] } },
          ],
          formulas: ['profitability-index', 'payback', 'irr'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'mockb-q3a',
          label: '3(a)',
          marks: 20,
          type: 'calc',
          topics: ['bond-yields', 'macro'],
          prompt: t`A 6-year corporate bond has a face value of €1,000 and pays an annual coupon of 5%. **(i)** Calculate its price if the market yield is 5%, 7% and 3%. (8 marks) **(ii)** Using your answers, explain the relationship between coupon, yield and price. (4 marks) **(iii)** Describe three factors that could cause this bond's yield to rise, with examples. (8 marks)`,
          working: [
            t`**Price formula:** $P = \sum_{t=1}^{6}\frac{50}{(1+y)^t} + \frac{1{,}000}{(1+y)^6}$`,
            t`**At 5%:** coupon = yield, so $P = €1{,}000$ (par)`,
            t`**At 7%:** $50 \times 4.7665 + 1{,}000/1.07^6 = 238.33 + 666.34 = €904.67$ (discount)`,
            t`**At 3%:** $50 \times 5.4172 + 1{,}000/1.03^6 = 270.86 + 837.48 = €1{,}108.34$ (premium)`,
          ],
          result: t`€1,000 at 5%; €904.67 at 7%; €1,108.34 at 3%.`,
          answer: [
            { heading: '(ii) The relationship', list: ['Price and yield move **inversely**: the fixed €50 coupons are worth less when investors require more.', 'Coupon = yield → par; coupon < yield → discount (the buyer also earns a capital gain); coupon > yield → premium.', 'A rise of 2 points cut the price by about 9.5%, a fall of 2 points raised it by about 10.8%: price changes are bigger for falls in yield (convexity), and longer bonds move more.'] },
            { heading: '(iii) Factors that raise the yield', list: ['**Higher central bank rates**, e.g. ECB increases in 2022–23.', '**Higher expected inflation:** investors demand compensation for lost purchasing power.', '**Higher credit risk / downgrade:** falling profits or more debt widen the credit spread; a downgrade to "junk" forces some funds to sell.', '**Lower liquidity** or a flight to safety in a crisis (e.g. March 2020).'] },
            { heading: 'Marking guide (20)', table: { columns: ['Element', 'Marks'], rows: [['Formula', '1'], ['Price at 5% (par, with reason)', '1'], ['Price at 7%', '3'], ['Price at 3%', '3'], ['(ii) Inverse relationship, discount/premium explained', '4'], ['(iii) Three factors with examples', '8']] } },
          ],
          tips: ['Annuity factor shortcut: $\\frac{1 - (1+y)^{-n}}{y}$. Write it out so the method is clear.'],
          formulas: ['bond-pricing', 'time-value'],
        },
        {
          id: 'mockb-q3b',
          label: '3(b)',
          marks: 10,
          type: 'essay',
          topics: ['equity-bonds', 'cost-of-capital'],
          prompt: t`The bond in (a) trades in the secondary market, so the issuing firm receives no money when it changes hands. Why should the firm care about its price?`,
          answer: [
            { list: ['**Cost of new debt:** the yield on existing bonds tells the firm what coupon it must offer on new bonds; it feeds into WACC and project decisions.', '**Market signal:** a falling price means investors see more risk (credit spread widening), possibly before a rating downgrade.', '**Equity link:** bond weakness often accompanies share price falls, affecting the cost of equity and takeover vulnerability.', '**Covenants, ratings and reputation** with lenders, customers and suppliers.', '**Refinancing and buyback decisions:** when bonds trade at a deep discount the firm may buy them back cheaply; when rates fall it may refinance.'] },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Primary vs secondary market point', '2'], ['Four reasons explained', '8']] } },
          ],
          formulas: ['wacc'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      parts: [
        {
          id: 'mockb-q4a',
          label: '4(a)',
          marks: 15,
          type: 'calc',
          topics: ['capital-structure', 'cost-of-capital'],
          prompt: t`Barrow plc is all-equity financed, with expected EBIT of €10 million a year forever. Its unlevered cost of capital is 10% and the tax rate is 25%. It has 7.5 million shares. Barrow plans to borrow €30 million at 5% (permanently) and use it to buy back shares. Assuming M&M with corporate taxes, calculate: (i) the value of the firm before and after; (ii) the share price after the announcement; (iii) the cost of equity and WACC after the change. Explain what happens without taxes.`,
          working: [
            t`**(i) Unlevered value:** $V_U = \dfrac{EBIT(1 - T)}{r_0} = \dfrac{10m \times 0.75}{0.10} = €75m$`,
            t`**Levered value:** $V_L = V_U + T_cD = 75 + 0.25 \times 30 = €82.5m$`,
            t`**(ii) Share price:** shareholders capture the tax shield when the plan is announced: $P = 82.5m / 7.5m = €11$ (from €10). The firm buys back $30m / 11 = 2.73m$ shares; 4.77m remain, worth $82.5 - 30 = €52.5m$ = €11 each.`,
            t`**(iii) Cost of equity (M&M II with tax):** $$r_E = r_0 + (r_0 - r_D)(1 - T_c)\frac{D}{E} = 10\% + (10\% - 5\%)(0.75)\frac{30}{52.5} = 12.14\%$$`,
            t`**WACC:** $\frac{52.5}{82.5}(12.14\%) + \frac{30}{82.5}(5\%)(0.75) = 7.73\% + 1.36\% = 9.09\%$; check: $r_0(1 - T_cD/V) = 10\%(1 - 0.25 \times 30/82.5) = 9.09\%$ ✓`,
          ],
          result: t`$V$ rises from **€75m to €82.5m**; share price **€10 → €11**; $r_E$ **12.14%**; WACC **9.09%** (from 10%).`,
          answer: [
            { heading: 'Without taxes', list: [t`M&M Proposition I: $V_L = V_U$, so the borrowing adds no value and the share price stays the same.`, 'Proposition II: the cost of equity rises with leverage exactly enough to keep WACC at 10%.', 'The value gain above comes **only** from the interest tax shield; in reality it would be reduced by expected costs of financial distress (trade-off theory).'] },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['V_U', '2'], ['V_L with tax shield', '2'], ['Share price and buyback', '3'], ['Cost of equity (M&M II with tax)', '3'], ['WACC with check', '3'], ['No-tax explanation', '2']] } },
          ],
          tips: ['Common mistake: forgetting the (1 − T) in M&M II with taxes.', 'The annual tax saving is 0.25 × 5% × €30m = €375,000; its present value is T × D = €7.5m.'],
          formulas: ['mm-propositions', 'wacc'],
        },
        {
          id: 'mockb-q4b',
          label: '4(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-structure'],
          prompt: t`Why do real firms not follow the M&M-with-taxes prediction of 100% debt? Discuss using the trade-off and pecking order theories, with examples.`,
          answer: [
            { heading: 'Trade-off theory', list: ['Each extra euro of debt adds tax savings but raises the probability and cost of **financial distress**: legal costs, lost customers (who fears a supplier going bust?), suppliers demanding cash, staff leaving, fire sales, under-investment.', 'Plus **agency costs of debt** (risk shifting, covenants).', 'Optimal debt where marginal benefit = marginal cost; firms with stable cash flows and tangible assets (utilities, property) borrow more; risky, intangible-asset firms (tech, pharma) less.', 'Evidence: CFOs report target debt ratios and care about credit ratings (Graham and Harvey, 2001).'] },
            { heading: 'Pecking order', list: ['Managers know more than investors, so firms use internal funds first, then debt, then equity; profitable firms simply don\'t **need** to borrow, so they end up with little debt (e.g. large tech firms with big cash piles).', 'Firms keep **financial slack** (spare borrowing capacity), so they never borrow to the limit.'] },
            { heading: 'Other reasons', list: ['Limited taxable profit (tax shields worthless if there are losses); personal taxes on interest; lenders\' limits; desire for flexibility.'] },
            { heading: 'Marking guide (15)', table: { columns: ['Element', 'Marks'], rows: [['M&M prediction stated', '2'], ['Trade-off: distress and agency costs, target ratio', '5'], ['Pecking order and slack', '4'], ['Examples and evidence', '4']] } },
          ],
          formulas: ['mm-propositions'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'mockb-q5a',
          label: '5(a)',
          marks: 20,
          type: 'calc',
          topics: ['dividends'],
          prompt: t`Dodder plc earns net income of €12 million, has 10 million shares trading at €30 and €30 million of surplus cash. It is choosing between a special dividend of €3 per share and a share buyback of €30 million. **(i)** Show the effect of each on earnings per share and on a shareholder's wealth, ignoring taxes and assuming the surplus cash earned nothing. (8 marks) **(ii)** Discuss the factors Dodder should consider in choosing, and how the market might interpret each. (12 marks)`,
          working: [
            t`**Before:** EPS $= 12/10 = €1.20$; equity value $= 10m \times 30 = €300m$ (including the €30m cash)`,
            t`**Special dividend:** pays €30m; firm worth €270m; price falls to $270/10 = €27$; EPS stays €1.20. A holder of 100 shares has $100 \times 27 + 300 = €3{,}000$.`,
            t`**Buyback at €30:** buys $30m/30 = 1m$ shares; 9m remain; firm worth €270m → price $270/9 = €30$; EPS $= 12/9 = €1.33$. A holder who keeps 100 shares has $100 \times 30 = €3{,}000$; one who sells gets €30 a share.`,
          ],
          result: t`Wealth is **€3,000 either way**; the buyback raises EPS from €1.20 to €1.33 but does not create value.`,
          answer: [
            {
              heading: '(ii) Factors and market interpretation',
              list: [
                { label: 'Taxes', items: ['Dividends taxed as income for all shareholders; with a buyback only sellers pay (capital gains tax, often lower and deferred).'] },
                { label: 'Signalling', items: ['A buyback signals managers think the shares are cheap; a **special** dividend signals a one-off surplus without committing to higher regular dividends.'] },
                { label: 'Flexibility and clientele', items: ['Both are one-off. Income investors may prefer the dividend; others prefer to choose whether to sell.'] },
                { label: 'Price paid', items: ['A buyback above fair value transfers wealth from remaining to selling shareholders.'] },
                { label: 'EPS and incentives', items: ['The EPS rise is mechanical (fewer shares), not better performance; markets may see it as EPS engineering if bonuses depend on EPS.'] },
                { label: 'Alternative uses and capital structure', items: ['Returning cash suggests few positive-NPV projects (possibly read as low growth), but also disciplines managers (free cash flow). A buyback increases leverage slightly.'] },
              ],
            },
            { heading: 'Marking guide (20)', table: { columns: ['Element', 'Marks'], rows: [['EPS before and after each option', '3'], ['Share prices and wealth comparison', '5'], ['Tax, signalling, flexibility, clientele, price paid, EPS (2 each, max 12)', '12']] } },
          ],
          tips: ['Common mistake: claiming a buyback creates value because EPS rises. Show wealth is unchanged in a perfect market.'],
          formulas: ['gordon-growth'],
        },
        {
          id: 'mockb-q5b',
          label: '5(b)',
          marks: 10,
          type: 'calc',
          topics: ['cost-of-capital'],
          prompt: t`The risk-free rate is 3% and the expected market return is 9%. Share X has a beta of 0.8 and analysts expect it to return 9%; share Y has a beta of 1.4 and is expected to return 10%. Using the CAPM, say whether each share is under- or overpriced, and explain the intuition.`,
          working: [
            t`**Required return X:** $3\% + 0.8(9\% - 3\%) = 7.8\%$; expected 9% > 7.8% → plots **above** the SML → **underpriced** (buy)`,
            t`**Required return Y:** $3\% + 1.4 \times 6\% = 11.4\%$; expected 10% < 11.4% → plots **below** the SML → **overpriced**`,
          ],
          result: t`X underpriced (alpha +1.2%); Y overpriced (alpha −1.4%).`,
          answer: [
            { heading: 'Intuition', list: ['Investors are paid only for **systematic** risk (beta); specific risk is diversified away for free.', 'X offers more than its systematic risk requires: buying pushes its price up until its expected return falls to 7.8%.', 'Y offers too little for its high beta: selling pushes its price down until its expected return rises to 11.4%.'] },
            { heading: 'Marking guide (10)', table: { columns: ['Element', 'Marks'], rows: [['Required returns (CAPM)', '4'], ['Under/overpriced conclusion', '2'], ['Intuition (systematic risk, SML, adjustment)', '4']] } },
          ],
          formulas: ['capm'],
        },
      ],
    },
  ],
};
