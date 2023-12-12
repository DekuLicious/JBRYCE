document.addEventListener("DOMContentLoaded", function () {
  const form = document.createElement("form");
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.alignItems = "center";

  const formTitle = document.createElement("h2");
  formTitle.innerText = "Car Form";
  form.appendChild(formTitle);

  const carNumberInput = document.createElement("input");
  carNumberInput.type = "text";
  carNumberInput.name = "carNumber";
  carNumberInput.placeholder = "Car Number";
  carNumberInput.style.marginBottom = "10px";
  form.appendChild(carNumberInput);

  const textarea = document.createElement("textarea");
  textarea.readOnly = true;
  textarea.style.marginBottom = "10px";
  textarea.style.resize = "none";
  textarea.style.width = "200px";
  textarea.style.height = "100px";
  form.appendChild(textarea);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "Add";
  addButton.style.marginBottom = "20px";
  addButton.addEventListener("click", function () {
    const carNumber = carNumberInput.value;
    textarea.value += carNumber + "\n";
    carNumberInput.value = "";
  });

  form.appendChild(addButton);

  for (var index = 0; index < 7; index++) {
    const emptyInput = document.createElement("input");
    emptyInput.type = "text";
    emptyInput.name = `emptyInput${index + 1}`;
    emptyInput.placeholder = `Empty Input ${index + 1}`;
    emptyInput.style.marginBottom = "10px";
    form.appendChild(emptyInput);
  }

  const resetButton = document.createElement("button");
  resetButton.type = "reset";
  resetButton.innerText = "Reset";
  resetButton.style.marginTop = "10px";
  form.appendChild(resetButton);

  const mySiteDiv = document.getElementsByClassName("mySite")[0];
  mySiteDiv.appendChild(form);
});
