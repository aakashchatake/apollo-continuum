# D Y Patil Team Briefing and Execution Roadmap

## The idea in one minute

The project is not "an app that reads sensors" and not "AI predicting farming"
in isolation. It is a digital representation of a field root zone. It combines
soil readings, weather, crop stage and amendment behaviour to maintain a
plausible state of the field. A recommendation layer then says whether irrigation
should happen now, later, partially, or not at all.

The key distinction is that the model retains physical rules. Soil moisture
cannot rise without rain or irrigation; crop demand changes with crop stage and
weather; a hydrogel has finite storage and release behaviour. Machine learning
is used for forecasting, parameter fitting, anomalies and uncertainty, not as a
black-box substitute for soil physics.

## The system to explain

```text
INPUTS
  Crop + soil profile + irrigation history + weather + optional sensors
      |
DATA QUALITY LAYER
  Validate units, detect missing values, record confidence
      |
STATE ENGINE
  1. Soil hydrology: water in soil layers, loss and root-zone moisture
  2. Hydrogel: storage, swelling and release proxy
  3. Crop lifecycle: growing-degree days and water-demand stage
  4. Mulch: optional surface evaporation modifier
      |
STATE SYNCHRONIZER
  A transparent, time-stamped field state and confidence score
      |
SELECTIVE NEURAL ENGINE
  Forecast, anomaly detection, parameter estimation and uncertainty
      |
ACTION
  Irrigate now / delay / partial cycle / inspect sensor / compare treatment
```

## Is it hardware-heavy or software-heavy?

For SIH, it is deliberately software-first.

- The MVP needs no custom hydrogel synthesis, expensive lab instruments,
  autonomous irrigation rig, drone or a farm-wide sensor network.
- Start with a configurable simulator and a small recorded/sample CSV dataset.
- A low-cost validation setup later needs one moisture sensor, temperature
  reading, optionally EC, a simple irrigation actuator and a controlled pot or
  plot experiment.
- Real material formulation and claims about nutrient release need soil science
  and materials-science testing. The student software prototype must expose
  those as parameters and hypotheses, not pretend to validate chemistry.

This choice makes the project viable in a hackathon and scientifically honest.

## Why hydrogel? Why not biochar?

Hydrogel and biochar solve different parts of the soil-water problem.

| Question | Hydrogel | Biochar |
|---|---|---|
| Primary role | Absorbs and releases water as a local reservoir | Changes soil structure and can improve water retention, aeration and nutrient interactions |
| Time behaviour | Dynamic storage/release curve | More persistent soil amendment effect |
| Best digital-twin variable | Water storage capacity and release rate | Soil hydraulic and nutrient-retention parameter shift |
| Main concern | Durability, salinity response, cost, polymer sustainability | Feedstock quality, dose, pH/EC effects, variability |
| SIH treatment | Primary responsive-material scenario | Comparator and possible combined-treatment scenario |

The project must not say hydrogel is universally better. The correct research
question is: **for this crop, soil and irrigation regime, which treatment gives
the best water productivity and economic result?**

The MVP therefore includes four scenario switches: control, hydrogel, biochar,
and hydrogel plus biochar. The field protocol later determines which is
appropriate. This is stronger than presenting a one-material answer.

## What we can truthfully show as MVP

### User journey

1. User chooses crop, soil texture, plot area, forecast scenario and treatment.
2. System generates a 7-14 day state trajectory from a simplified water balance.
3. User injects a condition: heat wave, rain, missed irrigation or failed sensor.
4. System shows moisture curve, hydrogel storage proxy, crop stress index and
   confidence.
5. System recommends an action with explanation and uncertainty.

### MVP minimum modules

- Soil-water balance: simple root-zone water accounting.
- Crop stage: growing-degree-day stage and stage-specific water-demand factor.
- Hydrogel proxy: finite capacity, absorption after water input and gradual
  release during a dry period.
- Weather: manual or API-driven temperature/rainfall input; cached sample data
  for reliable demos.
- Recommendation rules: threshold and confidence-based choices.
- Interface: one scenario form, one comparison chart, one recommendation panel,
  one "why this action" panel.

### Explicit non-goals for the hackathon

- No claim of a novel synthesized hydrogel.
- No field-validated water saving percentage.
- No autonomous valve control on a real farm.
- No diagnosis of plant disease or fertilizer prescription.
- No claim that external weather APIs or live sensors are always available.

## Simple model description for judges

At each time step, the model updates root-zone water:

```text
next soil water = current soil water
                + effective rainfall + irrigation + hydrogel release
                - crop demand - evaporation - drainage
```

The crop-demand term increases with heat and the crop growth stage. The hydrogel
term is capped by its simulated storage capacity. Sensor observations correct the
estimated state when they pass data-quality checks. If they do not, the system
keeps running but lowers confidence and asks for inspection.

This is a simplified model suitable for an MVP. Calibration and comparison with
observed field data are required before farmer-facing deployment.

## Feasibility and economics discussion

Do not invent an installation cost per square metre. In the pitch, say the
software estimates irrigation events first; amendment cost depends on product,
dose, crop, soil and local availability and will be measured in the pilot.

The pilot economics sheet should compare:

- amendment quantity and cost;
- sensor and actuator cost, if used;
- water applied and electricity/diesel use;
- labour and maintenance;
- crop yield/quality proxy;
- water productivity and payback period.

Farmer trust comes from side-by-side proof: control versus treatment plots,
simple local-language advice, visible reasoning, manual override and measured
results. It does not come from claiming AI accuracy alone.

## Roadmap

### Phase A - SIH prototype: 3-5 days

- Build the transparent scenario simulator and polished demo.
- Use synthetic and manually verified sample data.
- Implement control, hydrogel, biochar and combined-treatment switches.
- Record the demo and document every assumption.

### Phase B - Controlled validation: 4-8 weeks

- Select one crop and one representative local soil.
- Run replicated pot/plot treatments: control, hydrogel, biochar, combined.
- Record irrigation, soil moisture, temperature, EC, crop growth and costs.
- Fit/adjust model parameters from the observed data.

### Phase C - Pilot: one growing cycle

- Deploy a small local plot with agronomist supervision.
- Validate recommendation quality, water productivity and usability.
- Add sensor anomaly and missing-data tests.

### Phase D - Apollo AgriVerse integration

- Convert validated modules into the AgriVerse state engine.
- Connect with weather and crop lifecycle work already present in Apollo
  AgriVerse.
- Keep student work in its own repository and merge only reviewed modules.

## Apollo context to use correctly

Apollo Mission 1 provides history: the public `Apollo-Krishi-Rakshak` repository
contains a frontend, backend and report structure but has only four commits and
minimal documentation. It is a reference, not a production dependency.

Apollo AgriVerse work already establishes useful patterns: digital-twin
simulation, hydrogel telemetry concepts, crop lifecycle modelling, weather data
handling, ML models and a FastAPI-based service direction. Reuse the concepts
and architecture; independently verify all existing model performance before
representing it as evidence in SIH.

## Questions the team should be ready to answer

**Why not only sensors?** Sensors observe locally and can fail. A physics state
model carries the field state between readings and shows confidence.

**Why not only AI?** AI can learn correlations but should be constrained by water
balance and crop logic when data is limited.

**Why hydrogel?** It can buffer water close to roots. It is a treatment to test,
not a substitute for irrigation planning.

**Why not biochar?** Biochar is included as a comparator and may be part of a
combined treatment. It has a different, longer-term soil role.

**What is innovative?** A transparent digital twin that represents amendment
behaviour, soil physics, crop stage and uncertainty together, then turns the
state into an explainable irrigation action.

**Can a farmer use it?** The final interface must simplify the output to an
action and reason. The complex model remains behind the recommendation.
