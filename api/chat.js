module.exports = async (req, res) => {
  const msg = String((req.body || {}).message || "").slice(0, 2000);
  if (!msg) return res.status(400).json({ reply: "Empty" });
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent";
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
      body: JSON.stringify({ contents: [{ parts: [{ text: msg }] }] })
    });
    const d = await r.json();
    const t = d.candidates && d.candidates[0].content.parts[0].text;
    res.status(200).json({ reply: t || "Error: " + JSON.stringify(d.error || d) });
  } catch (e) {
    res.status(500).json({ reply: "Server error" });
  }
};
