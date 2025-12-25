window.onload = function () {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  const table = document.querySelector("table"); // ✅ FIX

  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2;
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};
