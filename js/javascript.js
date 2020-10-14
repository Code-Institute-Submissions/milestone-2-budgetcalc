/* REF: Adding two numbers together SRC: https://code-maven.com/slides/javascript/solution-add-two-numbers */

"use strict";
/*
OPTION 1
function addCurrentAccounts() {
    var accountBankValue = Number(document.getElementById('accountBankValue').value);
    var accountSavingsValue = Number(document.getElementById('accountSavingsValue').value);

    document.getElementById('totalAccountsValue').innerHTML = accountBankValue+accountSavingsValue
}
*/

/*OPTION 2*/
fnBC = function() {
    var totalAccountsValue = Number($("input#accountBankValue").val()) + Number($("input#accountSavingsValue").val());
    totalAccountsValue = (Math.round(totalAccountsValue * 100 / 100).toFixed(2));
    $("input#totalAccountsValue").val(totalAccountsValue);
}

/*
fnBC = function() {
        var l = Number($("input#emergencyFund").val()) + Number($("input#investments").val()) + Number($("input#retirement").val());
        l = (Math.round(l * 100) / 100).toFixed(2);
        $("input#totalMonthlySavings").val(l);



        var m = Number($("input#food").val()) + Number($("input#clothing").val()) + Number($("input#shelter").val()) + Number($("input#household").val()) + Number($("input#transportation").val()) + Number($("input#health").val()) + Number($("input#studentLoans").val()) + Number($("input#personal").val()) + Number($("input#misc").val());
        m = (Math.round(m * 100) / 100).toFixed(2);
        $("input#totalMonthlyExpenses").val(m);
        var j = Number($("input#tuition").val()) + Number($("input#homeowners").val()) + Number($("input#car").val()) + Number($("input#taxes").val()) + Number($("input#vacation").val()) + Number($("input#other").val());
        j = (Math.round(j * 100) / 100).toFixed(2);
        $("input#totalAnnualExpenses").val(j);
        var i = Number(j / 12);
        i = (Math.round(i * 100) / 100).toFixed(2);
        $("input#totalAnnualExpensesMonthly").val(i);
        var n = Number($("input#monthlyPay").val()) + Number($("input#monthlyOther").val()) + Number($("input#annualGifts").val() / 12) + Number($("input#annualTaxReturn").val() / 12);
        n = (Math.round(n * 100) / 100).toFixed(2);
        $("input#totalMonthlyIncome").val(n);
        var k = n - (Number(l) + Number(m) + (Number(j / 12)));
        k = (Math.round(k * 100) / 100).toFixed(2);
        $("input#underOverBudget").val(k)
    }, 
*/


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