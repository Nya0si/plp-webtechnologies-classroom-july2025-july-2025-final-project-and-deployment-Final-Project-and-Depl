const toggle = document.getElementById("darkmode-toggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
