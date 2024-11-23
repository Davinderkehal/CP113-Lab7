// Mouse Events
const hoverButton = document.getElementById("hover-button");
const hoverMessage = document.getElementById("hover-message");

hoverButton.addEventListener("mouseover", () => {
  hoverMessage.textContent = "Mouse is hovering Now!";
});

hoverButton.addEventListener("mouseout", () => {
  hoverMessage.textContent = "Mouse left the button.";
});

// Events For Keyboard
const keyboardInput = document.getElementById("keyboard-input");
const keyMessage = document.getElementById("key-message");

keyboardInput.addEventListener("keyup", (event) => {
  keyMessage.textContent = `Last key pressed: ${event.key}`;
});

// Form...
const form = document.getElementById("sample-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Name submitted successfully!";
});

// Events for Focus
const focusInput = document.getElementById("focus-input");
const focusMessage = document.getElementById("focus-message");

focusInput.addEventListener("focus", () => {
  focusMessage.textContent = "Input field is focused!";
});

focusInput.addEventListener("blur", () => {
  focusMessage.textContent = "Input field lost focus.";
});

// Delegation
const buttonContainer = document.getElementById("button-container");
const delegationMessage = document.getElementById("delegation-message");

buttonContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    delegationMessage.textContent = `You clicked: ${event.target.textContent}`;
  }
});
