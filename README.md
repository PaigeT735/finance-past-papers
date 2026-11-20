# Finance Past Papers

Revision site for **BUU22550 Introduction to Finance** (Trinity Business School): past papers with full model answers, step-by-step working for every calculation, exam tips, a finance formula sheet and a topic index.

It uses the same design and engine as the Econ A Formula Library: plain HTML, CSS and JavaScript (ES modules), no build step, KaTeX and fonts bundled in `assets/`. Light mode by default, with a dark-mode toggle.

## Run it locally

```bash
python3 -m http.server 5173
# open http://localhost:5173
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Finance past papers v1"
git branch -M main
gh repo create PaigeT735/finance-past-papers --public --source=. --remote=origin --push
gh api -X POST repos/PaigeT735/finance-past-papers/pages -f "source[branch]=main" -f "source[path]=/"
```

The site goes live at `https://paiget735.github.io/finance-past-papers/`.

## Adding a new past paper

1. Copy `src/content/papers/2025-12.js` to a new file, e.g. `src/content/papers/2024-12.js`.
2. Change `id` (e.g. `dec-2024`), `title`, `short`, `summary`, `meta`, and replace the questions.
   - Each question part needs a unique `id` (e.g. `dec24-q1a`), a `label` (`1(a)`), `marks`, `type` (`essay` or `calc`) and the `prompt`.
   - Optional: `approach`, `given`, `working`, `result` (calculations), `answer` (blocks with `heading`, `paras`, `formula`, `list`, `table`), `tips`, `topics`, `formulas`.
3. Import it in `src/content/index.js` and add it to `PAPERS` (newest first).
4. New topics go in `src/content/topics.js`; new formulas in `src/content/formula-sheet.js`.
5. Check it: `npm install` once, then `npm run check`.
6. Push: `git add . && git commit -m "Add Dec 2024 paper" && git push`.

Text uses `$...$` for inline maths and `$$...$$` for display maths (LaTeX via KaTeX), and `**bold**`.

## Structure

```
index.html                     App shell
assets/css/                    Design tokens (light + dark), layout, components
src/content/papers/*.js        One file per past paper (questions + model answers)
src/content/formula-sheet.js   Formula cards
src/content/topics.js          Topic list used for tagging and the topic index
src/content/index.js           Registry: add new papers here
src/components/question.js     Question + model answer card
src/views/                     Home, all-papers index, continuous paper page
scripts/check-content.mjs      Validates maths, ids, topics and links
```
