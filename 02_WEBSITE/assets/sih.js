(() => {
  const menu = document.querySelector('.menu-button')
  const nav = document.querySelector('.main-nav')
  const theme = document.querySelector('.theme-button')
  const privacy = document.querySelector('[data-privacy-notice]')
  const accept = document.querySelector('[data-privacy-accept]')

  if (localStorage.getItem('apollo-theme') === 'night') {
    document.documentElement.dataset.theme = 'night'
  }

  if (theme) {
    theme.textContent = document.documentElement.dataset.theme === 'night' ? 'Day' : 'Night'
    theme.addEventListener('click', () => {
      const night = document.documentElement.dataset.theme !== 'night'
      document.documentElement.dataset.theme = night ? 'night' : ''
      localStorage.setItem('apollo-theme', night ? 'night' : 'day')
      theme.textContent = night ? 'Day' : 'Night'
    })
  }

  if (menu && nav) {
    menu.addEventListener('click', () => {
      nav.classList.toggle('open')
      menu.setAttribute('aria-expanded', String(nav.classList.contains('open')))
    })
  }

  if (privacy && accept) {
    if (localStorage.getItem('apollo-privacy-notice') !== 'accepted') {
      privacy.hidden = false
    }
    accept.addEventListener('click', () => {
      localStorage.setItem('apollo-privacy-notice', 'accepted')
      privacy.hidden = true
    })
  }
})()
