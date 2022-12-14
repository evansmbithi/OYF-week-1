let net_pay = document.getElementById("netpay");
let bill_content = document.querySelector(".bill-content");
let addBill = document.getElementById("add-bill");
let totalBalance = document.getElementById("balance");

// default bill items
const bills = {
  Rent: 0,
  Shopping: 0,
  Food: 0,
};

// bill content
function display_content(key, value) {
  let val = value == 0 ? "" : value;
  let content = `
    <tr>
      <td>${key}</td>
      <td><input type="text" class="bill-value" placeholder="Enter amount" value="${value}"/></td>
      <td><button class="deleteItm">x</button></td>
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
      displayBal();
    });
  }
}

function deleteItem() {
  let billItem = document.querySelectorAll(".deleteItm");
  for (let i = 0; i < billItem.length; i++) {
    billItem[i].addEventListener("click", () => {
      let table = document.getElementById("bill-table");
      let rows = table.rows;

      let row = rows[i];
      let cells = row.cells;
      let key = cells[0].innerHTML;
      delete bills[key];

      displayBal();
      newBill();
    });
  }
}

// replace table view upon new bill entry
function newBill() {
  const initialTbl = bill_content.children[0]; // first child of bill-content

  let table_content = document.createElement("table");
  table_content.id = "bill-table";
  for (const [key, value] of Object.entries(bills)) {
    table_content.innerHTML += display_content(key, value);
  }
  bill_content.replaceChild(table_content, initialTbl); // replace initial table with new table
  editBill();
  deleteItem();
}

// when btn 'Add Bill' is clicked
addBill.addEventListener("click", () => {
  // fetch bill item
  let bill_label = document.getElementById("bill-label").value;
  let bill_value = parseFloat(document.getElementById("bill-amount").value);
  bills[bill_label] = bill_value;
  newBill(); // replace child table with new entry

  // compute new balance
  displayBal();

  // clear bill input fields
  document.getElementById("bill-label").value = "";
  document.getElementById("bill-amount").value = "";
});

// display bills in a table (IIFE)
const displayBills = (() => {
  let table_content = document.createElement("table");
  table_content.id = "bill-table";
  for (const [key, value] of Object.entries(bills)) {
    table_content.innerHTML += display_content(key, value);
  }

  bill_content.appendChild(table_content);
  editBill();
  deleteItem();
})();

// compute total bill
const total_bill = () => {
  let total = 0;

  for (let i = 0; i < Object.keys(bills).length; i++) {
    total += parseFloat(Object.values(bills)[i]);
  }
  return total;
};

/**
 * compute display balance
 *  color-code balance
 *  warning (color coded , preferably red) if balance
 *  after bill calculations is below 20% of total net
 */
const displayBal = (netSal = net_pay.value) => {
  let balance = netSal - total_bill();
  if (balance < 0.2 * netSal) {
    totalBalance.style.color = "red";
  } else {
    totalBalance.style.color = "green";
  }

  if (balance > 0 && balance !== NaN) {
    return (totalBalance.value = balance);
  } else {
    return (totalBalance.value = 0);
  }
};

export default displayBal;
