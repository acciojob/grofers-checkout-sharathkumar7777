const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
      total += Number(price.textContent);
    });

    const table = document.getElementById("grocery-table");

    // Create new row
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: ${total}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);