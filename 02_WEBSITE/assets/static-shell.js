(() => {
  const menu = document.querySelector('.menu-button');
  const mainNav = document.querySelector('.main-nav');
  const theme = document.querySelector('.theme-button');
  if (!menu || !mainNav || !theme) return;
  if (localStorage.getItem('apollo-theme') === 'night') document.documentElement.dataset.theme = 'night';
  theme.textContent = document.documentElement.dataset.theme === 'night' ? 'Day' : 'Night';
  menu.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menu.setAttribute('aria-expanded', mainNav.classList.contains('open'));
  });
  theme.addEventListener('click', () => {
    const night = document.documentElement.dataset.theme !== 'night';
    document.documentElement.dataset.theme = night ? 'night' : '';
    localStorage.setItem('apollo-theme', night ? 'night' : 'day');
    theme.textContent = night ? 'Day' : 'Night';
  });
})();
