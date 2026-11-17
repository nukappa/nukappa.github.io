/* Light/dark toggle. Light is the default; the choice is remembered per browser. */
(function () {
  var root = document.documentElement;
  function apply(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    var btns = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      btns[i].setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btns[i].title = btns[i].getAttribute('aria-label');
    }
  }
  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (err) {}
  });
})();
