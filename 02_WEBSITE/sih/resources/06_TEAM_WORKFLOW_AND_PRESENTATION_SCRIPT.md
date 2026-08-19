# D Y Patil SIH Team Workflow and Presentation Script

## The One-Line Problem

Farmers often irrigate with incomplete root-zone information: weather changes,
soil behaves differently across plots and sensors can be missing or unreliable.
The team is building a transparent digital twin that estimates soil-water state,
compares amendment scenarios and recommends the next irrigation action with a
reason and confidence level.

## What the Team Is Solving

The team is **not** trying to build all of Apollo AgriVerse, invent a hydrogel or
automate a farm in SIH. The defined challenge is:

> Given a crop, soil, weather scenario, irrigation history and optional sensor
> reading, decide whether the root zone should be irrigated now, later or
> partially - and show why.

The prototype must compare four scenarios: control soil, hydrogel, biochar and
hydrogel plus biochar. It must show that these are modelled comparisons until a
controlled field experiment validates them.

## Team Work Breakdown

| Owner | Work package | Must deliver | Depends on |
|---|---|---|---|
| Priyan | Product lead and integration | Problem framing, shared task board, demo flow, final submission checklist | Inputs from all members |
| Divyanshi | Soil and material research | One-page hydrogel vs biochar evidence note; parameter assumptions; Q&A | Approved literature and mentor review |
| Zidane | Water-balance state engine | Deterministic 14-day water-balance function; unit tests; treatment model | Assumptions from Divyanshi |
| Rudra | Crop and weather logic | Crop-demand factor, weather scenarios, input units and test cases | State-engine interface |
| Mubeen | UI and presentation visual | Scenario controls, comparison chart, recommendation and reason panel | Stable sample output from Zidane/Rudra |
| Siddhanth | Confidence, QA and evidence | Missing-sensor rule, model confidence, README, simulation labels, demo recording | Working UI and state engine |

## Rules of Working

1. One shared repository, but every work package has an owner and a small
   interface. Do not wait for a complete system before committing work.
2. Keep model assumptions in one JSON/CSV file. Do not embed unexplained numbers
   in UI code.
3. Every change must preserve the four treatments and three core scenarios:
   normal, heat/dry spell and rainfall event.
4. Use synthetic or manually entered data for the hackathon, but label it
   clearly. Never manufacture field results.
5. Before changing scope, Priyan records the decision and gets mentor approval.
6. No one presents another member's result as their own. Each person can explain
   the whole model at a high level, but owns one specific technical section.

## Working Sequence

### Day 0 - 60-minute kickoff

**Priyan leads.** Freeze the scope: tomato demonstration crop, loam and black
cotton-soil presets, 14-day horizon, and four treatment toggles. Create the
repository and a task board with the six named owners.

**Output by end of session:** one diagram of inputs -> state engine ->
recommendation; one data-schema file; six named tasks; no unresolved ownership.

### Day 1 Morning - research and model contract

- Divyanshi delivers a one-page comparison: hydrogel as finite water storage and
  release; biochar as a soil-property modifier and comparator.
- Rudra defines weather input units and three repeatable weather arrays.
- Zidane writes the initial water-balance function using those assumptions.
- Siddhanth writes the expected input/output cases.

**Gate:** everyone agrees on units and terms before UI work begins.

### Day 1 Afternoon - working calculation and UI shell

- Zidane demonstrates that changing irrigation or rainfall changes moisture.
- Mubeen connects scenario controls to fixed sample output first, then to the
  calculation function.
- Rudra checks that heat increases demand and rainfall adds water only once.
- Divyanshi checks that hydrogel has a finite capacity.

**Gate:** each treatment produces a distinct, explainable trajectory.

### Day 2 - confidence and presentation

- Siddhanth adds missing-data or abnormal-sensor behaviour: the model continues
  but lowers confidence and asks for inspection.
- Priyan converts the result into the SIH presentation format.
- All members run the three-minute demo in order.
- Record a backup video after the final successful run.

**Gate:** no unsupported performance numbers appear anywhere.

### Final 90 minutes - QA and submission

1. Start the prototype from a clean browser session.
2. Run normal, heat and rainfall scenarios.
3. Change treatment and verify the chart, action and explanation change.
4. Check every slide is readable in the official college template.
5. Export exactly six slides as PDF.
6. Keep the source, PDF, video and README in a dated release folder.

## Development Definition of Done

- The web app responds to every input.
- The recommendation changes when the selected scenario materially changes.
- The hydrogel variable has finite storage and release.
- Biochar changes soil-loss behaviour rather than copying the hydrogel curve.
- The "why" panel mentions the selected crop, soil and weather.
- Missing/abnormal reading means lower confidence, not a fake precise answer.
- Every visible result is marked simulated or modelled.

## Presentation Order

The six-slide submission is designed for a 3.5 to 4-minute presentation. One
person should operate the demo while another speaks; do not pass the laptop
between six people.

| Speaker | Slide / moment | Time | Purpose |
|---|---|---:|---|
| Priyan | Opening and problem | 35 sec | Establish farmer pain and the project question |
| Divyanshi | Why soil intelligence; hydrogel vs biochar | 35 sec | Explain the material decision honestly |
| Zidane | State engine | 40 sec | Explain why the model is physically constrained |
| Rudra | Crop and weather | 30 sec | Explain dynamic crop demand and scenarios |
| Mubeen | Live MVP | 50 sec | Show the decision loop and UI |
| Siddhanth | Confidence, validation and close | 35 sec | Explain trust, field proof and next step |

## Member Scripts

### Priyan - opening, 35 seconds

"Good morning. Farmers often decide irrigation without seeing the true root-zone
condition. Rainfall is uncertain, heat changes crop demand, and a sensor reading
can be missing or wrong. Fixed schedules waste water, while pure AI can give
recommendations that do not respect soil physics. Our project, Apollo AgriVerse
Intelligent Soil, answers one practical question: should this plot be irrigated
now, later or partially, and why?"

Transition: "To make that decision more resilient, we model both the soil
treatment and the field state. Divyanshi will explain the treatment logic."

### Divyanshi - hydrogel and biochar, 35 seconds

"We do not present hydrogel as a magic solution. In our model it is a finite
root-zone water reservoir: after rainfall or irrigation it can absorb part of
the water and release it gradually during a dry period. Biochar is different.
It is a soil amendment that may change water-loss and nutrient-retention
behaviour over time. That is why our prototype compares control, hydrogel,
biochar and combined treatment. The future field trial decides which treatment
is economically right for a particular crop and soil."

Transition: "Zidane will show how we make the decision physically plausible."

### Zidane - state engine, 40 seconds

"The core is a simplified physics-informed state engine. At each time step, it
updates root-zone water using effective rainfall, irrigation and any simulated
hydrogel release, then subtracts crop demand, evaporation and drainage. The
hydrogel cannot create water because its storage is capped. This is important:
when data is limited, the model still follows the basic water balance instead of
producing an unexplained prediction."

Transition: "Rudra will explain how crop demand and weather change this state."

### Rudra - crop and weather, 30 seconds

"The same soil moisture can mean different risk for different crops and weather.
Our prototype applies a crop-demand factor and runs repeatable normal, dry-spell
and rainfall scenarios. A heat wave increases water demand; a rainfall event
adds water; the soil profile changes the loss behaviour. This gives the state
engine a changing agricultural context instead of a fixed threshold."

Transition: "Mubeen will now show the scenario comparison and recommendation."

### Mubeen - MVP demonstration, 50 seconds

"Here we select tomato, loam soil and a heat-wave scenario. The dashboard runs a
14-day root-zone simulation and compares the four treatment paths. The control
curve falls into the stress zone first. In the hydrogel path, the system shows a
finite buffer, not an unlimited source of water. The output is a simple action:
irrigate now, delay or use a partial cycle. The explanation panel tells the
farmer which selected conditions caused that action. All values shown here are
clearly labelled as modelled MVP scenarios."

Transition: "Siddhanth will explain how the system earns trust and how we
validate it."

### Siddhanth - trust, validation and close, 35 seconds

"Farmers will not trust a dashboard because it says AI. They will trust a tool
only after it shows a local, understandable reason and is proven beside a
control plot. Our next step is a controlled experiment with control, hydrogel,
biochar and combined treatments. We will measure irrigation applied, soil
moisture, crop response, cost and usability. Until then the system reports its
confidence and keeps every outcome as a modelled scenario. Our goal is one
explainable decision that farmers can verify in their own field."

## Two-Minute Fallback Speech

"Our project solves a simple but important problem: farmers often irrigate
without a reliable view of what is happening in the root zone. Weather changes,
crop demand changes, and sensors can be missing or noisy. Fixed schedules can
waste water, while a black-box AI recommendation may not follow the physical
behaviour of soil.

We are building a physics-informed digital twin for one field root zone. It
combines crop, soil, weather, irrigation history and optional sensor readings.
Its state engine keeps a water balance: rainfall and irrigation add water; crop
demand, evaporation and drainage remove it. A selective ML layer can later help
with forecasting and anomalies, but it does not replace the physical model.

Our innovation is that we also model intelligent-soil treatment options. A
hydrogel is treated as a finite local water reservoir: it absorbs some water and
releases it gradually. Biochar is treated separately as a soil-property
modifier. We compare control, hydrogel, biochar and combined treatment rather
than claiming one material is best for every farm.

In the MVP, a user selects a crop, soil and weather scenario. The system runs a
14-day simulation, shows treatment comparison curves and recommends irrigate
now, delay or partial irrigation. It also explains why and shows confidence.

Farmers will believe it only when we validate it locally. Our next phase is a
side-by-side controlled trial measuring water used, soil moisture, crop response
and economics. Until then, every output is labelled simulated. The outcome we
want is not more data for the farmer; it is one explainable irrigation decision
that can be tested in the field."

## Judge Questions and Answers

**Why will a farmer believe this?**

"Not because we call it AI. The tool gives a simple action and local reason,
allows manual override, shows confidence, and is validated through side-by-side
control plots before any farmer-facing performance claim."

**Why hydrogel instead of biochar?**

"We are not choosing one blindly. Hydrogel is modelled for short-term storage
and release; biochar is a separate longer-term soil amendment. Our design tests
both and may identify a combined treatment."

**Is this hardware-heavy?**

"The SIH MVP is software-first. It works with simulated/manual inputs. The
pilot hardware path is deliberately small: moisture, temperature, optional EC
and one irrigation actuator."

**What is the novelty?**

"The novelty is a transparent hybrid decision system that connects root-zone
water balance, crop stage, weather, amendment behaviour and uncertainty into
one explainable irrigation action."

**How will you prove economic feasibility?**

"We will measure treatment cost, water and energy used, labour, crop response
and payback against a control. We do not invent a universal cost per square
metre before selecting crop, dose, soil and local product."
