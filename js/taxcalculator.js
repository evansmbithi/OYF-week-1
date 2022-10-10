import displayBal from "./billmanager.js";

// on gross entry, then user presses enter... Deductions are computed
let gross_salary = document.getElementById("gross");

// deductions
let nssf = parseInt(document.getElementById("nssf").value);
let taxable_income = parseInt(document.getElementById("taxable").value);
let before_relief = parseInt(document.getElementById("before_relief").value);
let personal_relief = parseInt(
  document.getElementById("personal_relief").value
);
let health_relief = parseInt(document.getElementById("health_relief").value);
let payeVal = computePAYE();
let nhif = parseInt(document.getElementById("nhif").value);

// criteria for PAYE
// https://www.kra.go.ke/individual/filing-paying/types-of-taxes/paye

// compute PAYE
function computePAYE() {
  let paye = document.getElementById("paye").value;
  let payeInt = parseInt(paye);
  let percentage = payeInt / 100;
  let res = parseFloat(percentage) * gross_salary.value;
  return res;
}

// console.log(payeVal);

let total_deductions =
  nssf +
  taxable_income +
  before_relief +
  personal_relief +
  health_relief +
  payeVal +
  nhif;

// default to zero
function display(net) {
  if (net > 0 && net !== NaN) {
    return net;
  } else {
    return 0;
  }
}

gross_salary.addEventListener("keyup", (e) => {
  let net_pay = parseFloat(e.target.value) - total_deductions;
  document.getElementById("netpay").value = net_pay;
  document.getElementById("net_salary").value = display(net_pay); //display net_pay on bill-pane
  document.getElementById("balance").value = displayBal(net_pay); //display balance on bill-pane
});
