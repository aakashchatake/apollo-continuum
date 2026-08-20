(() => {
  'use strict'

  const COLORS = { control: '#ae5d2b', hydrogel: '#087e9a', biochar: '#8ba64f', combined: '#2f7650' }
  const LABELS = { control: 'Control', hydrogel: 'Hydrogel', biochar: 'Biochar', combined: 'Hydrogel + biochar' }
  const CROPS = {
    tomato: { demand: 1, threshold: 42 }, grape: { demand: .88, threshold: 36 },
    wheat: { demand: .74, threshold: 32 }, sugarcane: { demand: 1.12, threshold: 45 }
  }
  const SOILS = {
    loam: { loss: 1, infiltration: .88 }, black: { loss: .78, infiltration: .72 }, sandy: { loss: 1.26, infiltration: .94 }
  }
  const TREATMENTS = {
    control: { capacity: 0, release: 0, loss: 1 },
    hydrogel: { capacity: 15, release: 2, loss: .97 },
    biochar: { capacity: 0, release: 0, loss: .82 },
    combined: { capacity: 17, release: 2.25, loss: .76 }
  }

  function weatherFor(kind, day) {
    if (kind === 'heat') return { demand: day > 5 && day < 11 ? 4.6 : 4.05, rain: 0, label: 'Hot / no rain' }
    if (kind === 'rain') return { demand: 2.15, rain: day === 3 ? 17 : day === 8 ? 6 : 0, label: day === 3 || day === 8 ? 'Rain event' : 'Humid / no rain' }
    return { demand: 2.8, rain: day === 5 ? 7 : 0, label: day === 5 ? 'Light rain' : 'Normal demand' }
  }

  function simulate(type, input) {
    const props = TREATMENTS[type]
    const crop = CROPS[input.crop]
    const soil = SOILS[input.soil]
    const values = [input.moisture]
    const stores = [0]
    let moisture = input.moisture
    let store = 0
    for (let day = 1; day <= 14; day += 1) {
      const weather = weatherFor(input.weather, day)
      let incoming = weather.rain * soil.infiltration
      if (day === 1) incoming += input.irrigation * soil.infiltration
      if (props.capacity > 0 && incoming > 0) {
        const captured = Math.min(props.capacity - store, incoming * .34)
        store += captured
        incoming -= captured
      }
      moisture += incoming * .78
      if (moisture < crop.threshold + 12 && store > 0) {
        const released = Math.min(props.release, store)
        store -= released
        moisture += released
      }
      const demand = weather.demand * crop.demand * soil.loss * props.loss
      moisture = Math.max(10, Math.min(92, moisture - demand))
      values.push(moisture)
      stores.push(store)
    }
    const minimum = Math.min(...values)
    const stressDays = values.slice(1).filter(value => value < crop.threshold).length
    const firstStress = values.findIndex((value, day) => day > 0 && value < crop.threshold)
    return { values, stores, minimum, stressDays, firstStress }
  }

  function runScenario(input) {
    const series = {}
    Object.keys(TREATMENTS).forEach(type => { series[type] = simulate(type, input) })
    return series
  }

  const Engine = { CROPS, SOILS, TREATMENTS, weatherFor, simulate, runScenario }
  if (typeof window !== 'undefined') window.IntelligentSoilEngine = Engine
  if (typeof document === 'undefined') return

  const $ = id => document.getElementById(id)
  let currentSeries
  let currentInput

  function readInput() {
    return {
      crop: $('crop').value, soil: $('soil').value, weather: $('weather').value,
      moisture: Number($('moisture').value), irrigation: Number($('irrigation').value), area: Number($('area').value),
      treatment: document.querySelector('input[name="treatment"]:checked').value
    }
  }

  function recommendation(result, input) {
    const threshold = CROPS[input.crop].threshold
    if (result.firstStress > 0) {
      const deficit = Math.max(4, Math.min(18, Math.ceil((threshold + 6 - result.minimum) / .78)))
      return { action: result.firstStress <= 3 ? 'Irrigate now' : 'Schedule irrigation', pulse: deficit, day: result.firstStress }
    }
    if (result.minimum < threshold + 7) return { action: 'Monitor closely', pulse: 0, day: 'No trigger' }
    return { action: 'Delay irrigation', pulse: 0, day: 'No trigger' }
  }

  function draw(series, input) {
    const canvas = $('chart')
    const rect = canvas.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)
    const context = canvas.getContext('2d')
    context.setTransform(dpr, 0, 0, dpr, 0, 0)
    const width = rect.width
    const height = rect.height
    const padding = { left: 48, right: 18, top: 18, bottom: 35 }
    const x = day => padding.left + (width - padding.left - padding.right) * (day / 14)
    const y = value => padding.top + (height - padding.top - padding.bottom) * (1 - (value - 10) / 82)
    const styles = getComputedStyle(document.documentElement)
    const muted = styles.getPropertyValue('--muted').trim()
    const line = styles.getPropertyValue('--line').trim()
    const thresholdColor = styles.getPropertyValue('--sun').trim()

    context.clearRect(0, 0, width, height)
    context.font = '11px Arial'
    context.fillStyle = muted
    context.strokeStyle = line
    context.lineWidth = 1
    ;[20, 40, 60, 80].forEach(value => {
      context.beginPath(); context.moveTo(padding.left, y(value)); context.lineTo(width - padding.right, y(value)); context.stroke()
      context.fillText(`${value}%`, 7, y(value) + 4)
    })
    ;[0, 3, 6, 9, 12, 14].forEach(day => context.fillText(`D${day}`, x(day) - 8, height - 10))

    const threshold = CROPS[input.crop].threshold
    context.save(); context.setLineDash([6, 5]); context.strokeStyle = thresholdColor; context.lineWidth = 2
    context.beginPath(); context.moveTo(padding.left, y(threshold)); context.lineTo(width - padding.right, y(threshold)); context.stroke(); context.restore()
    context.fillStyle = thresholdColor
    context.fillText(`Stress ${threshold}%`, Math.max(padding.left, width - 96), y(threshold) - 7)

    Object.entries(series).forEach(([name, result]) => {
      context.strokeStyle = COLORS[name]
      context.lineWidth = name === input.treatment ? 4 : 2.2
      context.globalAlpha = name === input.treatment ? 1 : .72
      context.beginPath()
      result.values.forEach((value, day) => day === 0 ? context.moveTo(x(day), y(value)) : context.lineTo(x(day), y(value)))
      context.stroke()
    })
    context.globalAlpha = 1
  }

  function updateInspector(day) {
    if (!currentSeries) return
    const weather = weatherFor(currentInput.weather, day)
    $('dayTitle').textContent = `Day ${day}`
    $('weatherReadout').textContent = day === 0 ? 'Initial state' : `${weather.label}${weather.rain ? ` / ${weather.rain} mm` : ''}`
    $('dayValues').innerHTML = Object.entries(currentSeries).map(([name, result]) => `<div style="--series-color:${COLORS[name]}"><span>${LABELS[name]}</span><strong>${Math.round(result.values[day])}%</strong></div>`).join('')
  }

  function updateTable(series, input) {
    const threshold = CROPS[input.crop].threshold
    $('comparisonRows').innerHTML = Object.entries(series).map(([name, result]) => {
      const buffer = result.stores[14]
      const state = result.stressDays === 0 ? ['Within range', ''] : result.stressDays <= 3 ? ['Caution', 'warn'] : ['Stress', 'high']
      return `<tr><td>${LABELS[name]}</td><td>${Math.round(result.minimum)}%</td><td>${result.stressDays}</td><td>${buffer.toFixed(1)} model units</td><td><span class="status-pill ${state[1]}">${state[0]}</span></td></tr>`
    }).join('')
    $('threshold').textContent = `Crop threshold ${threshold}%`
  }

  function update() {
    currentInput = readInput()
    currentSeries = runScenario(currentInput)
    const focus = currentSeries[currentInput.treatment]
    const control = currentSeries.control
    const decision = recommendation(focus, currentInput)
    const controlDecision = recommendation(control, currentInput)
    const waterDifferenceMm = Math.max(0, controlDecision.pulse - decision.pulse)
    const waterLitres = Math.round(waterDifferenceMm * currentInput.area)

    draw(currentSeries, currentInput)
    $('action').textContent = decision.action
    $('actionDetail').textContent = LABELS[currentInput.treatment]
    $('lowest').textContent = `${Math.round(focus.minimum)}%`
    $('stressDays').textContent = `${focus.stressDays} ${focus.stressDays === 1 ? 'day' : 'days'}`
    $('waterSaved').textContent = waterLitres ? `${waterLitres.toLocaleString('en-IN')} L` : 'No saving'
    $('waterDetail').textContent = waterLitres ? `${waterDifferenceMm} mm avoided vs control` : 'Same pulse as control'
    $('suggestedPulse').textContent = decision.pulse ? `${decision.pulse} mm` : 'None now'
    $('decisionDay').textContent = typeof decision.day === 'number' ? `Day ${decision.day}` : decision.day
    $('whyTitle').textContent = `${decision.action} for ${LABELS[currentInput.treatment].toLowerCase()}`
    $('whyText').textContent = decision.pulse
      ? `The selected trajectory crosses the ${CROPS[currentInput.crop].threshold}% crop stress threshold on day ${decision.day}. The model proposes a bounded ${decision.pulse} mm pulse instead of a fixed schedule.`
      : 'The selected trajectory remains above its immediate irrigation trigger. Continue measurement; treatment assumptions do not replace observed soil-moisture readings.'
    $('assumptionText').textContent = `${$('crop').selectedOptions[0].text} uses a ${CROPS[currentInput.crop].threshold}% demonstration stress threshold. ${$('soil').selectedOptions[0].text} changes infiltration and daily loss. Weather supplies deterministic demand and rain events. Hydrogel capacity and biochar loss factors are hypotheses for controlled comparison, not field claims.`
    updateTable(currentSeries, currentInput)
    updateInspector(Number($('day').value))
  }

  function setPreset(name) {
    const preset = {
      dry: { crop: 'tomato', soil: 'sandy', weather: 'heat', moisture: 54, irrigation: 8 },
      balanced: { crop: 'wheat', soil: 'loam', weather: 'normal', moisture: 66, irrigation: 10 },
      rain: { crop: 'sugarcane', soil: 'black', weather: 'rain', moisture: 58, irrigation: 4 }
    }[name]
    Object.entries(preset).forEach(([key, value]) => { $(key).value = value })
    document.querySelectorAll('[data-preset]').forEach(button => button.classList.toggle('active', button.dataset.preset === name))
    syncOutputs(); update()
  }

  function syncOutputs() {
    $('moistureValue').textContent = `${$('moisture').value}%`
    $('irrigationValue').textContent = `${$('irrigation').value} mm`
    $('areaValue').textContent = `${Number($('area').value).toLocaleString('en-IN')} m2`
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme
    $('theme').textContent = theme === 'night' ? 'Day' : 'Night'
    $('theme').setAttribute('aria-label', `Switch to ${theme === 'night' ? 'day' : 'night'} theme`)
    if (currentSeries) draw(currentSeries, currentInput)
  }

  ;['crop', 'soil', 'weather', 'moisture', 'irrigation', 'area'].forEach(id => $(id).addEventListener('input', () => { syncOutputs(); update() }))
  document.querySelectorAll('input[name="treatment"]').forEach(input => input.addEventListener('change', update))
  document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => setPreset(button.dataset.preset)))
  $('day').addEventListener('input', event => updateInspector(Number(event.target.value)))
  $('run').addEventListener('click', update)
  $('reset').addEventListener('click', () => {
    $('crop').value = 'tomato'; $('soil').value = 'loam'; $('weather').value = 'heat'; $('moisture').value = 64; $('irrigation').value = 10; $('area').value = 1000
    document.querySelector('input[value="hydrogel"]').checked = true
    document.querySelectorAll('[data-preset]').forEach(button => button.classList.remove('active'))
    syncOutputs(); update()
  })
  $('theme').addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'night' ? 'day' : 'night'))
  window.addEventListener('resize', update)
  applyTheme('day')
  syncOutputs()
  update()
})()
