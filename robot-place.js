(function () {
  var S = 160;
  var a = document.createElement("agent-robot-avatar");
  a.setAttribute("size", String(S));
  a.style.cssText = "position:fixed;top:8px;z-index:98;"
    + "left:calc(50% - " + (S / 2) + "px)";
  document.documentElement.appendChild(a);
  customElements.whenDefined("agent-robot-avatar").then(function () {
    if (a.setPointerFollow) a.setPointerFollow(true);
  });
})();
