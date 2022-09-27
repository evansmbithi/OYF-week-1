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

// compute PAYE
function computePAYE() {
  let paye = document.getElementById("paye").value;
  let payeInt = parseInt(paye);
  let compute = payeInt / 100;
  let res = compute * gross_salary.value;
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

let net_pay = parseInt(gross_salary.value) - total_deductions;

gross_salary.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // console.log(net_pay);
    document.getElementById("netpay").value = net_pay;
    window.location.reload();
  }
});

export default net_pay;
