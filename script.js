
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);
 
const getSum = () => {
  const prices = document.querySelectorAll(".prices");
  let sum = 0;
 
  prices.forEach(price => {
    sum += Number(price.textContent);
  });
 
  const table = document.querySelector("table");
 
  // Remove existing total row if button is clicked again
  const oldAns = document.getElementById("ans");
  if (oldAns) {
    oldAns.parentElement.remove();
  }
 
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
 
  totalCell.colSpan = 2;
  totalCell.id = "ans"; // important for tests
  totalCell.textContent = sum;
 
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};
 
getSumBtn.addEventListener("click", getSum);