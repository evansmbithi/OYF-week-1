let net_pay = document.getElementById("netpay").value;

let bill_content = document.querySelector(".bill-content");

let travel = parseInt(document.getElementById("travel"));
let rent = parseInt(document.getElementById("rent"));
let entertainment = parseInt(document.getElementById("entertainment"));
let food = parseInt(document.getElementById("food"));
let shopping = parseInt(document.getElementById("shopping"));

var bill_amount = [];

// generate bills
function grabBill() {
  let bill_label = document.getElementById("bill-label").value;
  let bill_value = document.getElementById("bill-amount").value;

  let content = `
    <tr>
      <td>${bill_label}</td>
      <td>${bill_value}</td>
    </tr>
  `;
  return content;
}

// onclick add Bill
let addBill = document.getElementById("add-bill");
addBill.addEventListener("click", () => {
  bill_amount.push(parseInt(document.getElementById("bill-amount").value));
  let table_content = document.createElement("table");
  table_content.innerHTML = grabBill();
  bill_content.appendChild(table_content);
  document.getElementById("bill-label").value = "";
  document.getElementById("bill-amount").value = "";

  document.getElementById("balance").value = computeBal();
});

// compute balance
function computeBal() {
  let total_bill = 0;
  for (let i = 0; i < bill_amount.length; i++) {
    total_bill += bill_amount[i];
  }
  let balance = parseInt(net_pay) - parseInt(total_bill);
  return balance;
}

document.getElementById("balance").value = computeBal();
