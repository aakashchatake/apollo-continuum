# AgriIntel Roles and Weekly Plan

## Primary Ownership

| Member | Primary ownership | Required deliverable |
|---|---|---|
| Dakshini Anand Neel | Product, field-record design and data quality | User journey, scenario catalogue, input schema and acceptance checklist |
| Vijayalaxmi Kalidas Sundalam | Technical lead and integration | Repository health, backend/API integration, environment setup and release branch |
| Nandini Naresh Naral | ML baseline and evaluation | Reproducible baseline notebook/module, evaluation plan, limits and test fixtures |
| Sunaina Shashikant Gaikwad | Frontend, explanation and demo | Dashboard flow, evidence card, scenario comparison and recorded demo |

These ownership assignments establish responsibility, not hierarchy. Every merge needs review by at least one other team member. The named repository maintainer retains final branch hygiene responsibility.

## First 48 Hours

1. **Dakshini:** define three user scenarios and the shared field-record schema.
2. **Vijayalaxmi:** confirm setup instructions, dependency lock, branch rules and current run command.
3. **Nandini:** identify one baseline approach that can run with sample data; document its inputs and limits.
4. **Sunaina:** produce the dashboard wireframe and implement static scenario cards against mock data.
5. **All:** review the MVP boundary and freeze what is not being built this week.

## Week 1

| Day | Team result | Owner responsible |
|---|---|---|
| 1 | Repository audit, scope freeze and scenario list | Vijayalaxmi + Dakshini |
| 2 | Field-record schema and mock dataset | Dakshini |
| 3 | Baseline pipeline returns a deterministic result | Nandini |
| 4 | Dashboard consumes the result and shows its evidence | Sunaina + Vijayalaxmi |
| 5 | Tests for normal, missing-data and out-of-range cases | Nandini + Vijayalaxmi |
| 6 | Integrated demo, issue list and evidence review | All |
| 7 | Demo rehearsal, README and release candidate | All |

## Definition of Done by Role

### Dakshini

- Schema names every field, unit, allowed range and evidence state.
- Each scenario has a plain-language farmer or reviewer question.
- Acceptance criteria are recorded before implementation is called complete.

### Vijayalaxmi

- A fresh clone can run using documented commands.
- No credentials are committed; configuration uses an example file only.
- Integration branch is stable and dependencies are recorded.

### Nandini

- The selected baseline can be reproduced from the committed sample data.
- Evaluation separates observed, simulated and modelled results.
- Failure and uncertainty conditions are documented, not hidden.

### Sunaina

- The main screen answers: what happened, why, how sure is the system, and what next.
- The interface keeps sample/demo labels visible.
- The recorded demo is usable without network access or a live API.

## Daily Stand-up Format

Each person posts four lines before the daily review:

1. What changed today?
2. What can another person test now?
3. What is blocked and what decision is needed?
4. What evidence or file link supports the update?
