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
})();
