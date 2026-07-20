/**
 * Ранний boot до paint: splash + lang-fade классы на <html>.
 * Внешний файл — CSP script-src 'self' (без inline).
 * Также failsafe-скрытие splash, если kit.js не успел/не загрузился.
 */
(function () {
  try {
    if (!sessionStorage.getItem('lc_splash_seen')) {
      document.documentElement.classList.add('lc-splash-pending');
    }
    if (sessionStorage.getItem('lc_lang_fade') === '1') {
      document.documentElement.classList.add('lc-lang-entering');
    }
  } catch (e) {}

  function hideSplash() {
    var root = document.documentElement;
    if (!root.classList.contains('lc-splash-pending')) return;
    var el = document.querySelector('[data-splash]');
    try {
      sessionStorage.setItem('lc_splash_seen', '1');
    } catch (err) {}
    if (el) {
      el.classList.add('is-leaving', 'is-done');
      el.setAttribute('aria-busy', 'false');
    }
    root.classList.remove('lc-splash-pending');
  }

  /* Failsafe: даже без kit.js убрать лоадер через 2.5 с */
  setTimeout(hideSplash, 2500);
})();
