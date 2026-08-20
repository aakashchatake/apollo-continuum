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
| Scope | Scenario list and exclusions are frozen | Dakshini + Vijayalaxmi |
| Data | Schema, sample source and evidence labels are present | Dakshini + Nandini |
| Logic | Baseline output is deterministic and tested | Nandini + Vijayalaxmi |
| Experience | Result, reason and confidence are visible | Sunaina + Dakshini |
| Release | Fresh setup, README and demo all work | Whole team |

## Three-Minute Demonstration Script

**Dakshini - problem and input, 35 seconds:**

"Farm observations are often fragmented. AgriIntel begins with a structured field record so crop, stage, weather context and observations are not treated as disconnected notes. The system tells the user when an input is incomplete rather than pretending certainty."

**Vijayalaxmi - system flow, 40 seconds:**

"The working flow is input, quality check, analysis, evidence record and dashboard. We keep the project modular so the interface is not tied to one model or one external service. The repository can run from documented setup steps using sample data."

**Nandini - intelligence and evidence, 45 seconds:**

"Our baseline converts the bounded scenario into an evidence-labelled result. We do not present a model score as a field-validated diagnosis. The result records its contributing inputs, confidence and limitations, and we test normal, missing-data and out-of-range conditions."

**Sunaina - dashboard and user value, 40 seconds:**

"The dashboard shows what was observed, the system's current interpretation, how confident it is and the next review step. The design makes uncertainty visible, because a farmer or agronomist needs a reasoned decision aid, not an unexplained number."

**Close - any member, 20 seconds:**

"AgriIntel is a focused Mission II contribution to Apollo AgriVerse: one explainable, reviewable field-intelligence loop. The next stage is controlled validation with approved data and domain review before any farmer-facing deployment claim."

## Judge and Mentor Questions

| Question | Grounded answer |
|---|---|
| Is this only a dashboard? | No. The dashboard exposes a structured data-quality and analysis loop, with a traceable result and next step. |
| Is the AI accurate? | We do not claim field accuracy yet. The current release is a reproducible baseline with explicit evaluation and validation gates. |
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
