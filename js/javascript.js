/* The following code has been adapted from 3 sources:
the source code of http://www.youcandealwithit.com/borrowers/calculators-and-resources/calculators/budget-calculator.shtml
the explination on https://stackoverflow.com/questions/30806948/javascript-run-function-on-input-change-no-jquery
and support from Michael - Code Institute Tutor Support */

"use strict";
/* ------------------------------ CURRENT ACCOUNTS CALCULATION */
document.getElementById('accountBankValue').addEventListener("input", function(){
    totalAccountsValue();
    totalCurrentAccountsValue();
    netWorthValue();
});
document.getElementById('accountSavingsValue').addEventListener("input", function(){
    totalAccountsValue();
    totalCurrentAccountsValue();
    netWorthValue();
});
document.getElementById('accountCashValue').addEventListener("input", function(){
    totalAccountsValue();
    totalCurrentAccountsValue();
    netWorthValue();
});


function totalAccountsValue() {
    var totalAccountsValue = 
        Number($("input#accountBankValue").val()) + 
        Number($("input#accountSavingsValue").val()) +
        Number($("input#accountCashValue").val());
    totalAccountsValue = (Math.round(totalAccountsValue * 100 / 100).toFixed(2));
    $("input#totalAccountsValue").val(totalAccountsValue);
}

/* ------------------------------ CURRENT DEBT CALCULATION */

document.getElementById('debtLoanValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
});
document.getElementById('debtAmexValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
});
document.getElementById('debtMastercardValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
});
document.getElementById('debtVisaValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
});

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

document.getElementById('netSalary').addEventListener("input", function(){
    totalIncomeValue();
    totalMonthlyIncomeValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('bonusSalary').addEventListener("input", function(){
    totalIncomeValue();
    totalMonthlyIncomeValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('gigSalary').addEventListener("input", function(){
    totalIncomeValue();
    totalMonthlyIncomeValue();
    netFixedincomeValue();
    totalSavingsValue();
});

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
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('energyValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('internetValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('mobileValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('propertyTaxValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('rentMortageValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('homeServiceCostsValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
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
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('transportParkingPermitPermitValue').addEventListener("input", function(){
    totalTransportCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('transportPublicValue').addEventListener("input", function(){
    totalTransportCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
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
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('insuranceHealthValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('insuranceLiabilityValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('insuranceLifeValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('insuranceLegalValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
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
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('subscriptionsGymValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('subscriptionsLotteryValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('subscriptionsNewsValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('subscriptionsStreamingValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
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
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('mastercardValue').addEventListener("input", function(){
    totalCreditcardCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});
document.getElementById('visaValue').addEventListener("input", function(){
    totalCreditcardCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
});

function totalCreditcardCostValue() {
    var totalCreditcardCostValue = 
        Number($("input#amexValue").val()) + 
        Number($("input#mastercardValue").val()) + 
        Number($("input#visaValue").val()); 
    totalCreditcardCostValue = (Math.round(totalCreditcardCostValue * 100 / 100).toFixed(2));
    $("input#totalCreditcardCostValue").val(totalCreditcardCostValue);
}


/* ------------------------------ TOTAL CURRENT ACCOUNTS CALCULATION */

function totalCurrentAccountsValue() {
    var totalCurrentAccountsValue = 
        Number($("input#totalAccountsValue").val());

    totalCurrentAccountsValue = (Math.round(totalCurrentAccountsValue * 100 / 100).toFixed(2));
    $("input#totalCurrentAccountsValue").val(totalCurrentAccountsValue);
}


/* ------------------------------ TOTAL CURRENT DEBTS CALCULATION */

function totalCurrentDebtsValue() {
    var totalCurrentDebtsValue = 
        Number($("input#totalDebtsValue").val());

    totalCurrentDebtsValue = (Math.round(totalCurrentDebtsValue * 100 / 100).toFixed(2));
    $("input#totalCurrentDebtsValue").val(totalCurrentDebtsValue);
}

/* ------------------------------ NET WORTH CALCULATION */

function netWorthValue() {
    var netWorthValue = 
        Number($("input#totalCurrentAccountsValue").val()) -
        Number($("input#totalCurrentDebtsValue").val());

    netWorthValue = (Math.round(netWorthValue * 100 / 100).toFixed(2));
    $("input#netWorthValue").val(netWorthValue);
}


netWorthValue

/* ------------------------------ TOTAL MONTHLY INCOME CALCULATION */

function totalMonthlyIncomeValue() {
    var totalMonthlyIncomeValue = 
        Number($("input#totalIncomeValue").val());

    totalMonthlyIncomeValue = (Math.round(totalMonthlyIncomeValue * 100 / 100).toFixed(2));
    $("input#totalMonthlyIncomeValue").val(totalMonthlyIncomeValue);
}


/* ------------------------------ TOTAL FIXED COSTS CALCULATION */
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

/* ------------------------------ NET FIXED INCOME (MONTHLY) CALCULATION */

function netFixedincomeValue() {
    var netFixedincomeValue = 
        Number($("input#totalMonthlyIncomeValue").val()) -
        Number($("input#totalFixedCostsValue").val());

    netFixedincomeValue = (Math.round(netFixedincomeValue * 100 / 100).toFixed(2));
    $("input#netFixedIncomeValue").val(netFixedincomeValue);
}


/* ------------------------------ VARIABLE COSTS CALCULATION --- FOOD AND DRINK */

document.getElementById('supermarketAlbertHeijnValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketAldiValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketCoopValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketDirkBasValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketJumboValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketLidlValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('SupermarketMakroValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketMarqtValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketPlusValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketCornerStoreValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('supermarketLiquorStoreValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});

function totalSupermarketCostValue() {
    var totalSupermarketCostValue = 
        Number($("input#supermarketAlbertHeijnValue").val()) +
        Number($("input#supermarketAldiValue").val()) +
        Number($("input#supermarketCoopValue").val()) +
        Number($("input#supermarketDirkBasValue").val()) +
        Number($("input#supermarketJumboValue").val()) +
        Number($("input#supermarketLidlValue").val()) +
        Number($("input#SupermarketMakroValue").val()) +
        Number($("input#supermarketMarqtValue").val()) +
        Number($("input#supermarketPlusValue").val()) +
        Number($("input#supermarketCornerStoreValue").val()) +
        Number($("input#supermarketLiquorStoreValue").val());
    totalSupermarketCostValue = (Math.round(totalSupermarketCostValue * 100 / 100).toFixed(2));
    $("input#totalSupermarketCostValue").val(totalSupermarketCostValue);
}

/* ------------------------------ VARIABLE COSTS CALCULATION --- CONSUMABLES */

document.getElementById('consumablesFlowersValue').addEventListener("input", function(){
    totalConsumablesCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('consumablesPersonalHygieneValue').addEventListener("input", function(){
    totalConsumablesCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
function totalConsumablesCostValue() {
    var totalConsumablesCostValue = 
        Number($("input#consumablesFlowersValue").val()) +
        Number($("input#consumablesPersonalHygieneValue").val());
    totalConsumablesCostValue = (Math.round(totalConsumablesCostValue * 100 / 100).toFixed(2));
    $("input#totalConsumablesCostValue").val(totalConsumablesCostValue);
}

/* ------------------------------ VARIABLE COSTS CALCULATION --- SOCIALISING AND FUN */

document.getElementById('socialisingBarsValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('socialisingCinemasValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('socialisingNightClubsValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('socialisingRestaurantsValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('socialisingOtherValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});


function totalSocialisingFunCostValue() {
    var totalSocialisingFunCostValue = 
        Number($("input#socialisingBarsValue").val()) +
        Number($("input#socialisingCinemasValue").val()) +
        Number($("input#socialisingNightClubsValue").val()) +
        Number($("input#socialisingRestaurantsValue").val()) +
        Number($("input#socialisingOtherValue").val());
    totalSocialisingFunCostValue = (Math.round(totalSocialisingFunCostValue * 100 / 100).toFixed(2));
    $("input#totalSocialisingFunCostValue").val(totalSocialisingFunCostValue);
}

/* ------------------------------ VARIABLE COSTS CALCULATION --- STUFF */

document.getElementById('stuffClothesValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('stuffElectronicsValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('stuffShoesValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('stuffToysValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('stuffVideoGamesValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});
document.getElementById('stuffOtherValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
});


function totalStuffCostValue() {
    var totalStuffCostValue = 
        Number($("input#stuffClothesValue").val()) +
        Number($("input#stuffElectronicsValue").val()) +
        Number($("input#stuffShoesValue").val()) +
        Number($("input#stuffToysValue").val()) +
        Number($("input#stuffVideoGamesValue").val()) +
        Number($("input#stuffOtherValue").val());
    totalStuffCostValue = (Math.round(totalStuffCostValue * 100 / 100).toFixed(2));
    $("input#totalStuffCostValue").val(totalStuffCostValue);
}



/* ------------------------------ TOTAL VARIABLE COSTS CALULATION */

function totalVariableCostsValue() {
    var totalVariableCostsValue = 
        Number($("input#totalSupermarketCostValue").val()) + 
        Number($("input#totalConsumablesCostValue").val()) +
        Number($("input#totalSocialisingFunCostValue").val()) + 
        Number($("input#totalStuffCostValue").val());

    totalVariableCostsValue = (Math.round(totalVariableCostsValue * 100 / 100).toFixed(2));
    $("input#totalVariableCostsValue").val(totalVariableCostsValue);
}

/* ------------------------------ NET BUDGET MONTHLY */

function totalSavingsValue() {
    var totalSavingsValue = 
        Number($("input#totalMonthlyIncomeValue").val()) -
        Number($("input#totalFixedCostsValue").val()) -
        Number($("input#totalVariableCostsValue").val());

    totalSavingsValue = (Math.round(totalSavingsValue * 100 / 100).toFixed(2));
    $("input#totalSavingsValue").val(totalSavingsValue);
}
