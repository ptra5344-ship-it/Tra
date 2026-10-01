(function () {
  const S = 40, el = document.createElement("div");
  el.textContent = "👾";
  el.style.cssText = "position:fixed;top:0;left:0;font-size:40px;pointer-events:none;z-index:98";
  document.documentElement.appendChild(el);
  let x = 50, y = 50, vx = 1.5, vy = 1.2, t = 0;
  (function m() {
    t += 0.05; x += vx; y += vy + Math.sin(t);
    if (x < 0 || x > innerWidth - S) vx = -vx;
    if (y < 0 || y > innerHeight - S) vy = -vy;
    el.style.transform = "translate(" + x + "px," + y + "px) scaleX(" + (vx < 0 ? -1 : 1) + ")";
    requestAnimationFrame(m);
  })();
})();
