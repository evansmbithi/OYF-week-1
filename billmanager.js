import net_pay from "./taxcalculator.js";

console.log(net_pay);

let netSalary = document.getElementById("net_salary");
netSalary.value = net_pay;

// get bill elements by id
// parse them into integers
// get the total bill amount
// balance = net - total bill amount
