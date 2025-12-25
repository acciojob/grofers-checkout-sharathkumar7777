document.addEventListener("DOMContentLoaded", function () {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Select the existing table (already provided by platform)
  const table = document.querySelector("table");

  // Create last row
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
});