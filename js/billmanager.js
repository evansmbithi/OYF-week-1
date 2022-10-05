let net_pay = document.getElementById("netpay");

let bill_content = document.querySelector(".bill-content");

// default bill items
const bills = {
  Rent: 0,
  Transport: 0,
  Entertainment: 0,
  Food: 0,
};

// bill content
function display_content(key, value) {
  let content = `
    <tr>
      <td>${key}</td>
      <td><input type="number" class="bill-value" value="${value}"/></td>
    </tr>
  `;

  return content;
}

// edit bill
function editBill() {
  let billVal = document.querySelectorAll(".bill-value");
  for (let i = 0; i < billVal.length; i++) {
    billVal[i].addEventListener("keyup", (e) => {
      let table = document.getElementById("bill-table");
      let rows = table.rows;
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let cells = row.cells;
        let key = cells[0].innerHTML;
        let value = cells[1].children[0].value;
        bills[key] = value;
      }
      document.getElementById("balance").value = computeBal();
    });
  }
}

// replace table view upon new bill entry
function newBill() {
  const initialTbl = bill_content.children[0]; // first child of bill-content

  let table_content = document.createElement("table");
  table_content.id = "bill-table";
  for (const [key, value] of Object.entries(bills)) {
    // table_content.innerHTML += grabBill(key, value);
    table_content.innerHTML += display_content(key, value);
  }
  bill_content.replaceChild(table_content, initialTbl); // replace initial table with new table
  editBill();
}

// when btn 'Add Bill' is clicked
let addBill = document.getElementById("add-bill");
addBill.addEventListener("click", () => {
  // fetch bill item
  let bill_label = document.getElementById("bill-label").value;
  let bill_value = parseFloat(document.getElementById("bill-amount").value);
  bills[bill_label] = bill_value;
  newBill(); // replace child table with new entry
  console.log(bills);

  // compute new balance
  document.getElementById("balance").value = computeBal();

  // clear bill input fields
  document.getElementById("bill-label").value = "";
  document.getElementById("bill-amount").value = "";
});

// display bills in a table
const displayBills = (() => {
  let table_content = document.createElement("table");
  table_content.id = "bill-table";
  for (const [key, value] of Object.entries(bills)) {
    table_content.innerHTML += display_content(key, value);
  }

  bill_content.appendChild(table_content);
  editBill();
})();

// compute total bill
const total_bill = () => {
  let total = 0;

  for (let i = 0; i < Object.keys(bills).length; i++) {
    total += parseFloat(Object.values(bills)[i]);
  }
  return total;
};

// compute display balance
function computeBal() {
  let balance = net_pay.value - total_bill();
  return balance;
}

export default total_bill;
