import net_pay from "./taxcalculator.js";

// console.log(net_pay);

let netSalary = parseInt(document.getElementById("net_salary").value);
netSalary = net_pay;

function calculate(){ 
    document.getElementById("total")
      .addEventListener("click", () => {
        const output = document.getElementById("output");
        output.value = + output.value;

    let totalSum = parseInt(document.getElementByName("qty").value)
    console.log(`totalSum: ${totalSum}`);

    var total= 0;
    for(var i=0; i < totalSum.length; i++){
        if(parseInt(totalSum[i].value)){
            total += parseInt(totalSum[i].value);
    }
 }
    document.getElementsByClassName('total').value = total;
    let bal = netSalary - totalSum;
    console.log(bal);
   }
 }
