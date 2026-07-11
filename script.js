const btn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });
});
