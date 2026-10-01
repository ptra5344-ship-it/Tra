(function () {
  var b = document.createElement("div");
  b.style.cssText = "position:fixed;bottom:10px;right:10px;"
    + "width:min(300px,85vw);background:#1e2536;color:#fff;"
    + "border-radius:12px;padding:10px;z-index:99;font-size:14px";
  var t = document.createElement("div");
  t.textContent = "Thanks for Support";
  t.style.cssText = "font-weight:bold;text-align:center;margin-bottom:6px";
  var l = document.createElement("div");
  l.style.cssText = "max-height:180px;overflow:auto";
  var i = document.createElement("input");
  i.placeholder = "Ask AI...";
  i.style.cssText = "width:68%;padding:6px";
  var s = document.createElement("button");
  s.textContent = "Send";
  s.style.cssText = "padding:6px";
  b.appendChild(t); b.appendChild(l); b.appendChild(i); b.appendChild(s);
  document.documentElement.appendChild(b);
  async function go() {
    var m = i.value.trim();
    if (!m) return;
    i.value = "";
    var p = document.createElement("p");
    p.textContent = "You: " + m;
    l.appendChild(p);
    var q = document.createElement("p");
    q.textContent = "AI: ...";
    l.appendChild(q);
    try {
      var r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: m })
      });
      var d = await r.json();
      q.textContent = "AI: " + d.reply;
    } catch (e) {
      q.textContent = "AI: error";
    }
    l.scrollTop = l.scrollHeight;
  }
  s.onclick = go;
  i.onkeydown = function (e) { if (e.key === "Enter") go(); };
})();
