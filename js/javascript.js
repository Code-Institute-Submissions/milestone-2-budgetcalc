/* The following code has been adapted from 3 sources:
the source code of http://www.youcandealwithit.com/borrowers/calculators-and-resources/calculators/budget-calculator.shtml
the explination on https://stackoverflow.com/questions/30806948/javascript-run-function-on-input-change-no-jquery
and support from Michael - Code Institute Tutor Support */

"use strict";
/* ------------------------------ CURRENT ACCOUNTS CALCULATION */
document.getElementById('accountBankValue').addEventListener("input", totalAccountsValue);
document.getElementById('accountSavingsValue').addEventListener("input", totalAccountsValue);

function totalAccountsValue() {
    var totalAccountsValue = Number($("input#accountBankValue").val()) + Number($("input#accountSavingsValue").val());
    totalAccountsValue = (Math.round(totalAccountsValue * 100 / 100).toFixed(2));
    $("input#totalAccountsValue").val(totalAccountsValue);
}

/* ------------------------------ INCOME CALCULATION */

document.getElementById('netSalary').addEventListener("input", totalIncomeValue);
document.getElementById('bonusSalary').addEventListener("input", totalIncomeValue);
document.getElementById('gigSalary').addEventListener("input", totalIncomeValue);

function totalIncomeValue() {
    var totalIncomeValue = Number($("input#netSalary").val()) + Number($("input#bonusSalary").val()) + Number($("input#gigSalary").val());
    totalIncomeValue = (Math.round(totalIncomeValue * 100 / 100).toFixed(2));
    $("input#totalIncomeValue").val(totalIncomeValue);
}

