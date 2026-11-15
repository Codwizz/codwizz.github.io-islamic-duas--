// Time slots (local time). Change the hours here if you like.
function slotForHour(h) {
  if (h >= 4 && h < 12) return "morning";
  if (h >= 12 && h < 17) return "day";      // anxiety relief + parents
  if (h >= 17 && h < 21) return "evening";
  return "night";                            // before sleep
}

const TABS = [
  ["morning", "🌅 Morning"],
  ["day", "☀️ Day"],
  ["evening", "🌇 Evening"],
  ["night", "🌙 Night"],
  ["prayers", "🕌 Prayers"],
];
const PRAYER_NAMES = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

const $ = (id) => document.getElementById(id);
const todayKey = () => "ticks-" + new Date().toISOString().slice(0, 10);
const load = () => { try { return JSON.parse(localStorage.getItem(todayKey())) || {}; } catch { return {}; } };
const save = (d) => { try { localStorage.setItem(todayKey(), JSON.stringify(d)); } catch {} };

let current = slotForHour(new Date().getHours());
let currentPrayer = "Fajr";

function card(d, ticks) {
  const el = document.createElement("div");
  el.className = "card" + (ticks[d.id] ? " done" : "");
  const esc = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  el.innerHTML = `
    <h3>${esc(d.title)}</h3>
    <div class="ar" lang="ar">${esc(d.arabic)}</div>
    <div class="tr">${esc(d.translit)}</div>
    <div class="mn"><b>Meaning:</b> ${esc(d.meaning)}</div>
    <div class="row">
      <span class="src">${esc(d.source)}</span>
      ${d.count ? `<span class="count">×${d.count}</span>` : ""}
      <button class="tick">${ticks[d.id] ? "✓ Read" : "Mark read"}</button>
    </div>`;
  el.querySelector(".tick").onclick = () => {
    const t = load();
    t[d.id] = !t[d.id];
    save(t);
    render();
  };
  return el;
}

function section(title, items, ticks, parent) {
  const h = document.createElement("h2");
  h.textContent = title;
  h.style.color = "#fff"; h.style.fontSize = "1.05rem";
  parent.appendChild(h);
  items.forEach((d) => parent.appendChild(card(d, ticks)));
}

function render() {
  const now = new Date();
  $("now").textContent = now.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" }) +
    " · " + now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  $("tabs").innerHTML = "";
  TABS.forEach(([key, label]) => {
    const b = document.createElement("button");
    b.textContent = label;
    if (key === current) b.className = "active";
    b.onclick = () => { current = key; render(); };
    $("tabs").appendChild(b);
  });

  $("prayerTabs").hidden = current !== "prayers";
  $("prayerTabs").innerHTML = "";
  PRAYER_NAMES.forEach((p) => {
    const b = document.createElement("button");
    b.textContent = p;
    if (p === currentPrayer) b.className = "active";
    b.onclick = () => { currentPrayer = p; render(); };
    $("prayerTabs").appendChild(b);
  });

  const ticks = load();
  const list = $("list");
  list.innerHTML = "";

  if (current === "morning") section("Morning duas", DUAS.morning, ticks, list);
  else if (current === "evening") section("Evening duas", DUAS.evening, ticks, list);
  else if (current === "night") section("Before sleep", DUAS.night, ticks, list);
  else if (current === "day") {
    section("Anxiety relief", DUAS.anxiety, ticks, list);
    section("Dua for parents", DUAS.parents, ticks, list);
  } else {
    section(currentPrayer + " — after the prayer", DUAS.prayers[currentPrayer], ticks, list);
    section("During every prayer (in order)", DUAS.inPrayer, ticks, list);
  }
}

$("reset").onclick = () => { save({}); render(); };
render();
// Auto-switch slot at hour change, unless the user picked another tab recently.
setInterval(render, 60000);
