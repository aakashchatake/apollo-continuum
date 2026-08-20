# AgriIntel Workflow, Review and Demo Script

## Repository Workflow

1. Create a task branch: `member/<name>/<short-task>`.
2. Make one focused change with a clear commit message.
3. Run the relevant test or reproducible demo command.
4. Open a pull request or review request with screenshots and test evidence.
5. Merge only after another member checks the change and the integration owner confirms it runs.

Never commit keys, API tokens, private student material, unlicensed datasets, large untracked model files or local database exports.

## Review Gates

| Gate | Required proof | Reviewer |
|---|---|---|
| Scope | Product scenarios, exclusions and acceptance criteria are frozen | Nandini + Vijayalaxmi |
| Data | Quality rules, mining record, sample source and evidence labels are present | Nandini + Sunaina + Vijayalaxmi |
| Logic | Baseline and ML Pipeline are deterministic and tested | Sunaina + Nandini + Vijayalaxmi |
| Experience | Data/model frontend, result, reason and confidence are visible | Dakshini + Sunaina |
| Release | Fresh setup, README and complete project demonstration all work | Vijayalaxmi + Sunaina + whole team |

## Three-Minute Demonstration Script

**Nandini - product, data quality and mining, 35 seconds:**

"Farm observations are often fragmented. AgriIntel begins with a structured product and field record so crop, stage, weather context and observations are not treated as disconnected notes. We make data quality and mining decisions visible, and the system tells the user when an input is incomplete rather than pretending certainty."

**Vijayalaxmi - integration and project story, 40 seconds:**

"The working flow is input, quality check, analysis, evidence record and dashboard. I coordinate the integration that keeps the project modular and reproducible. Data Science and ML Pipeline work are shared by Nandini, Sunaina and me, while the repository can run from documented setup steps using sample data."

**Sunaina - ML baseline, evaluation and project story, 45 seconds:**

"Our ML baseline converts the bounded scenario into an evidence-labelled result. We do not present a model score as a field-validated diagnosis. The result records its contributing inputs, confidence and limitations, and we test normal, missing-data and out-of-range conditions. Vijayalaxmi and I lead the complete project story and final demonstration."

**Dakshini - data/model frontend and component demonstration, 40 seconds:**

"The data and ML-model frontend shows what was observed, the system's current interpretation, how confident it is and the next review step. My component demonstration makes the model output understandable, because a farmer or agronomist needs a reasoned decision aid, not an unexplained number."

**Close - Vijayalaxmi and Sunaina, 20 seconds:**

"AgriIntel is a focused Mission II contribution to Apollo AgriVerse: one explainable, reviewable field-intelligence loop. The next stage is controlled validation with approved data and domain review before any farmer-facing deployment claim."

## Judge and Mentor Questions

| Question | Grounded answer |
|---|---|
| Is this only a dashboard? | No. The dashboard exposes a structured data-quality and analysis loop, with a traceable result and next step. |
| Is the AI accurate? | We do not claim field accuracy yet. The current release is a reproducible baseline with explicit evaluation and validation gates. Sunaina owns the model-evaluation record. |
| Why will a farmer trust it? | It explains its inputs, uncertainty and next inspection step; trust is earned through local validation, not claimed through a score. |
| How does this relate to Intelligent Soil? | Intelligent Soil is a separate decision workbench. AgriIntel can link to it as a related Apollo module without merging code or claims. |
| Does it need paid infrastructure? | No. The team works in the registered repository and uses the existing MindforgeAI project destination. No duplicate paid runtime is required. |

## Final Release Checklist

- [ ] README has setup, run, test and demo instructions.
- [ ] Sample data has source and licence notes.
- [ ] Every visible output is labelled observed, simulated or modelled.
- [ ] No secrets or private data are committed.
- [ ] Scenario results are reproducible.
- [ ] Demo recording has a local fallback.
- [ ] Scope, limitations and next validation step are visible.
- [ ] Vijayalaxmi and Sunaina have rehearsed the complete project story together.
