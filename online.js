(function () {
  var b = document.createElement("div");
  b.textContent = "🟢 Online: ...";
  b.style.cssText = "position:fixed;top:8px;left:8px;z-index:99;"
    + "background:#1e2536;color:#fff;border-radius:20px;"
    + "padding:6px 12px;font-size:13px;font-family:sans-serif";
  document.documentElement.appendChild(b);
  async function tick() {
    try {
      var r = await fetch("/api/ping");
      var d = await r.json();
      var n = d.online;
      if (n === undefined) n = d.count;
      b.textContent = "🟢 Online: " + (n === undefined ? "?" : n);
    } catch (e) {
      b.textContent = "🟢 Online: ?";
    }
  }
  tick();
  setInterval(tick, 30000);
})();
