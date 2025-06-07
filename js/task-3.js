const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameOutput.textContent = "Anonymous";

nameInput.addEventListener("input", updateName);

function updateName(event) {
  const currentName = event.target.value.trim();
  if (currentName === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = currentName;
  }
}
