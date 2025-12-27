const button = document.querySelector("button");

button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Prevent duplicate total row
  const existingTotal = document.getElementById("total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  document.getElementById("grocery-table").appendChild(totalRow);
});
