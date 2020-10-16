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

document.getElementById('waterValue').addEventListener("input", function(){
totalHomeCostValue();
totalFixedCostsValue();
});
document.getElementById('energyValue').addEventListener("input", function(){
totalHomeCostValue();
totalFixedCostsValue();
});
document.getElementById('internetValue').addEventListener("input", function(){
totalHomeCostValue();
totalFixedCostsValue();
});
document.getElementById('mobileValue').addEventListener("input", function(){
totalHomeCostValue();
totalFixedCostsValue();
});
document.getElementById('propertyTaxValue').addEventListener("input", function(){
totalHomeCostValue();
totalFixedCostsValue();
});
document.getElementById('rentMortageValue').addEventListener("input", function(){
totalHomeCostValue();
totalFixedCostsValue();
});
document.getElementById('homeServiceCostsValue').addEventListener("input", function(){
totalHomeCostValue();
totalFixedCostsValue();
});

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

document.getElementById('transportCarPaymentValue').addEventListener("input", function(){
totalTransportCostValue();
totalFixedCostsValue();
});
document.getElementById('transportParkingPermitPermitValue').addEventListener("input", function(){
totalTransportCostValue();
totalFixedCostsValue();
});
document.getElementById('transportPublicValue').addEventListener("input", function(){
totalTransportCostValue();
totalFixedCostsValue();
});

function totalTransportCostValue() {
    var totalTransportCostValue = 
        Number($("input#transportCarPaymentValue").val()) + 
        Number($("input#transportParkingPermitPermitValue").val()) + 
        Number($("input#transportPublicValue").val()); 
    totalTransportCostValue = (Math.round(totalTransportCostValue * 100 / 100).toFixed(2));
    $("input#totalTransportCostValue").val(totalTransportCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- INSURANCE */

document.getElementById('insuranceCarValue').addEventListener("input", function(){
totalInsuranceCostValue();
totalFixedCostsValue();
});
document.getElementById('insuranceHealthValue').addEventListener("input", function(){
totalInsuranceCostValue();
totalFixedCostsValue();
});
document.getElementById('insuranceLiabilityValue').addEventListener("input", function(){
totalInsuranceCostValue();
totalFixedCostsValue();
});
document.getElementById('insuranceLifeValue').addEventListener("input", function(){
totalInsuranceCostValue();
totalFixedCostsValue();
});
document.getElementById('insuranceLegalValue').addEventListener("input", function(){
totalInsuranceCostValue();
totalFixedCostsValue();
});

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

document.getElementById('donationsValue').addEventListener("input", function(){
totalSubscriptionCostValue();
totalFixedCostsValue();
});
document.getElementById('subscriptionsGymValue').addEventListener("input", function(){
totalSubscriptionCostValue();
totalFixedCostsValue();
});
document.getElementById('subscriptionsLotteryValue').addEventListener("input", function(){
totalSubscriptionCostValue();
totalFixedCostsValue();
});
document.getElementById('subscriptionsNewsValue').addEventListener("input", function(){
totalSubscriptionCostValue();
totalFixedCostsValue();
});
document.getElementById('subscriptionsStreamingValue').addEventListener("input", function(){
totalSubscriptionCostValue();
totalFixedCostsValue();
});

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

document.getElementById('amexValue').addEventListener("input", function(){
totalCreditcardCostValue();
totalFixedCostsValue();
});
document.getElementById('mastercardValue').addEventListener("input", function(){
totalCreditcardCostValue();
totalFixedCostsValue();
});
document.getElementById('visaValue').addEventListener("input", function(){
totalCreditcardCostValue();
totalFixedCostsValue();
});

function totalCreditcardCostValue() {
    var totalCreditcardCostValue = 
        Number($("input#amexValue").val()) + 
        Number($("input#mastercardValue").val()) + 
        Number($("input#visaValue").val()); 
    totalCreditcardCostValue = (Math.round(totalCreditcardCostValue * 100 / 100).toFixed(2));
    $("input#totalCreditcardCostValue").val(totalCreditcardCostValue);
}

/* ------------------------------ TOTAL FIXED COSTS CALCULATION */
document.getElementById('totalHomeCostValue').addEventListener("change", totalFixedCostsValue);
document.getElementById('totalTransportCostValue').addEventListener("change", totalFixedCostsValue);
document.getElementById('totalInsuranceCostValue').addEventListener("change", totalFixedCostsValue);
document.getElementById('totalSubscriptionCostValue').addEventListener("change", totalFixedCostsValue);
document.getElementById('totalCreditcardCostValue').addEventListener("change", totalFixedCostsValue);

function totalFixedCostsValue() {
    var totalFixedCostsValue = 
        Number($("input#totalHomeCostValue").val()) + 
        Number($("input#totalTransportCostValue").val()) +
        Number($("input#totalInsuranceCostValue").val()) + 
        Number($("input#totalSubscriptionCostValue").val()) + 
        Number($("input#totalCreditcardCostValue").val()) +
        Number($("input#transportCarPaymentValue").val()) + 
        Number($("input#transportParkingPermitPermitValue").val()) + 
        Number($("input#transportPublicValue").val());

    totalFixedCostsValue = (Math.round(totalFixedCostsValue * 100 / 100).toFixed(2));
    $("input#totalFixedCostsValue").val(totalFixedCostsValue);
}