menu = document.querySelector(".menu");
line = document.querySelectorAll(".menu-line");
nav = document.querySelector(".nav");
let t = true;
menu.addEventListener("click", () => {
  if (t) {
    nav.classList.add("active");
    // line.classList.add("red");
    // console.log(line.classList())
    t = !t;
  } else {
    nav.classList.remove("active");
    // line.classList.add("red");
    t = !t;
  }
});

console.log(menu.classList);
