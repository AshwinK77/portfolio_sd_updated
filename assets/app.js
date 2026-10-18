const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector('[data-mobile-toggle]');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  const setOpen = open => {
    navLinks.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.addEventListener('click', () => setOpen(!navLinks.classList.contains('is-open')));
  navLinks.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) { setOpen(false); navToggle.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
}
