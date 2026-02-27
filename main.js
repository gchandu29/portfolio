// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('on'), i * 85);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));

// Active nav highlight on scroll
const secs = document.querySelectorAll('section[id]');
const nls  = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 180) cur = s.id; });
  nls.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--txt)' : '';
  });
});

// Experience tab switcher
const tabs  = document.querySelectorAll('.exp-tab');
const pane  = document.querySelector('.exp-pane');
const panes = [
  {
    date: '2024 — Present · Hyderabad, India',
    role: 'Embedded Systems Engineer',
    co:   'Vector India Pvt. Ltd.',
    bullets: [
      'Developed and debugged <strong>embedded C/C++ firmware</strong> for ARM Cortex-M microcontrollers, reducing boot time ~15% through optimized startup sequences',
      'Implemented <strong>FreeRTOS multi-task scheduling</strong> with deterministic interrupt response under 5ms for safety-critical control loops',
      'Built <strong>Linux kernel modules</strong> — I2C sensor drivers, SPI display controllers, GPIO interrupt handlers during board bring-up',
      'Debugged <strong>UART, SPI, I2C, CAN</strong> protocol issues using oscilloscopes and logic analyzers, resolving 3+ critical HW/SW bugs',
      'Reviewed schematics and validated firmware against hardware specifications with design teams'
    ]
  },
  {
    date: '2020 — 2024 · Chittoor, Andhra Pradesh',
    role: 'B.Tech — Electronics & Communication Engineering',
    co:   'SITAMS (Siddharth Institute of Engineering)',
    bullets: [
      'Specialized in <strong>Embedded Systems, Microprocessors, Digital Electronics</strong> and VLSI Design',
      'Final Year Project: Real-time sensor data acquisition and processing on ARM-based embedded platform',
      'Strong foundation in <strong>digital logic, signal processing</strong>, and low-level hardware interaction',
      'Relevant coursework: Computer Architecture, Control Systems, Communication Systems, IoT'
    ]
  }
];

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('on'));
    tab.classList.add('on');
    const d = panes[i];
    pane.innerHTML = `
      <div class="exp-date">${d.date}</div>
      <div class="exp-role">${d.role}</div>
      <div class="exp-co">${d.co}</div>
      <ul class="exp-ul">
        ${d.bullets.map(b => `<li class="exp-li">${b}</li>`).join('')}
      </ul>`;
  });
});
