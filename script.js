const button = document.getElementById("calculate");

button.addEventListener("click", () => {
  // Get all prices
  const priceElements = document.querySelectorAll(".prices");
  let total = 0;

  priceElements.forEach(price => {
    total += Number(price.textContent);
  });

  // Remove old total row if exists
  const oldRow = document.getElementById("total-row");
  if (oldRow) {
    oldRow.remove();
  }

  // Create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);

  document
    .getElementById("grocery-table")
    .appendChild(totalRow);
});
