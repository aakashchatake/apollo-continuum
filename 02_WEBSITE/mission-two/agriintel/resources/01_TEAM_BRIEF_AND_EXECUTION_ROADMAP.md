# AgriIntel Team Brief and Execution Roadmap

## The Idea in One Minute

Farm decisions often fail because observations are scattered: a crop symptom, a weather change, a field note and a sensor value are viewed separately. AgriIntel turns a bounded set of these inputs into one reviewable field-intelligence record: what was observed, what the system can infer, how confident it is, and what should be checked next.

The first release is a transparent decision-support prototype. Machine learning may assist classification, ranking or prediction, but it must not hide missing data, uncertainty or unsupported claims.

## The MVP System

```text
FIELD INPUT
crop + growth stage + observation + weather context + optional sensor/image
    |
DATA QUALITY
units, completeness, source label and confidence
    |
ANALYSIS
baseline rules + bounded ML/model output where evidence exists
    |
DECISION RECORD
finding + confidence + explanation + next inspection/action
    |
DASHBOARD
scenario history, visual status and exportable evidence card
```

## MVP Boundary

### Include

- One or two demonstration crops and a controlled sample dataset.
- A structured field-observation form and input-quality checks.
- A single baseline analysis pipeline that can be tested deterministically.
- An explainable result card: finding, contributing inputs, confidence and next step.
- A dashboard that compares at least two sample scenarios.
- Clear labels for simulated, sample, observed and modelled information.

### Exclude Until Reviewed

- A claim of farmer-ready disease diagnosis or agronomic prescription.
- Automated irrigation, fertilizer or pesticide control.
- Live farmer data collection or an unreviewed external API dependency.
- A new paid deployment, second backend, duplicate database or copied MindforgeAI application.
- Merging SIH Intelligent Soil source code without an integration review.

## Delivery Stages

### Stage 1 - Foundation

- Freeze the demonstration crop, use case and three sample scenarios.
- Create the shared field-record schema with units and allowed values.
- Audit the repository: setup, dependencies, current branches and untracked files.
- Agree the screen flow before styling the full interface.

### Stage 2 - Working Intelligence Loop

- Implement input validation and deterministic baseline logic.
- Connect the baseline result to the dashboard.
- Add confidence and evidence labels for every result.
- Write tests for normal, incomplete-input and out-of-range scenarios.

### Stage 3 - Reviewable Demonstration

- Add two scenario comparisons and a concise explanation panel.
- Complete the README, architecture note and run instructions.
- Record a short demo and rehearse questions on data, limitations and farmer trust.
- Submit the repository for architecture and evidence review.

## Success Criteria

- The same input produces the same demonstrated result.
- Missing or invalid input becomes visible rather than silently accepted.
- Every result can be traced to a scenario and an evidence state.
- The dashboard explains an action; it does not merely show a score.
- A reviewer can run the project without private credentials.
