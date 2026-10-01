(function () {
  var id = localStorage.getItem("tra_id");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("tra_id", id);
  }
  function ping() {
    fetch("/api/ping", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    }).catch(function () {});
  }
  ping();
  setInterval(ping, 30000);
})();
