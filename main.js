/* ============================================
   AeroHealth Intelligence Network — main.js
   ============================================ */

(function () {

  /* ─── SCROLL-ACTIVATED NAV ─── */
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ─── SCROLL-REVEAL ANIMATIONS ─── */
  // Add js-ready to <html> so CSS can safely hide elements before revealing them
  document.documentElement.classList.add('js-ready');

  var faders = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    faders.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback for older browsers — show everything immediately
    faders.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ─── CONTACT FORM SUBMIT ─── */
  window.handleSubmit = function (e) {
    e.preventDefault();
    var btn = document.getElementById('submit-btn');
    btn.textContent = 'Message Sent \u2014 Thank You';
    btn.style.background = '#3d6147';
    btn.disabled = true;
  };

})();
