"use strict";
function addCosts() {
    var rentMortageValue = Number(document.getElementById('rentMortageValue').value);
    var energyValue = Number(document.getElementById('energyValue').value);
    var waterValue = Number(document.getElementById('waterValue').value);
    var insuranceValue = Number(document.getElementById('insuranceValue').value);
    var mobileValue = Number(document.getElementById('mobileValue').value);
    var streamingServicesValue = Number(document.getElementById('streamingServicesValue').value);
    var donationsValue = Number(document.getElementById('donationsValue').value);

    document.getElementById('totalCosts').innerHTML = rentMortageValue+energyValue+waterValue+insuranceValue+mobileValue+streamingServicesValue+donationsValue;
}

document.getElementById('calcCosts').addEventListener('click', addCosts);


function subtract() {
    var netSalary = Number(document.getElementById('netSalary').value);
    var costs = Number(document.getElementById('totalCosts').value);

    document.getElementById('result').innerHTML = netSalary-costs;
    return false;
}

document.getElementById('calcCosts').addEventListener('click', subtract);