// Select all price elements
const priceElements = document.querySelectorAll(".prices");

let total = 0;

// Calculate total price dynamically
priceElements.forEach(price => {
  total += Number(price.textContent);
});

// Create a new row
const totalRow = document.createElement("tr");

// Create a single cell
const totalCell = document.createElement("td");

// Make the cell span across columns (optional but clean)
totalCell.colSpan = 2;

// Set total text
totalCell.textContent = `Total Price: ${total}`;

// Append cell to row
totalRow.appendChild(totalCell);

// Append row to the table
document
  .getElementById("grocery-table")
  .appendChild(totalRow);
