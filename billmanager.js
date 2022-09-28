import net_pay from "./taxcalculator.js";

// console.log(net_pay);

document.getElementById("net_salary").value = net_pay;

// function calculate() {
//   document.getElementById("total").addEventListener("click", () => {
//     const output = document.getElementById("output");
//     output.value = +output.value;

//     let totalSum = parseInt(document.getElementsByName("qty").value);
//     console.log(`totalSum: ${totalSum}`);

//     var total = 0;
//     for (var i = 0; i < totalSum.length; i++) {
//       if (parseInt(totalSum[i].value)) {
//         total += parseInt(totalSum[i].value);
//       }
//     }
//     document.getElementsByClassName("total").value = total;
//     let bal = netSalary - totalSum;
//     console.log(bal);
//   });
// }

let travel = parseInt(document.getElementById("travel"));
let rent = parseInt(document.getElementById("rent"));
let entertainment = parseInt(document.getElementById("entertainment"));
let food = parseInt(document.getElementById("food"));
let shopping = parseInt(document.getElementById("shopping"));

// compute total
function computeBal() {
  let total_bill = travel + rent + entertainment + food + shopping;
  let balance = parseInt(net_pay) - parseInt(total_bill);
  console.log(total_bill);
  // display balance
  document.getElementById("balance").value = balance;
}

let computeBtn = document.querySelector(".computeBal");
computeBtn.addEventListener("click", computeBal);
