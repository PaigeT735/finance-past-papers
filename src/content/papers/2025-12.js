import { t } from '../../lib/tag.js';

/**
 * BUU22550 Introduction to Finance — December 2025 (Semester 1, 2025/26)
 * Model answers: written for revision. Essay answers give more points than you
 * need, so pick the strongest and explain each one well.
 */
export default {
  kind: 'paper',
  id: 'dec-2025',
  title: 'December 2025',
  short: 'Dec 2025',
  accent: 'production',
  summary: t`BUU22550 Introduction to Finance, 18 December 2025. Two hours, closed book. Answer Question 1 and two of Questions 2–5.`,
  meta: [
    ['Module', 'BUU22550 Introduction to Finance'],
    ['Sitting', 'Semester 1 2025/26 · 18 December 2025, 09:30–11:30'],
    ['Examiner', 'Martha O’Hagan Luff'],
    ['Rubric', 'Answer 3 questions: Question 1 (compulsory) plus two of Questions 2–5. Only the first two optional answers are graded.'],
    ['Marks', 'Question 1: 40 marks · Questions 2–5: 30 marks each · Total 100'],
    ['Calculator', 'Non-programmable calculators permitted'],
  ],
  timing: t`Spend time in proportion to marks: about **48 minutes on Question 1** and **36 minutes on each optional question**, keeping 5 minutes at the end to check calculations.`,
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      compulsory: true,
      parts: [
        {
          id: 'dec25-q1a',
          label: '1(a)',
          marks: 20,
          type: 'essay',
          topics: ['firm-objective', 'governance'],
          prompt: t`According to Schoenmaker & Schramade, long-term value creation should be the objective of the firm. However, managers may not always act in ways that align with this objective. Why might this be the case? Describe at least four measures that may be used to try to mitigate for this.`,
          approach: t`Two jobs: **explain why** managers drift from long-term value (agency problem, short-termism, incentives), then **describe at least four mitigation measures**, saying how each one realigns managers. Twenty marks means roughly ten well-explained points.`,
          answer: [
            {
              heading: 'The objective: long-term value creation',
              list: [
                t`Schoenmaker & Schramade argue the firm should aim for **long-term value creation**.`,
                t`That means **integrated value**: financial value **plus** social and environmental value.`,
                t`It is created for shareholders **and** other stakeholders (employees, customers, society).`,
                t`It goes further than maximising short-term profit or this year's share price.`,
              ],
            },
            {
              heading: 'Why managers may not act in line with it',
              list: [
                { label: 'The principal–agent problem', items: [t`Shareholders (principals) own the firm; managers (agents) run it.`, t`Their interests differ.`, t`Shareholders cannot see everything managers do (information asymmetry).`] },
                { label: 'Short-termism', items: [t`Bonuses and options are often tied to annual profit, quarterly earnings or the current share price.`, t`Managers may cut R&D, training, maintenance or sustainability spending to hit targets.`, t`This boosts results now but destroys value later.`] },
                { label: 'Career concerns and short tenure', items: [t`A typical CEO stays only a few years.`, t`Long-term benefits arrive after they leave; the costs fall on their own record.`] },
                { label: 'Empire building and perks', items: [t`Pay and status rise with firm size, so managers may over-expand or make poor acquisitions.`, t`They may spend on perks instead of returning cash (Jensen's free cash flow problem).`] },
                { label: 'Risk aversion', items: [t`A manager's job and wealth are tied to one firm.`, t`So they may reject risky but positive-NPV projects that diversified shareholders would want.`] },
                { label: 'Externalities are not priced', items: [t`Social and environmental costs (emissions, poor labour practices) often do not show up in profit.`, t`A profit-focused manager ignores them, even though they threaten long-term value.`] },
                { label: 'Investor short-termism', items: [t`Short-horizon investors and analysts' quarterly forecasts push managers towards short-term results.`] },
              ],
            },
            {
              heading: 'Measures to align managers with long-term value',
              list: [
                { label: '1. Long-term executive pay', items: [t`Pay part of remuneration in shares or options that vest over 3–5 years.`, t`Add clawback clauses for later-discovered problems.`, t`Include long-term and ESG targets, not just this year's earnings.`] },
                { label: '2. Managerial share ownership', items: [t`Require executives to hold shares.`, t`They then gain and lose alongside shareholders.`] },
                { label: '3. An effective, independent board', items: [t`Non-executive directors monitor management and approve strategy.`, t`Separate the CEO and chair roles.`, t`Audit and remuneration committees oversee accounts and pay.`] },
                { label: '4. Shareholder engagement and stewardship', items: [t`Large long-term investors (e.g. pension funds) engage with management.`, t`They vote at AGMs, including say-on-pay.`, t`Schoenmaker & Schramade stress the role of long-term investors.`] },
                { label: '5. Transparent and integrated reporting', items: [t`Audited accounts plus reporting on social and environmental performance.`, t`Reduces information asymmetry and makes long-term performance visible.`] },
                { label: '6. Market for corporate control', items: [t`A badly run, undervalued firm can be taken over and its managers replaced.`] },
                { label: '7. Debt discipline', items: [t`Interest payments commit cash, limiting free cash flow managers can waste.`] },
                { label: '8. Regulation and governance codes', items: [t`Governance codes, company law and directors' duties set minimum standards.`] },
              ],
            },
            {
              heading: 'Evaluation (for top marks)',
              list: [
                t`No measure is perfect, and each has costs (**agency costs**).`,
                t`Share-based pay can encourage manipulating the share price around vesting dates.`,
                t`Boards can be captured by a powerful CEO.`,
                t`Monitoring is expensive.`,
                t`**Best approach:** a combination of incentives, monitoring and transparency.`,
              ],
            },
          ],
          tips: [
            'The question says "at least four": give four or five measures and explain the mechanism for each, rather than listing eight with no explanation.',
            'Name the theory (principal–agent / agency costs) and refer to Schoenmaker & Schramade’s long-term, integrated value idea. It shows you know the course framing.',
          ],
        },
        {
          id: 'dec25-q1b',
          label: '1(b)',
          marks: 20,
          type: 'essay',
          topics: ['working-capital'],
          prompt: t`What is meant by working capital and what are its components? What factors would affect how much working capital a firm decides to hold? Use examples to illustrate your answer.`,
          approach: t`Define (with the formula), list the components on both sides, then explain the **factors**, each with a **real or realistic example**. Bringing in the cash conversion cycle adds depth.`,
          answer: [
            {
              heading: 'Definition',
              list: [
                t`The money tied up in a firm's **day-to-day operations**.`,
                t`Short-term assets it needs to run, **less** the short-term liabilities that help finance them.`,
              ],
              formula: t`\text{Net working capital} = \text{Current assets} - \text{Current liabilities}`,
            },
            {
              heading: 'Components',
              table: {
                columns: ['Current assets', 'Current liabilities'],
                rows: [
                  ['Cash and marketable securities', 'Accounts payable (trade creditors)'],
                  ['Accounts receivable (trade debtors)', 'Short-term borrowing (overdraft, loans due within a year)'],
                  ['Inventory: raw materials, work in progress, finished goods', 'Accrued expenses (wages, taxes owed)'],
                ],
              },
            },
            {
              heading: 'The cash conversion cycle',
              paras: [t`How much working capital a firm needs depends on how long cash is tied up between paying suppliers and collecting from customers:`],
              formula: t`\text{CCC} = \text{Inventory days} + \text{Receivable days} - \text{Payable days}`,
              list: [
                t`Inventory days $= \dfrac{\text{Inventory}}{\text{COGS}}\times 365$, receivable days $= \dfrac{\text{Receivables}}{\text{Sales}}\times 365$, payable days $= \dfrac{\text{Payables}}{\text{COGS}}\times 365$.`,
                t`A longer cycle means cash is tied up for longer, so the firm needs more working capital.`,
              ],
            },
            {
              heading: 'Factors that affect how much working capital a firm holds',
              list: [
                t`**Industry and business model.** Supermarkets sell for cash within days but pay suppliers after 30–60 days, so they can run **negative** working capital. Shipbuilders or aircraft manufacturers hold work in progress for years, so they need a lot. A consultancy holds almost no inventory.`,
                t`**Credit policy towards customers.** Offering 60-day terms to win business-to-business customers raises receivables. Card or cash sales (retail) keep them low.`,
                t`**Credit terms from suppliers.** Long supplier credit (e.g. 90 days) finances inventory and reduces the net working capital needed.`,
                t`**Seasonality.** A toy retailer builds inventory before Christmas, and agricultural firms before harvest, so working capital peaks at certain times of year.`,
                t`**Growth.** A fast-growing firm must finance more inventory and receivables before the cash comes in. Many profitable but growing firms fail through overtrading: running out of cash.`,
                t`**Production and supply-chain approach.** Just-in-time manufacturing (e.g. Toyota) and build-to-order (Dell) keep inventory low. Firms with unreliable supply chains hold buffer stock.`,
                t`**Uncertainty and the precautionary motive.** Firms with volatile cash flows, or those that saw supply shocks during COVID-19, hold more cash and stock as a safety buffer.`,
                t`**Cost and availability of finance.** When interest rates are high, holding cash and inventory is expensive, so firms run leaner. Firms with easy access to credit lines need smaller cash balances.`,
                t`**Inflation and prices.** Rising input prices increase the value of inventory and receivables that must be financed.`,
              ],
            },
            {
              heading: 'The trade-off',
              list: [
                t`**Too little:** risk of running out of cash, stock-outs and missed supplier payments (liquidity risk).`,
                t`**Too much:** money tied up earning little that could be invested elsewhere (opportunity cost).`,
                t`**Goal:** the level that balances **liquidity** against **profitability**.`,
              ],
            },
          ],
          tips: [
            'The question asks for examples: attach one to every factor. Named firms (Tesco, Toyota, Dell) make the answer stand out.',
            'Write the working capital formula and, ideally, the cash conversion cycle. It turns a descriptive answer into an analytical one.',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'dec25-q2a',
          label: '2(a)',
          marks: 15,
          type: 'essay',
          topics: ['capital-budgeting'],
          prompt: t`Apart from NPV, describe the different methods that can be used for the purpose of capital budgeting. What are the uses and drawbacks of each method?`,
          approach: t`For each method give **how it works (formula)**, **the decision rule**, **when it is useful** and **its drawbacks**. Cover payback, discounted payback, IRR (and MIRR), profitability index and the accounting rate of return.`,
          answer: [
            {
              heading: '1. Payback period',
              paras: [t`Time taken for undiscounted cash inflows to recover the initial investment. Accept if payback is within a cut-off (e.g. 3 years).`],
              formula: t`\text{e.g. } \frac{\text{€}10{,}000}{\text{€}2{,}500 \text{ per year}} = 4 \text{ years}`,
              list: [
                { label: 'Uses / advantages', items: [t`Simple and quick to calculate.`, t`Easy to explain to non-finance managers.`, t`Rough screen for liquidity: shows how fast cash comes back.`, t`Useful when cash is tight or the future is very uncertain (e.g. risky countries, fast-changing technology).`] },
                { label: 'Drawbacks', items: [t`Ignores the time value of money.`, t`Ignores **all** cash flows after the cut-off.`, t`The cut-off period is arbitrary.`, t`Biased against long-term projects (R&D, infrastructure).`] },
              ],
            },
            {
              heading: '2. Discounted payback',
              paras: [t`Same idea, but using **discounted** cash flows.`],
              list: [
                { label: 'Uses / advantages', items: [t`Fixes the time-value problem of simple payback.`, t`Still simple and liquidity-focused.`] },
                { label: 'Drawbacks', items: [t`Still ignores cash flows after the cut-off.`, t`Cut-off is still arbitrary.`] },
              ],
            },
            {
              heading: '3. Internal rate of return (IRR)',
              paras: [t`The discount rate that makes NPV = 0. Accept if IRR > cost of capital (hurdle rate).`],
              formula: t`0 = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1+\text{IRR})^t}`,
              list: [
                { label: 'Uses / advantages', items: [t`Uses all cash flows and the time value of money.`, t`A percentage is intuitive to compare with the cost of capital.`, t`Same accept/reject decision as NPV for a single, conventional project.`] },
                { label: 'Drawbacks', items: [t`**Multiple IRRs** (or none) if cash flows change sign more than once.`, t`Can **rank mutually exclusive projects wrongly**: ignores scale (50% on €1 vs 20% on €1m) and timing.`, t`Assumes cash flows are reinvested at the IRR.`, t`Cannot handle different discount rates in different years.`] },
                { label: 'Fix', items: [t`**Modified IRR (MIRR)** reinvests inflows at the cost of capital instead.`] },
              ],
            },
            {
              heading: '4. Profitability index (PI)',
              formula: t`PI = \frac{\text{PV of future cash flows}}{\text{Initial investment}} \qquad \text{accept if } PI > 1`,
              list: [
                { label: 'Uses / advantages', items: [t`Shows value created per euro invested.`, t`Best tool under **capital rationing**: rank projects by PI and pick the highest until the budget runs out.`, t`Uses the time value of money.`] },
                { label: 'Drawbacks', items: [t`Can mis-rank mutually exclusive projects of different sizes.`, t`Breaks down when the budget limit applies over several periods.`] },
              ],
            },
            {
              heading: '5. Accounting (book) rate of return, ARR',
              formula: t`ARR = \frac{\text{Average accounting profit}}{\text{Average investment}}\times 100`,
              list: [
                { label: 'Uses / advantages', items: [t`Uses familiar accounting figures.`, t`Links to how managers' and divisions' performance is reported.`] },
                { label: 'Drawbacks', items: [t`Based on **accounting profit, not cash flow**.`, t`Depends on depreciation choices.`, t`Ignores the time value of money.`, t`Target return is arbitrary.`] },
              ],
            },
            {
              heading: 'Conclusion',
              list: [
                t`Surveys (e.g. Graham & Harvey) show managers use IRR and payback almost as often as NPV, usually alongside it.`,
                t`NPV remains the theoretically correct rule: it measures the euro value added for shareholders.`,
                t`The other methods are best used as supporting checks.`,
              ],
            },
          ],
          tips: ['The question asks for uses and drawbacks of each method. A two-column structure for each method (uses / drawbacks) makes this easy to mark.'],
        },
        {
          id: 'dec25-q2b',
          label: '2(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-budgeting', 'cash-flow-estimation'],
          prompt: t`An NPV analysis is only as good as its inputs. What is meant by this statement and how might the inputs used be incorrect?`,
          approach: t`Explain "garbage in, garbage out" using the NPV formula: the answer is only as reliable as the **cash flows**, the **discount rate** and the **timing**. Then give specific ways each can go wrong, and finish with how firms guard against it (sensitivity, scenario and break-even analysis).`,
          answer: [
            {
              heading: 'What the statement means',
              formula: t`NPV = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1+r)^t}`,
              list: [
                t`The NPV formula is mechanically correct ("garbage in, garbage out").`,
                t`But its inputs are **estimates** about an uncertain future: $C_0$, the cash flows $C_t$, the discount rate $r$ and the life $n$.`,
                t`If they are biased or wrong, a "positive-NPV" project can destroy value.`,
                t`And a genuinely good project can be rejected.`,
              ],
            },
            {
              heading: 'How the cash flow inputs can be wrong',
              list: [
                t`**Optimistic forecasts.** Managers who want their project approved overstate sales, prices or market share and understate costs. This is optimism bias, and it is also an agency issue.`,
                t`**Not using incremental cash flows.** Common errors: including **sunk costs** (e.g. past R&D); ignoring **opportunity costs** (e.g. a building the firm already owns could be rented out); ignoring **side effects** such as cannibalisation of existing sales; including **allocated overheads** that do not change.`,
                t`**Forgetting working capital.** Investment in inventory and receivables at the start, recovered at the end, is easy to leave out.`,
                t`**Tax and depreciation errors.** Depreciation is not a cash flow, but its tax shield is.`,
                t`**Mixing financing with operating cash flows.** Subtracting interest payments double-counts the cost of debt, which is already in the discount rate.`,
                t`**Inconsistent inflation treatment.** Discounting real cash flows at a nominal rate (or the reverse) biases NPV.`,
                t`**Wrong project life or terminal value.** The terminal value often makes up a large share of NPV, and small changes in the assumed growth rate change it a lot.`,
              ],
            },
            {
              heading: 'How the discount rate can be wrong',
              list: [
                t`Using the **company-wide WACC** for a project whose risk differs from the firm's average (e.g. a risky new venture). It should be a **project-specific** rate.`,
                t`Errors in estimating beta, the market risk premium or the cost of debt. Adding arbitrary "fudge factors" for risk.`,
                t`Small changes in $r$ have large effects on long-lived projects.`,
              ],
            },
            {
              heading: 'Guarding against bad inputs',
              list: [
                t`**Sensitivity analysis:** change one input at a time to see which ones matter most.`,
                t`**Scenario analysis:** best, base and worst cases with consistent assumptions.`,
                t`**Break-even analysis:** find the sales level at which NPV equals zero.`,
                t`**Monte Carlo simulation**, independent review of forecasts, and **post-audits** comparing actual results with forecasts.`,
                t`Ask **where the positive NPV comes from**: is there a genuine competitive advantage?`,
              ],
            },
          ],
          tips: ['A short numerical illustration earns marks, e.g. "if forecast sales are 10% too high, the NPV can turn negative".'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'dec25-q3a',
          label: '3(a)',
          marks: 15,
          type: 'essay',
          topics: ['equity-bonds'],
          prompt: t`What are the pros and cons for an investor of investing in equity and bonds, and why might they decide to invest in a mixture of both?`,
          approach: t`Compare the two assets on **return, risk, income, priority and inflation**, then explain diversification: imperfect correlation lowers portfolio risk, and the right mix depends on the investor's horizon and risk tolerance.`,
          answer: [
            {
              heading: 'Equity (shares)',
              list: [
                { label: 'Pros', items: [t`Higher expected long-run returns (the equity risk premium).`, t`Unlimited upside: capital gains and growing dividends.`, t`Ownership and voting rights.`, t`Partial long-run hedge against inflation (firms can raise prices).`, t`Listed shares are very liquid.`] },
                { label: 'Cons', items: [t`Volatile prices; risk of large losses.`, t`Dividends are discretionary, not guaranteed.`, t`Shareholders are **residual claimants**: paid last in liquidation.`, t`Could lose the entire investment.`] },
              ],
            },
            {
              heading: 'Bonds',
              list: [
                { label: 'Pros', items: [t`Contractual coupons and principal: predictable income.`, t`Bondholders rank **ahead of shareholders** in bankruptcy.`, t`Lower volatility than shares.`, t`Government bonds are close to risk-free in nominal terms.`] },
                { label: 'Cons', items: [t`Returns are capped at coupons plus principal.`, t`**Interest-rate risk:** prices fall when yields rise (more so for long maturities).`, t`**Inflation risk:** fixed payments lose real value.`, t`**Credit / default risk** with corporate bonds.`, t`Some bonds are less liquid.`] },
              ],
            },
            {
              heading: 'Why hold a mixture: diversification',
              list: [
                t`Stock and bond returns are **not perfectly correlated** (historically often low or negative).`,
                t`So combining them lowers portfolio risk by more than it lowers expected return (Markowitz portfolio theory).`,
                t`Bonds give steady income and cushion equity falls; equities give long-term growth.`,
                t`The mix matches the investor's **risk tolerance, time horizon and income needs**.`,
                t`Young investors hold mostly equity; near retirement, shift towards bonds (life-cycle funds, the classic "60/40").`,
                t`Rebalancing a mixed portfolio forces "buy low, sell high".`,
              ],
            },
          ],
          tips: ['Mention that the 2022 period, when stocks and bonds fell together, showed the correlation is not always negative. A nuance like that earns evaluation marks.'],
        },
        {
          id: 'dec25-q3b',
          label: '3(b)',
          marks: 15,
          type: 'essay',
          topics: ['capital-structure'],
          prompt: t`Describe the main theories that attempt to predict how much debt and equity a firm will choose to finance its investments. How might the optimal capital structure vary for different types of firms?`,
          approach: t`Go in order: MM without taxes, MM with taxes, trade-off theory, pecking order, and agency / free cash flow. Include the key equations. Then apply them to different firm types.`,
          answer: [
            {
              heading: '1. Modigliani & Miller (1958): no taxes',
              formula: t`V_L = V_U, \qquad r_E = r_A + \frac{D}{E}\,(r_A - r_D)`,
              list: [
                t`Assumes perfect markets: no taxes, no bankruptcy costs, symmetric information.`,
                t`Capital structure is **irrelevant**: value depends only on the assets' cash flows.`,
                t`More debt raises the cost of equity exactly enough to keep WACC unchanged (Proposition II).`,
                t`It is the benchmark the other theories relax.`,
              ],
            },
            {
              heading: '2. MM with corporate taxes',
              formula: t`V_L = V_U + T_c D`,
              list: [
                t`Interest is tax-deductible, so debt creates a **tax shield** worth $T_cD$ (for permanent debt).`,
                t`Firm value rises with debt.`,
                t`Taken literally, firms should be almost 100% debt, which we do not observe.`,
              ],
            },
            {
              heading: '3. Static trade-off theory',
              formula: t`V_L = V_U + PV(\text{tax shield}) - PV(\text{costs of financial distress})`,
              list: [
                t`**Benefit of debt:** the tax shield.`,
                t`**Cost of debt:** financial distress: direct bankruptcy costs, plus indirect costs (lost customers, underinvestment, asset substitution).`,
                t`**Optimal debt ratio:** where the marginal benefit equals the marginal cost.`,
              ],
            },
            {
              heading: '4. Pecking order theory (Myers & Majluf, 1984)',
              list: [
                t`Managers know more than investors (asymmetric information).`,
                t`Issuing equity signals the shares may be overvalued, so the price falls.`,
                t`So firms prefer: **internal funds → debt → equity** (last resort).`,
                t`No target ratio: leverage reflects past profitability.`,
                t`Explains why very profitable firms often have **low** debt.`,
              ],
            },
            {
              heading: '5. Agency theory / free cash flow (Jensen, 1986)',
              list: [
                t`Debt disciplines managers: interest payments use up free cash flow they might waste.`,
                t`But too much debt creates conflicts with lenders (risk-shifting, debt overhang).`,
                t`**Market timing** adds that firms issue equity when share prices are high.`,
              ],
            },
            {
              heading: 'How the optimal structure varies across firms',
              list: [
                { label: 'High debt suits: stable, profitable firms with tangible assets', items: [t`Examples: utilities, real estate, infrastructure.`, t`Steady cash flows, valuable tax shields, good collateral, low distress costs.`] },
                { label: 'Low debt suits: high-growth tech and biotech', items: [t`Volatile cash flows.`, t`Intangible assets lose value in distress.`, t`Little taxable profit to shield.`, t`Debt overhang could kill valuable growth options.`] },
                { label: 'Mature, cash-rich firms (e.g. Apple)', items: [t`May borrow anyway to fund buybacks or discipline management.`] },
                { label: 'Small and private firms', items: [t`Rely on bank debt and internal funds, because issuing equity is costly.`] },
                { label: 'Other factors', items: [t`Country tax rates: higher corporate tax makes debt more attractive.`, t`Industry norms.`] },
              ],
            },
          ],
          tips: ['Putting the equations ($V_L = V_U + T_cD$ and MM Proposition II) on the page quickly shows the examiner you know the theory precisely.'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      parts: [
        {
          id: 'dec25-q4a',
          label: '4(a)',
          marks: 15,
          type: 'calc',
          topics: ['cost-of-capital'],
          prompt: t`An Irish firm has issued a €50 million 10-year bond which is trading at 91. The bond's coupon is 3% and its yield to maturity is 4.12%. The yield on risk-free government bonds is 2%. The firm has 500,000 shares outstanding, trading at €68 per share. The company's beta is 1.45 and the expected return on the ISEQ Index (a proxy for the market return) is 11%. The firm is expected to pay a dividend of €6 per share and its growth rate is estimated to be 2%. The corporate tax rate is 25%. What is the firm's weighted average cost of capital?`,
          approach: t`Use **market values** for the weights, the **YTM (not the coupon)** for the cost of debt, and CAPM for the cost of equity. Because a dividend and growth rate are also given, show the dividend growth model too and state which you use.`,
          given: [
            ['Debt face value', '€50m, trading at 91 (91% of face)'],
            [t`Cost of debt $r_D$`, '4.12% (YTM)'],
            [t`Risk-free rate $r_f$`, '2%'],
            ['Shares', '500,000 at €68'],
            [t`Beta $\beta$`, '1.45'],
            [t`Market return $r_m$`, '11%'],
            [t`Next dividend $D_1$, growth $g$`, '€6, 2%'],
            [t`Tax rate $T_c$`, '25%'],
          ],
          working: [
            t`**Market value of equity:** $E = 500{,}000 \times €68 = €34{,}000{,}000$`,
            t`**Market value of debt:** $D = €50{,}000{,}000 \times 0.91 = €45{,}500{,}000$`,
            t`**Total value:** $V = E + D = €79{,}500{,}000$, so $\dfrac{E}{V} = \dfrac{34}{79.5} = 0.4277$ and $\dfrac{D}{V} = \dfrac{45.5}{79.5} = 0.5723$`,
            t`**Cost of equity (CAPM):** $r_E = r_f + \beta(r_m - r_f) = 2\% + 1.45(11\% - 2\%) = 2\% + 13.05\% = 15.05\%$`,
            t`**After-tax cost of debt:** $r_D(1 - T_c) = 4.12\% \times 0.75 = 3.09\%$. Use the YTM, the return lenders currently require, not the 3% coupon.`,
            t`**WACC:** $$WACC = \frac{E}{V}r_E + \frac{D}{V}r_D(1-T_c) = 0.4277(15.05\%) + 0.5723(3.09\%) = 6.44\% + 1.77\% = 8.20\%$$`,
          ],
          result: t`**WACC ≈ 8.20%** (with CAPM as the cost of equity)`,
          answer: [
            {
              heading: 'Alternative: cost of equity from the dividend growth model',
              formula: t`r_E = \frac{D_1}{P_0} + g = \frac{6}{68} + 0.02 = 8.82\% + 2\% = 10.82\% \;\Rightarrow\; WACC = 0.4277(10.82\%) + 0.5723(3.09\%) = 6.40\%`,
              list: [
                t`€6 is the dividend the firm is **expected** to pay, so it is already $D_1$: do not multiply by $(1+g)$.`,
                t`The two methods disagree: 15.05% (CAPM) vs 10.82% (DGM).`,
                { label: 'What to do in the exam', items: [t`Say that they disagree.`, t`Pick one with a reason: CAPM prices systematic risk; the DGM depends heavily on the growth assumption.`, t`Or **average** them: $r_E = 12.94\%$, giving $WACC \approx 7.30\%$.`] },
              ],
            },
            {
              heading: 'Sense check',
              list: [
                t`A 10-year, 3% annual-coupon bond priced at a 4.12% yield is worth about **91.0**, matching the quoted price.`,
                t`So 4.12% is the right market cost of debt.`,
                t`It trades below par because its coupon (3%) is below the market yield.`,
              ],
            },
          ],
          tips: [
            'Three classic traps: using the coupon (3%) instead of the YTM; using face value (€50m) instead of market value (€45.5m); forgetting the (1 − T) tax adjustment on debt.',
            'Keep at least four decimal places in the weights until the end. Rounding early is how 8.20% turns into 8.21%.',
          ],
          formulas: ['wacc', 'capm', 'dividend-growth-cost-of-equity', 'bond-pricing'],
        },
        {
          id: 'dec25-q4b',
          label: '4(b)',
          marks: 15,
          type: 'essay',
          topics: ['cost-of-capital', 'capital-budgeting'],
          prompt: t`Why might the WACC of a firm be calculated?`,
          approach: t`Explain what the WACC represents (the **opportunity cost** of the firm's capital, the minimum return investors require), then its uses, then its **limitations**, which earn evaluation marks.`,
          answer: [
            {
              heading: 'What WACC represents',
              list: [
                t`The blended, **after-tax** return the firm must earn to satisfy all its investors (lenders and shareholders).`,
                t`Weighted by the **market value** of each source of finance.`,
                t`It is the **opportunity cost of capital** for a project with the same risk as the firm as a whole.`,
              ],
            },
            {
              heading: 'Why firms calculate it',
              list: [
                t`**Hurdle rate for investment appraisal.** It is the discount rate in NPV and the benchmark for IRR: projects of average risk that earn more than WACC create value.`,
                t`**Valuing the firm or a division.** Discount free cash flow to the firm at WACC, as in DCF valuation for M&A, IPOs and impairment tests.`,
                t`**Performance measurement.** Economic Value Added (EVA) = NOPAT − WACC × capital employed shows whether a division earned more than its cost of capital.`,
                t`**Capital structure decisions.** Seeing how WACC changes as leverage changes (tax shield versus distress costs) helps set the target debt ratio.`,
                t`**Regulation.** Regulators of utilities (e.g. energy, water, telecoms) set allowed returns using a WACC.`,
                t`**Communicating with investors.** It signals the return management is targeting.`,
              ],
            },
            {
              heading: 'Limitations',
              list: [
                t`It is only valid for projects with the **same risk and financing** as the firm. A risky new venture needs a higher, project-specific rate; otherwise the firm over-invests in risky projects and under-invests in safe ones.`,
                t`It depends on estimates (beta, market risk premium, the growth assumptions in the DGM), and different methods give different answers (8.20% vs 6.40% in part (a)).`,
                t`It assumes the capital structure stays constant.`,
              ],
            },
          ],
          tips: ['Linking back to part (a), e.g. "the firm would use its 8.20% WACC to discount its projects’ cash flows…", makes the answer feel joined up.'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'dec25-q5a',
          label: '5(a)',
          marks: 10,
          type: 'essay',
          topics: ['macro'],
          prompt: t`Why might high inflation and deflation be considered destabilising for an economy?`,
          approach: t`Ten marks: about five points on each, focused on how they disrupt **decisions, debt, interest rates and investment**. Use a real example of each.`,
          answer: [
            {
              heading: 'High inflation',
              list: [
                t`**Uncertainty:** high inflation is usually volatile, making it hard to plan prices, wages and investment. Real returns become unpredictable, so firms delay investment.`,
                t`**Erodes purchasing power** of savings and fixed incomes (pensions, bonds), redistributing wealth from savers and lenders to borrowers.`,
                t`**Higher interest rates:** central banks raise rates to fight inflation (e.g. the ECB from 2022), which raises borrowing costs and can cause a recession. Bond prices fall.`,
                t`**Distorts price signals:** firms struggle to tell relative price changes from general inflation, so resources are misallocated. There are menu costs and "shoe-leather" costs too.`,
                t`**Wage–price spirals and loss of competitiveness.** In the extreme, hyperinflation (Weimar Germany, Zimbabwe) destroys confidence in money.`,
              ],
              formula: t`\text{Fisher: } (1+i) = (1+r)(1+\pi)`,
            },
            {
              heading: 'Deflation',
              list: [
                t`**Delayed spending:** if prices are expected to fall, consumers and firms wait, so demand falls, prices fall further, and a deflationary spiral can follow.`,
                t`**Higher real debt burden (Fisher's debt deflation):** debts are fixed in nominal terms, but prices and incomes fall, so defaults and bankruptcies rise.`,
                t`**Monetary policy is constrained:** nominal rates cannot go much below zero (the zero lower bound), so real rates $r \approx i - \pi$ stay too high to stimulate the economy.`,
                t`**Falling profits lead to wage cuts and unemployment**, and asset prices fall.`,
                t`**Example:** Japan's "lost decades" of weak growth and deflation from the 1990s.`,
              ],
            },
            {
              heading: 'Conclusion',
              list: [
                t`Both make the future harder to predict.`,
                t`Both shift wealth arbitrarily between groups.`,
                t`That is why central banks like the ECB target low, stable inflation of about 2%.`,
              ],
            },
          ],
        },
        {
          id: 'dec25-q5b',
          label: '5(b)',
          marks: 10,
          type: 'essay',
          topics: ['dividends'],
          prompt: t`Although dividends are not contractual, why might it be an important decision for a firm to begin paying dividends, cease paying dividends or cut the amount of dividends that they pay?`,
          approach: t`The key idea is **signalling under asymmetric information**: markets read dividend changes as management's view of future earnings. Add Lintner's smoothing, clientele effects and agency costs, and contrast these with MM's dividend irrelevance.`,
          answer: [
            {
              heading: 'Dividends as signals',
              paras: [t`Managers know more about future cash flows than investors. A dividend is costly to keep paying, so changing it is a credible **signal** of what managers expect.`],
              list: [
                t`**Initiating dividends** signals confidence that cash flows are permanent and sufficient. Share prices usually react positively. It also marks a shift from growth phase to maturity.`,
                t`**Cutting or stopping dividends** signals that management expects lower future earnings or cash problems, and prices often fall sharply. Example: many banks and oil majors cut in 2020, and their prices dropped.`,
              ],
            },
            {
              heading: 'Why firms treat dividends as a commitment',
              list: [
                t`**Lintner's model:** managers smooth dividends towards a long-run target payout and dislike cuts, so dividends are "sticky". Once started, investors expect them to continue.`,
                t`**Clientele effect:** income-seeking investors (pension funds, retirees) hold the shares for the dividend, and a cut forces them to sell.`,
                t`**Agency costs:** paying out free cash flow stops managers wasting it (Jensen). A cut may suggest managers are keeping cash for poor projects.`,
                t`**Reputation and access to capital:** a record of reliable dividends supports the share price and makes future equity raising cheaper.`,
              ],
            },
            {
              heading: 'Counterpoint',
              list: [
                t`In MM's perfect-market world, dividend policy is **irrelevant**: investors can create "homemade dividends" by selling shares.`,
                t`Cutting a dividend to fund positive-NPV projects can **create** value.`,
                t`In practice, clear communication with the market is crucial.`,
              ],
            },
          ],
        },
        {
          id: 'dec25-q5c',
          label: '5(c)',
          marks: 10,
          type: 'calc',
          topics: ['valuation'],
          prompt: t`A firm has just paid a dividend of €4 per share. Its dividends are expected to grow at a rate of 5% for the next 3 years and after that to grow at a rate of 3% indefinitely. If the required rate of return on the firm's equity is 11%, what should the value of the firm's share price be according to the dividend discount model?`,
          approach: t`A **two-stage DDM**. "Just paid" means €4 is $D_0$. Grow it for three years at 5%, find the Gordon-growth value at the end of year 3 using $D_4$, then discount everything back to today.`,
          given: [
            [t`$D_0$ (just paid)`, '€4'],
            [t`$g_1$ (years 1–3)`, '5%'],
            [t`$g_2$ (year 4 onwards)`, '3%'],
            [t`$r$`, '11%'],
          ],
          working: [
            t`**Stage 1 dividends:** $D_1 = 4(1.05) = 4.20$; $\;D_2 = 4.20(1.05) = 4.41$; $\;D_3 = 4.41(1.05) = 4.6305$`,
            t`**First dividend of stage 2:** $D_4 = D_3(1.03) = 4.6305 \times 1.03 = 4.7694$`,
            t`**Value at the end of year 3 (Gordon growth):** $$P_3 = \frac{D_4}{r - g_2} = \frac{4.7694}{0.11 - 0.03} = €59.62$$`,
            t`**Discount to today:** $$P_0 = \frac{4.20}{1.11} + \frac{4.41}{1.11^2} + \frac{4.6305 + 59.62}{1.11^3} = 3.78 + 3.58 + 46.98$$`,
          ],
          result: t`$P_0 \approx$ **€54.34** per share`,
          answer: [
            {
              heading: 'Breakdown',
              list: [
                t`Dividends in years 1–3: about **€10.75** of present value.`,
                t`Terminal value: about **€43.59**, roughly 80% of the price.`,
                t`So the long-run growth assumption matters most.`,
              ],
            },
          ],
          tips: [
            'The most common mistake is using D₃ instead of D₄ in the terminal value, or forgetting to discount P₃ back three years.',
            '"Just paid" means D₀; "expected to pay" means D₁. Read the wording carefully.',
          ],
          formulas: ['gordon-growth', 'multi-stage-ddm'],
        },
      ],
    },
  ],
};
