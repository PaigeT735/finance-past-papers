import { t } from '../../lib/tag.js';

/**
 * BUU22550 Introduction to Finance — May 2022 (Semester 2, 2021/22)
 * Model answers in bullet form. Essay answers give more points than you
 * need: pick the strongest and explain each one.
 */
export default {
  kind: 'paper',
  group: 'past',
  id: 'may-2022',
  title: 'May 2022',
  short: 'May 2022',
  accent: 'games',
  summary: t`BUU22550 Introduction to Finance, 5 May 2022. Two hours, closed book. Answer Question 1 and two of Questions 2–5.`,
  meta: [
    ['Module', 'BUU22550 Introduction to Finance'],
    ['Sitting', 'Semester 2 2021/22 · Thursday 5 May 2022, 09:30–11:30, RDS Main Hall'],
    ['Examiner', 'Dr Martha O’Hagan Luff'],
    ['Rubric', 'Answer 3 questions: Question 1 (compulsory) plus two of Questions 2–5. If you answer more, only the first two optional answers are graded.'],
    ['Marks', 'Question 1: 40 marks · Questions 2–5: 30 marks each · Total 100'],
    ['Calculator', 'Non-programmable calculators permitted'],
  ],
  timing: t`About **48 minutes on Question 1** and **36 minutes on each optional question**. The two numerical questions (3 and 5) are the safest optional picks: the method is fixed and the marks are reliable.`,
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      compulsory: true,
      parts: [
        {
          id: 'may22-q1a',
          label: '1(a)',
          marks: 15,
          type: 'essay',
          topics: ['firm-objective', 'governance'],
          prompt: t`What is meant by the agency problem in the context of a corporation? Using examples, explain what can be done to minimise the problem.`,
          approach: t`Three jobs: **define** the agency problem (principals vs agents, conflict of interest, information asymmetry), give **examples** of how it shows up, then explain **solutions**, saying how each one realigns managers. 15 marks means roughly 7–8 well-explained points.`,
          answer: [
            {
              heading: 'Definition',
              list: [
                t`In a corporation, **ownership is separated from control**.`,
                t`**Shareholders (principals)** own the firm; **managers (agents)** run it on their behalf.`,
                t`The **agency problem** is the conflict of interest that arises when managers act in their own interest rather than maximising shareholder (long-term) value.`,
                t`It persists because of **information asymmetry**: managers know more than shareholders, and their effort and decisions are hard to observe.`,
                t`**Agency costs** = the cost of monitoring managers + the cost of incentives (bonding) + the value lost when managers still act in their own interest (residual loss).`,
              ],
            },
            {
              heading: 'How the problem shows up (examples)',
              list: [
                { label: 'Excessive pay and perks', items: ['Large salaries, bonuses, private jets or lavish offices paid for by shareholders.'] },
                { label: 'Empire building', items: ['Pay and prestige grow with firm size, so managers may make value-destroying acquisitions just to grow the firm.', 'Jensen\'s **free cash flow** problem: managers with spare cash tend to spend it rather than return it to shareholders.'] },
                { label: 'Short-termism', items: ['Bonuses tied to annual profit or the current share price encourage cutting R&D, maintenance or training to hit targets.'] },
                { label: 'Excessive risk aversion', items: ['A manager\'s job and wealth depend on one firm, so they may reject risky but positive-NPV projects that diversified shareholders would want.'] },
                { label: 'Entrenchment', items: ['Managers may resist takeovers (poison pills, golden parachutes) that would benefit shareholders but cost them their jobs.'] },
                { label: 'Shareholders vs bondholders', items: ['A second agency problem: shareholders (via managers) may take on very risky projects or pay out large dividends at the expense of lenders. Lenders respond with covenants.'] },
              ],
            },
            {
              heading: 'What can be done to minimise it',
              list: [
                { label: '1. Performance-related pay', items: ['Link bonuses to long-term measures: total shareholder return, economic profit, ESG targets.', 'Pay in shares or options that vest over 3–5 years; add clawback clauses.'] },
                { label: '2. Managerial share ownership', items: ['Require executives to hold shares, so they gain and lose alongside shareholders.'] },
                { label: '3. An independent board of directors', items: ['Non-executive directors monitor management, approve strategy and set pay.', 'Separate the CEO and chair roles; audit and remuneration committees.'] },
                { label: '4. Shareholder voice', items: ['Vote at AGMs (including say-on-pay), replace directors.', 'Large institutional investors (pension funds) engage with management.'] },
                { label: '5. Transparent reporting and audit', items: ['Audited accounts and disclosure reduce information asymmetry.'] },
                { label: '6. The market for corporate control', items: ['A badly run, undervalued firm can be taken over and its managers replaced: the threat disciplines managers.'] },
                { label: '7. Debt and dividends', items: ['Interest and dividend payments commit cash, leaving less free cash flow for managers to waste.'] },
                { label: '8. Regulation and governance codes', items: ['Company law, directors\' duties and corporate governance codes set minimum standards.'] },
              ],
            },
            {
              heading: 'Evaluation (for top marks)',
              list: [
                'Each fix has costs and side effects: share-based pay can encourage manipulating the share price around vesting dates; boards can be captured by a powerful CEO; monitoring is expensive.',
                'The agency problem can be **reduced but not eliminated**. The best approach combines incentives, monitoring and transparency.',
              ],
            },
          ],
          tips: ['Use the words principal, agent, information asymmetry and agency costs: they are the marking keywords.', 'For each solution, say *how* it aligns interests, not just what it is.'],
        },
        {
          id: 'may22-q1b',
          label: '1(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-budgeting'],
          prompt: t`Apart from NPV, name 3 other methods of capital budgeting, explain why each is used and the drawbacks of each.`,
          approach: t`Pick three of **payback, IRR, profitability index, ARR** (discounted payback also counts). For each: what it is (with the formula), **why** firms use it, and its **drawbacks**. A short numerical example for each shows understanding.`,
          answer: [
            {
              heading: '1. Payback period',
              formula: t`\text{Payback} = \text{years until cumulative cash flows} \ge C_0 \qquad \Big(\text{even flows: } \frac{C_0}{\text{annual cash flow}}\Big)`,
              list: [
                { label: 'Example', items: [t`Cost €100,000, then €25,000 a year: payback $= 100{,}000 / 25{,}000 = 4$ years. Accept if below the firm's cut-off (e.g. 3 years → reject).`] },
                { label: 'Why it is used', items: ['Very simple and quick to explain.', 'Measures **liquidity**: how fast cash comes back, useful for cash-constrained firms.', 'A rough proxy for **risk**: distant cash flows are less certain.'] },
                { label: 'Drawbacks', items: ['Ignores the **time value of money** (discounted payback fixes this).', 'Ignores **all cash flows after the cut-off**, so it is biased against long-term projects.', 'The cut-off date is arbitrary.', 'Does not measure value created.'] },
              ],
            },
            {
              heading: '2. Internal rate of return (IRR)',
              formula: t`0 = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1 + IRR)^t}\qquad \text{accept if } IRR > r`,
              list: [
                { label: 'Example', items: [t`Cost €1,000, then €400 a year for 3 years: IRR ≈ 9.7%. With a 10% cost of capital, reject.`] },
                { label: 'Why it is used', items: ['Gives a **percentage return**, which managers find intuitive and easy to compare with the cost of capital.', 'Uses all cash flows and the time value of money.', 'Agrees with NPV for single, conventional projects.'] },
                { label: 'Drawbacks', items: [t`**Multiple IRRs** (or none) when cash flows change sign more than once.`, t`Can **rank mutually exclusive projects wrongly** because it ignores scale (a 50% return on €10 vs 20% on €1m) and timing.`, 'Assumes cash flows are reinvested at the IRR.', 'Cannot handle a cost of capital that changes over time.'] },
              ],
            },
            {
              heading: '3. Profitability index (PI)',
              formula: t`PI = \frac{PV(\text{future cash flows})}{C_0}\qquad \text{accept if } PI > 1`,
              list: [
                { label: 'Example', items: [t`PV of inflows €1,200,000 on a €1,000,000 outlay: $PI = 1.2$, i.e. €1.20 of value per €1 invested.`] },
                { label: 'Why it is used', items: ['Under **capital rationing** (a fixed budget) it ranks projects by value per euro invested.', 'Consistent with NPV for accept/reject decisions.'] },
                { label: 'Drawbacks', items: ['Can mis-rank mutually exclusive projects of different sizes (a ratio ignores scale).', 'Breaks down when the constraint is not just money today (multi-period or non-cash constraints).'] },
              ],
            },
            {
              heading: 'Alternative: accounting rate of return (ARR)',
              formula: t`ARR = \frac{\text{Average accounting profit}}{\text{Average investment}} \times 100`,
              list: [
                { label: 'Why it is used', items: ['Uses accounting figures already reported; ties in with how managers are judged (return on capital).'] },
                { label: 'Drawbacks', items: ['Uses **profit, not cash flow**, so it depends on depreciation policy.', 'Ignores the time value of money.', 'The target ARR is arbitrary.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['NPV remains the best rule: it measures the euro value created, uses all cash flows and the risk-adjusted cost of capital, and NPVs can be added across projects. The other methods are useful **supplements**: payback for liquidity, IRR for communicating returns, PI under rationing.'],
            },
          ],
          tips: ['Three methods are required: a fourth only earns marks if the first three are complete.', 'Always pair "why used" with "drawbacks" for each method: that is how the marks are split.'],
          formulas: ['payback', 'irr', 'profitability-index', 'arr', 'npv'],
        },
        {
          id: 'may22-q1c',
          label: '1(c)',
          marks: 10,
          type: 'essay',
          topics: ['equity-bonds', 'capital-structure'],
          prompt: t`What are the pros and cons of investing in debt and equity from the investor perspective, and of issuing debt and equity from the company's perspective?`,
          approach: 'Four boxes: investor/debt, investor/equity, company/debt, company/equity. Each needs pros and cons. Notice the mirror image: what is safe for the investor is a burden for the company, and vice versa.',
          answer: [
            {
              heading: 'Summary table',
              table: {
                columns: ['', 'Debt (bonds, loans)', 'Equity (shares)'],
                rows: [
                  ['Investor: pros', 'Fixed, predictable interest; repaid at maturity; ranks **ahead** of shareholders in liquidation; lower risk; covenants protect lenders.', 'Unlimited upside (capital gains); dividends; voting rights and control; historically higher long-run returns.'],
                  ['Investor: cons', 'Return capped at the coupon; default risk; interest-rate risk (prices fall when rates rise); inflation erodes fixed payments.', 'Dividends not guaranteed; ranks **last** in liquidation; more volatile; can lose the whole investment.'],
                  ['Company: pros', 'Cheaper (lower required return); interest is **tax-deductible** (tax shield); no dilution of ownership; discipline on managers.', 'No compulsory payments: dividends can be cut in bad years; never repaid (permanent capital); lowers financial risk; suits risky, high-growth firms.'],
                  ['Company: cons', 'Interest and repayment are **compulsory**; raises financial risk and the cost of equity; risk of distress and bankruptcy; covenants restrict the firm.', 'More expensive (shareholders demand more for more risk); dividends are not tax-deductible; **dilutes** existing owners\' control and EPS; issue costs; may signal shares are overvalued.'],
                ],
              },
            },
            {
              heading: 'The key link',
              list: [
                'Debt is **safer for investors**, so they accept a lower return; that makes it **cheaper for the company**, but **riskier** for the company because payments are fixed.',
                'Equity is **riskier for investors**, so they demand a higher return; that makes it **more expensive** for the company, but **safer** for it because there are no fixed obligations.',
                'This trade-off is exactly what capital structure theory (Question 2a) is about.',
              ],
            },
          ],
          tips: ['A table like this is quick to write and makes sure you cover all four perspectives.'],
          formulas: ['mm-propositions'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'may22-q2a',
          label: '2(a)',
          marks: 15,
          type: 'essay',
          topics: ['capital-structure'],
          prompt: t`Describe the Modigliani and Miller theory, the Trade-off Theory and the Pecking Order Theory of capital structure, and explain how they are expected to influence a firm's choice of funding.`,
          approach: t`For each theory: the **idea**, the **key assumptions or mechanism**, and the **funding implication** (how much debt, and in what order). For M&M, cover both propositions **with and without taxes**: they are the core of the answer.`,
          answer: [
            {
              heading: 'Capital structure',
              paras: [t`Capital structure is the mix of **debt and equity** a firm uses to finance its assets. The question is whether that mix changes the firm's value and its cost of capital.`],
            },
            {
              heading: '1. Modigliani–Miller (1958, with taxes 1963)',
              list: [
                { label: 'Assumptions (perfect capital markets)', items: ['No taxes (in the 1958 version), no transaction costs and no bankruptcy costs.', 'Symmetric information: managers and investors know the same.', 'Investors and firms can borrow and lend at the same rate.', 'Investment decisions are fixed: only the financing mix changes.'] },
                { label: 'The intuition: "the size of the pie"', items: ['The firm\'s value comes from its assets and their cash flows. Debt and equity just slice that pie differently, so slicing cannot make the pie bigger.', 'If leverage did change value, investors could copy it themselves (**homemade leverage**) by borrowing personally, and arbitrage would remove the difference.'] },
              ],
            },
            {
              heading: 'Proposition I: firm value',
              list: [
                t`**Without taxes (1958):** a levered firm is worth exactly the same as an unlevered firm: $V_L = V_U$. WACC stays **constant** whatever the leverage.`,
                t`**With corporate taxes (1963):** interest is tax-deductible, so debt saves tax every year. The levered firm is worth more by the present value of the **interest tax shield**: $V_L = V_U + t_c D$. WACC **falls** as debt rises.`,
              ],
              formula: t`V_L = V_U \;\;(\text{no tax})\qquad\qquad V_L = V_U + t_c D \;\;(\text{with tax})`,
            },
            {
              heading: 'Proposition II: cost of equity',
              list: [
                t`**Without taxes:** debt makes the equity riskier (financial risk), so shareholders demand more. The cost of equity rises **linearly** with the debt-to-equity ratio. The cheaper debt is exactly offset by the dearer equity, so WACC is unchanged.`,
                t`**With taxes:** the cost of equity still rises with leverage, but **more slowly**, by the factor $(1 - t_c)$, because the tax shield cushions shareholders.`,
              ],
              formula: t`r_E = r_0 + (r_0 - r_D)\frac{D}{E}\;\;(\text{no tax})\qquad r_E = r_0 + (r_0 - r_D)(1 - t_c)\frac{D}{E}\;\;(\text{with tax})`,
            },
            {
              heading: 'Worked illustration',
              paras: [t`Unlevered firm worth $V_U = €100m$ with $r_0 = 10\%$. It borrows $D = €40m$ at $r_D = 5\%$; $t_c = 25\%$.`],
              table: {
                columns: ['', 'No taxes', 'With taxes'],
                rows: [
                  ['Firm value', t`$V_L = €100m$`, t`$V_L = 100 + 0.25(40) = €110m$`],
                  ['Equity value', t`$E = 100 - 40 = €60m$`, t`$E = 110 - 40 = €70m$`],
                  ['Cost of equity', t`$10\% + 5\%\cdot\tfrac{40}{60} = 13.33\%$`, t`$10\% + 5\%(0.75)\tfrac{40}{70} = 12.14\%$`],
                  ['WACC', t`$0.6(13.33\%) + 0.4(5\%) = 10\%$`, t`$\tfrac{70}{110}(12.14\%) + \tfrac{40}{110}(5\%)(0.75) = 9.09\%$`],
                ],
              },
            },
            {
              heading: 'Summary comparison of M&M',
              table: {
                columns: ['', 'Without taxes (1958)', 'With corporate taxes (1963)'],
                rows: [
                  ['Proposition I: firm value', t`$V_L = V_U$: capital structure is **irrelevant**`, t`$V_L = V_U + t_c D$: debt **adds** value via the tax shield`],
                  ['Proposition II: cost of equity', t`$r_E = r_0 + (r_0 - r_D)\frac{D}{E}$`, t`$r_E = r_0 + (r_0 - r_D)(1 - t_c)\frac{D}{E}$ (rises more slowly)`],
                  ['WACC as debt rises', t`Constant at $r_0$`, t`Falls: $WACC = r_0\big(1 - t_c\frac{D}{V}\big)$`],
                  ['Optimal capital structure', 'None: any mix is as good as any other', 'In theory, (almost) 100% debt'],
                  ['Funding implication', 'Choose funding for other reasons: the mix does not matter', 'Use debt to capture the tax shield; limited in practice by the costs below'],
                ],
              },
            },
            {
              heading: '2. Trade-off theory',
              list: [
                t`Adds the **costs of debt** that M&M assume away:`,
                { label: 'Benefit of debt', items: ['Interest tax shield (and discipline on managers: less free cash flow to waste).'] },
                { label: 'Costs of debt', items: ['**Financial distress costs**: direct (legal and administrative bankruptcy costs) and indirect (lost customers and suppliers, staff leaving, fire-sale of assets, managers cutting good investment).', '**Agency costs of debt**: conflicts between shareholders and bondholders (risk shifting, under-investment).'] },
                { label: 'Optimal structure', items: [t`$V_L = V_U + PV(\text{tax shield}) - PV(\text{distress costs})$.`, 'Borrow until the **marginal tax benefit equals the marginal expected cost of distress**: firm value is hump-shaped in leverage, and WACC is U-shaped.'] },
                { label: 'Funding implication', items: ['Each firm has a **target debt ratio**.', 'Profitable firms with **stable cash flows and tangible assets** (utilities, real estate) should borrow more.', 'Risky firms with **intangible assets** (tech, biotech) should borrow less: distress would destroy much of their value.'] },
              ],
            },
            {
              heading: '3. Pecking order theory (Myers and Majluf, 1984)',
              list: [
                t`Based on **asymmetric information**: managers know more about the firm's true value than outside investors.`,
                { label: 'The order of funding', items: ['**1. Internal funds** (retained earnings): no information problem, no issue costs.', '**2. Debt**: fixed claims are less sensitive to what managers know.', '**3. New equity, as a last resort**: investors suspect managers issue shares when they think the shares are **overvalued**, so the price usually falls on announcement.'] },
                { label: 'Funding implication', items: ['There is **no target debt ratio**: leverage is the result of past funding needs.', 'Highly **profitable** firms end up with **little debt** (they fund themselves internally), the opposite of the trade-off prediction.', 'Firms keep **financial slack** (cash, spare borrowing capacity) so they never have to issue equity at a bad price.'] },
              ],
            },
            {
              heading: 'Comparison',
              table: {
                columns: ['Theory', 'Main argument', 'Effect on funding choice'],
                rows: [
                  ['M&M (no tax)', 'Value depends on assets, not financing', 'Mix is irrelevant'],
                  ['M&M (with tax)', 'Interest tax shield adds value', 'Use as much debt as possible'],
                  ['Trade-off', 'Tax shield vs distress costs', 'Target debt ratio; safer, profitable firms borrow more'],
                  ['Pecking order', 'Asymmetric information makes outside equity costly', 'Retained earnings → debt → equity; profitable firms borrow less'],
                ],
              },
            },
            {
              heading: 'Conclusion',
              paras: ['M&M is a **benchmark**: it shows that capital structure only matters because of real-world frictions (taxes, distress costs, information asymmetry). The trade-off theory explains why firms target moderate leverage; the pecking order explains the order in which they raise funds. In practice firms use elements of both.'],
            },
          ],
          tips: [
            'The M&M formulas with and without taxes are where the easy marks are: write both propositions.',
            'Finish with the comparison table and one line on how each theory changes the funding decision: that is the second half of the question.',
          ],
          formulas: ['mm-propositions', 'wacc'],
        },
        {
          id: 'may22-q2b',
          label: '2(b)',
          marks: 15,
          type: 'essay',
          topics: ['working-capital'],
          prompt: t`Describe what is meant by working capital and describe the potential conflicts for a company when deciding how much to hold. Give examples.`,
          approach: t`Define working capital (with the formula and its components), explain the **cash conversion cycle**, then the central conflict, **liquidity vs profitability**, applied to each component (cash, inventory, receivables, payables), each with an example.`,
          answer: [
            {
              heading: 'Definition',
              formula: t`NWC = \text{Current assets} - \text{Current liabilities}`,
              list: [
                '**Current assets:** cash, inventory (raw materials, work in progress, finished goods), accounts receivable (customers who owe the firm).',
                '**Current liabilities:** accounts payable (money owed to suppliers), short-term loans and overdrafts, accrued expenses.',
                'Working capital is the money tied up in day-to-day operations. It must be financed, so it has a cost.',
              ],
            },
            {
              heading: 'The cash conversion cycle',
              formula: t`CCC = \text{Inventory days} + \text{Receivable days} - \text{Payable days}`,
              list: ['How long cash is tied up between paying suppliers and collecting from customers.', 'A shorter cycle means less working capital to finance.', 'Example: inventory 60 days + receivables 45 days − payables 30 days = 75 days.'],
            },
            {
              heading: 'The central conflict: liquidity vs profitability',
              list: [
                '**Too little** working capital: risk of running out of cash, missing payments, stock-outs and, in the worst case, insolvency, even for a profitable firm.',
                '**Too much** working capital: money sits idle earning little, which raises financing costs and lowers return on capital.',
                'The right level balances the **cost of holding** working capital against the **cost of running short**.',
              ],
            },
            {
              heading: 'Conflicts for each component',
              list: [
                { label: 'Cash', items: ['More cash: safety buffer, can seize opportunities, avoids expensive emergency borrowing.', 'But: low return, and idle cash invites agency problems (managers may waste it).', 'Example: a firm holding €1m of idle cash is safe but could have invested it or returned it to shareholders.'] },
                { label: 'Inventory', items: ['More stock: no lost sales from stock-outs, smooth production, bulk discounts.', 'But: storage, insurance and financing costs, and the risk of obsolescence or spoilage.', 'Example: an electronics retailer holding too many old smartphones must discount them heavily when new models launch. Just-in-time systems (as in car manufacturing) minimise inventory but are vulnerable to supply disruption, as the 2021 chip shortage showed.'] },
                { label: 'Receivables (credit policy)', items: ['Generous credit terms attract customers and raise sales.', 'But: cash arrives later, more must be financed, and the risk of bad debts rises.', 'Example: offering 90-day terms may win a large retail client but strain cash flow if the client pays late.'] },
                { label: 'Payables', items: ['Paying suppliers later keeps cash in the firm (a free source of funding).', 'But: lost early-payment discounts, damaged supplier relationships and possibly worse terms later.', 'Example: missing a "2/10 net 30" discount (2% off if paid in 10 days) is equivalent to borrowing at an annual rate of about 37%.'] },
                { label: 'Short-term vs long-term financing', items: ['Short-term borrowing is usually cheaper and flexible.', 'But it must be rolled over: refinancing risk if credit dries up (as in 2008).'] },
              ],
            },
            {
              heading: 'Policies',
              list: ['**Conservative (relaxed) policy:** high cash and inventory, generous credit; safe but less profitable.', '**Aggressive (restrictive) policy:** low cash and inventory, tight credit; more profitable but riskier.', 'Some firms run a **negative** cash conversion cycle, collecting from customers before paying suppliers (Amazon and Dell are classic examples), which turns working capital into a source of funding.'],
            },
            {
              heading: 'Conclusion',
              paras: ['The amount of working capital is a trade-off between **liquidity (safety)** and **profitability (return)**. The right level depends on the industry, the predictability of cash flows and how easily the firm can borrow at short notice.'],
            },
          ],
          tips: ['Name the trade-off "liquidity vs profitability" explicitly: it is what the examiner is looking for.', 'One concrete example per component earns the "give examples" marks.'],
          formulas: ['working-capital'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'may22-q3a',
          label: '3(a)',
          marks: 5,
          type: 'calc',
          topics: ['cost-of-capital'],
          prompt: t`An Irish firm has issued a 10-year €50 million bond which is trading at 96.45. The bond's coupon is 2.90% and the yield of the bond is 3.3%. The yield on risk-free government bonds is 1%. The firm has 1,250,000 shares outstanding which are trading at €85 per share. The company's beta is 0.85 and the expected return of the ISEQ Index (the market return) is 12%. The firm is expected to pay a dividend of €6 per share and its growth rate is estimated to be 4%. The corporate tax rate for the firm is 15%. **(a)** What is the firm's cost of debt and cost of equity?`,
          approach: t`Cost of debt = the **yield** (3.3%), not the coupon. Cost of equity: the question gives the inputs for **both** CAPM and the dividend growth model, so compute both, then say which you use (or average them). "Expected to pay" means €6 is already $D_1$: do not grow it.`,
          given: [
            ['Debt', '€50m face, 10 years, trading at 96.45'],
            [t`Coupon / yield`, '2.90% / 3.3%'],
            [t`Risk-free $r_f$ / market $r_m$`, '1% / 12%'],
            ['Shares', '1,250,000 at €85'],
            [t`Beta $\beta$`, '0.85'],
            [t`$D_1$ (expected), growth $g$`, '€6, 4%'],
            [t`Tax rate $T_c$`, '15%'],
          ],
          working: [
            t`**Cost of debt (pre-tax):** $r_D = 3.3\%$, the yield to maturity. The 2.9% coupon is not the market's required return.`,
            t`**After-tax cost of debt:** $r_D(1 - T_c) = 3.3\% \times (1 - 0.15) = 2.805\%$`,
            t`**Cost of equity, CAPM:** $$r_E = r_f + \beta(r_m - r_f) = 1\% + 0.85(12\% - 1\%) = 1\% + 9.35\% = 10.35\%$$`,
            t`**Cost of equity, dividend growth model:** $D_1 = €6$ is already next year's dividend, so $$r_E = \frac{D_1}{P_0} + g = \frac{6}{85} + 0.04 = 7.06\% + 4\% = 11.06\%$$`,
            t`**Average of the two (if you want one figure):** $\dfrac{10.35\% + 11.06\%}{2} = 10.70\%$`,
          ],
          result: t`Cost of debt **3.3%** (2.805% after tax) · cost of equity **10.35%** (CAPM) or **11.06%** (DGM), average 10.70%`,
          answer: [
            {
              heading: 'Sense checks',
              list: [
                t`The bond trades **below par** (96.45) because its coupon (2.9%) is below the market yield (3.3%). Pricing a 10-year 2.9% annual-coupon bond at 3.3% gives about 96.6, consistent with the quote.`,
                t`The cost of equity (≈ 10–11%) is well above the cost of debt (3.3%): shareholders bear more risk.`,
                t`Beta < 1, so the firm's equity is less risky than the market: its cost of equity (10.35%) is below the market return (12%).`,
              ],
            },
          ],
          tips: ['"Expected to pay" = D₁; "recently paid" = D₀ (multiply by 1 + g). Read the wording carefully.', 'When two methods are possible and the question does not say which, show both and state the one you use in WACC.'],
          formulas: ['capm', 'dividend-growth-cost-of-equity', 'bond-pricing'],
        },
        {
          id: 'may22-q3b',
          label: '3(b)',
          marks: 10,
          type: 'calc',
          topics: ['cost-of-capital'],
          prompt: t`**(b)** What is the firm's weighted average cost of capital?`,
          approach: t`Weights use **market values**: equity = shares × price; debt = face value × quoted price. Then $WACC = \frac{E}{V}r_E + \frac{D}{V}r_D(1 - T_c)$.`,
          working: [
            t`**Market value of equity:** $E = 1{,}250{,}000 \times €85 = €106{,}250{,}000$`,
            t`**Market value of debt:** trading at 96.45 means 96.45% of face: $D = €50{,}000{,}000 \times 0.9645 = €48{,}225{,}000$`,
            t`**Total value:** $V = 106.25 + 48.225 = €154.475m$`,
            t`**Weights:** $\dfrac{E}{V} = \dfrac{106.25}{154.475} = 0.6878$; $\;\dfrac{D}{V} = \dfrac{48.225}{154.475} = 0.3122$ (check: they sum to 1)`,
            t`**WACC (CAPM cost of equity):** $$0.6878(10.35\%) + 0.3122(3.3\%)(0.85) = 7.119\% + 0.876\% = 7.99\%$$`,
            t`**WACC with the DGM cost of equity:** $0.6878(11.06\%) + 0.876\% = 8.48\%$`,
            t`**WACC with the average cost of equity:** $0.6878(10.70\%) + 0.876\% = 8.24\%$`,
          ],
          result: t`**WACC ≈ 7.99%** using CAPM (8.48% with the DGM; 8.24% with the average)`,
          answer: [
            {
              heading: 'Which figure to give',
              list: [
                'CAPM is the standard, market-risk-based estimate, so 7.99% is a good headline answer.',
                'The DGM relies on the 4% growth estimate holding forever, which is less reliable.',
                'Full marks come from showing the method clearly, stating which cost of equity you use, and getting the weights from **market values**.',
              ],
            },
          ],
          tips: ['The commonest error is using the face value of debt (€50m) instead of the market value (€48.225m).', 'Apply the tax adjustment to debt only.'],
          formulas: ['wacc', 'capm'],
        },
        {
          id: 'may22-q3c',
          label: '3(c)',
          marks: 15,
          type: 'essay',
          topics: ['cost-of-capital', 'capital-budgeting'],
          prompt: t`**(c)** Describe the reasons why investors and firms calculate a firm's weighted average cost of capital.`,
          approach: 'Define WACC as the minimum return the firm must earn to satisfy all its capital providers, then give reasons from **both** perspectives (firm and investor). Add limitations for top marks.',
          answer: [
            {
              heading: 'What WACC is',
              list: [
                'The average return required by **all** the firm\'s providers of capital (shareholders and lenders), weighted by the market value of each.',
                'It is the firm\'s **opportunity cost of capital**: the return investors could earn elsewhere on investments of the same risk.',
                'Debt enters after tax because interest is tax-deductible.',
              ],
            },
            {
              heading: 'Why firms calculate it',
              list: [
                { label: '1. Discount rate for investment appraisal', items: ['WACC is the discount rate (hurdle rate) in NPV for projects of the **same risk as the firm**.', 'A project creates value only if it earns more than WACC.'] },
                { label: '2. Minimum required return / performance measurement', items: ['Divisions must earn at least WACC on the capital they use.', 'Economic value added: EVA = NOPAT − WACC × capital employed.'] },
                { label: '3. Capital structure decisions', items: ['Firms can see how changing the debt/equity mix affects the overall cost of funds and look for the mix that minimises WACC (trade-off theory).'] },
                { label: '4. Valuation, mergers and acquisitions', items: ['Discounting future free cash flows at WACC gives the value of the whole firm (DCF valuation), used to price acquisitions and disposals.'] },
                { label: '5. Regulation', items: ['Regulators of utilities (energy, water, telecoms) use WACC to set the "fair" return companies may earn.'] },
              ],
            },
            {
              heading: 'Why investors calculate it',
              list: [
                { label: '1. Valuing the firm', items: ['Analysts discount forecast free cash flows at WACC to estimate the firm\'s value and decide whether its shares are under- or overvalued.'] },
                { label: '2. Judging value creation', items: ['If return on invested capital (ROIC) > WACC, management is creating value; if below, it is destroying value.'] },
                { label: '3. Assessing risk', items: ['A rising WACC signals that markets see the firm as riskier (higher beta, higher credit spreads, more leverage).'] },
                { label: '4. Comparing firms', items: ['A common benchmark to compare firms\' funding costs and investment opportunities.'] },
              ],
            },
            {
              heading: 'Limitations (for top marks)',
              list: [
                'WACC is only right for projects with the **same risk** as the firm\'s existing business: a riskier project needs a higher, project-specific rate.',
                'Its inputs are **estimates**: beta, the market risk premium and growth rates are uncertain (as Q3(a) shows, CAPM and the DGM give different answers).',
                'It assumes the capital structure stays constant.',
              ],
            },
          ],
          tips: ['Cover both perspectives: the question explicitly says "investors and firms".'],
          formulas: ['wacc', 'npv'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      parts: [
        {
          id: 'may22-q4',
          label: '4',
          marks: 30,
          type: 'essay',
          topics: ['dividends'],
          prompt: t`In 1961 Modigliani and Miller claimed that dividends should be paid out as residual only after all attractive investment projects have been accepted, and that the timing of dividend payments is irrelevant to share value. Describe reasons why a firm's dividend policy may, in fact, matter greatly to investors. Use examples to illustrate your answers.`,
          approach: t`Start by stating M&M's argument and **its assumptions**. Each reason dividend policy matters comes from relaxing one assumption (taxes, information, transaction costs, agency, behaviour). For 30 marks give 6–7 reasons, each with an example.`,
          answer: [
            {
              heading: 'M&M\'s dividend irrelevance (1961)',
              list: [
                'Firm value depends only on its **investment policy** (the cash flows its assets generate), not on how those cash flows are split between dividends and retained earnings.',
                '**Homemade dividends:** an investor who wants cash can sell some shares; one who does not can reinvest the dividend. So investors are indifferent.',
                'A firm should pay out only what is left after funding all positive-NPV projects (**residual dividend policy**).',
                { label: 'This relies on perfect markets', items: ['No taxes.', 'No transaction or issue costs.', 'Symmetric information.', 'No agency costs.', 'Rational investors.'] },
                'In the real world, these assumptions fail. Each failure is a reason dividend policy matters.',
              ],
            },
            {
              heading: '1. Signalling (information content of dividends)',
              list: [
                'Managers know more than investors (asymmetric information). Dividends are hard to fake because they require **real cash**.',
                'A dividend **increase** signals confidence that future earnings can sustain it; a **cut** signals trouble.',
                'Share prices react: in April 2020 Shell cut its dividend by about two-thirds, its first cut since the Second World War, and the share price fell.',
                'Firms with plentiful cash and limited growth opportunities may start paying a dividend to signal maturity (e.g. Apple began paying a dividend in 2012).',
              ],
            },
            {
              heading: '2. Dividend smoothing (Lintner, 1956)',
              list: [
                'Lintner found managers set a **target payout** and adjust dividends slowly towards it, avoiding cuts.',
                'Because investors expect stable dividends, any change carries information, which reinforces the signalling effect.',
                'Investors relying on income (pension funds, retirees) value this stability.',
              ],
            },
            {
              heading: '3. Clientele effect',
              list: [
                'Different investors want different payouts: retirees and pension funds want steady income; younger or growth investors prefer reinvestment.',
                'Firms attract a **clientele** that suits their policy. Changing the policy forces investors to sell and rebuy, with transaction costs.',
                'Example: utilities and tobacco companies attract income investors; many tech firms that pay little or no dividend attract growth investors.',
              ],
            },
            {
              heading: '4. Taxes',
              list: [
                'Dividends and capital gains are often taxed differently.',
                'In many countries (including Ireland) dividends are taxed as income at the investor\'s marginal rate, while capital gains are taxed only when shares are sold, so the tax can be **deferred**.',
                'High-tax investors may therefore prefer low payouts (or share buybacks); tax-exempt investors such as pension funds are indifferent or may prefer dividends.',
              ],
            },
            {
              heading: '5. Bird-in-the-hand (Gordon and Lintner)',
              list: [
                'A euro of dividend today is **certain**; a capital gain later is not.',
                'Risk-averse investors may value dividends more and apply a lower discount rate to firms with high payouts.',
                'M&M called this a fallacy: the risk comes from the firm\'s assets, not from how cash is paid out. But behavioural evidence suggests many investors do think this way.',
              ],
            },
            {
              heading: '6. Agency costs and free cash flow',
              list: [
                'Paying out cash stops managers wasting it on empire building or perks (Jensen\'s free cash flow problem).',
                'If the firm needs money later, it must raise it from the market, which brings fresh scrutiny of its plans.',
                'Investors may value firms with a credible payout policy more highly, especially mature firms with few growth opportunities.',
              ],
            },
            {
              heading: '7. Transaction and issue costs',
              list: [
                'Selling shares to create "homemade dividends" costs brokerage fees and time; small investors may not want to sell at all.',
                'On the firm\'s side, paying a dividend and then issuing new shares to fund projects costs issue fees: retaining earnings is cheaper (linked to the **pecking order**).',
              ],
            },
            {
              heading: '8. Behavioural reasons',
              list: [
                'Many investors use **mental accounting**: they treat dividends as "income" they can spend but feel they should not "eat into capital" by selling shares.',
                'This makes them prefer dividends even when selling shares would be equivalent.',
              ],
            },
            {
              heading: 'Share buybacks: the alternative',
              list: [
                'Buybacks also return cash but are more flexible (no expectation of repetition) and can be more tax-efficient.',
                'Investors read them as a signal that managers think the shares are undervalued.',
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['M&M\'s irrelevance result holds only in perfect markets. Because of signalling, taxes, clienteles, agency costs, transaction costs and investor behaviour, dividend policy **does** affect investors and share prices. Firms should set a policy that suits their investment opportunities and shareholder base, and then keep it **stable and predictable**.'],
            },
          ],
          tips: [
            'Structure: M&M argument → its assumptions → one heading per broken assumption, each with an example.',
            'Thirty marks rewards depth: six well-explained reasons with examples beat ten one-liners.',
          ],
          formulas: ['gordon-growth', 'mm-propositions'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'may22-q5a',
          label: '5(a)',
          marks: 15,
          type: 'calc',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`A firm is considering investing in a piece of machinery for 3 years. The machinery costs €1,200,000 and its salvage value is expected to be €500,000 in 3 years' time. The firm will depreciate the machinery to zero over the 3 years; any difference between salvage value and book value is a taxable gain. Revenue at the end of year 1 is €300,000 and expenses €75,000, both rising with inflation of 4% a year thereafter. The initial investment in working capital is €6,000, increasing by €500 after 1 year and after 2 years. The tax rate is 20%. Calculate the investment, operating and working capital cash flows. If the discount rate is 15%, calculate the NPV and comment on whether the firm should invest.`,
          approach: t`Three blocks, year by year: **investment** (cost and after-tax salvage), **operating** (after-tax profit plus depreciation added back), **working capital** (increases are outflows, all recovered at the end). Add the blocks, then discount at 15%.`,
          given: [
            ['Machine', '€1,200,000; salvage €500,000 at year 3'],
            ['Depreciation', 'Straight line to zero over 3 years'],
            ['Revenue / expenses (year 1)', '€300,000 / €75,000, growing 4% a year'],
            ['Working capital', '€6,000 now, +€500 at year 1, +€500 at year 2'],
            [t`Tax $T$ / discount rate $r$`, '20% / 15%'],
          ],
          working: [
            t`**Depreciation:** $\dfrac{1{,}200{,}000 - 0}{3} = €400{,}000$ a year. Book value at year 3 = 0.`,
            t`**Investment cash flows:** year 0: $-€1{,}200{,}000$. Year 3: taxable gain $= 500{,}000 - 0 = €500{,}000$, tax $= 0.20 \times 500{,}000 = €100{,}000$, so after-tax salvage $= €400{,}000$.`,
            t`**Revenue and expenses with 4% inflation:** Year 1: 300,000 / 75,000. Year 2: 312,000 / 78,000. Year 3: 324,480 / 81,120.`,
            t`**Operating cash flow:** $$OCF = (R - E - Dep)(1 - T) + Dep = (R - E)(1 - T) + T \times Dep$$`,
            t`**Year 1:** $(300{,}000 - 75{,}000 - 400{,}000)(0.8) + 400{,}000 = -140{,}000 + 400{,}000 = €260{,}000$`,
            t`**Year 2:** $(312{,}000 - 78{,}000 - 400{,}000)(0.8) + 400{,}000 = -132{,}800 + 400{,}000 = €267{,}200$`,
            t`**Year 3:** $(324{,}480 - 81{,}120 - 400{,}000)(0.8) + 400{,}000 = -125{,}312 + 400{,}000 = €274{,}688$`,
            t`**Check with the tax-shield form (year 1):** $225{,}000 \times 0.8 + 0.2 \times 400{,}000 = 180{,}000 + 80{,}000 = €260{,}000$ ✓`,
            t`**Working capital cash flows:** an increase is an outflow; the total is recovered at the end. Year 0: $-6{,}000$; year 1: $-500$; year 2: $-500$; year 3: $+7{,}000$.`,
            t`**Discount at 15%:** $$NPV = -1{,}206{,}000 + \frac{259{,}500}{1.15} + \frac{266{,}700}{1.15^2} + \frac{681{,}688}{1.15^3}$$`,
            t`$$= -1{,}206{,}000 + 225{,}652.17 + 201{,}663.52 + 448{,}220.93 = -€330{,}463.38$$`,
          ],
          result: t`**NPV ≈ −€330,463: reject the investment.**`,
          answer: [
            {
              heading: 'Cash flow table',
              table: {
                columns: ['€', 'Year 0', 'Year 1', 'Year 2', 'Year 3'],
                rows: [
                  ['Machine / salvage (after tax)', '−1,200,000', '0', '0', '+400,000'],
                  ['Revenue', '', '300,000', '312,000', '324,480'],
                  ['Expenses', '', '−75,000', '−78,000', '−81,120'],
                  ['Depreciation', '', '−400,000', '−400,000', '−400,000'],
                  ['Taxable profit', '', '−175,000', '−166,000', '−156,640'],
                  ['Tax at 20% (saving)', '', '+35,000', '+33,200', '+31,328'],
                  ['Operating cash flow', '', '260,000', '267,200', '274,688'],
                  ['Working capital', '−6,000', '−500', '−500', '+7,000'],
                  ['**Total cash flow**', '**−1,206,000**', '**259,500**', '**266,700**', '**681,688**'],
                  ['Discount factor at 15%', '1.0000', '0.8696', '0.7561', '0.6575'],
                  ['Present value', '−1,206,000', '225,652', '201,664', '448,221'],
                ],
              },
            },
            {
              heading: 'Should the firm invest?',
              list: [
                t`**No.** The NPV is negative: the present value of the inflows (€875,537) is about €330,000 less than the €1,206,000 it costs today.`,
                t`Taking the project would **reduce shareholder wealth** by about €330,000. At 15% the firm can do better with its capital elsewhere at the same risk.`,
                t`The other rules agree: profitability index $= 875{,}537 / 1{,}206{,}000 = 0.73 < 1$, and the IRR is only about 0.1%, far below 15%.`,
                t`The main problem: operating profit before depreciation is only about €225,000–243,000 a year, far too little to recover a €1.2m machine within three years, even with a €500,000 salvage value.`,
              ],
            },
            {
              heading: 'Assumptions to state',
              list: [
                'The accounting losses create **tax savings** (€35,000, €33,200, €31,328), which assumes the firm has other taxable profits to offset them. If it cannot use the losses, operating cash flows fall to €225,000, €234,000 and €243,360, and the NPV falls to about −€406,600.',
                'Cash flows are nominal (they include 4% inflation), so the 15% rate must also be nominal.',
                'All cash flows arrive at the end of each year.',
              ],
            },
          ],
          tips: [
            'Always add depreciation back: it is not a cash flow, but it lowers tax.',
            'Salvage: tax is on (salvage − book value). Book value here is zero, so the whole €500,000 is taxed.',
            'Recover all working capital in the final year: €6,000 + €500 + €500 = €7,000.',
          ],
          formulas: ['npv', 'time-value', 'profitability-index'],
        },
        {
          id: 'may22-q5b',
          label: '5(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`**(b)** When performing an NPV calculation for a potential investment, comment on what cash flows the investor should be careful to include within the categories above, and what cash flows they should be careful to exclude.`,
          approach: t`The principle is **incremental, after-tax cash flows**: the difference between the firm's cash flows with and without the project. Organise by the three categories (investment, operating, working capital), then a list of what to exclude, each with an example.`,
          answer: [
            {
              heading: 'The guiding principle',
              list: [
                t`Include only **incremental** cash flows: those that change because the firm takes the project.`,
                t`Use **cash flows, not accounting profits**, and measure them **after tax**.`,
                t`Ask of every item: "Would this cash flow happen if we did not invest?" If yes, leave it out.`,
              ],
            },
            {
              heading: 'Investment cash flows: include',
              list: [
                'Purchase price **plus** delivery, installation, testing and training costs.',
                '**Opportunity costs** of assets the firm already owns: e.g. a building it could otherwise rent out for €50,000 a year, or land it could sell.',
                '**After-tax salvage value** at the end: salvage minus tax on (salvage − book value), or plus a tax credit if sold at a loss.',
                'Any later capital spending (major repairs, upgrades).',
              ],
            },
            {
              heading: 'Operating cash flows: include',
              list: [
                'Incremental revenues and costs caused by the project.',
                '**Side effects**: lost sales of the firm\'s existing products (**cannibalisation**, e.g. a new phone model reducing sales of the old one), or extra sales of complementary products (**synergies**).',
                '**Taxes** on the extra profit, and the **depreciation tax shield** $T \times Dep$: depreciation itself is not cash, but it reduces tax.',
                'Inflation applied consistently: nominal cash flows with a nominal discount rate (or real with real).',
              ],
            },
            {
              heading: 'Working capital cash flows: include',
              list: [
                'Extra inventory, receivables and cash needed to run the project are cash **outflows** when they build up.',
                'They are **recovered** (inflows) when the project ends.',
                'Changes along the way: an increase is an outflow, a decrease an inflow.',
              ],
            },
            {
              heading: 'Exclude',
              list: [
                { label: 'Sunk costs', items: ['Money already spent and unrecoverable whatever the decision: market research, feasibility studies, past R&D.', 'Example: a €100,000 consultancy report already paid for is irrelevant to whether to go ahead.'] },
                { label: 'Financing costs', items: ['Interest, loan repayments and dividends.', 'The cost of finance is already in the **discount rate** (WACC); deducting interest as well would double-count it.'] },
                { label: 'Allocated overheads', items: ['Head-office costs such as the CEO\'s salary, shared IT or rent, unless they **actually increase** because of the project.'] },
                { label: 'Non-cash items as cash flows', items: ['Depreciation and amortisation are not cash: add them back (but keep their tax effect).'] },
                { label: 'Cash flows that happen anyway', items: ['Costs and revenues the firm would have with or without the project.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['NPV is only as good as its cash flows. Including only incremental, after-tax cash flows (with opportunity costs, side effects and working capital, and without sunk and financing costs) ensures the NPV measures exactly what the project adds to shareholder wealth.'],
            },
          ],
          tips: ['Link each point back to the three categories in part (a): the question explicitly asks "within the categories above".', 'Sunk costs, opportunity costs, side effects and financing costs are the four classics: make sure all four appear.'],
          formulas: ['npv'],
        },
      ],
    },
  ],
};
