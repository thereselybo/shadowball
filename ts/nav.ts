const nav = document.querySelector(".nav") as HTMLElement;
const hamburger = document.querySelector("#hamburger") as HTMLElement;
const cross = document.querySelector("#cross") as HTMLElement;

hamburger.addEventListener("click", function openNav() {
  hamburger.style.display = "none";
  cross.style.display = "block";
  nav.style.display = "block";
});

cross.addEventListener("click", function closeNav() {
  cross.style.display = "none";
  hamburger.style.display = "block";
  nav.style.display = "none";
});

const breakpoint = window.matchMedia("(min-width: 576px)");

function checkBreakpoint(breakpoint: any) {
  if (breakpoint.matches) {
    hamburger.style.display = "none";
    cross.style.display = "none";
    nav.style.display = "flex";
  } else {
    hamburger.style.display = "block";
    cross.style.display = "none";
    nav.style.display = "none";
  }
}

checkBreakpoint(breakpoint);
breakpoint.addListener(checkBreakpoint);
