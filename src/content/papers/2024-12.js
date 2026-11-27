import { t } from '../../lib/tag.js';

/**
 * BUU22550 Introduction to Finance — December 2024 (Semester 1, 2024/25)
 * Model answers in bullet form. Essay answers give more points than you
 * need: pick the strongest and explain each one.
 */
export default {
  kind: 'paper',
  group: 'past',
  id: 'dec-2024',
  title: 'December 2024',
  short: 'Dec 2024',
  accent: 'costs',
  summary: t`BUU22550 Introduction to Finance, 11 December 2024. Two hours, closed book. Answer Question 1 and two of Questions 2–5.`,
  meta: [
    ['Module', 'BUU22550 Introduction to Finance'],
    ['Sitting', 'Semester 1 2024/25 · 11 December 2024, 13:00–15:00'],
    ['Examiner', 'Dr Martha O’Hagan Luff'],
    ['Rubric', 'Answer 3 questions: Question 1 (compulsory) plus two of Questions 2–5.'],
    ['Marks', 'Question 1: 40 marks · Questions 2–5: 30 marks each · Total 100'],
    ['Calculator', 'Non-programmable calculators permitted'],
  ],
  timing: t`About **48 minutes on Question 1** and **36 minutes on each optional question**.`,
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      compulsory: true,
      parts: [
        {
          id: 'dec24-q1a',
          label: '1(a)',
          marks: 20,
          type: 'essay',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`Which cash flows should or should not be included in capital budgeting calculations? Give examples in each case.`,
          approach: t`Start with the **incremental cash flow principle**, then two clear lists: **include** and **exclude**, each item with a **concrete example**. Twenty marks: aim for about 6 + 4 well-explained items.`,
          answer: [
            {
              heading: 'The rule: incremental cash flows',
              list: [
                t`Only include cash flows that **change because the project is accepted**.`,
                t`Ask: "Would this cash flow happen **with** the project but **not without** it?"`,
                t`Use **cash flows**, not accounting profit, and count them **when they occur**.`,
                t`Use **after-tax** figures.`,
              ],
            },
            {
              heading: 'Cash flows that SHOULD be included',
              list: [
                { label: '1. Initial investment (capital expenditure)', items: [t`The purchase price **plus** delivery, installation and training.`, t`Example: a €100,000 machine plus €8,000 to install it.`] },
                { label: '2. Incremental revenues', items: [t`Extra sales the project generates.`, t`Example: the new machine adds €30,000 of sales a year.`] },
                { label: '3. Incremental operating costs', items: [t`Extra wages, materials, energy, maintenance.`, t`Example: €5,000 a year more electricity and staff costs.`] },
                { label: '4. Opportunity costs', items: [t`The value of a resource the firm already owns that it could use another way.`, t`Example: land the firm owns could be sold for €50,000; using it for the factory costs that €50,000.`] },
                { label: '5. Side effects (externalities within the firm)', items: [t`**Cannibalisation** (negative): a new product steals sales from an existing one, e.g. a new iPhone reducing sales of the older model.`, t`**Complementary sales** (positive): e.g. a printer that boosts ink cartridge sales.`] },
                { label: '6. Changes in working capital', items: [t`Extra inventory and receivables are a cash **outflow** at the start.`, t`They are usually **recovered** at the end of the project.`, t`Example: €10,000 of extra stock at launch, released in the final year.`] },
                { label: '7. Taxes and the depreciation tax shield', items: [t`Tax on the extra profit is a cash outflow.`, t`Depreciation is **not** a cash flow, but it cuts tax: the tax shield $= \text{depreciation} \times T_c$ is a cash inflow.`] },
                { label: '8. Terminal (salvage) value', items: [t`Cash from selling equipment at the end, after any tax on the gain.`, t`Example: machinery sold for €15,000 in year 5.`] },
              ],
            },
            {
              heading: 'Cash flows that should NOT be included',
              list: [
                { label: '1. Sunk costs', items: [t`Already spent and cannot be recovered, whatever is decided.`, t`Example: €5,000 already spent on market research or a feasibility study.`] },
                { label: '2. Financing costs (interest and dividends)', items: [t`The cost of finance is already in the **discount rate** (WACC).`, t`Subtracting interest as well would **double-count** it.`] },
                { label: '3. Allocated overheads that do not change', items: [t`Existing costs shared out across projects, e.g. head-office rent or the CEO's salary.`, t`Only include overheads that **increase** because of the project.`] },
                { label: '4. Non-incremental cash flows', items: [t`Things that happen anyway, e.g. sales of existing products the project does not affect.`] },
              ],
            },
            {
              heading: 'Good practice',
              list: [
                t`Treat **inflation consistently**: nominal cash flows with a nominal rate, real with real.`,
                t`Conclusion: including only incremental, after-tax cash flows shows the **true difference** between accepting and rejecting the project.`,
              ],
            },
          ],
          tips: [
            'The question says "give examples in each case": every item needs its own example.',
            'Opportunity cost (include) vs sunk cost (exclude) is the classic pair. Make the contrast explicit.',
          ],
          formulas: ['npv'],
        },
        {
          id: 'dec24-q1b',
          label: '1(b)',
          marks: 20,
          type: 'essay',
          topics: ['firm-objective', 'governance'],
          prompt: t`What is meant by agency problems in the context of a company and why do they exist? Using examples, describe at least 4 factors that may mitigate these problems and comment on whether they may or may not be successful.`,
          approach: t`Three parts: **define** the agency problem, explain **why it exists**, then **at least four mitigations**, each with an **example** and an **evaluation** (does it work? what can go wrong?). The evaluation is where the top marks are.`,
          answer: [
            {
              heading: 'What agency problems are',
              list: [
                t`An **agency relationship** exists when principals (shareholders) hire agents (managers) to act for them.`,
                t`An **agency problem** arises when managers act in their **own interest** rather than maximising shareholder (long-term) value.`,
                t`**Agency costs** = the cost of monitoring managers + the value lost from their self-interested decisions.`,
                t`A second agency problem exists between **shareholders and lenders**: e.g. shareholders of a highly indebted firm may take excessive risks with the lenders' money.`,
              ],
            },
            {
              heading: 'Why they exist',
              list: [
                t`**Separation of ownership and control:** shareholders own the firm; managers run it day to day.`,
                t`**Different objectives:** managers may want pay, perks, status, job security and an easy life (e.g. empire building through acquisitions).`,
                t`**Information asymmetry:** managers know far more than dispersed shareholders, so monitoring is hard and costly.`,
                t`**Different attitudes to risk:** shareholders diversify; a manager's job and wealth depend on one firm, so they may avoid good but risky projects.`,
                t`**Different time horizons:** managers paid on annual results may favour short-term profit over long-term value.`,
                t`**Free-rider problem:** each small shareholder gains little from monitoring, so few bother.`,
              ],
            },
            {
              heading: 'Mitigating factors and whether they work',
              list: [
                { label: '1. Performance-related pay (bonuses)', items: [t`Bonuses tied to profit, EPS or targets align managers with performance.`, t`**Works if** targets are long-term and hard to manipulate.`, t`**May fail:** managers can massage short-term earnings or take excessive risks; bank bonuses before the 2008 crisis rewarded short-term risk-taking.`] },
                { label: '2. Share ownership and options', items: [t`Managers own shares or options, so they gain when shareholders gain.`, t`**Works best** with long vesting periods (3–5 years) and clawbacks.`, t`**May fail:** options reward share-price spikes, not lasting value, and can encourage risk-taking or timing announcements around vesting.`] },
                { label: '3. Board of directors, especially independent directors', items: [t`Non-executives monitor management, approve big decisions and set pay; audit and remuneration committees.`, t`**Works if** directors are genuinely independent, informed and willing to challenge.`, t`**May fail:** boards can be dominated by a powerful CEO, and part-time directors lack information.`] },
                { label: '4. Auditing and disclosure', items: [t`External audits and transparent reporting reduce information asymmetry.`, t`**May fail:** Enron's collapse (2001) happened despite audited accounts, and its auditor Arthur Andersen also collapsed.`] },
                { label: '5. Shareholder activism and voting', items: [t`Large or activist investors push for change, vote against directors, or vote on pay ("say on pay").`, t`**Works well** for big institutional or activist investors.`, t`**May fail:** small shareholders have little influence and many do not vote (free-riding).`] },
                { label: '6. Market for corporate control (takeovers)', items: [t`A badly run firm is cheap, so it can be taken over and its managers replaced.`, t`**May fail:** takeovers are expensive and slow, and anti-takeover defences protect managers.`] },
                { label: '7. Debt', items: [t`Interest payments use up free cash flow, so less is wasted (Jensen).`, t`**May fail:** too much debt causes financial distress and creates the shareholder–lender conflict.`] },
                { label: '8. Managerial labour market and reputation', items: [t`Managers who perform badly find it harder to get future jobs.`] },
              ],
            },
            {
              heading: 'Conclusion',
              list: [
                t`No single measure removes agency problems, and each has its own costs.`,
                t`The most effective approach **combines** incentives (pay, shares), monitoring (board, audit, investors) and external discipline (takeovers, debt).`,
              ],
            },
          ],
          tips: [
            'For "comment on whether they may or may not be successful", give a downside for every measure, not just a description.',
            'One real example (Enron, pre-2008 bank bonuses) is worth a lot of marks.',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'dec24-q2a',
          label: '2(a)',
          marks: 10,
          type: 'calc',
          topics: ['cost-of-capital'],
          prompt: t`A firm has issued a €20 million bond which is trading at 91. The bond's coupon is 4.50% and the yield of the bond is 6.50%. The yield on risk-free government bonds is 2%. The firm has 400,000 shares outstanding, trading at €48 per share. The company's beta is 1.25 and the expected market return is 14%. The firm recently paid a dividend of €4 per share; its growth rate has been 6% and is expected to continue to be so. The corporate tax rate is 15%. What is the firm's cost of debt and equity (the cost of equity should be calculated as the average of 2 methods)? What is the firm's weighted average cost of capital?`,
          approach: t`Cost of debt = **yield** (not coupon), adjusted for tax. Cost of equity = **average of CAPM and the dividend growth model**. Watch the wording: "recently paid" means €4 is $D_0$, so grow it to $D_1$. Weights use **market values**.`,
          given: [
            ['Debt', '€20m face, trading at 91'],
            [t`Cost of debt $r_D$`, '6.50% (yield)'],
            [t`Risk-free $r_f$ / market $r_m$`, '2% / 14%'],
            ['Shares', '400,000 at €48'],
            [t`Beta $\beta$`, '1.25'],
            [t`$D_0$ (recently paid), growth $g$`, '€4, 6%'],
            [t`Tax rate $T_c$`, '15%'],
          ],
          working: [
            t`**Cost of debt:** $r_D = 6.50\%$ (the yield, not the 4.5% coupon). After tax: $6.50\% \times (1 - 0.15) = 5.525\%$`,
            t`**Cost of equity, CAPM:** $r_E = 2\% + 1.25(14\% - 2\%) = 2\% + 15\% = 17.00\%$`,
            t`**Cost of equity, dividend growth model:** $D_1 = 4 \times 1.06 = €4.24$, so $r_E = \dfrac{4.24}{48} + 0.06 = 8.83\% + 6\% = 14.83\%$`,
            t`**Average cost of equity:** $r_E = \dfrac{17.00\% + 14.83\%}{2} = 15.92\%$`,
            t`**Market values:** $E = 400{,}000 \times €48 = €19.2m$; $\;D = €20m \times 0.91 = €18.2m$; $\;V = €37.4m$`,
            t`**Weights:** $\dfrac{E}{V} = \dfrac{19.2}{37.4} = 0.5134$; $\;\dfrac{D}{V} = \dfrac{18.2}{37.4} = 0.4866$`,
            t`**WACC:** $$0.5134(15.92\%) + 0.4866(5.525\%) = 8.17\% + 2.69\% = 10.86\%$$`,
          ],
          result: t`Cost of debt **6.50%** (5.525% after tax) · cost of equity **15.92%** · **WACC ≈ 10.86%**`,
          answer: [
            {
              heading: 'Sense checks',
              list: [
                t`The bond trades below par (91) because its coupon (4.5%) is below the market yield (6.5%).`,
                t`The cost of equity (15.92%) is well above the cost of debt (6.5%), as it should be: shareholders bear more risk.`,
                t`Using CAPM alone would give WACC ≈ 11.42%; the DGM alone ≈ 10.30%.`,
              ],
            },
          ],
          tips: [
            '"Recently paid" = D₀, so multiply by (1 + g) before using the dividend growth model. This is the most common slip on this question.',
            'State both components clearly: the question asks for the cost of debt **and** equity, as well as WACC.',
          ],
          formulas: ['wacc', 'capm', 'dividend-growth-cost-of-equity'],
        },
        {
          id: 'dec24-q2b',
          label: '2(b)',
          marks: 10,
          type: 'essay',
          topics: ['cost-of-capital'],
          prompt: t`Explain the intuition behind the CAPM.`,
          approach: t`Explain **why** investors are only paid for **systematic** risk: diversification removes the rest. Then explain each part of the formula, what beta means, and finish with limitations.`,
          answer: [
            {
              heading: 'The core idea',
              formula: t`r_E = r_f + \beta\,(r_m - r_f)`,
              list: [
                t`Investors need compensation for **time** (the risk-free rate $r_f$) and for **risk** (a risk premium).`,
                t`But not all risk is rewarded, only risk that **cannot be diversified away**.`,
              ],
            },
            {
              heading: 'Two kinds of risk',
              list: [
                { label: 'Unsystematic (specific) risk', items: [t`Firm-specific events: a failed product, a lawsuit, a strike.`, t`Can be **diversified away** by holding many shares.`, t`So the market does **not** pay a premium for it.`] },
                { label: 'Systematic (market) risk', items: [t`Economy-wide shocks: recessions, interest rates, inflation.`, t`**Cannot** be diversified away.`, t`So investors demand a premium for bearing it.`] },
              ],
            },
            {
              heading: 'Reading the formula',
              list: [
                t`$r_f$: the reward for waiting, e.g. the government bond yield.`,
                t`$r_m - r_f$: the **market risk premium**, the extra return for holding the market portfolio.`,
                t`$\beta$: how much **systematic** risk a share carries relative to the market: $\beta = \dfrac{\text{Cov}(r_i, r_m)}{\text{Var}(r_m)}$.`,
                t`$\beta = 1$ moves with the market; $\beta > 1$ amplifies it (e.g. tech, airlines); $\beta < 1$ is defensive (e.g. utilities, supermarkets).`,
                t`The result is a straight line, the **security market line**: expected return rises linearly with beta.`,
              ],
            },
            {
              heading: 'Quick example',
              list: [t`$r_f = 2\%$, $r_m = 10\%$, $\beta = 1.5$: $\;r_E = 2\% + 1.5(8\%) = 14\%$, more than the market's 10% because the share carries more systematic risk.`],
            },
            {
              heading: 'Uses and limitations',
              list: [
                t`**Uses:** estimating the cost of equity for WACC and NPV; judging whether a fund manager beat the risk-adjusted return.`,
                t`**Limitations:** relies on simplifying assumptions (rational investors, borrowing at $r_f$, one period).`,
                t`Beta is estimated from past data and is unstable.`,
                t`Evidence shows other factors (size, value, momentum: the Fama–French models) also explain returns.`,
              ],
            },
          ],
          formulas: ['capm'],
        },
        {
          id: 'dec24-q2c',
          label: '2(c)',
          marks: 10,
          type: 'essay',
          topics: ['cost-of-capital', 'capital-budgeting'],
          prompt: t`Why do investors and firms calculate a firm's weighted average cost of capital?`,
          approach: t`Define WACC briefly, then **two lists**: why **firms** use it and why **investors** use it. End with one or two limitations.`,
          answer: [
            {
              heading: 'What WACC is',
              list: [
                t`The average **after-tax** return required by all providers of finance (lenders and shareholders), weighted by **market values**.`,
                t`It is the firm's **opportunity cost of capital** for average-risk investments.`,
              ],
            },
            {
              heading: 'Why firms calculate it',
              list: [
                t`**Hurdle / discount rate:** discount project cash flows in NPV; accept average-risk projects only if they beat WACC.`,
                t`**Valuation:** value the firm, divisions or acquisition targets by discounting free cash flows at WACC.`,
                t`**Capital structure:** see whether changing the debt/equity mix lowers the cost of capital.`,
                t`**Performance measurement:** EVA = NOPAT − WACC × capital shows whether a division earns more than its cost of capital.`,
                t`**Regulated industries:** regulators set allowed returns for utilities using a WACC.`,
              ],
            },
            {
              heading: 'Why investors calculate it',
              list: [
                t`**Valuing the company:** analysts discount forecast free cash flows at WACC to estimate a fair share price.`,
                t`**Judging value creation:** a firm whose return on capital exceeds its WACC is creating value; below WACC, it is destroying value.`,
                t`**Assessing risk and financing:** a rising WACC can signal higher perceived risk or rising borrowing costs.`,
                t`**Comparing firms** in the same industry.`,
              ],
            },
            {
              heading: 'Limitations',
              list: [
                t`Only valid for projects with the **same risk** as the firm; riskier projects need a higher rate.`,
                t`It depends on estimates (beta, growth, market premium), as 2(a) shows: CAPM and the DGM gave different costs of equity.`,
              ],
            },
          ],
          formulas: ['wacc'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'dec24-q3a',
          label: '3(a)',
          marks: 15,
          type: 'essay',
          topics: ['capital-budgeting'],
          prompt: t`Describe the different methods that can be used for the purpose of capital budgeting. What are the uses and drawbacks of each method?`,
          approach: t`Unlike Dec 2025 Q2(a), this one **includes NPV**. For each method: what it is (formula), decision rule, uses, drawbacks. Finish by explaining why NPV is preferred.`,
          answer: [
            {
              heading: '1. Net present value (NPV)',
              formula: t`NPV = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1+r)^t} \qquad \text{accept if } NPV > 0`,
              list: [
                { label: 'Uses / advantages', items: [t`Uses all cash flows and the time value of money.`, t`Measures the **euro value added** to shareholders.`, t`NPVs add up across projects; works with changing discount rates.`] },
                { label: 'Drawbacks', items: [t`Needs accurate cash flow forecasts.`, t`Choosing the right discount rate is hard.`, t`Less intuitive for non-finance managers than a % or a number of years.`] },
              ],
            },
            {
              heading: '2. Internal rate of return (IRR)',
              formula: t`0 = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1+\text{IRR})^t} \qquad \text{accept if IRR} > r`,
              list: [
                { label: 'Uses / advantages', items: [t`Uses all cash flows and the time value of money.`, t`A percentage is easy to compare with the cost of capital.`] },
                { label: 'Drawbacks', items: [t`Multiple IRRs if cash flows change sign more than once.`, t`Can rank mutually exclusive projects wrongly (ignores scale and timing).`, t`Assumes reinvestment at the IRR (MIRR fixes this).`] },
              ],
            },
            {
              heading: '3. Payback period (and discounted payback)',
              formula: t`\text{e.g. } \frac{\text{€}20{,}000}{\text{€}5{,}000 \text{ per year}} = 4 \text{ years}`,
              list: [
                { label: 'Uses / advantages', items: [t`Simple and quick.`, t`Focuses on liquidity and how fast cash is recovered.`, t`Useful when the future is very uncertain.`] },
                { label: 'Drawbacks', items: [t`Ignores cash flows after the cut-off.`, t`Simple payback ignores the time value of money (discounted payback fixes this).`, t`Arbitrary cut-off; biased against long-term projects.`] },
              ],
            },
            {
              heading: '4. Profitability index (PI)',
              formula: t`PI = \frac{PV(\text{future cash flows})}{C_0} \qquad \text{accept if } PI > 1`,
              list: [
                { label: 'Uses / advantages', items: [t`Value per euro invested.`, t`The right tool under **capital rationing**.`] },
                { label: 'Drawbacks', items: [t`Can mis-rank mutually exclusive projects of different sizes.`, t`Fails when budget limits span several periods.`] },
              ],
            },
            {
              heading: '5. Accounting rate of return (ARR)',
              formula: t`ARR = \frac{\text{Average accounting profit}}{\text{Average investment}}\times 100`,
              list: [
                { label: 'Uses / advantages', items: [t`Uses familiar accounting numbers.`, t`Links to how performance is reported.`] },
                { label: 'Drawbacks', items: [t`Profit, not cash flow.`, t`Ignores the time value of money.`, t`Depends on accounting choices; arbitrary target.`] },
              ],
            },
            {
              heading: 'Conclusion',
              list: [
                t`NPV is the theoretically correct rule: it directly measures value created.`,
                t`In practice firms use several methods together (Graham & Harvey survey), using payback and IRR as supporting checks.`,
              ],
            },
          ],
          formulas: ['npv', 'irr', 'payback', 'profitability-index', 'arr'],
        },
        {
          id: 'dec24-q3b',
          label: '3(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-structure'],
          prompt: t`Describe the three main theories of debt policy used to explain the funding choices made by firms.`,
          approach: t`The three theories: **Modigliani–Miller** (with and without taxes), **trade-off** and **pecking order**. For each: the idea, the key equation or ordering, what it predicts, and a strength or weakness.`,
          answer: [
            {
              heading: '1. Modigliani & Miller (1958, 1963)',
              formula: t`\text{No taxes: } V_L = V_U \qquad \text{With taxes: } V_L = V_U + T_c D`,
              list: [
                { label: 'Without taxes: irrelevance', items: [t`In perfect markets, firm value depends only on its assets, not how they are financed.`, t`More debt raises the cost of equity: $r_E = r_A + \frac{D}{E}(r_A - r_D)$, so WACC stays the same.`, t`"Slicing the pizza differently does not make it bigger."`] },
                { label: 'With corporate taxes', items: [t`Interest is tax-deductible, creating a **tax shield** worth $T_cD$.`, t`Firm value rises with debt, implying firms should use almost 100% debt, which they do not.`] },
                { label: 'Assessment', items: [t`Unrealistic assumptions, but it shows **where** financing can matter: taxes, distress costs, information.`] },
              ],
            },
            {
              heading: '2. Static trade-off theory',
              formula: t`V_L = V_U + PV(\text{tax shield}) - PV(\text{costs of financial distress})`,
              list: [
                t`Firms balance the **tax benefit** of debt against the **costs of financial distress**.`,
                t`Distress costs: direct (legal fees in bankruptcy) and indirect (lost customers and suppliers, underinvestment).`,
                t`The **optimal debt ratio** is where the marginal tax benefit equals the marginal expected distress cost.`,
                t`**Predicts:** safe, profitable firms with tangible assets (utilities, property) borrow more; risky firms with intangible assets (tech, biotech) borrow less.`,
                t`**Weakness:** cannot explain why some very profitable firms have little debt.`,
              ],
            },
            {
              heading: '3. Pecking order theory (Myers & Majluf, 1984)',
              list: [
                t`Managers know more than investors (**asymmetric information**).`,
                t`Investors read an equity issue as a sign the shares are **overvalued**, so the price falls when equity is announced.`,
                t`So firms follow a pecking order: **retained earnings → debt → new equity** (last resort).`,
                t`There is **no target** debt ratio; debt reflects past profits and investment needs.`,
                t`**Predicts:** the most profitable firms borrow the least (they use internal funds), which matches the evidence.`,
                t`**Weakness:** does not explain why some young, high-growth firms issue equity early on.`,
              ],
            },
            {
              heading: 'Bringing them together',
              list: [
                t`MM gives the benchmark; trade-off explains **targets** across industries; pecking order explains **behaviour over time**.`,
                t`Real firms show elements of all three, plus agency (debt disciplines managers) and market-timing effects.`,
              ],
            },
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
          id: 'dec24-q4a',
          label: '4(a)',
          marks: 15,
          type: 'essay',
          topics: ['working-capital'],
          prompt: t`Describe what is meant by working capital and describe the potential conflicts for a company when deciding how much to hold. Give examples.`,
          approach: t`Define working capital and its parts, then centre the answer on the **liquidity vs profitability** conflict. Go component by component (cash, inventory, receivables, payables), each with an example, then the financing choice (conservative vs aggressive).`,
          answer: [
            {
              heading: 'What working capital is',
              formula: t`NWC = \text{Current assets} - \text{Current liabilities}`,
              list: [
                t`**Current assets:** cash and short-term investments, inventory, accounts receivable.`,
                t`**Current liabilities:** accounts payable, short-term borrowing, accrued expenses.`,
                t`It funds the **operating cycle**: buy stock, sell, collect cash.`,
              ],
            },
            {
              heading: 'The central conflict: liquidity vs profitability',
              list: [
                t`**More** working capital = safer (can pay bills, meet demand), but money is tied up earning little.`,
                t`**Less** working capital = higher returns on capital, but a higher risk of running out of cash.`,
              ],
            },
            {
              heading: 'Component by component',
              list: [
                { label: 'Cash', items: [t`**Hold more:** pay bills, cover shocks, seize opportunities (precautionary motive).`, t`**Cost:** cash earns little; idle cash may be wasted by managers.`, t`Example: many firms built large cash buffers after COVID-19 disruptions.`] },
                { label: 'Inventory', items: [t`**Hold more:** avoid stock-outs and lost sales, smooth production, buy in bulk.`, t`**Cost:** storage, insurance, obsolescence, spoilage; cash tied up.`, t`Example: a fashion retailer with too much stock must mark it down; Toyota's just-in-time keeps stock low but is exposed to supply shocks.`] },
                { label: 'Receivables (credit to customers)', items: [t`**Generous credit:** wins sales, especially business-to-business.`, t`**Cost:** slower cash collection, bad debts, cost of chasing payments.`, t`Example: offering 60-day terms to win a large retail customer.`] },
                { label: 'Payables (credit from suppliers)', items: [t`**Pay slowly:** keeps cash in the business for longer, a free source of finance.`, t`**Cost:** lose early-payment discounts, damage supplier relationships, risk losing credit.`, t`Example: a "2/10 net 30" discount gives up about a 37% annual return if not taken.`] },
              ],
            },
            {
              heading: 'Financing the working capital',
              list: [
                { label: 'Conservative policy', items: [t`More current assets, financed with long-term funds.`, t`Lower liquidity and refinancing risk, but lower profitability.`] },
                { label: 'Aggressive policy', items: [t`Lean current assets, financed with short-term debt.`, t`Higher returns, but higher risk if short-term credit dries up (as in 2008).`] },
              ],
            },
            {
              heading: 'Other conflicts of interest',
              list: [
                t`**Departments disagree:** sales want generous credit and full shelves; finance wants low inventory and fast collection.`,
                t`**Stakeholders:** squeezing suppliers helps the firm's cash but can harm small suppliers.`,
                t`**Conclusion:** the right level balances these trade-offs and depends on the industry, seasonality and growth.`,
              ],
            },
          ],
          tips: [
            'Name the trade-off "liquidity vs profitability" explicitly: it is what the examiner is looking for.',
            'The 2/10 net 30 example shows real financial understanding: not taking the discount costs about 2% for 20 days ≈ 37% a year.',
          ],
          formulas: ['working-capital'],
        },
        {
          id: 'dec24-q4b',
          label: '4(b)',
          marks: 15,
          type: 'essay',
          topics: ['equity-bonds', 'capital-structure'],
          prompt: t`What are the pros and cons of investing in debt and equity from the investor perspective, and of issuing debt and equity from the company's perspective?`,
          approach: t`Four boxes: **investor–debt, investor–equity, company–debt, company–equity**, each with pros and cons. Point out that they mirror each other: what is safe for the investor (debt) is risky for the issuer, and vice versa.`,
          answer: [
            {
              heading: 'Investor buying debt (bonds)',
              list: [
                { label: 'Pros', items: [t`Contractual coupons and repayment: predictable income.`, t`Ranks **ahead** of shareholders in bankruptcy.`, t`Lower volatility than shares.`] },
                { label: 'Cons', items: [t`Upside limited to coupons plus principal.`, t`Interest-rate risk: prices fall when yields rise.`, t`Inflation erodes fixed payments.`, t`Default risk on corporate bonds.`] },
              ],
            },
            {
              heading: 'Investor buying equity (shares)',
              list: [
                { label: 'Pros', items: [t`Higher expected long-run return (equity risk premium).`, t`Unlimited upside: capital gains and growing dividends.`, t`Voting rights; long-run inflation hedge.`] },
                { label: 'Cons', items: [t`Volatile; dividends not guaranteed.`, t`Paid **last** in liquidation (residual claimant).`, t`Can lose the whole investment.`] },
              ],
            },
            {
              heading: 'Company issuing debt',
              list: [
                { label: 'Pros', items: [t`Usually **cheaper** than equity: lenders take less risk.`, t`Interest is **tax-deductible** (tax shield).`, t`No dilution of ownership or control.`, t`Disciplines managers (less free cash flow to waste).`, t`Pecking order: no negative signal like an equity issue.`] },
                { label: 'Cons', items: [t`Interest and repayment are **compulsory**, even in bad years.`, t`Raises financial risk and the cost of equity; risk of distress or bankruptcy.`, t`Covenants can restrict dividends, investment and further borrowing.`] },
              ],
            },
            {
              heading: 'Company issuing equity',
              list: [
                { label: 'Pros', items: [t`No compulsory payments: dividends can be cut in bad times.`, t`Never has to be repaid; permanent capital.`, t`Lowers leverage and financial risk; useful for risky, high-growth firms.`] },
                { label: 'Cons', items: [t`More **expensive** (shareholders demand a higher return; no tax shield).`, t`**Dilutes** existing owners' control and earnings per share.`, t`Issue costs (underwriting fees) and a negative **signal**: the price often falls on announcement.`] },
              ],
            },
            {
              heading: 'The link between the two views',
              list: [
                t`The features that make debt **safe for investors** (fixed claims, priority) are exactly what make it **risky for the issuer**.`,
                t`The features that make equity **risky for investors** make it **flexible for the issuer**.`,
                t`That is why firms mix the two (capital structure), and investors mix them in portfolios (diversification).`,
              ],
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'dec24-q5a',
          label: '5(a)',
          marks: 20,
          type: 'essay',
          topics: ['dividends'],
          prompt: t`For what reasons may dividend policy matter? Describe in detail the factors that a firm may take into account when deciding how to return cash to shareholders.`,
          approach: t`Start with **MM's irrelevance** as the benchmark, then explain **why it matters in the real world** (signalling, clientele, taxes, agency, bird in the hand). Then the **factors** and the **methods** (dividends vs buybacks). Twenty marks: be detailed.`,
          answer: [
            {
              heading: 'The benchmark: MM dividend irrelevance (1961)',
              list: [
                t`In perfect markets (no taxes, no transaction costs, symmetric information), dividend policy does **not** affect firm value.`,
                t`Value comes from investment decisions; investors can create "**homemade dividends**" by selling shares.`,
                t`Dividend policy matters only because real markets are **not** perfect.`,
              ],
            },
            {
              heading: 'Why dividend policy may matter',
              list: [
                { label: '1. Signalling (information content)', items: [t`Managers know more than investors.`, t`Raising or starting a dividend signals confidence in future cash flows, and the price usually rises.`, t`Cutting signals trouble, and the price often falls sharply.`] },
                { label: '2. Clientele effect', items: [t`Different investors want different payouts: retirees and pension funds want income; others prefer growth.`, t`Changing policy forces the existing clientele to sell.`] },
                { label: '3. Taxes', items: [t`Dividends and capital gains may be taxed differently.`, t`If capital gains are taxed less or later, investors may prefer retention or buybacks.`] },
                { label: '4. Agency costs (Jensen)', items: [t`Paying out free cash flow stops managers wasting it on poor projects or acquisitions.`] },
                { label: '5. "Bird in the hand"', items: [t`Some investors value certain cash today over uncertain future gains (though this is contested, as dividends do not change underlying risk).`] },
                { label: '6. Transaction costs', items: [t`Selling shares for "homemade dividends" costs fees, so some investors prefer actual dividends.`] },
              ],
            },
            {
              heading: 'Factors a firm considers',
              list: [
                { label: 'Profitability and cash flow', items: [t`Dividends need cash, not just accounting profit.`, t`Example: a profitable firm with cash tied up in receivables and stock may not be able to pay.`] },
                { label: 'Investment opportunities', items: [t`Firms with many positive-NPV projects retain cash (e.g. young tech firms pay little or nothing).`, t`Mature firms with few opportunities pay out more (utilities, tobacco).`] },
                { label: 'Stability of earnings', items: [t`Stable earnings support a regular dividend; volatile earnings favour low regular dividends plus special dividends or buybacks.`] },
                { label: 'Lintner: smoothing and stickiness', items: [t`Managers set a long-run target payout ratio and adjust gradually.`, t`They avoid cuts, so they only raise dividends they believe are sustainable.`] },
                { label: 'Debt and covenants', items: [t`High leverage and loan covenants can restrict payouts.`] },
                { label: 'Legal restrictions', items: [t`Dividends can usually only be paid from distributable profits, protecting creditors.`] },
                { label: 'Shareholder base and expectations', items: [t`Income-focused investors expect steady dividends; activists may push for higher payouts.`] },
                { label: 'Taxes', items: [t`The tax treatment of dividends versus capital gains for the main shareholders.`] },
                { label: 'Access to external finance', items: [t`Firms that can raise capital easily can afford higher payouts.`] },
                { label: 'Control', items: [t`Retaining earnings avoids issuing new shares and diluting control.`] },
              ],
            },
            {
              heading: 'Ways to return cash, and how to choose',
              list: [
                { label: 'Regular cash dividends', items: [t`Steady income; a strong commitment signal, but hard to cut.`] },
                { label: 'Special (one-off) dividends', items: [t`Return a windfall without committing to future payments.`] },
                { label: 'Share buybacks', items: [t`**Flexible:** no expectation they will be repeated.`, t`Often more tax-efficient.`, t`Can signal undervaluation; raises EPS by reducing shares.`, t`**Risk:** may be timed to hit EPS-linked bonus targets (an agency issue).`, t`Examples: Apple and many US firms return more through buybacks than dividends.`] },
                { label: 'Scrip dividends', items: [t`Shares instead of cash: the firm keeps the cash.`] },
              ],
            },
          ],
          tips: [
            'Opening with MM irrelevance and then "relaxing the assumptions" gives the answer a clear, analytical structure.',
            'The second half is worth most marks: list factors with examples, then compare dividends vs buybacks.',
          ],
        },
        {
          id: 'dec24-q5b',
          label: '5(b)',
          marks: 10,
          type: 'essay',
          topics: ['bond-yields', 'equity-bonds'],
          prompt: t`The yield of a bond fluctuates throughout its life; explain why this occurs and describe the factors that affect it. Use examples to illustrate your answer.`,
          approach: t`Explain the **inverse price–yield relationship**: coupons are fixed, so the yield moves when the price moves. Then the factors that move the required return (rates, inflation, credit risk, maturity, liquidity, economy), each with an example.`,
          answer: [
            {
              heading: 'Why the yield changes',
              formula: t`P = \sum_{t=1}^{n}\frac{C}{(1+y)^t} + \frac{F}{(1+y)^n}`,
              list: [
                t`A bond's coupon $C$ and face value $F$ are **fixed** when it is issued.`,
                t`Its **price** trades daily in the market as investors' required return changes.`,
                t`The yield $y$ is the return that makes the price equal to the present value of the remaining payments.`,
                t`So: **price falls ⇔ yield rises; price rises ⇔ yield falls.**`,
                t`**Example:** a bond with a €5 coupon and €100 face: at a price of €100 the current yield is 5%; if the price falls to €90, it is $5/90 = 5.56\%$.`,
                t`Even with no market changes, the price drifts towards par as maturity approaches (**pull to par**).`,
              ],
            },
            {
              heading: 'Factors that affect the yield',
              list: [
                { label: '1. Market interest rates and monetary policy', items: [t`When central banks raise rates, new bonds pay more, so existing bonds must fall in price until their yield matches.`, t`Example: the ECB raised rates sharply from 2022, and bond prices fell around the world.`] },
                { label: '2. Inflation expectations', items: [t`Higher expected inflation erodes fixed coupons, so investors demand higher nominal yields (Fisher effect).`] },
                { label: '3. Credit risk / default risk', items: [t`If the issuer looks riskier (e.g. a ratings downgrade), investors demand a higher yield spread.`, t`Example: Irish and Greek government bond yields soared during the 2010–12 eurozone debt crisis, then fell as risk eased.`] },
                { label: '4. Time to maturity (term structure)', items: [t`Longer bonds are more sensitive to rate changes (longer duration), so they usually offer a **term premium**.`, t`The yield curve shape changes with expectations about future rates.`] },
                { label: '5. Liquidity', items: [t`Bonds that are hard to sell pay a liquidity premium.`] },
                { label: '6. Economic conditions and "flight to safety"', items: [t`In a crisis, investors buy safe government bonds (yields fall) and sell corporate bonds (yields rise).`] },
                { label: '7. Supply and demand', items: [t`Heavy government borrowing raises supply and pushes yields up; central bank buying (quantitative easing) pushes them down.`] },
              ],
            },
          ],
          tips: ['Use one numerical example of the price–yield relationship and at least two real-world examples (ECB 2022 rate rises, the eurozone crisis).'],
          formulas: ['bond-pricing', 'fisher'],
        },
      ],
    },
  ],
};
