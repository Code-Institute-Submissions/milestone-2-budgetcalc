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

/* ------------------------------ CURRENT DEBT CALCULATION */

document.getElementById('debtLoanValue').addEventListener("input", totalDebtsValue);
document.getElementById('debtAmexValue').addEventListener("input", totalDebtsValue);
document.getElementById('debtMastercardValue').addEventListener("input", totalDebtsValue);
document.getElementById('debtVisaValue').addEventListener("input", totalDebtsValue);

function totalDebtsValue() {
    var totalDebtsValue = 
        Number($("input#debtLoanValue").val()) + 
        Number($("input#debtAmexValue").val()) + 
        Number($("input#debtMastercardValue").val()) + 
        Number($("input#debtVisaValue").val());
    totalDebtsValue = (Math.round(totalDebtsValue * 100 / 100).toFixed(2));
    $("input#totalDebtsValue").val(totalDebtsValue);
}


/* ------------------------------ INCOME CALCULATION */

document.getElementById('netSalary').addEventListener("input", totalIncomeValue);
document.getElementById('bonusSalary').addEventListener("input", totalIncomeValue);
document.getElementById('gigSalary').addEventListener("input", totalIncomeValue);

function totalIncomeValue() {
    var totalIncomeValue = 
        Number($("input#netSalary").val()) + 
        Number($("input#bonusSalary").val()) + 
        Number($("input#gigSalary").val());
    totalIncomeValue = (Math.round(totalIncomeValue * 100 / 100).toFixed(2));
    $("input#totalIncomeValue").val(totalIncomeValue);
}


/* ------------------------------ FIXED COSTS CALCULATION --- HOME */

document.getElementById('waterValue').addEventListener("input", totalHomeCostValue);
document.getElementById('energyValue').addEventListener("input", totalHomeCostValue);
document.getElementById('internetValue').addEventListener("input", totalHomeCostValue);
document.getElementById('mobileValue').addEventListener("input", totalHomeCostValue);
document.getElementById('propertyTaxValue').addEventListener("input", totalHomeCostValue);
document.getElementById('rentMortageValue').addEventListener("input", totalHomeCostValue);
document.getElementById('homeServiceCostsValue').addEventListener("input", totalHomeCostValue);

function totalHomeCostValue() {
    var totalHomeCostValue = 
        Number($("input#waterValue").val()) +
        Number($("input#energyValue").val()) + 
        Number($("input#internetValue").val()) + 
        Number($("input#mobileValue").val()) + 
        Number($("input#propertyTaxValue").val()) + 
        Number($("input#rentMortageValue").val()) + 
        Number($("input#homeServiceCostsValue").val()); 
    totalHomeCostValue = (Math.round(totalHomeCostValue * 100 / 100).toFixed(2));
    $("input#totalHomeCostValue").val(totalHomeCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- TRANSPORT */

document.getElementById('transportCarPaymentValue').addEventListener("input", totalTransportCostValue);
document.getElementById('transportParkingPermitPermitValue').addEventListener("input", totalTransportCostValue);
document.getElementById('transportPublicValue').addEventListener("input", totalTransportCostValue);

function totalTransportCostValue() {
    var totalTransportCostValue = 
        Number($("input#transportCarPaymentValue").val()) + 
        Number($("input#transportParkingPermitPermitValue").val()) + 
        Number($("input#transportPublicValue").val()); 
    totalTransportCostValue = (Math.round(totalTransportCostValue * 100 / 100).toFixed(2));
    $("input#totalTransportCostValue").val(totalTransportCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- INSURANCE */

document.getElementById('insuranceCarValue').addEventListener("input", totalInsuranceCostValue);
document.getElementById('insuranceHealthValue').addEventListener("input", totalInsuranceCostValue);
document.getElementById('insuranceLiabilityValue').addEventListener("input", totalInsuranceCostValue);
document.getElementById('insuranceLifeValue').addEventListener("input", totalInsuranceCostValue);
document.getElementById('insuranceLegalValue').addEventListener("input", totalInsuranceCostValue);

function totalInsuranceCostValue() {
    var totalInsuranceCostValue = 
        Number($("input#insuranceCarValue").val()) + 
        Number($("input#insuranceHealthValue").val()) + 
        Number($("input#insuranceLiabilityValue").val()) + 
        Number($("input#insuranceLifeValue").val()) + 
        Number($("input#insuranceLegalValue").val()); 
    totalInsuranceCostValue = (Math.round(totalInsuranceCostValue * 100 / 100).toFixed(2));
    $("input#totalInsuranceCostValue").val(totalInsuranceCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- SUBSCRIPTIONS */

document.getElementById('donationsValue').addEventListener("input", totalSubscriptionCostValue);
document.getElementById('subscriptionsGymValue').addEventListener("input", totalSubscriptionCostValue);
document.getElementById('subscriptionsLotteryValue').addEventListener("input", totalSubscriptionCostValue);
document.getElementById('subscriptionsNewsValue').addEventListener("input", totalSubscriptionCostValue);
document.getElementById('subscriptionsStreamingValue').addEventListener("input", totalSubscriptionCostValue);

function totalSubscriptionCostValue() {
    var totalSubscriptionCostValue = 
        Number($("input#donationsValue").val()) + 
        Number($("input#subscriptionsGymValue").val()) + 
        Number($("input#subscriptionsLotteryValue").val()) + 
        Number($("input#subscriptionsNewsValue").val()) + 
        Number($("input#subscriptionsStreamingValue").val()); 
    totalSubscriptionCostValue = (Math.round(totalSubscriptionCostValue * 100 / 100).toFixed(2));
    $("input#totalSubscriptionCostValue").val(totalSubscriptionCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- CREDIT CARDS */

document.getElementById('amexValue').addEventListener("input", totalCreditcardCostValue);
document.getElementById('mastercardValue').addEventListener("input", totalCreditcardCostValue);
document.getElementById('visaValue').addEventListener("input", totalCreditcardCostValue);

function totalCreditcardCostValue() {
    var totalCreditcardCostValue = 
        Number($("input#amexValue").val()) + 
        Number($("input#mastercardValue").val()) + 
        Number($("input#visaValue").val()); 
    totalCreditcardCostValue = (Math.round(totalCreditcardCostValue * 100 / 100).toFixed(2));
    $("input#totalCreditcardCostValue").val(totalCreditcardCostValue);
}