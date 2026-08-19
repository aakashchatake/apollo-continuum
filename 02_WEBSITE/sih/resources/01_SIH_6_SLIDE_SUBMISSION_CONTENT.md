# SIH 2026 Submission Content

## Submission Rules

- Maximum six slides, including title slide.
- Use the official SIH template if the college supplies one.
- Keep slide copy short. Put detailed explanation in the briefing document and
  spoken script.
- Export the final submission as PDF only after the faculty checks the template.

## Slide 1 - Title

**Physics-Informed Digital Twin for Intelligent Soil Systems**

Water-efficient precision agriculture using stimuli-responsive hydrogels and
hybrid state models

Ministry of Agriculture & Farmers Welfare | SIH 2026

Industry guidance: Chatake Innoworks Private Limited - Apollo AgriVerse

Academic guidance: Dr. Dipti Jadhav, D Y Patil

Visual: one clean cross-section of a crop root zone: crop, mulch, soil layers,
hydrogel micro-reservoirs and a moisture sensor. Do not show a robot, satellite
or a complex dashboard on this slide.

## Slide 2 - Problem

**Farmers must decide irrigation with incomplete field visibility.**

- Water stress and erratic rainfall make fixed schedules unreliable.
- Sensors can be noisy, unavailable or fail in real fields.
- Pure AI can recommend physically impossible actions when data is sparse.
- Conventional soil is passive: it cannot retain and release water by crop need.

Closing line: *The farmer needs a resilient recommendation, not another data
screen.*

Visual: a simple before-state showing dry soil, uncertain sensor reading and
unnecessary irrigation.

## Slide 3 - Solution

**Apollo AgriVerse joins material intelligence with a physics-informed twin.**

```text
Farm inputs + weather + soil readings
                |
      Four State Engines
Mulch | Soil hydrology | Hydrogel | Crop lifecycle
                |
        Trusted field state
                |
  Selective ML prediction and alerting
                |
 Farmer dashboard / irrigation action
```

- Hydrogel stores and releases water near roots without electronics.
- Physics keeps the state plausible when telemetry is imperfect.
- ML is used selectively for forecast, anomaly and recommendation.

Visual: use the workflow above as the dominant central diagram.

## Slide 4 - MVP and Demonstration

**A working prototype can show the decision, not merely the dashboard.**

- Select crop, soil type, weather scenario and hydrogel dosage.
- Simulate 7-14 days of soil moisture and crop water demand.
- Compare control, hydrogel and biochar-only treatment scenarios.
- Show: irrigate now, delay, partial irrigation, or investigate sensor anomaly.
- Explain every recommendation with the state variables that caused it.

Demo story: a hot, low-rainfall scenario drains the control plot first; the
hydrogel scenario holds a moisture buffer; the system recommends a partial,
timed irrigation rather than a fixed full cycle.

Visual: a single comparison chart of soil moisture over time for the three
scenarios, with a clearly labelled "simulated MVP" note.

## Slide 5 - Novelty, Feasibility and Impact

**The innovation is the hybrid decision system, not a claim that one material
solves every soil problem.**

- Hydrogel and biochar are complementary, testable interventions.
- Modular software works first with simulated/manual data, then sensors.
- Low-cost hardware path: moisture, temperature and EC sensor plus one valve.
- Model-based resilience continues during missing-data periods.
- Validation target: test water productivity, yield proxy, nutrient efficiency,
  cost and farmer usability against control plots.

Impact target for research validation: reduce avoidable irrigation while
maintaining crop health. Do not state the 25-40% target as a proven outcome.

Visual: a two-column contrast: "MVP now" versus "field validation next".

## Slide 6 - Roadmap and Team

**From SIH demonstration to a field-verifiable Apollo AgriVerse module.**

1. Hackathon: digital twin, scenario engine, transparent recommendation UI.
2. Pilot: instrumented pot/plot comparison of control, hydrogel, biochar and
   combined treatment.
3. Field validation: local crop and soil calibration with agronomist review.
4. Scale: multilingual farmer workflow, economics and irrigation integration.

Team ownership: systems/data, soil-state model, crop/weather model, ML and
validation, frontend/demo, documentation/pitch.

Closing line: *Make soil decisions explainable, measurable and useful in the
field.*
