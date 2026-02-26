// ============================================
// G. Chandu Portfolio — main.js
// ============================================

// ----- Custom Cursor -----
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Cursor grow on hover over links/buttons
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '14px';
    cursor.style.height = '14px';
    ring.style.width = '50px';
    ring.style.height = '50px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '8px';
    cursor.style.height = '8px';
    ring.style.width = '32px';
    ring.style.height = '32px';
  });
});

// ----- Scroll Reveal -----
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

// ----- Active Nav Link on Scroll -----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) {
      current = s.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});

// ----- Typed terminal effect (optional enhancement) -----
function typeText(el, text, speed = 40) {
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

// Auto-type the terminal command on load
window.addEventListener('DOMContentLoaded', () => {
  const cmdEl = document.querySelector('.t-cmd');
  if (cmdEl) {
    const original = cmdEl.textContent;
    typeText(cmdEl, original, 50);
  }
});
