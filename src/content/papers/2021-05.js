import { t } from '../../lib/tag.js';

/**
 * BUU22550 Introduction to Finance — May 2021 (Semester 2, 2020/21, online exam)
 * Model answers in bullet form. Essay answers give more points than you
 * need: pick the strongest and explain each one.
 */
export default {
  kind: 'paper',
  id: 'may-2021',
  title: 'May 2021',
  short: 'May 2021',
  accent: 'welfare',
  summary: t`BUU22550 Introduction to Finance, 11 May 2021 (online). 1.5 hours plus 30 minutes to upload. Answer Question 1 and two of Questions 2–5.`,
  meta: [
    ['Module', 'BUU22550 Introduction to Finance'],
    ['Sitting', 'Semester 2 2020/21 · Tuesday 11 May 2021, 12:00–14:00 (online, typed in Word)'],
    ['Examiner', 'Prof Martha O’Hagan Luff'],
    ['Rubric', 'Answer 3 questions: Question 1 (compulsory) plus two of Questions 2–5. If you answer more, only the first two optional answers are graded.'],
    ['Marks', 'Question 1: 40 marks (4 × 10) · Questions 2–5: 30 marks each · Total 100'],
  ],
  timing: t`With 90 minutes of writing time: about **36 minutes on Question 1** (9 per part) and **27 minutes on each optional question**. This paper is almost all theory, so plan each essay as headings before writing.`,
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      number: 1,
      compulsory: true,
      parts: [
        {
          id: 'may21-q1a',
          label: '1(a)',
          marks: 10,
          type: 'essay',
          topics: ['bond-yields', 'equity-bonds', 'macro'],
          prompt: t`Describe the factors that would cause the price of a corporate bond trading in the secondary market to fall, using examples.`,
          approach: t`Start from the pricing formula: the price is the present value of fixed cash flows, so the price falls whenever the **required yield rises** (or the expected cash flows fall). Then go through each cause of a higher yield with an example. A small numerical example earns easy marks.`,
          answer: [
            {
              heading: 'The key relationship',
              formula: t`P = \sum_{t=1}^{n}\frac{C}{(1+y)^t} + \frac{F}{(1+y)^n}`,
              list: [
                t`$C$ = coupon, $F$ = face value, $n$ = years left, $y$ = yield (the return investors require).`,
                t`The coupon and face value are **fixed**, so the price moves **inversely** with the required yield.`,
                t`The required yield on a corporate bond = risk-free rate + **credit spread** (for default risk) + premia for liquidity and inflation uncertainty. Anything that raises any of these lowers the price.`,
              ],
            },
            {
              heading: 'Worked example',
              list: [t`A 5-year bond with a 4% annual coupon and €100 face value is priced at **€100** when the market yield is 4%.`, t`If yields on similar bonds rise to 6%: $P = 4 \times 4.2124 + 100/1.06^5 = 16.85 + 74.73 = €91.58$, a fall of about 8.4%.`, t`A 10-year bond with the same coupon would fall to €85.28: **longer bonds are more sensitive** to yield changes (higher duration).`],
            },
            {
              heading: 'Factors that cause the price to fall',
              list: [
                { label: '1. Rising market interest rates', items: ['New bonds offer higher coupons, so existing low-coupon bonds must fall in price until their yield matches.', 'Example: when the ECB raised rates sharply in 2022–23, prices of existing euro corporate bonds fell.'] },
                { label: '2. Higher expected inflation', items: ['Inflation erodes the real value of fixed coupons, so investors demand higher nominal yields.', 'Central banks are also expected to raise rates, adding to the fall.'] },
                { label: '3. Higher default (credit) risk', items: ['Falling profits, rising debt or a weak economy make repayment less certain, so the credit spread widens.', 'Example: during the 2020 COVID shock, airline bonds fell sharply as investors feared defaults.'] },
                { label: '4. A credit rating downgrade', items: ['Agencies such as Moody\'s, S&P and Fitch rate issuers; a downgrade raises the required yield.', 'A fall from investment grade (BBB−) to "junk" forces many funds to sell, pushing the price down further ("fallen angels").'] },
                { label: '5. Firm-specific bad news', items: ['A scandal, failed product, lawsuit or the firm taking on large new debt (e.g. a debt-financed takeover) lowers expected recovery for existing bondholders.'] },
                { label: '6. Reduced liquidity', items: ['If the bond becomes hard to sell (few buyers, market stress), investors demand a liquidity premium.'] },
                { label: '7. Other features', items: ['Removal of protective covenants, or the bond becoming subordinated to new senior debt.', 'A general "flight to quality" in a crisis, when investors sell corporate bonds and buy government bonds.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['A bond\'s price falls whenever investors demand a higher yield, whether because of the market (interest rates, inflation, liquidity) or the issuer (credit risk, downgrades, news). Longer-maturity and lower-coupon bonds are hit hardest.'],
            },
          ],
          tips: ['Open with "price and yield move inversely" and the formula: it frames the whole answer.', 'Split causes into market-wide and firm-specific: it shows structure.'],
          formulas: ['bond-pricing', 'fisher'],
        },
        {
          id: 'may21-q1b',
          label: '1(b)',
          marks: 10,
          type: 'essay',
          topics: ['cost-of-capital'],
          prompt: t`Explain the intuition behind the CAPM.`,
          approach: t`"Intuition" means explaining **why** the formula has the form it does: compensation for time (risk-free rate) plus compensation for **systematic** risk only, because diversification removes specific risk. Define beta, give an example, and finish with limitations.`,
          answer: [
            {
              heading: 'The model',
              formula: t`E(R_i) = R_f + \beta_i\,(R_m - R_f)`,
              list: [t`$R_f$: risk-free rate (government bond yield).`, t`$\beta_i$: sensitivity of the asset to market movements.`, t`$R_m - R_f$: market risk premium, the extra return for holding the market rather than risk-free assets.`],
            },
            {
              heading: 'The intuition, step by step',
              list: [
                { label: '1. Two kinds of compensation', items: [t`**Time:** even a risk-free investment must pay $R_f$ for giving up money now.`, t`**Risk:** investors are risk-averse, so riskier assets must offer higher expected returns.`] },
                { label: '2. Two kinds of risk', items: ['**Unsystematic (specific) risk**: events affecting one firm (a failed drug trial, a CEO scandal).', '**Systematic (market) risk**: events affecting almost all firms (recessions, interest rates, inflation, pandemics).'] },
                { label: '3. Diversification removes specific risk', items: ['In a portfolio of many shares, firm-specific surprises cancel out.', 'Investors can diversify cheaply, so the market will **not pay a premium** for bearing risk they could have avoided.'] },
                { label: '4. Only systematic risk is rewarded', items: ['What remains in a diversified portfolio is market risk, which cannot be diversified away.', 'So an asset\'s required return depends on how much **market risk** it adds, measured by beta, not on its total volatility.'] },
                { label: '5. Beta scales the market premium', items: [t`$\beta = 1$: moves with the market, earns the market return.`, t`$\beta > 1$: amplifies market moves (e.g. airlines, luxury goods, tech), so it requires more.`, t`$\beta < 1$: defensive (utilities, supermarkets), so it requires less.`, t`$\beta = 0$: no market risk, earns $R_f$. Negative beta: a hedge, earns less than $R_f$ (gold is sometimes cited).`] },
              ],
            },
            {
              heading: 'Example',
              list: [t`$R_f = 3\%$, $R_m = 9\%$, $\beta = 1.5$: $\;E(R) = 3\% + 1.5(6\%) = 12\%$.`, t`The share carries 1.5 times the market's systematic risk, so it earns 1.5 times the market premium on top of the risk-free rate.`, 'Plotted against beta, required returns lie on a straight line: the **security market line**. A share plotting above it offers more than its risk requires (underpriced).'],
            },
            {
              heading: 'Why it matters, and its limits',
              list: [
                'Used to estimate the **cost of equity** for WACC and to judge whether fund managers beat the market on a risk-adjusted basis.',
                { label: 'Limitations', items: ['Assumes rational, diversified investors who can borrow and lend at the risk-free rate.', 'Betas are estimated from past data and are unstable over time.', 'The "market portfolio" is unobservable (an index is a proxy).', 'Empirically, beta alone explains returns poorly: size and value effects led to multi-factor models (Fama–French).'] },
                'Despite this, it is still the most widely used model because the core idea, that **only undiversifiable risk is rewarded**, is sound.',
              ],
            },
          ],
          tips: ['The single most important sentence: "Investors are only rewarded for systematic risk, because specific risk can be diversified away for free."'],
          formulas: ['capm'],
        },
        {
          id: 'may21-q1c',
          label: '1(c)',
          marks: 10,
          type: 'essay',
          topics: ['working-capital'],
          prompt: t`Describe what is meant by working capital and what are the potential conflicts for a company when deciding how much to hold.`,
          approach: 'Define with the formula, explain the cash conversion cycle, then the core trade-off (liquidity vs profitability) for each component. Same topic as May 2022 Q2(b), but for 10 marks: keep it tighter.',
          answer: [
            {
              heading: 'Definition',
              formula: t`NWC = \text{Current assets} - \text{Current liabilities}`,
              list: ['**Current assets:** cash, inventory, receivables (money owed by customers).', '**Current liabilities:** payables (owed to suppliers), short-term loans and overdrafts, accruals.', 'It is the money tied up in running the business day to day, and it has to be financed.'],
            },
            {
              heading: 'Cash conversion cycle',
              formula: t`CCC = \text{Inventory days} + \text{Receivable days} - \text{Payable days}`,
              paras: ['The number of days cash is tied up between paying suppliers and collecting from customers: the longer it is, the more working capital must be financed.'],
            },
            {
              heading: 'The conflicts',
              list: [
                { label: 'Liquidity vs profitability (the main conflict)', items: ['More working capital = safety: bills are paid, no stock-outs, less risk of insolvency.', 'But idle assets earn little and must be financed, lowering return on capital.'] },
                { label: 'Inventory', items: ['High stock avoids lost sales and production stoppages.', 'But storage, insurance, financing and obsolescence costs rise (e.g. fashion or electronics going out of date).'] },
                { label: 'Receivables', items: ['Generous credit terms win customers and sales.', 'But cash arrives later and bad debts rise.'] },
                { label: 'Cash', items: ['A buffer against shocks and a way to seize opportunities.', 'But a low return, and spare cash can be wasted by managers (agency).'] },
                { label: 'Payables', items: ['Paying suppliers late keeps cash in the firm.', 'But loses early-payment discounts and damages supplier relationships.'] },
                { label: 'Short-term financing', items: ['Cheaper and flexible, but must be rolled over: refinancing risk if credit dries up.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['Too little working capital risks insolvency even for profitable firms; too much reduces returns. The right level depends on the industry, how predictable cash flows are and how easily the firm can borrow. (Amazon famously runs a negative cash conversion cycle, collecting from customers before paying suppliers.)'],
            },
          ],
          tips: ['Name "liquidity vs profitability" explicitly: it is the phrase the examiner looks for.'],
          formulas: ['working-capital'],
        },
        {
          id: 'may21-q1d',
          label: '1(d)',
          marks: 10,
          type: 'essay',
          topics: ['capital-budgeting'],
          prompt: t`How and why is the IRR of an investment calculated? What are its drawbacks as a method of appraising capital investments?`,
          approach: t`Three parts: **how** (definition, formula, trial and error/interpolation, a worked example), **why** (a percentage return to compare with the cost of capital), and **drawbacks** (multiple IRRs, mutually exclusive projects, reinvestment assumption, varying discount rates), each with a mini-example.`,
          answer: [
            {
              heading: 'How it is calculated',
              formula: t`0 = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1 + IRR)^t}`,
              list: [
                'The IRR is the discount rate that makes the project\'s **NPV equal to zero**: the break-even rate of return.',
                t`**One period:** invest €1,000, receive €1,200 in a year: $1000 = 1200/(1 + IRR) \Rightarrow IRR = 20\%$.`,
                { label: 'More periods: trial and error, then interpolate', items: [t`Cost €1,000, then €400 a year for 3 years.`, t`At 9%: NPV = +€12.52. At 10%: NPV = −€5.26.`, t`Interpolate: $IRR \approx 9\% + \frac{12.52}{12.52 + 5.26}\times 1\% = 9.70\%$.`, 'In practice, a spreadsheet (=IRR) or financial calculator does this.'] },
              ],
            },
            {
              heading: 'Why it is used',
              list: [
                '**Decision rule:** accept if IRR > cost of capital (hurdle rate); reject if below.',
                'Managers find a **percentage return** intuitive and easy to compare with borrowing costs or other returns.',
                'It uses all cash flows and the time value of money, and needs no discount rate to compute (only to compare against).',
                'It shows the **margin of safety**: how far the cost of capital could rise before the project stops creating value.',
              ],
            },
            {
              heading: 'Drawbacks',
              list: [
                { label: '1. Multiple (or no) IRRs', items: [t`If cash flows change sign more than once, there can be several IRRs.`, t`Example: $-100, +230, -132$ has IRRs of both 10% and 20%. Which one do you compare with the hurdle rate?`] },
                { label: '2. Mutually exclusive projects: ignores scale', items: [t`Project A: −€10, +€20 (IRR 100%, NPV at 10% = €8.18). Project B: −€1,000, +€1,500 (IRR 50%, NPV = €363.64).`, 'IRR prefers A; NPV correctly prefers B, which creates far more value.'] },
                { label: '3. Timing', items: ['Projects with quick, small paybacks can show higher IRRs than larger, longer projects with higher NPVs.'] },
                { label: '4. Reinvestment assumption', items: ['IRR implicitly assumes interim cash flows are reinvested at the IRR itself, which is unrealistic for very high IRRs. The modified IRR (MIRR) fixes this.'] },
                { label: '5. One hurdle rate only', items: ['If the cost of capital changes over the project\'s life, there is no single rate to compare the IRR with. NPV can discount each year at a different rate.'] },
                { label: '6. Lending vs borrowing', items: ['For a project with an inflow first and outflows later (like borrowing), a **higher** IRR is worse, so the rule reverses.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['IRR is popular and gives the same accept/reject answer as NPV for simple, independent, conventional projects. But NPV is the better rule because it measures the **euro value created**: use NPV whenever the two disagree.'],
            },
          ],
          tips: ['A two-line multiple-IRR example and a scale example (small vs large project) make the drawbacks concrete: that is where the marks are.'],
          formulas: ['irr', 'npv'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      number: 2,
      parts: [
        {
          id: 'may21-q2',
          label: '2',
          marks: 30,
          type: 'essay',
          topics: ['firm-objective', 'governance'],
          prompt: t`What measures may be used to try to ensure that management act in the best long-term interest of the firm? Why are they needed and do they work? Give examples.`,
          approach: t`Three questions in one: **why needed** (the agency problem), **what measures** (each with an example), and **do they work** (evidence and limits for each). The "do they work?" evaluation is what separates a 2:1 from a first, so give it its own weight.`,
          answer: [
            {
              heading: 'Why measures are needed: the agency problem',
              list: [
                '**Shareholders (principals)** own the firm; **managers (agents)** control it. Their interests differ, and shareholders cannot observe everything managers do (**information asymmetry**).',
                { label: 'What managers may do instead of maximising long-term value', items: ['Pay themselves too much, enjoy perks.', '**Empire building**: grow the firm through acquisitions that raise their status but destroy value.', '**Short-termism**: cut R&D, training or maintenance to hit this year\'s earnings or bonus targets.', '**Risk aversion**: avoid risky positive-NPV projects to protect their jobs.', '**Entrenchment**: resist takeovers that would benefit shareholders.'] },
                '**Agency costs** = monitoring costs + incentive (bonding) costs + the value still lost (residual loss).',
                'A wider view (Schoenmaker & Schramade): the firm should create **long-term value** for shareholders and other stakeholders, so short-term pressures are themselves part of the problem.',
              ],
            },
            {
              heading: '1. Executive compensation',
              list: [
                { label: 'How', items: ['Bonuses tied to performance; shares and options; long-term incentive plans (LTIPs) that vest over 3–5 years; clawbacks; ESG or customer metrics alongside profit.'] },
                { label: 'Does it work?', items: ['Partly: it ties managers\' wealth to shareholders\'.', 'But badly designed pay backfires: options reward short-term share price spikes and encourage risk-taking. Short-term bonuses at banks before 2008 are the classic example.', 'Pay can be set by boards close to the CEO, leading to excessive awards for average performance.'] },
              ],
            },
            {
              heading: '2. Managerial share ownership',
              list: ['Requiring executives to hold a significant stake makes them owners too.', 'Works best when holdings are large relative to their wealth, but very large stakes can entrench managers and make them hard to remove.'],
            },
            {
              heading: '3. The board of directors',
              list: [
                { label: 'How', items: ['Independent non-executive directors monitor management, approve strategy, set pay and can fire the CEO.', 'Separate chair and CEO; audit, remuneration and nomination committees.'] },
                { label: 'Does it work?', items: ['Can be effective, but boards may lack independence (directors chosen by, or friends with, the CEO) or lack information and time.', 'Example: weak board oversight is widely cited in failures such as Enron (2001) and Wirecard (2020).'] },
              ],
            },
            {
              heading: '4. Shareholder monitoring and activism',
              list: [
                { label: 'How', items: ['Voting at AGMs (including say-on-pay), proposing resolutions, electing directors.', 'Large institutional investors (pension funds, BlackRock) engage with management; activist funds take stakes to push for change.'] },
                { label: 'Does it work?', items: ['Large holders have the incentive and power to monitor.', 'But small shareholders **free-ride** (monitoring costs them more than their share of the benefit), and passive index funds may engage little.', 'Some activists themselves push for short-term payouts.'] },
              ],
            },
            {
              heading: '5. The market for corporate control (takeovers)',
              list: ['If managers destroy value, the share price falls and a bidder can buy the firm cheaply and replace them, which is a strong threat.', 'But takeovers are expensive and slow, managers can erect defences (poison pills), and the threat itself can encourage short-termism.'],
            },
            {
              heading: '6. Debt and dividends',
              list: ['Interest payments and a commitment to dividends reduce free cash flow, leaving less for managers to waste (Jensen).', 'But too much debt raises distress risk and can make managers too cautious.'],
            },
            {
              heading: '7. Audit, disclosure and regulation',
              list: ['External audit, accounting standards and integrated (financial plus ESG) reporting reduce information asymmetry.', 'Governance codes (e.g. the UK and Irish Corporate Governance Codes), directors\' legal duties, and in the US the Sarbanes–Oxley Act after Enron.', 'But audits can fail (Wirecard\'s auditors missed €1.9bn of missing cash for years), and compliance can become box-ticking.'],
            },
            {
              heading: '8. Reputation and the managerial labour market',
              list: ['Managers who perform well are rewarded with better jobs; failure damages their career.', 'Works more slowly and less reliably than direct incentives.'],
            },
            {
              heading: 'Do they work? Overall evaluation',
              list: [
                'No single measure solves the agency problem, and every measure has its own **costs and side effects** (agency costs never reach zero).',
                'Measures work best **in combination**: long-term equity pay + an independent board + engaged long-term investors + transparent reporting.',
                'The design of incentives matters more than their size: reward **long-term, sustainable** performance, not quarterly targets.',
                'Corporate scandals show that failures still happen, but strong governance is associated with better long-run performance.',
              ],
            },
          ],
          tips: [
            'For each measure write three things: what it is, an example, and whether it works. That covers all three parts of the question at once.',
            'Real examples (Enron, Wirecard, banker bonuses before 2008) make the evaluation convincing.',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      number: 3,
      parts: [
        {
          id: 'may21-q3',
          label: '3',
          marks: 30,
          type: 'essay',
          topics: ['dividends'],
          prompt: t`Describe the factors that firms may take into account when deciding how to return cash to shareholders, and why do some firms pay no dividends? Use examples in your answer.`,
          approach: t`Two parts. **(1)** The decision: how much to pay out, and in what form (dividends vs share buybacks). Organise the factors (investment needs, cash flow stability, signalling, clienteles, taxes, flexibility, debt covenants, agency). **(2)** Why some firms pay nothing, with examples. Mention M&M irrelevance as the benchmark.`,
          answer: [
            {
              heading: 'Ways to return cash',
              list: [
                '**Regular cash dividends**: expected to continue; cutting them is seen as bad news.',
                '**Special (one-off) dividends**: return a windfall without raising expectations.',
                '**Share repurchases (buybacks)**: the firm buys back its own shares on the market or by tender offer.',
                'Benchmark: **M&M (1961)** say that in perfect markets dividend policy is irrelevant to value; the factors below exist because markets are not perfect.',
              ],
            },
            {
              heading: 'Factors in deciding how much and how to pay',
              list: [
                { label: '1. Investment opportunities', items: ['Firms with many positive-NPV projects should retain cash (residual policy: pay out only what is left over).', 'Retaining earnings also avoids the issue costs and negative signal of raising new equity (pecking order).'] },
                { label: '2. Size and stability of cash flows', items: ['Stable, mature businesses (utilities, consumer staples) can commit to regular dividends.', 'Volatile or cyclical firms prefer buybacks or special dividends, which do not commit them to future payments.'] },
                { label: '3. Signalling and smoothing', items: ['Dividend changes convey information: increases signal confidence, cuts signal trouble.', 'Lintner (1956): firms set a target payout and adjust slowly, avoiding cuts, so they raise dividends only when sure they can sustain them.', 'Example: Shell\'s 2020 dividend cut (its first since the Second World War) was followed by a fall in its share price.'] },
                { label: '4. Shareholder clientele', items: ['Retirees, pension funds and income funds want steady dividends; growth investors prefer reinvestment or buybacks.', 'Changing policy can drive away the existing clientele.'] },
                { label: '5. Taxes', items: ['Dividends are often taxed as income every year, while capital gains are taxed only when shares are sold (deferral), sometimes at lower rates.', 'That makes buybacks more tax-efficient for many investors; some countries tax buybacks or dividends differently to change this.'] },
                { label: '6. Flexibility: dividends vs buybacks', items: ['Buybacks can be stopped without the stigma of a dividend cut, and let shareholders choose whether to take cash (by selling).', 'They raise EPS (fewer shares) and can signal that managers think shares are undervalued.', 'Example: Apple has returned hundreds of billions of dollars to shareholders, mostly through buybacks alongside a modest dividend.'] },
                { label: '7. Agency considerations', items: ['Paying out cash limits managers\' scope to waste it (Jensen\'s free cash flow argument), which is valuable in mature firms with few projects.'] },
                { label: '8. Legal and contractual constraints', items: ['Company law allows dividends only from distributable profits.', 'Debt covenants may limit payouts to protect lenders; regulators restricted bank dividends during COVID-19 in 2020.'] },
                { label: '9. Liquidity and debt', items: ['Profit is not cash: the firm must have the cash after working capital and debt repayments.', 'Highly indebted firms may prioritise repaying debt.'] },
                { label: '10. Control', items: ['Paying out cash and then issuing new shares dilutes existing owners; retaining earnings keeps control concentrated.'] },
              ],
            },
            {
              heading: 'Why some firms pay no dividends',
              list: [
                { label: 'Growth opportunities', items: ['Young, fast-growing firms can earn more by reinvesting than shareholders could elsewhere.', 'Example: Amazon and Alphabet (Google) paid no dividends for decades and created value through reinvestment; Alphabet only started a dividend in 2024. Apple paid none from 1995 to 2012.'] },
                { label: 'Expensive external finance', items: ['Paying a dividend and then raising new equity incurs issue costs and a negative signal (pecking order).'] },
                { label: 'Uncertain or negative cash flow', items: ['Start-ups and loss-making firms (e.g. many biotech companies) have no surplus cash, and do not want to commit to payments they may have to cut.'] },
                { label: 'Preference for buybacks', items: ['Some mature firms return cash only through buybacks for flexibility and tax reasons. Berkshire Hathaway paid just one small dividend (in 1967) in Warren Buffett\'s six decades in charge, arguing it could reinvest each dollar to create more than a dollar of value.'] },
                { label: 'Shareholder clientele and taxes', items: ['Their investors may prefer capital gains for tax reasons.'] },
                { label: 'Constraints', items: ['Covenants, accumulated losses (no distributable profits) or regulatory restrictions.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['There is no single optimal policy. Firms should retain cash when they have better uses for it than shareholders, and return it otherwise, choosing **dividends** for stable, committed payouts and **buybacks** for flexibility. Whatever they choose, a stable and predictable policy matters because investors read changes as signals.'],
            },
          ],
          tips: ['Cover both halves: the factors **and** why some firms pay nothing. Many answers forget the second half.', 'Mention buybacks: the question says "return cash", not "pay dividends".'],
          formulas: ['gordon-growth'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      number: 4,
      parts: [
        {
          id: 'may21-q4',
          label: '4',
          marks: 30,
          type: 'essay',
          topics: ['cost-of-capital', 'capital-budgeting'],
          prompt: t`Describe how and why a company should calculate its financing cost for a potential new investment project. Should the same financing cost be used for all projects?`,
          approach: t`**Why:** the cost of capital is the opportunity cost, used as the NPV discount rate. **How:** WACC, step by step (cost of equity via CAPM or DGM, after-tax cost of debt from the yield, market-value weights), with a numerical example. **Same rate for all projects?** No: the rate must match the **project's** risk (pure-play betas, divisional rates), with an example of what goes wrong otherwise.`,
          answer: [
            {
              heading: 'Why calculate the cost of capital',
              list: [
                'The cost of capital is the **opportunity cost** of investors\' money: the return they could earn elsewhere on an investment of the **same risk**.',
                'It is the **discount rate** in NPV: a project creates value only if it earns more than this rate.',
                'Too low a rate means accepting value-destroying projects; too high means rejecting good ones.',
              ],
              formula: t`NPV = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1 + r)^t}`,
            },
            {
              heading: 'How: the weighted average cost of capital',
              formula: t`WACC = \frac{E}{V}\,r_E + \frac{D}{V}\,r_D\,(1 - T)`,
              list: [
                { label: 'Step 1: cost of equity', items: [t`**CAPM:** $r_E = r_f + \beta(r_m - r_f)$, using a government bond yield, an estimated beta and a market risk premium.`, t`Or the **dividend growth model:** $r_E = D_1/P_0 + g$. Using both and comparing them is a good check.`] },
                { label: 'Step 2: cost of debt', items: [t`The **yield to maturity** on the firm's bonds (or the rate on new borrowing), not the coupon.`, t`After tax: $r_D(1 - T)$, because interest is tax-deductible.`] },
                { label: 'Step 3: weights', items: ['Use **market values**: equity = shares × price; debt = bonds × market price. Or the firm\'s **target** capital structure if it will finance future projects that way.'] },
                { label: 'Step 4: combine', items: ['Weight each cost by its share of total financing.'] },
              ],
            },
            {
              heading: 'Worked example',
              list: [
                t`$r_f = 3\%$, $\beta = 1.2$, market risk premium 6%: $\;r_E = 3\% + 1.2(6\%) = 10.2\%$.`,
                t`Bond yield 6%, tax 20%: $\;r_D(1 - T) = 6\% \times 0.8 = 4.8\%$.`,
                t`Market values: 60% equity, 40% debt: $\;WACC = 0.6(10.2\%) + 0.4(4.8\%) = 6.12\% + 1.92\% = 8.04\%$.`,
                'A project with the same risk as the firm\'s existing business should be discounted at about 8%.',
              ],
            },
            {
              heading: 'Things to get right',
              list: ['Do not use the interest rate on the loan that happens to fund the project: all projects are funded from the firm\'s overall pool of capital, and using cheap debt to justify a project ignores the extra risk it puts on equity.', 'Use market values, not book values.', 'Keep it consistent: nominal cash flows with a nominal rate.'],
            },
            {
              heading: 'Should the same rate be used for all projects? No',
              list: [
                'The firm\'s WACC reflects the **average risk of its existing assets**. It is only correct for projects with that same risk.',
                'The discount rate should reflect the risk of the **project**, not of the company that undertakes it.',
                { label: 'What goes wrong with a single company-wide rate', items: [t`Risky projects (with true required returns above WACC) look too good and are **wrongly accepted**.`, t`Safe projects (with required returns below WACC) look too bad and are **wrongly rejected**.`, 'Over time the firm drifts into riskier businesses and destroys value.'] },
                { label: 'Example', items: ['A supermarket chain (β ≈ 0.7, WACC ≈ 7%) considering an online tech venture (β ≈ 1.6). Discounting the venture at 7% instead of about 12% would overstate its value and could lead the firm to accept a project that destroys value.'] },
              ],
            },
            {
              heading: 'How to find a project-specific rate',
              list: [
                { label: 'Pure-play approach', items: ['Find listed firms that operate **only** in the project\'s line of business and use their betas.', 'For top marks: adjust for leverage. Unlever the comparable firm\'s equity beta to an asset beta, then relever it at your firm\'s capital structure.', t`E.g. comparable $\beta_E = 1.6$, $D/E = 0.5$, $T = 20\%$: $\;\beta_A = \frac{1.6}{1 + 0.8(0.5)} = 1.14$. Relevered at $D/E = 0.25$: $\beta_E = 1.14(1 + 0.8 \times 0.25) = 1.37$, so $r_E = 3\% + 1.37(6\%) = 11.2\%$.`] },
                { label: 'Divisional cost of capital', items: ['Large groups set a separate rate for each division (e.g. a utility arm vs a technology arm).'] },
                { label: 'Risk classes', items: ['Simpler: add or subtract a premium by category (e.g. cost reduction WACC − 2%, expansion WACC, new products WACC + 4%).'] },
                { label: 'Financing side effects', items: ['If a project changes the firm\'s debt capacity, adjust the weights; some firms use adjusted present value (APV) to value the tax shields separately.'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['Firms calculate WACC to set the minimum return projects must earn to satisfy all investors. But WACC is only right for **average-risk** projects: each project should be discounted at a rate reflecting **its own systematic risk**, estimated from comparable firms.'],
            },
          ],
          tips: ['A short WACC calculation earns marks even in an essay question.', 'The key sentence for the last part: "The discount rate depends on the risk of the project, not the risk of the firm."'],
          formulas: ['wacc', 'capm', 'dividend-growth-cost-of-equity', 'npv'],
        },
      ],
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      number: 5,
      parts: [
        {
          id: 'may21-q5',
          label: '5',
          marks: 30,
          type: 'essay',
          topics: ['capital-structure'],
          prompt: t`Describe the main theories which describe how firms decide on how much debt and equity to use in their capital structure. How applicable are these theories in reality? Use examples.`,
          approach: t`Describe each theory (M&M without and with taxes, trade-off, pecking order, plus agency and market timing for extra depth), its prediction, and then **evaluate**: what real firms actually do, with examples. "How applicable in reality" is half the question.`,
          answer: [
            {
              heading: 'Capital structure',
              paras: ['The mix of debt and equity a firm uses to finance its assets. The question is whether some mix maximises firm value (equivalently, minimises WACC).'],
            },
            {
              heading: '1. Modigliani–Miller (1958): irrelevance',
              list: [
                '**Assumptions:** no taxes, no transaction or bankruptcy costs, symmetric information, investors can borrow on the same terms as firms.',
                t`**Proposition I:** $V_L = V_U$. Value comes from the assets, not from how they are financed ("the size of the pie does not depend on how it is sliced").`,
                t`**Proposition II:** $r_E = r_0 + (r_0 - r_D)\frac{D}{E}$. Adding cheap debt raises the risk and cost of equity exactly enough to keep WACC constant.`,
                'Arbitrage (homemade leverage) enforces this: investors can borrow personally to copy any capital structure.',
              ],
            },
            {
              heading: '2. Modigliani–Miller (1963): corporate taxes',
              list: [
                t`Interest is tax-deductible, so debt creates an **interest tax shield**: $V_L = V_U + T_c D$.`,
                t`Cost of equity rises more slowly: $r_E = r_0 + (r_0 - r_D)(1 - T_c)\frac{D}{E}$, and WACC falls as debt rises.`,
                'Implication: firms should use (almost) **100% debt**, which no real firm does. Something is missing.',
              ],
            },
            {
              heading: '3. Trade-off theory',
              formula: t`V_L = V_U + PV(\text{tax shield}) - PV(\text{costs of financial distress})`,
              list: [
                '**Benefits of debt:** tax shield; discipline on managers.',
                '**Costs of debt:** financial distress (direct bankruptcy costs; indirect costs such as lost customers, suppliers demanding cash, staff leaving, under-investment); agency conflicts between shareholders and bondholders.',
                'Optimal leverage where the marginal tax benefit equals the marginal expected distress cost: there is a **target debt ratio**.',
                '**Predicts:** firms with stable profits and tangible assets (utilities, real estate, infrastructure) borrow more; firms with volatile earnings and intangible assets (tech, pharma) borrow less.',
              ],
            },
            {
              heading: '4. Pecking order theory (Myers and Majluf, 1984)',
              list: [
                '**Asymmetric information:** managers know more than investors, so issuing equity is read as a sign that shares are overvalued, and the price falls on announcement.',
                '**Order of finance:** retained earnings → debt → equity as a last resort.',
                '**Predicts:** no target ratio; leverage reflects past funding needs; **profitable firms borrow less** because they can fund themselves internally; firms keep financial slack.',
              ],
            },
            {
              heading: '5. Agency theory (Jensen and Meckling; Jensen 1986)',
              list: ['**Agency costs of equity:** managers waste free cash flow; debt disciplines them because interest must be paid (leveraged buyouts rely on this).', '**Agency costs of debt:** shareholders of a highly indebted firm may gamble on risky projects (risk shifting) or skip good projects whose gains go mainly to lenders (debt overhang).', 'The optimal structure balances the two.'],
            },
            {
              heading: '6. Market timing (Baker and Wurgler, 2002)',
              list: ['Firms issue equity when their share price is high and buy back or borrow when it is low.', 'Capital structure is then the cumulative result of past attempts to time the market.'],
            },
            {
              heading: 'How applicable are they in reality?',
              list: [
                { label: 'M&M', items: ['Its assumptions are clearly unrealistic, so it is not a description of real firms.', 'But it is the essential **benchmark**: it shows that capital structure matters only because of taxes, distress costs, information and agency problems, and tells us where to look.'] },
                { label: 'Trade-off theory: partly supported', items: ['Consistent with clear industry patterns: utilities and real estate firms carry high debt; tech and pharma firms carry little.', 'Surveys (Graham and Harvey, 2001) find most CFOs have a target or target range for debt and care about credit ratings, e.g. keeping an investment-grade rating.', 'But many profitable firms use far less debt than the tax benefits would justify (the "under-leverage puzzle"), and firms move towards targets only slowly.'] },
                { label: 'Pecking order: strongly supported for financing behaviour', items: ['Most investment is funded from retained earnings; new equity issues are rare for mature firms, and share prices typically fall on announcement.', 'It explains why very profitable firms such as Apple and Alphabet have had little net debt.', 'But young, high-growth firms (tech start-ups) often issue equity before debt, against the predicted order, because they have no profits or collateral to borrow against.'] },
                { label: 'Agency theory', items: ['Explains leveraged buyouts by private equity, where heavy debt forces efficiency, and covenants in loan contracts.'] },
                { label: 'Market timing', items: ['Explains waves of share issues when markets are booming (e.g. the IPO boom of 2020–21).'] },
                { label: 'Other real-world factors', items: ['Credit ratings, flexibility to fund future opportunities, lender requirements, managerial preferences and conditions in credit markets (e.g. cheap debt when interest rates were near zero, 2015–21).'] },
              ],
            },
            {
              heading: 'Conclusion',
              paras: ['No single theory fully explains real capital structures. M&M provides the benchmark; the **trade-off theory** explains why firms have moderate target debt ratios that vary by industry; the **pecking order** explains the order in which they raise finance and why profitable firms borrow less. In practice firms combine these considerations with flexibility, credit ratings and market conditions.'],
            },
          ],
          tips: [
            'Give the "how applicable" half its own section with real examples: it is worth roughly half the marks.',
            'Write the M&M formulas with and without taxes: quick, reliable marks.',
          ],
          formulas: ['mm-propositions', 'wacc'],
        },
      ],
    },
  ],
};
