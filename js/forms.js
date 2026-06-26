// ============================
// FORM VALIDATION & SUBMISSION
// ============================

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim());
}

function showFieldError(field, msg) {
  field.style.borderColor = '#e53e3e';
  let err = field.parentElement.querySelector('.field-error');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'color: #e53e3e; font-size: 12px; display: block; margin-top: 4px; font-family: "Barlow Condensed", sans-serif;';
    field.parentElement.appendChild(err);
  }
  err.textContent = msg;
}

function clearFieldError(field) {
  field.style.borderColor = '';
  const err = field.parentElement.querySelector('.field-error');
  if (err) err.remove();
}

// Newsletter form
(function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;

      clearFieldError(emailInput);

      if (!validateEmail(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please enter a valid email address.');
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Subscribed!';
        btn.disabled = true;
        btn.style.background = '#22c55e';
      }

      emailInput.value = '';
      setTimeout(() => {
        if (btn) {
          btn.textContent = 'Subscribe';
          btn.disabled = false;
          btn.style.background = '';
        }
      }, 4000);
    });
  });
})();

// Contact form
(function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const fields = {
      name: { el: form.querySelector('[name="name"]'), msg: 'Please enter your name.' },
      email: { el: form.querySelector('[name="email"]'), msg: 'Please enter a valid email.' },
      message: { el: form.querySelector('[name="message"]'), msg: 'Please enter your message.' }
    };

    Object.values(fields).forEach(f => {
      if (f.el) clearFieldError(f.el);
    });

    if (!fields.name.el?.value.trim()) { showFieldError(fields.name.el, fields.name.msg); valid = false; }
    if (!validateEmail(fields.email.el?.value.trim())) { showFieldError(fields.email.el, fields.email.msg); valid = false; }
    if (!fields.message.el?.value.trim()) { showFieldError(fields.message.el, fields.message.msg); valid = false; }

    if (!valid) return;

    const success = form.querySelector('.form-success');
    if (success) {
      success.textContent = 'Thanks! We\'ll be in touch within 1–2 working days.';
      success.classList.add('show');
    }

    form.reset();
    setTimeout(() => { if (success) success.classList.remove('show'); }, 6000);
  });
})();

// Wholesale form
(function initWholesaleForm() {
  const form = document.querySelector('#wholesale-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      clearFieldError(field);
      if (!field.value.trim()) {
        showFieldError(field, 'This field is required.');
        valid = false;
      } else if (field.type === 'email' && !validateEmail(field.value.trim())) {
        showFieldError(field, 'Please enter a valid email address.');
        valid = false;
      }
    });

    if (!valid) return;

    const success = form.querySelector('.form-success');
    if (success) {
      success.textContent = 'Brilliant! Your wholesale enquiry has been received. Our team will be in touch within 1–2 working days with trade pricing.';
      success.classList.add('show');
    }

    form.reset();
    setTimeout(() => { if (success) success.classList.remove('show'); }, 8000);
  });
})();

// Clear errors on input
document.querySelectorAll('input, textarea, select').forEach(field => {
  field.addEventListener('input', () => clearFieldError(field));
});
