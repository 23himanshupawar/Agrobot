// ============================================
// AGROBOT PORTFOLIO - JavaScript
// ============================================

// Page routing
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-page') === pageId);
  });
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  // Trigger reveal animations
  setTimeout(initReveal, 100);
  return false;
}

// Hamburger toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  // Scroll progress
  const doc = document.documentElement;
  const scrollTop = window.scrollY;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  document.getElementById('scrollProgress').style.width = pct + '%';
});

// Reveal on scroll
function initReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  // Prevent default on nav links
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });
});
