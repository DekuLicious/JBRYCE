// Constants
const eventContainer = document.getElementById("eventContainer");
const localStorageKey = "events";

// Load events from local storage
var allEvents = JSON.parse(localStorage.getItem(localStorageKey)) || [];

// HTML template for the page
const siteTemplate = `
            <form id="eventForm">
                    <h1>Event Info</h1>
                    <input type="text" id="eventName" placeholder="Event Name" required/>
                    <input type="number" id="minPrice" placeholder="Minimum Price" required/>
                    <input type="number" id="maxPrice" placeholder="Maximum Price" required/>
                    <select id="eventType" required>
                            <option value="">--Please choose an option--</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Bar Mitzvah">Bar Mitzvah</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Birthday">Birthday</option>
                    </select>
                    <input type="text" placeholder="Image URL" id="imageUrl" required/>
                    <input type="date" id="eventDate" required/>
                    <div class="button-container">
                            <input type="submit" value="Add Event"/>
                            <input type="reset" value="Reset Form"/>
                            <button id="clearEvents" type="button">Clear Events</button>
                    </div>
            </form>
            <div id="eventTable"></div>
    `;
eventContainer.innerHTML = siteTemplate;

// Event listeners
document.getElementById("eventForm").addEventListener("submit", addEvent);
document.getElementById("clearEvents").addEventListener("click", clearEvents);

// Function to add a new event to the list
function addEvent(formSubmitEvent) {
  formSubmitEvent.preventDefault();

  const minPrice = Number(document.getElementById("minPrice").value);
  const maxPrice = Number(document.getElementById("maxPrice").value);

  if (minPrice > maxPrice) {
    alert("Minimum price cannot be higher than maximum price");
    return;
  }

  const eventDate = new Date(document.getElementById("eventDate").value);
  const currentDate = new Date();

  eventDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  if (eventDate < currentDate) {
    alert("Event date cannot be in the past");
    return;
  }

  const newEvent = {
    name: document.getElementById("eventName").value,
    minPrice: minPrice,
    maxPrice: maxPrice,
    type: document.getElementById("eventType").value,
    imageUrl: document.getElementById("imageUrl").value,
    date: document.getElementById("eventDate").value,
  };
  allEvents.push(newEvent);
  localStorage.setItem(localStorageKey, JSON.stringify(allEvents));
  createTable();
  document.getElementById("eventForm").reset();
}

// Function to clear all events
function clearEvents() {
  allEvents = [];
  localStorage.removeItem(localStorageKey);
  createTable();
}

// Function to create and update the event table
function createTable() {
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
}

// Function to delete an event
function deleteEvent(deleteEventTrigger) {
  const index = deleteEventTrigger.target.getAttribute("data-index");
  allEvents.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(allEvents));
  createTable();
}

// Initial table creation
createTable();
