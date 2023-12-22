// Constants
const localStorageKey = "events";

// Load events from local storage
let allEvents;
try {
  allEvents = JSON.parse(localStorage.getItem(localStorageKey)) || [];
} catch (error) {
  console.error("Error parsing events from local storage:", error);
  allEvents = [];
}

// Function to validate form input
const validateInput = (minPrice, maxPrice, eventDate) => {
  if (minPrice > maxPrice) {
    alert("Minimum price cannot be higher than maximum price");
    return false;
  }

  const currentDate = new Date();
  eventDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  if (eventDate < currentDate) {
    alert("Event date cannot be in the past");
    return false;
  }

  return true;
};

// Function to create a new event object
const createNewEvent = () => {
  return {
    name: document.getElementById("eventName").value,
    minPrice: Number(document.getElementById("minPrice").value),
    maxPrice: Number(document.getElementById("maxPrice").value),
    type: document.getElementById("eventType").value,
    imageUrl: document.getElementById("imageUrl").value,
    date: document.getElementById("eventDate").value,
  };
};

// Function to update local storage
const updateLocalStorage = () => {
  localStorage.setItem(localStorageKey, JSON.stringify(allEvents));
};

// Function to add a new event to the list
const addEvent = (formSubmitEvent) => {
  formSubmitEvent.preventDefault();

  const minPrice = Number(document.getElementById("minPrice").value);
  const maxPrice = Number(document.getElementById("maxPrice").value);
  const eventDate = new Date(document.getElementById("eventDate").value);

  if (!validateInput(minPrice, maxPrice, eventDate)) {
    return;
  }

  const newEvent = createNewEvent();
  allEvents.push(newEvent);
  updateLocalStorage();
  createTable();
  document.getElementById("eventForm").reset();
};

// Function to clear all events
const clearEvents = () => {
  allEvents = [];
  localStorage.removeItem(localStorageKey);
  createTable();
};

// Function to create and update the event table
const createTable = () => {
  if (allEvents.length == 0) {
    document.getElementById("eventTable").innerHTML = "";
    return;
  }

  var tableHTML = `
            <h1>Events</h1>
            <table>
                <tr>
                    <th>Event Name</th>
                    <th>Minimum Price</th>
                    <th>Maximum Price</th>
                    <th>Type</th>
                    <th>Image</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
        `;

  allEvents.forEach((eventObject, index) => {
    // Reverse the date
    var reversedDate = eventObject.date.split("-").reverse().join("-");

    tableHTML += `
                <tr>
                    <td>${eventObject.name}</td>
                    <td>${eventObject.minPrice}</td>
                    <td>${eventObject.maxPrice}</td>
                    <td>${eventObject.type}</td>
                    <td><img src="${eventObject.imageUrl}" alt="Event Image" style="width:100px; height:auto;"></td>
                    <td>${reversedDate}</td>
                    <td><button class="delete-button" data-index="${index}">Delete</button></td>
                </tr>
            `;
  });

  tableHTML += `</table>`;
  document.getElementById("eventTable").innerHTML = tableHTML;

  // Add event listeners to the delete buttons
  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", deleteEvent);
  });
};

// Function to delete an event
const deleteEvent = (deleteEventTrigger) => {
  const index = deleteEventTrigger.target.getAttribute("data-index");
  allEvents.splice(index, 1);
  updateLocalStorage();
  createTable();
};

// Initial table creation
createTable();

// Event listeners
document.getElementById("eventForm").addEventListener("submit", addEvent);
document.getElementById("clearEvents").addEventListener("click", clearEvents);
