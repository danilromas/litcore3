/* litcore.ai — кит JS v3: тонкий параллакс + reveal. Без зависимостей. */
(function () {
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobile = matchMedia('(max-width: 767px)').matches || matchMedia('(pointer: coarse)').matches;

  /* Параллакс: <div data-plx="0.10"> — доля скролла; двигаем только transform */
  if (!reduced && !mobile) {
    var els = [].slice.call(document.querySelectorAll('[data-plx]'));
    if (els.length) {
      var ticking = false;
      var update = function () {
        var vh = innerHeight;
        els.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.bottom < -80 || r.top > vh + 80) return;
          var speed = parseFloat(el.getAttribute('data-plx')) || 0.08;
          var center = r.top + r.height / 2 - vh / 2;
          el.style.transform = 'translate3d(0,' + (-center * speed).toFixed(1) + 'px,0)';
        });
        ticking = false;
      };
      addEventListener('scroll', function () {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
      }, { passive: true });
      update();
    }
  }

  /* Reveal: .reveal → .is-in при входе во вьюпорт */
  var revs = [].slice.call(document.querySelectorAll('.reveal'));
  if (revs.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      revs.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      revs.forEach(function (el) { io.observe(el); });
    }
  }

  /* Мобильный drawer навигации */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('[data-nav-toggle]');
  var drawer = document.querySelector('[data-nav-drawer]');
  if (header && toggle && drawer) {
    var labels = {
      open: toggle.getAttribute('aria-label') || 'Open menu',
      close: header.getAttribute('data-close-label') || 'Close menu',
    };
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? labels.close : labels.open);
      drawer.hidden = !open;
      document.body.classList.toggle('nav-open', open);
    };
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    drawer.addEventListener('click', function (e) {
      if (e.target && e.target.closest && e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (header.contains(e.target)) return;
      setOpen(false);
    });
    matchMedia('(min-width: 1101px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* Splash: скрыть после load / max 2.6s (только первый визит в сессии) */
  (function initSplash() {
    var el = document.querySelector('[data-splash]');
    var pending = document.documentElement.classList.contains('lc-splash-pending');
    if (!el || !pending) {
      if (el) el.setAttribute('aria-busy', 'false');
      return;
    }
    var minMs = 700;
    var maxMs = 2400;
    var start = Date.now();
    var done = false;
    function hide() {
      if (done) return;
      done = true;
      try {
        sessionStorage.setItem('lc_splash_seen', '1');
      } catch (err) {}
      el.classList.add('is-leaving');
      el.setAttribute('aria-busy', 'false');
      setTimeout(function () {
        document.documentElement.classList.remove('lc-splash-pending');
        el.classList.add('is-done');
      }, 400);
    }
    function tryHide() {
      var wait = minMs - (Date.now() - start);
      if (wait > 0) setTimeout(hide, wait);
      else hide();
    }
    if (document.readyState === 'complete') tryHide();
    else addEventListener('load', tryHide);
    setTimeout(hide, maxMs);
  })();

  /* Смена языка: лёгкий fade вместо резкой перезагрузки */
  var reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fadeEl = document.querySelector('[data-lang-fade]');

  if (document.documentElement.classList.contains('lc-lang-entering')) {
    try {
      sessionStorage.removeItem('lc_lang_fade');
    } catch (err) {}
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.documentElement.classList.add('is-ready');
        setTimeout(function () {
          document.documentElement.classList.remove('lc-lang-entering', 'is-ready');
        }, 360);
      });
    });
  }

  document.querySelectorAll('[data-lang-switch]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.getAttribute('aria-current') === 'true') {
        return;
      }
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      if (reducedMotion || !fadeEl) return; /* обычный переход */
      e.preventDefault();
      try {
        sessionStorage.setItem('lc_lang_fade', '1');
      } catch (err) {}
      fadeEl.classList.add('is-on');
      setTimeout(function () {
        window.location.href = href;
      }, 220);
    });
  });
})();
