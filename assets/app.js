const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector('[data-mobile-toggle]');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '72px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.padding = '18px 22px';
    navLinks.style.background = 'rgba(7,11,19,.96)';
    navLinks.style.flexDirection = 'column';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,.08)';
  });
}
