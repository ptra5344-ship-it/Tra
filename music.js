(function () {
  const audio = new Audio("/song.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  const btn = document.createElement("button");
  btn.textContent = "🔇";
  btn.style.cssText = "position:fixed;bottom:10px;left:10px;z-index:99;font-size:24px;width:48px;height:48px;border-radius:50%;border:none;background:#1e2536;cursor:pointer";
  btn.onclick = function () {
    if (audio.paused) { audio.play(); btn.textContent = "🔊"; }
    else { audio.pause(); btn.textContent = "🔇"; }
  };
  document.documentElement.appendChild(btn);
})();
