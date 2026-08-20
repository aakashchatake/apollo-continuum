# AgriIntel Roles and Weekly Plan

Revision: 2026-08-20

## Primary Ownership

| Member | Primary ownership | Required deliverable |
|---|---|---|
| Nandini Naresh Naral | Product, data quality and data mining | Product scenarios, field-record quality rules, mining notes and acceptance checklist |
| Vijayalaxmi Kalidas Sundalam | Technical lead and integration | Repository health, backend/API integration, environment setup and release branch |
| Sunaina Shashikant Gaikwad | ML baseline and model evaluation | Reproducible baseline module, evaluation plan, limits and test fixtures |
| Dakshini Anand Neel | Data and ML-model frontend | Data/model interface, dashboard flow, scenario display and component demonstration |

These ownership assignments establish responsibility, not hierarchy. Every merge needs review by at least one other team member. The named repository maintainer retains final branch hygiene responsibility.

## First 48 Hours

1. **Nandini:** define three product scenarios, data-quality rules and the shared field-record schema.
2. **Vijayalaxmi:** confirm setup instructions, dependency lock, branch rules and current run command.
3. **Sunaina:** identify one baseline approach that can run with sample data; document its inputs, limits and evaluation plan.
4. **Dakshini:** produce the data/model frontend wireframe and implement static scenario cards against mock data.
5. **Nandini, Sunaina and Vijayalaxmi:** agree the shared Data Science and ML Pipeline handoffs.
6. **All:** review the MVP boundary and freeze what is not being built this week.

## Week 1

| Day | Team result | Owner responsible |
|---|---|---|
| 1 | Repository audit, scope freeze and scenario list | Vijayalaxmi + Nandini |
| 2 | Field-record quality rules, mining note and mock dataset | Nandini |
| 3 | Baseline pipeline returns a deterministic result | Sunaina + Vijayalaxmi + Nandini |
| 4 | Data/model frontend consumes the result and shows its evidence | Dakshini + Vijayalaxmi |
| 5 | Tests for normal, missing-data and out-of-range cases | Sunaina + Nandini + Vijayalaxmi |
| 6 | Integrated demo, issue list and evidence review | Vijayalaxmi + Sunaina + Dakshini |
| 7 | Complete-story rehearsal, README and release candidate | Vijayalaxmi + Sunaina + All |

## Definition of Done by Role

### Nandini

- Product scenarios have a plain-language farmer or reviewer question.
- Schema names every field, unit, allowed range and evidence state.
- Data-mining choices, sample sources and acceptance criteria are recorded before implementation is called complete.

### Vijayalaxmi

- A fresh clone can run using documented commands.
- No credentials are committed; configuration uses an example file only.
- Integration branch is stable and dependencies are recorded.
- Coordinates the shared Data Science and ML Pipeline handoff with Nandini and Sunaina.

### Sunaina

- The selected baseline can be reproduced from the committed sample data.
- Evaluation separates observed, simulated and modelled results.
- Failure and uncertainty conditions are documented, not hidden.
- Co-leads the complete project demonstration and story with Vijayalaxmi.

### Dakshini

- The data/model frontend answers: what happened, why, how sure is the system, and what next.
- The interface keeps sample/demo labels visible.
- The component demonstration is usable without network access or a live API.

## Shared Technical Work

| Workstream | Contributors | Coordination rule |
|---|---|---|
| Data Science | Nandini, Sunaina, Vijayalaxmi | Record source, transformation, owner and review result for every dataset change. |
| ML Pipeline | Nandini, Sunaina, Vijayalaxmi | Separate experiment, evaluation and integration changes; one reproducible command is required before merge. |
| Complete project demonstration | Vijayalaxmi, Sunaina | Own the story, sequence, rehearsal, final narration and questions. Dakshini supplies the frontend component demonstration. |

## Daily Stand-up Format

Each person posts four lines before the daily review:

1. What changed today?
2. What can another person test now?
3. What is blocked and what decision is needed?
4. What evidence or file link supports the update?
