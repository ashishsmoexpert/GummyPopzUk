// ============================
// ANNOUNCEMENT BAR
// ============================
(function initAnnouncementBar() {
  const bar = document.querySelector('.announcement-bar');
  if (!bar) return;
  const closeBtn = bar.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bar.style.height = bar.offsetHeight + 'px';
      bar.style.overflow = 'hidden';
      bar.style.transition = 'height 0.3s ease, opacity 0.3s ease';
      requestAnimationFrame(() => {
        bar.style.height = '0';
        bar.style.opacity = '0';
        bar.style.padding = '0';
      });
      setTimeout(() => bar.remove(), 300);
    });
  }
})();

// ============================
// STICKY NAV
// ============================
(function initStickyNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  function onScroll() {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ============================
// MOBILE MENU
// ============================
(function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', String(open));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

// ============================
// ACTIVE NAV LINK
// ============================
(function initActiveNavLink() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ============================
// SCROLL FADE ANIMATIONS
// ============================
(function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();

// ============================
// FAQ ACCORDION
// ============================
(function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

// ============================
// SMOOTH ANCHOR SCROLL
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================
// COOKIE BANNER
// ============================
(function initCookieBanner() {
  if (localStorage.getItem('cookiesAccepted')) return;

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p>We use cookies to improve your experience. <a href="cookies.html">Learn more</a>.</p>
    <button onclick="this.parentElement.remove(); localStorage.setItem('cookiesAccepted','1')" class="btn btn-primary btn-sm">Accept</button>
  `;
  banner.style.cssText = `
    position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
    background: #1A0A2E; color: white; border: 1px solid rgba(255,79,163,0.3);
    padding: 1rem 1.5rem; border-radius: 1rem; display: flex; align-items: center;
    gap: 1.5rem; z-index: 9999; max-width: 600px; width: calc(100% - 3rem);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3); font-family: 'Barlow Condensed', sans-serif; font-size: 15px;
  `;
  banner.querySelector('a').style.color = '#FF4FA3';
  document.body.appendChild(banner);
})();
