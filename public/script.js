// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
const labelOpen = toggle.dataset.labelOpen || 'Open menu';
const labelClose = toggle.dataset.labelClose || 'Close menu';

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? labelClose : labelOpen);
});

links.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', labelOpen);
  }
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in on scroll
if ('IntersectionObserver' in window) {
  const items = document.querySelectorAll('.card, .steps li, .checklist li, .section-head');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}
