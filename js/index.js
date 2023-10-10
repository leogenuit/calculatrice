import { addShadowClass, removeShadowClass } from "./animation.js";

let currentCount = document.querySelector("#currentInput");
let screen = document.querySelector("#screen");
let possibilities = document.querySelectorAll(".possibilities");
let ac = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let realTimeScreenValue = [];

possibilities.forEach((possibilitie) => {
  possibilitie.addEventListener("click", () => {
    if (possibilitie.id.match("clear")) {
      screen.innerHTML = 0;
      realTimeScreenValue = [];
    }
    if (possibilitie.classList.contains("num")) {
      console.log(possibilitie, possibilitie.innerHTML);
      realTimeScreenValue.push(possibilitie.innerHTML);
      currentCount = realTimeScreenValue.join("");
      screen.innerHTML = currentCount;
    }
    if (possibilitie.id.match("equal")) {
      screen.innerHTML = eval(currentCount);
    }
  });
});

possibilities.forEach((possibility) => {
  possibility.addEventListener("mousedown", () => addShadowClass(possibility));
  possibility.addEventListener("mouseup", () => removeShadowClass(possibility));
});
