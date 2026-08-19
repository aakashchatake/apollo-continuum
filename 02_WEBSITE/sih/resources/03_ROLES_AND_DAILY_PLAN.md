# Team Roles and Daily Plan

## Team Roles

| Member | Primary ownership | Deliverable for SIH |
|---|---|---|
| Priyan Khandelwal | Product lead and integration | Owns scope, scenario narrative, final demo flow and submission checklist |
| Divyanshi Bharuntia | Soil and material research | Hydrogel/biochar evidence sheet, treatment assumptions and judge Q&A |
| Zidane Madre | State-engine implementation | Root-zone water-balance function, treatment parameters and unit tests |
| Rudra Wagh | Crop and weather model | Weather input, growing-degree-day/crop demand logic and scenarios |
| Mubeen Sakharkar | UI and visual demo | Scenario controls, comparison chart, recommendation and explanation panel |
| Siddhanth Muttoo | ML, QA and documentation | Anomaly/confidence logic, demo dataset, evidence log and pitch rehearsal |

All members review the final SIH PDF, but one person owns each deliverable. No
one should wait for a "complete AI model" before the interface and demo work
starts.

## First 24 Hours

1. Freeze the MVP: one crop, one soil texture, one 14-day scenario and four
   treatments.
2. Write the assumptions in a shared CSV or JSON file with units.
3. Build the water-balance calculation before connecting charts.
4. Build the demo UI against deterministic sample data.
5. Prepare the six-slide SIH PDF using the official college template.
6. Rehearse a three-minute demo where every member can explain the model.

## Next 48 Hours

1. Add rainfall, temperature and heat-wave scenarios.
2. Add sensor missing-data and anomaly scenario.
3. Add action explanation and confidence score.
4. Compare control, hydrogel, biochar and combined treatment in one chart.
5. Record a short backup video of the demo.
6. Run a judge-style Q&A: novelty, feasibility, economics, validation and farmer trust.

## Definition of Done for MVP

- Scenario input changes the moisture curve and recommendation.
- Hydrogel capacity has a finite, visible effect; it is not a magic water source.
- Biochar is a separate parameter set, not a renamed hydrogel.
- Every action shows its reason and confidence.
- All demo results are labelled simulated unless directly measured.
- The final SIH PDF has no paragraphs, no unsupported performance claims and no
  more than six slides.

## Three-Minute Pitch Script

**Opening:** "Farmers often irrigate with incomplete information. Sensors can be
noisy, weather changes quickly and a generic AI output may not respect what soil
and crops can physically do."

**Solution:** "Our solution is a physics-informed digital twin for the root zone.
It combines soil water, crop stage, weather and an intelligent-soil treatment
model into a continuously updated field state."

**Material decision:** "Hydrogel is not presented as a universal replacement for
soil management. It acts as a local water reservoir. We compare it with biochar
and a control because the right intervention depends on soil, crop and cost."

**MVP:** "In our prototype, a user chooses a crop, soil and weather scenario. The
system simulates the next fourteen days, shows the moisture path and recommends
whether to irrigate now, delay or apply a partial cycle. It also explains why."

**Validation:** "Our next stage is a controlled four-treatment experiment. We
will measure water, soil moisture, crop response and economics before making a
field-performance claim."

**Close:** "The outcome is not more data for the farmer. It is one explainable,
measurable irrigation decision that respects the actual behaviour of soil."

## Mentor Notes

- Name the team **Team Saturn** if the college needs an immediate selection. It
  is distinct, easy to remember and does not duplicate Apollo branding.
- Keep Apollo AgriVerse and Chatake Innoworks branding on the title/footer only.
  The student team remains the SIH builder.
- Do not include the prior Apollo team members or prior student achievements as
  evidence of this team’s MVP. Mention Mission 1 only as Apollo lineage if asked.
