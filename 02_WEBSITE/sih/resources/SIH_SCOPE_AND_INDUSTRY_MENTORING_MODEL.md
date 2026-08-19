# SIH Scope and Industry Mentoring Model

## Decision

The D Y Patil SIH team is an **external, bounded research-prototype team**. It
must not be assigned ownership of Apollo AgriVerse, the production platform, or
all of Intelligent Soil.

Their defined work package is:

> **Intelligent Soil Decision Workbench** - a software-first prototype that
> compares root-zone water scenarios and produces an explainable irrigation
> recommendation.

This work package is a contained Apollo AgriVerse module. It has a clear input,
output, demo and handoff. It does not overlap with the three internal internship
groups or require the students to understand every Apollo initiative.

## Why this boundary is necessary

The proposed problem statement includes material intelligence, four physics
modules, selective ML, sensors, weather, crop lifecycle, dashboards and future
field validation. That is a serious multi-year R&D direction, not a single SIH
implementation task.

Giving the whole system to an external student team would create predictable
problems:

- no stable definition of done;
- repeated work across student groups;
- a dashboard without trustworthy model behaviour;
- unsupported field or material-performance claims;
- difficult source, data and IP handoff.

The SIH entry becomes stronger when it demonstrates one complete decision loop
well: scenario in, state evolves, recommendation out, reason shown.

## Apollo Workstream Map

```text
Apollo AgriVerse - programme owner: Chatake Innoworks
|
|-- Internal Group A: Core digital-twin data and state platform
|   Owns canonical data contracts, simulation primitives and integration review
|
|-- Internal Group B: Crop, weather and computer-vision intelligence
|   Owns crop lifecycle, weather handling and vision research modules
|
|-- Internal Group C: Product experience, telemetry and platform surfaces
|   Owns dashboard patterns, IoT integration path and user workflow
|
`-- External SIH Team - D Y Patil: Intelligent Soil Decision Workbench
    Owns a standalone prototype, scenario comparison and documented handoff
```

The internal groups may have different current names or membership. The boundary
matters more than the labels: the SIH team has one vertical slice; internal teams
own the reusable platform and long-term integration.

## Exact SIH Problem Scope

### Inputs

- Crop: select one demonstration crop only. Tomato is recommended for an easy
  visual demo; grape is allowed only if the team can explain its assumptions.
- Soil texture: one or two preset profiles, for example loam and black cotton
  soil. Do not attempt a soil-classification model.
- Weather scenario: baseline, heat wave, rainfall event, or dry spell.
- Irrigation history: manual date and quantity input.
- Treatment: control, hydrogel, biochar, or combined.
- Optional sensor observation: soil moisture, temperature and EC. These may be
  synthetic/manual for SIH.

### State and calculation scope

- A simplified root-zone water balance.
- Crop-stage factor based on a simple growing-degree-day or manually selected
  stage.
- Finite hydrogel storage/release proxy.
- Biochar parameter modifier, not a chemical model.
- Observation confidence and missing-data flag.

### Outputs

- Soil-moisture trajectory for 7-14 days.
- Crop water-stress risk: low, medium or high.
- Treatment comparison chart.
- One explainable action: irrigate now, delay, partial irrigation or inspect
  sensor.
- Evidence panel: variables, assumptions and confidence behind the action.

### Explicit exclusions

- Hydrogel synthesis, polymer chemistry or claims of a new formulation.
- Live production IoT, an autonomous irrigation controller, drones or robots.
- Disease diagnosis, market-price prediction, full farm ERP or a generic chatbot.
- Claims that a water-saving percentage has been field-proven.
- Direct integration into production Apollo AgriVerse before technical review.

## What the SIH Team Receives

Chatake Innoworks provides a starter package, not the whole platform:

- approved problem statement and presentation structure;
- this scope document and acceptance checklist;
- synthetic/demo data schema and sample scenarios;
- state-engine pseudocode and parameter assumptions;
- Apollo AgriVerse visual/reference material where appropriate;
- a mentor checkpoint for architecture and final presentation review.

The team builds and owns its hackathon implementation in a separate repository
under the team's account. The repository must clearly identify the student team,
SIH year, problem statement and the fact that the results are simulated unless
independently measured.

## What the SIH Team Must Deliver

1. A working local or static web demo.
2. Reproducible sample dataset and parameter file.
3. One calculation module with tests for at least the normal, dry-spell and
   missing-sensor scenarios.
4. A six-slide SIH PDF made in the college template.
5. A three-minute recorded demo or backup screen recording.
6. A short README explaining setup, model assumptions, limitations and handoff.
7. A final evidence note listing what was simulated, what was measured and what
   remains to validate.

## Acceptance Criteria

The prototype is accepted for Apollo review only when all of the following are
true:

- Changing weather, treatment or irrigation input changes the trajectory and
  recommendation deterministically.
- Hydrogel is finite: it cannot create water or remain full forever.
- Biochar is not represented as a hydrogel under another name.
- A missing or abnormal sensor lowers confidence instead of silently producing a
  certain answer.
- The recommendation explains its cause in plain language.
- All results visible in the demo are labelled as simulated or measured.
- Repository, data and setup instructions can be reviewed independently.

## Mentor Cadence

### Session 1 - Scope and ownership: 45 minutes

Confirm one crop, one soil profile, four treatments, three scenarios and the
team owners. End with a one-page interface sketch and data schema.

### Session 2 - Model review: 45 minutes

Review water-balance logic, assumptions, units and demo scenarios. Reject
unsupported claims early.

### Session 3 - Demo review: 30 minutes

Review scenario transitions, explanation panel, failure case and visual clarity.

### Session 4 - Submission rehearsal: 30 minutes

Run the six-slide pitch and judge-style questions: novelty, feasibility,
hardware burden, hydrogel versus biochar, economics, farmer trust and validation.

## Handoff to Apollo After SIH

There is no automatic merge into Apollo AgriVerse.

After the event, Chatake Innoworks reviews the repository, dependencies, data
provenance, model assumptions and code quality. Reusable components may be
ported into a company-controlled repository only after that review, with student
credit preserved. Production system ownership, deployment and product direction
remain with Chatake Innoworks.

## One Sentence to Give the Students

"Your job is to build a transparent intelligent-soil decision prototype for one
root zone, not to build the entire Apollo AgriVerse platform."
