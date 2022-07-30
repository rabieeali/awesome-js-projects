const btn = document.querySelector(".responsive-menu");
btn.addEventListener("click", () => {
  const hamburger = document.querySelector(".hamburger");
  const box = document.querySelector(".box");
  hamburger.classList.toggle("open");
  box.classList.toggle("show");
});
