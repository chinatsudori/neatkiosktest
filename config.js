// ./config.js
window.CONFIG = {
  locationName: "5th Floor",
  inactivityMs: 30_000, // 30s idle reset
  trivia: { q: "Which planet has the most moons?", a: "Saturn." },
  announcements: [
    { title: "announcement", text: "This is an announcement", priority: "ok" },
    { title: "warning", text: "THIS IS A WARNING", priority: "warning" },
    { title: "Information", text: "This is just information.", priority: "info" }
  ],
  // Calendar events: ISO date strings (YYYY-MM-DD)
  events: [
    { date: "2025-08-05", title: "event", time: "09:00", where: "office", notes: "these are notes" },
    { date: "2025-08-12", title: "event", time: "12:00", where: "office", notes: "notes notes" },
    { date: "2025-08-12", title: "event", time: "12:30", where: "office", notes: "notes notes notes." },
    { date: "2025-08-21", title: "event", time: "16:00", where: "office", notes: "notes notes." },
    { date: "2025-09-02", title: "event", time: "10:00", where: "office", notes: "notes." }
  ]
};
