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
              paras: [
                t`Schoenmaker & Schramade argue that the firm should aim for **long-term value creation**, meaning **integrated value**: financial value together with social and environmental value, for shareholders and other stakeholders. This goes further than maximising short-term profit or this year's share price.`,
              ],
            },
            {
              heading: 'Why managers may not act in line with it',
              list: [
                t`**The principal–agent problem.** Shareholders (principals) own the firm, but managers (agents) run it. Their interests differ, and shareholders cannot see everything managers do, so there is information asymmetry.`,
                t`**Short-termism.** Bonuses and share options are often tied to annual profit, quarterly earnings or the current share price. Managers may cut R&D, training, maintenance or sustainability spending to hit targets, even though this destroys value later.`,
                t`**Career concerns and short tenure.** A typical CEO stays for only a few years. Long-term benefits arrive after they have left, while the costs fall on their own track record.`,
                t`**Empire building and perks.** Managers may grow the firm for status and pay (pay rises with firm size), make poor acquisitions, or consume perks rather than return cash to investors (Jensen's free cash flow problem).`,
                t`**Risk aversion.** A manager's job and wealth are concentrated in one firm, so they may reject risky but positive-NPV projects that diversified shareholders would accept.`,
                t`**Externalities are not priced.** Social and environmental costs (emissions, poor labour practices) often do not appear in profit, so a profit-focused manager ignores them even though they create risks for long-term value.`,
                t`**Investor short-termism.** Pressure from short-horizon investors and analysts' quarterly forecasts can push managers towards short-term results.`,
              ],
            },
            {
              heading: 'Measures to align managers with long-term value',
              list: [
                t`**Long-term executive pay.** Pay part of the remuneration in shares or options that vest over several years (e.g. 3–5 years), with clawback clauses. Include long-term and ESG targets, not just this year's earnings. Rewards then depend on lasting value.`,
                t`**Managerial share ownership.** Require executives to hold shares, so they gain and lose alongside shareholders.`,
                t`**An effective, independent board.** Non-executive directors monitor management, approve strategy, and set and assess pay. Separate the CEO and chair roles, and use audit and remuneration committees.`,
                t`**Shareholder engagement and stewardship.** Large, long-term investors (pension funds, stewardship-code signatories) engage with management, vote at AGMs (including say-on-pay) and push for long-term strategy. Schoenmaker & Schramade stress the role of long-term investors.`,
                t`**Transparent and integrated reporting.** Audited accounts plus reporting on social and environmental performance (e.g. integrated reports, sustainability disclosures) reduce information asymmetry and make long-term performance visible.`,
                t`**Market for corporate control.** A badly run, undervalued firm can be taken over and its managers replaced, which disciplines management.`,
                t`**Debt discipline.** Debt commits the firm to paying out cash, which limits the free cash flow managers can waste.`,
                t`**Regulation and governance codes.** Corporate governance codes, company law and directors' duties set minimum standards of behaviour.`,
              ],
            },
            {
              heading: 'Evaluation (for top marks)',
              paras: [
                t`None of these measures is perfect, and each has costs. Share-based pay can encourage manipulation of the share price around vesting dates. Boards can be captured by the CEO. Monitoring is costly (these are **agency costs**). A combination of incentives, monitoring and transparency works best.`,
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
              paras: [t`Working capital is the money tied up in a firm's day-to-day operations: the short-term assets it needs to run, less the short-term liabilities that help finance them.`],
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
              paras: [t`Too little working capital risks running out of cash, missing sales through stock-outs and failing to pay suppliers, which is a liquidity risk. Too much ties up money that earns little and could be invested elsewhere, which is an opportunity cost. The firm chooses the level that balances **liquidity** against **profitability**.`],
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
              heading: 'Payback period',
              paras: [t`The time it takes for undiscounted cash inflows to recover the initial investment. Accept the project if payback is within a cut-off period, e.g. 3 years.`],
              formula: t`\text{e.g. } \frac{\text{€}10{,}000}{\text{€}2{,}500 \text{ per year}} = 4 \text{ years}`,
              list: [
                t`**Uses:** simple, quick and easy to communicate. A rough screen for liquidity and risk, useful when cash is tight or the future is very uncertain (e.g. politically risky countries, fast-changing technology).`,
                t`**Drawbacks:** ignores the time value of money and **all cash flows after the cut-off**. The cut-off is arbitrary. It is biased against long-term projects such as R&D or infrastructure.`,
              ],
            },
            {
              heading: 'Discounted payback',
              paras: [t`The same idea, but using discounted cash flows.`],
              list: [
                t`**Uses:** fixes the time-value problem.`,
                t`**Drawbacks:** still ignores cash flows after the cut-off, and the cut-off is still arbitrary.`,
              ],
            },
            {
              heading: 'Internal rate of return (IRR)',
              paras: [t`The discount rate that makes NPV equal to zero. Accept the project if IRR exceeds the cost of capital (the hurdle rate).`],
              formula: t`0 = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1+\text{IRR})^t}`,
              list: [
                t`**Uses:** uses all cash flows and the time value of money. Managers like a percentage they can compare with the cost of capital. It usually gives the same accept/reject decision as NPV for an independent, conventional project.`,
                t`**Drawbacks:** if cash flows change sign more than once there can be **multiple IRRs** (or none). It can **rank mutually exclusive projects wrongly**, because it ignores scale (a 50% return on €1 versus 20% on €1m) and timing. It implicitly assumes cash flows are reinvested at the IRR. It cannot handle different discount rates in different years.`,
                t`**Modified IRR (MIRR)** fixes the reinvestment problem by compounding inflows at the cost of capital.`,
              ],
            },
            {
              heading: 'Profitability index (PI)',
              formula: t`PI = \frac{\text{PV of future cash flows}}{\text{Initial investment}} \qquad \text{accept if } PI > 1`,
              list: [
                t`**Uses:** shows value created per euro invested, so it is the right tool under **capital rationing**: rank projects by PI and choose the highest until the budget runs out.`,
                t`**Drawbacks:** like IRR, it can mis-rank mutually exclusive projects of different sizes. It breaks down when the budget limit applies over several periods.`,
              ],
            },
            {
              heading: 'Accounting (book) rate of return, ARR',
              formula: t`ARR = \frac{\text{Average accounting profit}}{\text{Average investment}}\times 100`,
              list: [
                t`**Uses:** uses familiar accounting figures and connects with how managers' and divisions' performance is reported.`,
                t`**Drawbacks:** based on **accounting profit, not cash flow**, so it depends on depreciation choices. It ignores the time value of money, and the target return is arbitrary.`,
              ],
            },
            {
              heading: 'Conclusion',
              paras: [t`Surveys (e.g. Graham & Harvey) show managers use IRR and payback almost as often as NPV, often alongside it. NPV remains the theoretically correct rule because it measures the euro value added to shareholders. The other methods are best used as supporting checks.`],
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
              paras: [t`NPV is mechanically correct, but the inputs ($C_0$, the forecast cash flows $C_t$, the discount rate $r$ and the project life $n$) are estimates about an uncertain future. If they are biased or wrong, a project with a positive NPV on paper can destroy value, and a good project can be rejected.`],
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
                t`**Pros:** higher expected long-run returns (an equity risk premium). Unlimited upside through capital gains and growing dividends. Ownership and voting rights. A partial hedge against inflation over the long run, because firms can raise prices. Usually very liquid if listed.`,
                t`**Cons:** volatile prices and a risk of large losses. Dividends are discretionary, not contractual. Shareholders are **residual claimants**, paid last in liquidation, and could lose everything.`,
              ],
            },
            {
              heading: 'Bonds',
              list: [
                t`**Pros:** contractual coupons and repayment of principal give predictable income. Bondholders rank **ahead of shareholders** in bankruptcy. Lower volatility. Government bonds are close to risk-free in nominal terms.`,
                t`**Cons:** returns are capped at the coupon plus principal. **Interest-rate risk**: bond prices fall when yields rise, and longer maturities fall more. **Inflation risk**: fixed payments lose real value. **Credit / default risk** with corporate bonds. Some bonds are less liquid.`,
              ],
            },
            {
              heading: 'Why hold a mixture: diversification',
              list: [
                t`Stock and bond returns are **not perfectly correlated** (historically often low or negative), so combining them lowers portfolio risk by more than it lowers expected return. This is Markowitz portfolio theory.`,
                t`Bonds provide steady income and cushion falls in equity markets. Equities provide long-term growth.`,
                t`The mix matches the investor's **risk tolerance, time horizon and income needs**. A young investor may hold mostly equity; someone near retirement shifts towards bonds (life-cycle / target-date funds, the traditional "60/40" portfolio).`,
                t`Rebalancing a mixed portfolio enforces buying low and selling high.`,
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
              heading: 'Modigliani & Miller (1958): no taxes',
              formula: t`V_L = V_U, \qquad r_E = r_A + \frac{D}{E}\,(r_A - r_D)`,
              paras: [t`In perfect markets (no taxes, no bankruptcy costs, symmetric information), capital structure is **irrelevant**: firm value depends only on its assets' cash flows. More debt raises the cost of equity exactly enough to leave the WACC unchanged (Proposition II). This is the benchmark the other theories relax.`],
            },
            {
              heading: 'MM with corporate taxes',
              formula: t`V_L = V_U + T_c D`,
              paras: [t`Interest is tax-deductible, so debt creates a **tax shield** worth $T_cD$ (for permanent debt). Taken literally, firms should be almost 100% debt-financed, which we do not observe.`],
            },
            {
              heading: 'Static trade-off theory',
              formula: t`V_L = V_U + PV(\text{tax shield}) - PV(\text{costs of financial distress})`,
              paras: [t`Firms balance the tax benefit of debt against the expected costs of financial distress: direct bankruptcy costs, plus indirect costs such as lost customers, underinvestment and asset substitution. The optimal debt ratio is where the marginal benefit equals the marginal cost.`],
            },
            {
              heading: 'Pecking order theory (Myers & Majluf, 1984)',
              paras: [t`Managers know more than investors (asymmetric information). Issuing equity signals that the shares may be overvalued, so the price falls. Firms therefore prefer **internal funds, then debt, then equity as a last resort**. There is no target ratio; leverage reflects past profitability. This explains why very profitable firms often have **low** debt.`],
            },
            {
              heading: 'Agency theory / free cash flow (Jensen, 1986)',
              paras: [t`Debt disciplines managers by committing cash to interest payments, reducing waste of free cash flow. But too much debt creates conflicts with lenders, such as risk-shifting and debt overhang. Market-timing theory adds that firms issue equity when share prices are high.`],
            },
            {
              heading: 'How the optimal structure varies across firms',
              list: [
                t`**Stable, profitable firms with tangible assets** (utilities, real estate, infrastructure) can carry high debt: steady cash flows, valuable tax shields and good collateral mean low distress costs.`,
                t`**High-growth tech and biotech firms** use little debt: volatile cash flows, intangible assets that lose value in distress, little taxable profit to shield, and valuable growth options that debt overhang could kill.`,
                t`**Mature cash-rich firms** (e.g. Apple) may borrow to fund buybacks or to discipline management, even with large cash piles.`,
                t`**Small and private firms** depend on bank debt and internal funds, because issuing equity is costly for them.`,
                t`**Country, tax and industry norms** also matter. A higher corporate tax rate makes debt more attractive.`,
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
              paras: [
                t`€6 is the dividend the firm is **expected** to pay, so it is already $D_1$: do not multiply it by $(1+g)$.`,
                t`The two methods disagree (15.05% vs 10.82%). A good answer says so, picks one with a reason (CAPM uses the market's pricing of systematic risk; the DGM depends heavily on the assumed growth rate), or **averages** them: $r_E = 12.94\%$, giving $WACC \approx 7.30\%$.`,
              ],
            },
            {
              heading: 'Sense check',
              paras: [t`Pricing a 10-year, 3% annual-coupon bond at a 4.12% yield gives a price of about 91.0, which matches the quoted price. So 4.12% is the right market cost of debt, and the bond trades below par because its coupon is below the market yield.`],
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
              paras: [t`WACC is the blended, after-tax return the firm must earn on its existing assets to satisfy all its investors, both lenders and shareholders, weighted by the market value of each source of finance. It is the **opportunity cost of capital** for a project with the same risk as the firm as a whole.`],
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
              paras: [t`Both make the future harder to predict and shift wealth arbitrarily between groups. That is why central banks such as the ECB target low, stable inflation of around 2%.`],
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
              paras: [t`Managers know more about future cash flows than investors. Because a dividend is costly to keep paying, a change in dividend is a credible **signal** of what managers expect.`],
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
              paras: [t`In MM's perfect-market world, dividend policy is irrelevant: investors can create "homemade dividends" by selling shares. Cutting a dividend to fund positive-NPV projects can be value-creating if it is explained clearly to the market. In practice, communication is crucial.`],
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
              paras: [t`Dividends in years 1–3 contribute about €10.75 of present value. The terminal value contributes about €43.59, roughly 80% of the price. That is why the long-run growth assumption matters so much.`],
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
