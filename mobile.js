/* Position controls by their rendered sizes, including browser text scaling. */
(function () {
  var root = document.documentElement;
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
  var camera = document.querySelector('.camera');
  var pending = false;
  function set(name, value) {
    value = Math.ceil(value) + 'px';
    if (root.style.getPropertyValue(name) !== value) root.style.setProperty(name, value);
  }
  function layout() {
    pending = false;
    if (!header || !footer || !camera) return;
    set('--game-height', window.innerHeight);
    if (window.innerWidth > 760) return;
    var f = footer.getBoundingClientRect();
    var c = camera.getBoundingClientRect();
    set('--hud-top', header.getBoundingClientRect().bottom + 14);
    var bottom = f.height ? window.innerHeight - f.top + 10 : 12;
    set('--camera-bottom', bottom);
    set('--bottom-hud', bottom + c.height + 12);
  }
  function queue() {
    if (!pending) { pending = true; requestAnimationFrame(layout); }
  }
  if (window.ResizeObserver) {
    var observer = new ResizeObserver(queue);
    [header, footer, camera].forEach(function(el) { if(el) observer.observe(el); });
  }
  var changes = new MutationObserver(queue);
  changes.observe(document.body, { attributes:true, attributeFilter:['class','hidden'], subtree:true });
  window.addEventListener('resize', queue);
  window.addEventListener('orientationchange', queue);
  document.addEventListener('click', queue);
  window.addEventListener('island-ready', queue);
  layout();
})();
