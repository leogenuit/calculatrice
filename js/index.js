import { addShadowClass, removeShadowClass } from "./animation.js";

const possibilities = document.querySelectorAll(".possibilities");

// export function addShadowClass(element) {
//   element.classList.add("click");
// }

possibilities.forEach((possibility) => {
  possibility.addEventListener("mousedown", () => addShadowClass(possibility));
  possibility.addEventListener("mouseup", () => removeShadowClass(possibility));
  possibility.addEventListener("click", () => getNumScreen(possibility));
});

function getNumScreen(touch) {
  let screenElement = document.getElementById("screen");
  console.log("1", screen.innerText);
  screenElement.innerText = touch.innerText;
  console.log("2", screen);
}
