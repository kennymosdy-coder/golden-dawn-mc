const content = window.GOLDEN_DAWN_CONTENT;

document.getElementById("aboutText").textContent = content.about;

const timeline = document.getElementById("timeline");
content.timeline.forEach(item => {
  const row = document.createElement("article");
  row.className = "timeline-item";
  row.innerHTML = `
    <div class="timeline-date">${item.date}</div>
    <div class="timeline-copy"><h3>${item.title}</h3><p>${item.text}</p></div>
  `;
  timeline.appendChild(row);
});

const roster = document.getElementById("rosterGrid");
content.roster.forEach((member, i) => {
  const card = document.createElement("div");
  card.className = "member";
  card.style.setProperty("--tilt", `${i % 2 ? 1.4 : -1.4}deg`);
  card.innerHTML = `<strong>${member.rank}</strong><span>${member.name}</span>`;
  roster.appendChild(card);
});

const btn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");
btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
