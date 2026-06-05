/* ═══════════════════════════════════════════════
   化工实训装置网站 — 公共交互脚本
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Mobile Nav Toggle ──
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when clicking a link
    var links = navLinks.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        navLinks.classList.remove('open');
        navToggle.textContent = '☰';
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.textContent = '☰';
      }
    });
  }

  // ── Back to Top Button ──
  var backTop = document.getElementById('backTop');

  if (backTop) {
    // Show/hide based on scroll position
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          if (window.scrollY > 400) {
            backTop.classList.add('visible');
          } else {
            backTop.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    // Smooth scroll to top
    backTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Add current year to footer ──
  var footerYear = document.querySelector('.footer p');
  if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2026', new Date().getFullYear());
  }

})();
