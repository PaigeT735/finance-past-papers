import { t } from '../../lib/tag.js';

/**
 * BUU22550 Introduction to Finance — April 2020 (Trinity Term, online exam)
 * Note the different mark split: Question 1 is 30 marks and the optional
 * questions are 35 marks each.
 */
export default {
  kind: 'paper',
  group: 'past',
  id: 'apr-2020',
  title: 'April 2020',
  short: 'Apr 2020',
  accent: 'monopoly',
  summary: t`BUU22550 Introduction to Finance, 30 April 2020 (online). 1.5 hours plus 30 minutes to upload. Answer Question 1 and two of Questions 2–5. **Different mark split:** Question 1 is 30 marks; Questions 2–5 are 35 marks each.`,
  meta: [
    ['Module', 'BUU22550 Introduction to Finance'],
    ['Sitting', 'Trinity Term 2020 · Thursday 30 April 2020, 12:00–14:00 (online, typed in Word)'],
    ['Examiner', 'Prof Martha O’Hagan Luff'],
    ['Rubric', 'Answer 3 questions: Question 1 (compulsory) plus two of Questions 2–5. If you answer more, only the first two optional answers are graded.'],
    ['Marks', 'Question 1: 30 marks (10 + 20) · Questions 2–5: 35 marks each (20 + 15) · Total 100'],
  ],
  timing: t`With 90 minutes of writing time: about **27 minutes on Question 1** and **31 minutes on each optional question**. For the 20-mark parts: a definition, 4–5 developed points with examples, evaluation, conclusion. For the 15-mark parts: a definition, 3–4 points, conclusion.`,
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      compulsory: true,
      parts: [
        {
          id: 'apr20-q1a',
          label: '1(a)',
          marks: 10,
          type: 'essay',
          topics: ['equity-bonds', 'bond-yields', 'cost-of-capital'],
          prompt: t`Why do firms closely monitor the price at which their shares and bonds trade in the secondary market?`,
          approach: t`The trap: in the **secondary** market investors trade with each other, so the firm receives **no money**. So why care? Because those prices set the **cost of future funding** in the primary market, measure performance, reveal what the market thinks and affect takeover risk. Make that point first.`,
          answer: [
            {
              heading: 'The key idea',
              list: [
                '**Primary market:** the firm sells new shares or bonds and receives the cash.',
                '**Secondary market:** investors trade existing securities with each other; the firm receives nothing.',
                'But secondary-market prices are the market\'s running verdict on the firm, and they decide the terms of any future primary issue.',
              ],
            },
            {
              heading: 'Reasons firms monitor these prices',
              list: [
                { label: '1. Cost of capital and future funding', items: [t`Share price → cost of equity: a higher price means fewer new shares must be issued to raise a given amount (less dilution).`, t`Bond prices → yields: if existing bonds trade at a discount, their yield is high, and new bonds will need a similar high coupon. E.g. a bond falling from 100 to 90 tells the firm its borrowing cost has risen.`, 'These feed directly into WACC, so they change which projects are worth doing.'] },
                { label: '2. Information about the market\'s view', items: ['Prices summarise investors\' expectations about future cash flows and risk.', 'A sharp fall after an announcement (e.g. an acquisition) signals investors think it destroys value.', 'Rising bond yields or widening credit spreads warn that investors see more default risk, possibly ahead of a rating downgrade.'] },
                { label: '3. Shareholder wealth and managers\' performance', items: ['The firm\'s objective is to maximise (long-term) shareholder value, which the share price measures.', 'Executive pay (options, share awards) is often tied to the share price, and boards judge CEOs on it.'] },
                { label: '4. Takeover threat', items: ['A depressed share price makes the firm cheap to acquire, and its managers may be replaced (the market for corporate control).'] },
                { label: '5. Timing financing decisions', items: ['Firms tend to issue equity when the share price is high and buy back shares when they think it is undervalued (market timing).'] },
                { label: '6. Covenants, ratings and reputation', items: ['Credit ratings, loan covenants and the confidence of customers, suppliers and employees can all react to large price falls.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['Although the firm receives no cash from secondary trading, those prices determine its cost of capital and access to new finance, signal what investors think of its decisions and expose managers to discipline. That is why firms watch them closely.'],
            },
          ],
          tips: ['Start by stating that the firm receives no cash from secondary trades: it shows you understand the question\'s twist.'],
          formulas: ['wacc', 'bond-pricing'],
        },
        {
          id: 'apr20-q1b',
          label: '1(b)',
          marks: 20,
          type: 'essay',
          topics: ['firm-objective', 'governance'],
          prompt: t`What are agency problems in the context of the firm? Describe some ways in which they can be addressed. Give examples.`,
          approach: 'Define (principal–agent, separation of ownership and control, information asymmetry, agency costs), give examples of the problems, then 5–6 remedies, each with an example and a comment on its limits. Agency problems appear in every paper, so this answer is worth knowing well.',
          answer: [
            {
              heading: 'Definition',
              list: [
                'Ownership is **separated from control**: shareholders (principals) own the firm; managers (agents) run it.',
                'An **agency problem** arises when managers pursue their own interests instead of maximising long-term shareholder value.',
                'It persists because of **information asymmetry** (managers know more) and because monitoring is costly.',
                '**Agency costs** = monitoring costs + bonding (incentive) costs + residual loss.',
                'A second agency problem exists between **shareholders and bondholders** (risk shifting, paying out cash that lenders rely on).',
              ],
            },
            {
              heading: 'Examples of agency problems',
              list: [
                { label: 'Excessive pay and perks', items: ['A CEO receiving a large bonus despite falling profits.'] },
                { label: 'Empire building', items: ['Overpaying for acquisitions to run a bigger firm: size raises pay and status. Jensen\'s free cash flow problem: managers with spare cash spend it rather than return it.'] },
                { label: 'Risk avoidance', items: ['Managers\' jobs depend on one firm, so they may reject risky positive-NPV projects that diversified shareholders would want.'] },
                { label: 'Short-termism', items: ['Cutting R&D or maintenance to hit this year\'s earnings target and bonus.'] },
                { label: 'Entrenchment', items: ['Resisting takeover bids that would benefit shareholders.'] },
              ],
            },
            {
              heading: 'Ways to address them',
              list: [
                { label: '1. Performance-related pay', items: ['Bonuses, shares, options, long-term incentive plans vesting over 3–5 years, clawbacks.', 'Example: a CEO paid in shares that vest only if total shareholder return beats peers over five years.', '**Limit:** short-term targets or options can encourage risk-taking and earnings management.'] },
                { label: '2. Independent board of directors', items: ['Non-executive directors monitor management, approve major investments and can fire the CEO; separate chair and CEO.', 'Example: a board rejecting an overpriced acquisition.', '**Limit:** directors may be close to the CEO or lack information.'] },
                { label: '3. Shareholder monitoring and activism', items: ['Voting at AGMs (say-on-pay), electing directors; institutional investors and activist funds pressure management.', '**Limit:** small shareholders free-ride on others\' monitoring.'] },
                { label: '4. Debt', items: ['Interest payments reduce free cash flow available to waste and impose discipline (leveraged buyouts rely on this).', '**Limit:** too much debt creates distress risk and the shareholder–bondholder conflict.'] },
                { label: '5. Threat of takeover', items: ['Poor performance → low share price → takeover → managers replaced.', '**Limit:** takeovers are costly, and defences (poison pills) can block them.'] },
                { label: '6. Audit, disclosure and regulation', items: ['External audit, accounting standards and governance codes reduce information asymmetry.', '**Limit:** audits can fail (e.g. Enron, Wirecard).'] },
                { label: '7. Dividends', items: ['Paying out spare cash leaves less for managers to waste and forces them back to the market for new funds.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['Agency problems cannot be eliminated, only reduced. The best approach combines long-term incentives, independent monitoring, engaged shareholders and transparency, while keeping in mind that each remedy has its own costs.'],
            },
          ],
          tips: ['Give every remedy an example **and** a limitation: the evaluation earns the top-band marks.'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'apr20-q2a',
          label: '2(a)',
          marks: 20,
          type: 'essay',
          topics: ['bond-yields', 'equity-bonds'],
          prompt: t`What would cause the coupon of a bond to be lower than its yield? Use examples to explain your answer.`,
          approach: t`Coupon < yield ⇔ the bond trades at a **discount** (price below face value). So the question is really "why do bond prices fall below par?". Define the terms, show the link with the pricing formula and a numerical example, then list the causes (rates, inflation, credit risk, downgrades, liquidity), each with an example. Contrast with premium bonds for completeness.`,
          answer: [
            {
              heading: 'Definitions',
              list: [
                '**Coupon rate:** the fixed annual interest as a % of face value, set at issue and **never changes**.',
                '**Yield to maturity (YTM):** the annual return an investor earns buying at **today\'s price** and holding to maturity, which changes every day with the price.',
                '**Current yield** = coupon ÷ price (ignores the capital gain).',
              ],
            },
            {
              heading: 'The link with the price',
              formula: t`P = \sum_{t=1}^{n}\frac{C}{(1+y)^t} + \frac{F}{(1+y)^n}`,
              table: {
                columns: ['Price vs face value', 'Relationship', 'Called'],
                rows: [[t`$P < F$`, 'coupon rate < current yield < YTM', 'Discount bond'], [t`$P = F$`, 'coupon rate = YTM', 'At par'], [t`$P > F$`, 'coupon rate > current yield > YTM', 'Premium bond']],
              },
              paras: ['Coupon < yield exactly when the bond trades **below par**: the buyer earns the coupon **plus** a capital gain as the price rises to face value at maturity.'],
            },
            {
              heading: 'Worked example',
              list: [
                t`€1,000 face value, 4% coupon (€40 a year), 5 years left, price €900.`,
                t`Current yield $= 40/900 = 4.44\%$.`,
                t`YTM solves $900 = \sum_{t=1}^{5}\frac{40}{(1+y)^t} + \frac{1000}{(1+y)^5}$, giving $y \approx 6.4\%$ (approximation: $\frac{40 + 100/5}{(1000 + 900)/2} = 6.3\%$).`,
                'So the investor earns the €40 coupons plus a €100 gain at maturity: 6.4% a year, well above the 4% coupon.',
                t`Reverse case: if market yields fell to 4%, a 6% coupon bond would trade at about €1,089 (premium), and its yield would be below its coupon.`,
              ],
            },
            {
              heading: 'What causes the yield to rise above the coupon',
              list: [
                { label: '1. Market interest rates rise after issue', items: ['New bonds pay higher coupons, so the old bond\'s price must fall until its yield matches.', 'Example: a bond issued at 2% in 2021, when rates were near zero, traded well below par after the ECB raised rates in 2022–23.'] },
                { label: '2. Higher expected inflation', items: ['Investors demand higher nominal yields to protect real returns, which pushes prices of fixed-coupon bonds down.'] },
                { label: '3. Higher credit risk of the issuer', items: ['Falling profits, more debt or industry trouble widen the credit spread.', 'Example: airline bonds in 2020.'] },
                { label: '4. A rating downgrade', items: ['A move from investment grade to "junk" forces some funds to sell, so the price falls and the yield rises.'] },
                { label: '5. Lower liquidity / market stress', items: ['Investors demand a liquidity premium if the bond is hard to sell, or flee to government bonds in a crisis.'] },
                { label: '6. Issued at a discount by design', items: ['A firm can deliberately set a coupon below the market yield at issue (deep-discount or zero-coupon bonds, where the coupon is 0 and the whole return is the price gain).'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['Because the coupon is fixed but the required return moves with interest rates, inflation, credit risk and liquidity, any rise in the required return pushes the price below par, so the coupon ends up below the yield.'],
            },
          ],
          tips: ['The phrase to get across: "coupon is fixed; yield moves; price and yield move inversely".', 'A small numerical example (price 900, coupon 4%, yield about 6.4%) makes the answer much stronger.'],
          formulas: ['bond-pricing'],
        },
        {
          id: 'apr20-q2b',
          label: '2(b)',
          marks: 15,
          type: 'essay',
          topics: ['cost-of-capital', 'capital-budgeting'],
          prompt: t`Why do investors and firms calculate the WACC of a company?`,
          approach: 'Define WACC with the formula, then reasons for firms and for investors, plus limitations. This question also appears in May 2022, Dec 2024 and Dec 2025.',
          answer: [
            {
              heading: 'Definition',
              formula: t`WACC = \frac{E}{V}r_E + \frac{D}{V}r_D(1 - T_c)`,
              list: ['The average return the firm must give **all** its providers of capital, weighted by market values; debt after tax because interest is tax-deductible.', 'It is the firm\'s **opportunity cost of capital** for average-risk investments.'],
            },
            {
              heading: 'Why firms calculate it',
              list: [
                { label: 'Investment appraisal', items: ['Discount rate (hurdle rate) in NPV: e.g. with WACC 10%, a project returning 14% on similar risk creates value.'] },
                { label: 'Performance measurement', items: ['Divisions must earn more than WACC; economic value added = NOPAT − WACC × capital.'] },
                { label: 'Capital structure', items: ['Testing whether more or less debt lowers the overall cost of funds (trade-off theory).'] },
                { label: 'Valuation and M&A', items: ['Discounting free cash flows at WACC values the whole firm or a target.'] },
                { label: 'Regulation', items: ['Regulators set allowed returns for utilities using WACC.'] },
              ],
            },
            {
              heading: 'Why investors calculate it',
              list: ['To value the firm (DCF) and decide whether shares are cheap or expensive.', 'To judge value creation: return on invested capital vs WACC.', 'As a risk signal: a rising WACC means the market sees more risk.', 'To compare firms.'],
            },
            {
              heading: 'Limitations',
              list: ['Correct only for projects with the **same risk** as the firm: riskier projects need a higher, project-specific rate.', 'Inputs (beta, market premium, growth) are estimates.', 'Assumes a constant capital structure.'],
            },
          ],
          tips: ['Cover both firms and investors: the question names both.'],
          formulas: ['wacc', 'capm'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'apr20-q3a',
          label: '3(a)',
          marks: 20,
          type: 'essay',
          topics: ['capital-budgeting'],
          prompt: t`What capital budgeting techniques might a firm use apart from NPV, and describe in words how they are calculated? What are their drawbacks, and why are they still used?`,
          approach: t`Four parts for each technique: **how it is calculated (in words)**, **drawbacks**, **why still used**. Cover payback, discounted payback, IRR, profitability index and ARR. A small example for each helps.`,
          answer: [
            {
              heading: '1. Payback period',
              list: [
                { label: 'How', items: ['Add up the cash inflows year by year until they equal the initial outlay; the time taken is the payback. Equal flows: outlay ÷ annual inflow (€100,000 ÷ €25,000 = 4 years). Accept if below a cut-off.'] },
                { label: 'Drawbacks', items: ['Ignores the time value of money and all cash flows after the cut-off; arbitrary cut-off; does not measure value.'] },
                { label: 'Why still used', items: ['Simple; shows how fast cash returns (liquidity); a rough risk screen, popular with small or cash-constrained firms.'] },
              ],
            },
            {
              heading: '2. Discounted payback',
              list: [
                { label: 'How', items: ['Discount each year\'s cash flow at the cost of capital, then add the discounted flows until they repay the outlay.'] },
                { label: 'Drawbacks', items: ['Still ignores cash flows after the cut-off; still needs an arbitrary cut-off.'] },
                { label: 'Why still used', items: ['Fixes payback\'s time-value problem while staying simple. A project that passes discounted payback has a positive NPV.'] },
              ],
            },
            {
              heading: '3. Internal rate of return (IRR)',
              formula: t`0 = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1 + IRR)^t}`,
              list: [
                { label: 'How', items: ['Find the discount rate that makes NPV zero, by trial and error and interpolation (or a spreadsheet). Accept if IRR > cost of capital.'] },
                { label: 'Drawbacks', items: ['Multiple IRRs if cash flows change sign more than once; wrong rankings for mutually exclusive projects (ignores scale and timing); assumes reinvestment at the IRR; one hurdle rate only.'] },
                { label: 'Why still used', items: ['A percentage return is intuitive and easy to communicate; it shows the margin of safety over the cost of capital.'] },
              ],
            },
            {
              heading: '4. Profitability index (PI)',
              formula: t`PI = \frac{PV(\text{future cash flows})}{C_0}`,
              list: [
                { label: 'How', items: ['Present value of future cash flows divided by the initial investment. Accept if PI > 1.'] },
                { label: 'Drawbacks', items: ['Can mis-rank mutually exclusive projects of different size; breaks down with constraints in several periods.'] },
                { label: 'Why still used', items: ['Under **capital rationing** it ranks projects by value per euro invested.'] },
              ],
            },
            {
              heading: '5. Accounting rate of return (ARR)',
              formula: t`ARR = \frac{\text{Average accounting profit}}{\text{Average investment}} \times 100`,
              list: [
                { label: 'How', items: ['Average annual profit after depreciation divided by the average book value of the investment ((cost + residual value) ÷ 2).'] },
                { label: 'Drawbacks', items: ['Uses profit, not cash; depends on accounting policies; ignores the time value of money; arbitrary target.'] },
                { label: 'Why still used', items: ['Uses familiar accounting numbers and matches how managers\' performance (return on capital) is reported.'] },
              ],
            },
            {
              heading: 'Why still used overall',
              list: ['Surveys of finance directors (e.g. Graham and Harvey, 2001) find IRR and NPV are the most used, with payback close behind.', 'Managers use several methods together: NPV for value, IRR for communication, payback for liquidity and risk.', 'Simplicity and familiarity matter when estimates are uncertain anyway.'],
            },
          ],
          tips: ['The question asks for calculation **in words**: describe the steps, don\'t just give formulas.', 'Answer all three sub-questions (how, drawbacks, why still used) for each technique.'],
          formulas: ['payback', 'irr', 'profitability-index', 'arr'],
        },
        {
          id: 'apr20-q3b',
          label: '3(b)',
          marks: 15,
          type: 'essay',
          topics: ['cost-of-capital'],
          prompt: t`Explain the intuition behind the Capital Asset Pricing Model.`,
          approach: 'Explain why: risk-free rate for time, premium for risk, only systematic risk rewarded because specific risk diversifies away, beta measures systematic risk. Example and limitations.',
          answer: [
            {
              heading: 'The model',
              formula: t`E(R_i) = R_f + \beta_i(R_m - R_f)`,
              list: ['Required return = reward for **time** (risk-free rate) + reward for **systematic risk** (beta × market risk premium).'],
            },
            {
              heading: 'The intuition',
              list: [
                { label: 'Investors are risk-averse', items: ['They hold risky assets only if they expect a higher return.'] },
                { label: 'Two kinds of risk', items: ['**Specific (unsystematic):** firm events such as a product recall or a CEO scandal.', '**Systematic (market):** recessions, interest rates, inflation, which affect almost all firms.'] },
                { label: 'Diversification', items: ['Holding many shares cancels out specific risk at almost no cost, so the market pays **no premium** for it.'] },
                { label: 'Only systematic risk is priced', items: ['What remains in a diversified portfolio is market risk, and an asset\'s contribution to it is measured by beta.'] },
                { label: 'Beta', items: [t`$\beta = 1$ moves with the market; $\beta = 1.5$ moves about 15% when the market moves 10%; $\beta < 1$ defensive (utilities); $\beta = 0$ earns $R_f$.`] },
              ],
            },
            {
              heading: 'Example',
              list: [t`$R_f = 3\%$, $R_m = 9\%$, $\beta = 1.5$: $E(R) = 3\% + 1.5 \times 6\% = 12\%$.`, 'All assets should plot on the **security market line**; one above it offers more than its risk requires (underpriced).'],
            },
            {
              heading: 'Uses and limitations',
              list: ['Used for the cost of equity in WACC and to assess fund managers.', 'Limitations: assumes rational diversified investors, borrowing and lending at the risk-free rate and a single period; beta is estimated from noisy past data; the market portfolio is unobservable; beta alone explains returns poorly, which led to multi-factor models (Fama–French).'],
            },
          ],
          tips: ['Key sentence: "investors are only rewarded for systematic risk because specific risk can be diversified away".'],
          formulas: ['capm'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      parts: [
        {
          id: 'apr20-q4a',
          label: '4(a)',
          marks: 20,
          type: 'essay',
          topics: ['capital-structure'],
          prompt: t`Describe the main theories which describe how firms decide on their capital structure, and how applicable are these theories in reality? Use examples.`,
          approach: 'M&M (with and without taxes), trade-off, pecking order, market timing (agency for extra depth); then a separate "in reality" section with evidence and examples.',
          answer: [
            {
              heading: '1. M&M (1958): irrelevance',
              list: ['Perfect markets (no taxes, bankruptcy or transaction costs, symmetric information, same borrowing rates).', t`$V_L = V_U$: value depends on the assets, not on how they are financed; investors can create "homemade leverage".`, t`Prop. II: $r_E = r_0 + (r_0 - r_D)\frac{D}{E}$, so WACC stays constant.`],
            },
            {
              heading: '2. M&M (1963): corporate taxes',
              list: [
                t`Interest is tax-deductible: $V_L = V_U + T_cD$; WACC falls as debt rises; implies (almost) 100% debt.`,
                t`**Example (corrected):** €1m of debt at 5% interest and a 25% tax rate saves $0.25 \times 0.05 \times 1{,}000{,}000 = €12{,}500$ of tax **a year**. If the debt is permanent, the **present value** of the shield is $T_cD = 0.25 \times 1{,}000{,}000 = €250{,}000$, which is the amount added to firm value. (The €250,000 is the PV, not the annual saving.)`,
              ],
            },
            {
              heading: '3. Trade-off theory',
              list: ['Benefit: tax shield. Costs: financial distress (direct bankruptcy costs; lost customers and suppliers, fire sales, under-investment) and agency costs of debt.', 'Target debt ratio where the marginal benefit equals the marginal cost.', 'Example: utilities with stable regulated cash flows carry high debt; tech start-ups with uncertain cash flows and intangible assets use equity.'],
            },
            {
              heading: '4. Pecking order theory',
              list: ['Asymmetric information: equity issues signal overvaluation, so prices fall on announcement.', 'Order: retained earnings → debt → equity last.', 'Predicts profitable firms borrow less: e.g. large tech firms funding investment from internal cash.'],
            },
            {
              heading: '5. Market timing',
              list: ['Issue equity when shares are highly valued, debt when rates are low (e.g. record corporate bond issuance when rates were near zero, and the IPO boom of 2020–21).'],
            },
            {
              heading: '6. Agency theory',
              list: ['Debt disciplines managers by reducing free cash flow (leveraged buyouts); too much debt creates shareholder–bondholder conflicts.'],
            },
            {
              heading: 'How applicable in reality?',
              list: [
                '**M&M:** unrealistic, but the essential benchmark: it shows capital structure matters only because of frictions.',
                '**Trade-off:** fits industry patterns, and most CFOs report target debt ratios and care about credit ratings (Graham and Harvey, 2001). But many profitable firms use less debt than the tax benefit suggests, and firms adjust slowly.',
                '**Pecking order:** fits how most investment is funded (mainly retained earnings) and the negative reaction to equity issues; fits poorly for young growth firms that issue equity first.',
                '**Market timing:** explains issuance waves.',
                'In practice firms combine these with flexibility, credit ratings and market conditions.',
              ],
            },
          ],
          tips: ['Your notes give €250,000 as the annual tax shield on €1m of debt: that figure is actually its **present value**. The annual saving is tax × interest.'],
          formulas: ['mm-propositions', 'wacc'],
        },
        {
          id: 'apr20-q4b',
          label: '4(b)',
          marks: 15,
          type: 'essay',
          topics: ['dividends', 'capital-structure'],
          prompt: t`Why would a company buy back its own shares, and how might this be perceived by the market? Use examples.`,
          approach: 'Define a buyback, give the reasons (return surplus cash, signal undervaluation, flexibility vs dividends, taxes, EPS, capital structure, offset dilution), then market perception: positive and negative signals. Include the EPS calculation and the warning that a higher EPS does not by itself create value.',
          answer: [
            {
              heading: 'What a buyback is',
              list: ['The firm repurchases its own shares (on the market or through a tender offer), reducing shares outstanding and returning cash to the sellers.', 'An alternative to a cash dividend.'],
            },
            {
              heading: 'Reasons',
              list: [
                { label: '1. Return surplus cash', items: ['When the firm has more cash than positive-NPV projects (also reduces the free cash flow agency problem).'] },
                { label: '2. Signal undervaluation', items: ['Managers who think the shares are cheap buy them back: an investment at a good price.'] },
                { label: '3. Flexibility', items: ['Unlike regular dividends, buybacks create no expectation of repetition and can be stopped without the negative signal of a dividend cut.'] },
                { label: '4. Taxes', items: ['Shareholders who sell pay capital gains tax only on the gain, and those who don\'t sell defer tax, often better than dividends taxed as income.'] },
                { label: '5. Raise EPS', items: [t`Net income €10m, 10m shares: EPS €1. Buy back 2m shares: $EPS = 10/8 = €1.25$ (+25%) with no change in profit.`] },
                { label: '6. Capital structure', items: ['Reduce equity to move towards the target debt ratio (sometimes financed by borrowing).'] },
                { label: '7. Offset dilution', items: ['Cancel out the new shares issued to employees through share-option schemes.'] },
              ],
            },
            {
              heading: 'How the market may see it',
              list: [
                { label: 'Positive', items: ['Confidence: management thinks the shares are undervalued (share prices typically rise on announcement).', 'Discipline: cash returned rather than wasted.', 'Strong cash generation.'] },
                { label: 'Negative', items: ['The firm has run out of good investment ideas (low growth).', 'EPS engineering: higher EPS without higher profit, especially if executive bonuses are tied to EPS.', 'Debt-financed buybacks increase financial risk.', 'If managers overpay (buying when shares are expensive), value goes from remaining to selling shareholders.'] },
              ],
            },
            {
              heading: 'Examples',
              list: ['**Apple** has returned hundreds of billions of dollars mainly through buybacks since 2012, alongside a modest dividend, reflecting huge cash flows.', 'Large buyback programmes are common among big US firms; critics argue some come at the expense of investment.'],
            },
            {
              heading: 'Key evaluation point',
              paras: ['A buyback at a fair price **does not create value** by itself: the firm is smaller by exactly the cash paid out, and the higher EPS is offset by higher financial risk. Value is created only if the shares were undervalued or if returning the cash stops it being wasted.'],
            },
          ],
          tips: ['Show the EPS calculation, then say why higher EPS ≠ higher value: that evaluation lifts the answer.'],
          formulas: ['gordon-growth'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'apr20-q5a',
          label: '5(a)',
          marks: 20,
          type: 'essay',
          topics: ['dividends'],
          prompt: t`Why did Modigliani and Miller argue that dividend policy should be irrelevant? Describe in reality the potential considerations for a firm when deciding on its dividend policy.`,
          approach: 'Part 1: the M&M argument with assumptions and a homemade-dividend numerical example. Part 2: real-world considerations (signalling, clienteles, taxes, investment opportunities, liquidity, stability, agency, issue costs, legal limits), each with an example.',
          answer: [
            {
              heading: 'M&M (1961): why dividends are irrelevant',
              list: [
                'Firm value is set by its **investment policy** (the cash flows its assets generate), not by how those cash flows are split between dividends and retained earnings.',
                'With investment fixed, a bigger dividend must be funded by issuing new shares (or the firm holds less cash), which exactly offsets the dividend\'s value to shareholders.',
                'On the ex-dividend date the share price falls by the dividend, so shareholder wealth is unchanged.',
                { label: 'Assumptions', items: ['Perfect capital markets: no taxes, no transaction or issue costs.', 'Symmetric information.', 'Rational investors.', 'Fixed investment policy.'] },
              ],
            },
            {
              heading: 'Homemade dividends: a worked example',
              table: {
                columns: ['', 'Firm pays €1 dividend', 'Firm pays nothing; investor sells 10 shares'],
                rows: [['Shares held', '100 at €9 (ex-dividend) = €900', '90 at €10 = €900'], ['Cash', '€100', '€100'], ['Total wealth', '€1,000', '€1,000']],
              },
              paras: ['An investor who wants cash can create it by selling shares; one who does not want a dividend can reinvest it. So investors should be indifferent.'],
            },
            {
              heading: 'In reality: considerations for the firm',
              list: [
                { label: '1. Investment opportunities', items: ['Retain earnings for positive-NPV projects (residual policy); growth firms pay little (e.g. Alphabet paid no dividend until 2024).'] },
                { label: '2. Signalling', items: ['Investors read dividend changes as news about future earnings; cuts cause share prices to fall (Shell\'s 2020 cut).'] },
                { label: '3. Stability (Lintner)', items: ['Firms smooth dividends and avoid cuts, raising them only when sure they can be sustained.'] },
                { label: '4. Clientele', items: ['Income investors (retirees, pension funds) vs growth investors; changing policy forces costly portfolio switching.'] },
                { label: '5. Taxes', items: ['Dividends are often taxed as income each year, capital gains only on sale, so buybacks may suit high-tax investors.'] },
                { label: '6. Liquidity and debt', items: ['Profit is not cash: working capital needs, debt repayments and covenants come first.'] },
                { label: '7. Issue costs and pecking order', items: ['Paying dividends and then issuing shares to fund projects wastes issue costs.'] },
                { label: '8. Agency', items: ['Payouts limit managers\' scope to waste free cash flow.'] },
                { label: '9. Legal limits', items: ['Dividends only from distributable reserves; regulators restricted bank dividends in 2020.'] },
                { label: '10. Form of payout', items: ['Regular dividend, special dividend or buyback, depending on how permanent the surplus cash is.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['M&M is right in a perfect market, but frictions make dividend policy matter. Firms should fund good projects first, then pay out surplus cash in a stable, predictable way suited to their shareholders.'],
            },
          ],
          tips: ['The homemade-dividend table shows you understand M&M properly, which is quick to write and earns marks.'],
          formulas: ['gordon-growth'],
        },
        {
          id: 'apr20-q5b',
          label: '5(b)',
          marks: 15,
          type: 'essay',
          topics: ['working-capital'],
          prompt: t`Describe the components of working capital and the considerations that the firm must weigh up when managing its working capital.`,
          approach: 'List the components with a line of explanation each, give the cash conversion cycle, then the considerations (liquidity vs profitability for each component, plus financing strategy: conservative, aggressive, matching).',
          answer: [
            {
              heading: 'Components',
              formula: t`NWC = \text{Current assets} - \text{Current liabilities}`,
              table: {
                columns: ['Current assets', 'Current liabilities'],
                rows: [['**Cash** and short-term investments', '**Accounts payable** (trade credit from suppliers)'], ['**Accounts receivable** (customers on credit)', '**Short-term debt** (overdrafts, loans due within a year)'], ['**Inventory**: raw materials, work in progress, finished goods', '**Accruals** (wages, taxes owed)']],
              },
            },
            {
              heading: 'Cash conversion cycle',
              formula: t`CCC = \text{Inventory days} + \text{Receivable days} - \text{Payable days}`,
              paras: ['The days cash is tied up in operations. Shortening it releases cash (e.g. collecting faster, holding less stock).'],
            },
            {
              heading: 'Considerations to weigh up',
              list: [
                { label: 'Liquidity vs profitability', items: ['Enough working capital to pay bills and avoid insolvency, but not so much that cash sits idle.'] },
                { label: 'Inventory', items: ['Stock-outs vs holding costs and obsolescence; just-in-time saves money but is vulnerable to supply shocks (2021 chip shortage).'] },
                { label: 'Credit to customers', items: ['More sales vs slower cash and bad debts; credit checks, collection policy, factoring.'] },
                { label: 'Paying suppliers', items: ['Keeping cash longer vs losing early-payment discounts (missing "2/10 net 30" costs about 37% a year) and supplier goodwill.'] },
                { label: 'Cash', items: ['Safety buffer vs low return and agency risk.'] },
                { label: 'Financing working capital', items: ['**Conservative:** finance most working capital long term; safe, more expensive.', '**Aggressive:** rely on short-term borrowing; cheaper, but refinancing risk.', '**Matching (moderate):** permanent working capital funded long term, seasonal peaks short term.'] },
                { label: 'Industry and seasonality', items: ['Retailers build stock before Christmas; supermarkets collect cash instantly and pay suppliers later, so they can run a negative cycle.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['Working capital management balances liquidity, profitability and risk across cash, receivables, inventory and payables, and chooses a financing strategy that matches the firm\'s business.'],
            },
          ],
          tips: ['Working capital appears in all five papers: learn one strong answer and adapt it.'],
          formulas: ['working-capital'],
        },
      ],
    },
  ],
};
