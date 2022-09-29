let net_pay = document.getElementById("netpay").value;

let bill_content = document.querySelector(".bill-content");

// default bill items
const bills = {
  rent: 2000,
  transport: 1000,
  entertainment: 500,
  food: 2000,
};

// generate bills
function grabBill(key, value) {
  let content = `
    <tr>
      <td>${key}</td>
      <td>${value}</td>
    </tr>
  `;

  return content;
}

// display bills in a table
let table_content = document.createElement("table");
table_content.id = "initial-table";
for (const [key, value] of Object.entries(bills)) {
  table_content.innerHTML += grabBill(key, value);
}
bill_content.appendChild(table_content);

// display balance
document.getElementById("balance").value = computeBal();

// replace table view upon new bill entry
function newBill() {
  const initialTbl = bill_content.children[0]; // first child of bill-content

  let table_content = document.createElement("table");
  for (const [key, value] of Object.entries(bills)) {
    table_content.innerHTML += grabBill(key, value);
  }
  bill_content.replaceChild(table_content, initialTbl); // replace initial table with new table
}

// when btn 'Add Bill' is clicked
let addBill = document.getElementById("add-bill");
addBill.addEventListener("click", () => {
  // fetch bill item
  let bill_label = document.getElementById("bill-label").value;
  let bill_value = document.getElementById("bill-amount").value;
  bills[bill_label] = bill_value;
  newBill(); // replace child table with new entry
  console.log(bills);

  // compute new balance
  document.getElementById("balance").value = computeBal();

  // clear bill input fields
  document.getElementById("bill-label").value = "";
  document.getElementById("bill-amount").value = "";
});

// compute balance
function computeBal() {
  let total_bill = 0;
  for (let i = 0; i < Object.keys(bills).length; i++) {
    total_bill += parseFloat(Object.values(bills)[i]);
  }

  let balance = parseFloat(net_pay) - total_bill;
  return balance;
}
