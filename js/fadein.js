const spinner = document.querySelector(".spinner-border");
const invisibleElements = document.querySelectorAll(".invisible");

window.onload = function () {
  spinner.style.display = "none";
  spinner.style.transition = "all ease-in .5s;";
  invisibleElements.forEach(function (element) {
    element.classList.add("fade-in");
    element.classList.remove("invisible");
  });
};
