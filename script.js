const btn1 = document.createElement("button");
btn1.textContent = "total_price";
document.body.appendChild(btn1);
btn1.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.textContent);
  });

  // Remove previous answer row if exists
  const oldRow = document.getElementById("ans-row");
  if (oldRow) {
    oldRow.remove();
  }

  // Create new row
  const row = document.createElement("tr");
  row.id = "ans-row";

  // Create cell with REQUIRED id="ans"
  const cell = document.createElement("td");
  cell.id = "ans";
  cell.colSpan = 2;
  cell.textContent = total;

  row.appendChild(cell);
  document.getElementById("grocery-table").appendChild(row);
});
