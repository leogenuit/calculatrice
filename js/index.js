import { addShadowClass, removeShadowClass } from "./animation.js";

const possibilities = document.querySelectorAll(".possibilities");
const screenElement = document.getElementById("screen");
let screen = screenElement.innerText;
let currentInput = "";

possibilities.forEach((possibility) => {
  possibility.addEventListener("mousedown", () => addShadowClass(possibility));
  possibility.addEventListener("mouseup", () => removeShadowClass(possibility));

  if (isNumeric(possibility.innerText) || possibility.innerText === ".") {
    possibility.addEventListener("click", () =>
      appendToScreen(possibility.innerText)
    );
  } else if (possibility.innerText === "AC") {
    possibility.addEventListener("click", clearScreen);
  } else if (possibility.innerText === "=") {
    possibility.addEventListener("click", performOperation);
  }
});

function appendToScreen(value) {
  if (screen === "0" || screen === "AC") {
    screen = value;
  } else {
    screen += value;
  }
  screenElement.innerText = screen;
}

function clearScreen() {
  screen = "0";
  screenElement.innerText = screen;
}

function performOperation() {
  // Split the screen content based on the operator
  const numbers = screen.split("+");

  // Parse the numbers into integers
  const num1 = parseInt(numbers[0]);
  const num2 = parseInt(numbers[1]);

  // Perform the addition
  const result = addition(num1, num2);

  // Display the result on the screen
  screenElement.innerText = result.toString();
}

function addition(num1, num2) {
  return num1 + num2;
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}
