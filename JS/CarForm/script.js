// Add an event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  // Create a new form element
  const form = document.createElement("form");
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.alignItems = "center";
  form.style.width = "300px";
  form.style.margin = "0 auto";
  form.style.padding = "20px";
  form.style.border = "1px solid #ccc";
  form.style.borderRadius = "5px";
  form.style.backgroundColor = "#f5f5f5";

  // Create a new h2 element for the form title
  const formTitle = document.createElement("h2");
  formTitle.innerText = "Car Form";
  formTitle.style.marginBottom = "20px";
  // Append the form title to the form
  form.appendChild(formTitle);

  // Create a new input element for the car number
  const carNumberInput = document.createElement("input");
  carNumberInput.type = "text";
  carNumberInput.name = "carNumber";
  carNumberInput.placeholder = "Car Number";
  carNumberInput.style.marginBottom = "10px";
  carNumberInput.style.padding = "10px";
  carNumberInput.style.width = "100%";
  // Append the car number input to the form
  form.appendChild(carNumberInput);

  // Create a new textarea element
  const textarea = document.createElement("textarea");
  textarea.readOnly = true;
  textarea.style.marginBottom = "10px";
  textarea.style.resize = "none";
  textarea.style.width = "100%";
  textarea.style.height = "100px";
  textarea.style.padding = "10px";
  // Append the textarea to the form
  form.appendChild(textarea);

  // Create a new button element for adding car numbers
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.innerText = "Add";
  addButton.style.marginBottom = "20px";
  addButton.style.padding = "10px 20px";
  addButton.style.backgroundColor = "#4caf50";
  addButton.style.color = "#fff";
  addButton.style.border = "none";
  addButton.style.borderRadius = "5px";
  addButton.style.cursor = "pointer";
  // Add an event listener for the click event of the add button
  addButton.addEventListener("click", function () {
    const carNumber = carNumberInput.value;
    // Check if the car number is not empty
    if (carNumber.trim() !== "") {
      // Append the car number to the textarea
      textarea.value += carNumber + "\n";
      // Clear the car number input
      carNumberInput.value = "";
    }
  });
  // Append the add button to the form
  form.appendChild(addButton);

  // Define an array of placeholders for the empty inputs
  const emptyInputs = [
    "Car Detail 1",
    "Car Detail 2",
    "Car Detail 3",
    "Car Detail 4",
    "Car Detail 5",
    "Car Detail 6",
    "Car Detail 7",
  ];
  // Create 7 empty inputs
  for (var index = 0; index < 7; index++) {
    const emptyInput = document.createElement("input");
    emptyInput.type = "text";
    emptyInput.name = `emptyInput${index + 1}`;
    emptyInput.placeholder = emptyInputs[index];
    emptyInput.style.marginBottom = "10px";
    emptyInput.style.padding = "10px";
    emptyInput.style.width = "100%";
    // Append each empty input to the form
    form.appendChild(emptyInput);
  }

  // Create a new button element for resetting the form
  const resetButton = document.createElement("button");
  resetButton.type = "reset";
  resetButton.innerText = "Reset";
  resetButton.style.marginTop = "10px";
  resetButton.style.padding = "10px 20px";
  resetButton.style.backgroundColor = "#f44336";
  resetButton.style.color = "#fff";
  resetButton.style.border = "none";
  resetButton.style.borderRadius = "5px";
  resetButton.style.cursor = "pointer";
  // Append the reset button to the form
  form.appendChild(resetButton);

  // Get the first element with the class name "mySite"
  const mySiteDiv = document.getElementsByClassName("mySite")[0];
  // Append the form to the mySite div
  mySiteDiv.appendChild(form);
});
