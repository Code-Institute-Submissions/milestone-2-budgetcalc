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
    accountsPieChart();
});
document.getElementById('accountSavingsValue').addEventListener("input", function(){
    totalAccountsValue();
    totalCurrentAccountsValue();
    netWorthValue();
    accountsPieChart();
});
document.getElementById('accountCashValue').addEventListener("input", function(){
    totalAccountsValue();
    totalCurrentAccountsValue();
    netWorthValue();
    accountsPieChart();
});


function totalAccountsValue() {
    var totalAccountsValue = 
        Number($("input#accountBankValue").val()) + 
        Number($("input#accountSavingsValue").val()) +
        Number($("input#accountCashValue").val());
    totalAccountsValue = (totalAccountsValue).toFixed(2);
    $("input#totalAccountsValue").val(totalAccountsValue);
    $("input#totalAccountsValue-BudgetOverview").val(totalAccountsValue);
}

/* ------------------------------ CURRENT DEBT CALCULATION */

document.getElementById('debtLoanValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
    debtsPieChart();
});
document.getElementById('debtAmexValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
    debtsPieChart();
});
document.getElementById('debtMastercardValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
    debtsPieChart();
});
document.getElementById('debtVisaValue').addEventListener("input", function(){
    totalDebtsValue();
    totalCurrentDebtsValue();
    netWorthValue();
    debtsPieChart();
});

function totalDebtsValue() {
    var totalDebtsValue = 
        Number($("input#debtLoanValue").val()) + 
        Number($("input#debtAmexValue").val()) + 
        Number($("input#debtMastercardValue").val()) + 
        Number($("input#debtVisaValue").val());
    totalDebtsValue = (totalDebtsValue).toFixed(2);
    $("input#totalDebtsValue").val(totalDebtsValue);
    $("input#totalDebtsValue-BudgetOverview").val(totalDebtsValue);
}


/* ------------------------------ INCOME CALCULATION */

document.getElementById('netSalary').addEventListener("input", function(){
    totalIncomeValue();
    totalMonthlyIncomeValue();
    netFixedincomeValue();
    totalSavingsValue();
    incomePieChart();
});
document.getElementById('bonusSalary').addEventListener("input", function(){
    totalIncomeValue();
    totalMonthlyIncomeValue();
    netFixedincomeValue();
    totalSavingsValue();
    incomePieChart();
});
document.getElementById('gigSalary').addEventListener("input", function(){
    totalIncomeValue();
    totalMonthlyIncomeValue();
    netFixedincomeValue();
    totalSavingsValue();
    incomePieChart();
});

function totalIncomeValue() {
    var totalIncomeValue = 
        Number($("input#netSalary").val()) + 
        Number($("input#bonusSalary").val()) + 
        Number($("input#gigSalary").val());
    totalIncomeValue =  (totalIncomeValue).toFixed(2);
    $("input#totalIncomeValue").val(totalIncomeValue);
}


/* ------------------------------ FIXED COSTS CALCULATION --- HOME */

document.getElementById('waterValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('energyValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('internetValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('mobileValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('propertyTaxValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('rentMortageValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('homeServiceCostsValue').addEventListener("input", function(){
    totalHomeCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
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
    totalHomeCostValue = (totalHomeCostValue).toFixed(2);
    $("input#totalHomeCostValue").val(totalHomeCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- TRANSPORT */

document.getElementById('transportCarPaymentValue').addEventListener("input", function(){
    totalTransportCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('transportParkingPermitPermitValue').addEventListener("input", function(){
    totalTransportCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('transportPublicValue').addEventListener("input", function(){
    totalTransportCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});

function totalTransportCostValue() {
    var totalTransportCostValue = 
        Number($("input#transportCarPaymentValue").val()) + 
        Number($("input#transportParkingPermitPermitValue").val()) + 
        Number($("input#transportPublicValue").val()); 
    totalTransportCostValue = (totalTransportCostValue).toFixed(2);
    $("input#totalTransportCostValue").val(totalTransportCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- INSURANCE */

document.getElementById('insuranceCarValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('insuranceHealthValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('insuranceLiabilityValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('insuranceLifeValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('insuranceLegalValue').addEventListener("input", function(){
    totalInsuranceCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});

function totalInsuranceCostValue() {
    var totalInsuranceCostValue = 
        Number($("input#insuranceCarValue").val()) + 
        Number($("input#insuranceHealthValue").val()) + 
        Number($("input#insuranceLiabilityValue").val()) + 
        Number($("input#insuranceLifeValue").val()) + 
        Number($("input#insuranceLegalValue").val()); 
    totalInsuranceCostValue = (totalInsuranceCostValue).toFixed(2);
    $("input#totalInsuranceCostValue").val(totalInsuranceCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- SUBSCRIPTIONS */

document.getElementById('donationsValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('subscriptionsGymValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('subscriptionsLotteryValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('subscriptionsNewsValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('subscriptionsStreamingValue').addEventListener("input", function(){
    totalSubscriptionCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});

function totalSubscriptionCostValue() {
    var totalSubscriptionCostValue = 
        Number($("input#donationsValue").val()) + 
        Number($("input#subscriptionsGymValue").val()) + 
        Number($("input#subscriptionsLotteryValue").val()) + 
        Number($("input#subscriptionsNewsValue").val()) + 
        Number($("input#subscriptionsStreamingValue").val()); 
    totalSubscriptionCostValue = (totalSubscriptionCostValue).toFixed(2);
    $("input#totalSubscriptionCostValue").val(totalSubscriptionCostValue);
}

/* ------------------------------ FIXED COSTS CALCULATION --- CREDIT CARDS */

document.getElementById('amexValue').addEventListener("input", function(){
    totalCreditcardCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('mastercardValue').addEventListener("input", function(){
    totalCreditcardCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});
document.getElementById('visaValue').addEventListener("input", function(){
    totalCreditcardCostValue();
    totalFixedCostsValue();
    netFixedincomeValue();
    totalSavingsValue();
    fixedCostsPieChart();
});

function totalCreditcardCostValue() {
    var totalCreditcardCostValue = 
        Number($("input#amexValue").val()) + 
        Number($("input#mastercardValue").val()) + 
        Number($("input#visaValue").val()); 
    totalCreditcardCostValue = (totalCreditcardCostValue).toFixed(2);
    $("input#totalCreditcardCostValue").val(totalCreditcardCostValue);
}


/* ------------------------------ TOTAL CURRENT ACCOUNTS CALCULATION */

function totalCurrentAccountsValue() {
    var totalCurrentAccountsValue = 
        Number($("input#totalAccountsValue").val());

    totalCurrentAccountsValue = (totalCurrentAccountsValue).toFixed(2);
    $("input#totalCurrentAccountsValue").val(totalCurrentAccountsValue);
}


/* ------------------------------ TOTAL CURRENT DEBTS CALCULATION */

function totalCurrentDebtsValue() {
    var totalCurrentDebtsValue = 
        Number($("input#totalDebtsValue").val());

    totalCurrentDebtsValue = (totalCurrentDebtsValue).toFixed(2);
    $("input#totalCurrentDebtsValue").val(totalCurrentDebtsValue);
}

/* ------------------------------ NET WORTH CALCULATION */

function netWorthValue() {
    var netWorthValue = 
        Number($("input#totalCurrentAccountsValue").val()) -
        Number($("input#totalCurrentDebtsValue").val());

    netWorthValue = (netWorthValue).toFixed(2);
    $("input#netWorthValue").val(netWorthValue);
    $("input#netWorthValue-BudgetOverview").val(netWorthValue);
}


netWorthValue

/* ------------------------------ TOTAL MONTHLY INCOME CALCULATION */

function totalMonthlyIncomeValue() {
    var totalMonthlyIncomeValue = 
        Number($("input#totalIncomeValue").val());

    totalMonthlyIncomeValue = (totalMonthlyIncomeValue).toFixed(2);
    $("input#totalMonthlyIncomeValue").val(totalMonthlyIncomeValue);
    $("input#totalIncomeValue-BudgetOverview").val(totalMonthlyIncomeValue);
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

    totalFixedCostsValue = (totalFixedCostsValue).toFixed(2);
    $("input#totalFixedCostsValue").val(totalFixedCostsValue);
    $("input#totalFixedCostsValue-BudgetOverview").val(totalFixedCostsValue);
}

/* ------------------------------ NET FIXED INCOME (MONTHLY) CALCULATION */

function netFixedincomeValue() {
    var netFixedincomeValue = 
        Number($("input#totalMonthlyIncomeValue").val()) -
        Number($("input#totalFixedCostsValue").val());

    netFixedincomeValue = (netFixedincomeValue).toFixed(2);
    $("input#netFixedIncomeValue").val(netFixedincomeValue);
    $("span#netMonthlyIncomeForVariablePage").val(netFixedincomeValue);
}


/* ------------------------------ VARIABLE COSTS CALCULATION --- FOOD AND DRINK */

document.getElementById('supermarketAlbertHeijnValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketAldiValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketCoopValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketDirkBasValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketJumboValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketLidlValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('SupermarketMakroValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketMarqtValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketPlusValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketCornerStoreValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('supermarketLiquorStoreValue').addEventListener("input", function(){
    totalSupermarketCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
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
    totalSupermarketCostValue = (totalSupermarketCostValue).toFixed(2);
    $("input#totalSupermarketCostValue").val(totalSupermarketCostValue);
}

/* ------------------------------ VARIABLE COSTS CALCULATION --- CONSUMABLES */

document.getElementById('consumablesFlowersValue').addEventListener("input", function(){
    totalConsumablesCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('consumablesPersonalHygieneValue').addEventListener("input", function(){
    totalConsumablesCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
function totalConsumablesCostValue() {
    var totalConsumablesCostValue = 
        Number($("input#consumablesFlowersValue").val()) +
        Number($("input#consumablesPersonalHygieneValue").val());
    totalConsumablesCostValue = (totalConsumablesCostValue).toFixed(2);
    $("input#totalConsumablesCostValue").val(totalConsumablesCostValue);
}

/* ------------------------------ VARIABLE COSTS CALCULATION --- SOCIALISING AND FUN */

document.getElementById('socialisingBarsValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('socialisingCinemasValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('socialisingNightClubsValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('socialisingRestaurantsValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('socialisingOtherValue').addEventListener("input", function(){
    totalSocialisingFunCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});


function totalSocialisingFunCostValue() {
    var totalSocialisingFunCostValue = 
        Number($("input#socialisingBarsValue").val()) +
        Number($("input#socialisingCinemasValue").val()) +
        Number($("input#socialisingNightClubsValue").val()) +
        Number($("input#socialisingRestaurantsValue").val()) +
        Number($("input#socialisingOtherValue").val());
    totalSocialisingFunCostValue = (totalSocialisingFunCostValue).toFixed(2);
    $("input#totalSocialisingFunCostValue").val(totalSocialisingFunCostValue);
}

/* ------------------------------ VARIABLE COSTS CALCULATION --- STUFF */

document.getElementById('stuffClothesValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('stuffElectronicsValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('stuffShoesValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('stuffToysValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('stuffVideoGamesValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});
document.getElementById('stuffOtherValue').addEventListener("input", function(){
    totalStuffCostValue();
    totalVariableCostsValue();
    totalSavingsValue();
    variableCostsPieChart();
});


function totalStuffCostValue() {
    var totalStuffCostValue = 
        Number($("input#stuffClothesValue").val()) +
        Number($("input#stuffElectronicsValue").val()) +
        Number($("input#stuffShoesValue").val()) +
        Number($("input#stuffToysValue").val()) +
        Number($("input#stuffVideoGamesValue").val()) +
        Number($("input#stuffOtherValue").val());
    totalStuffCostValue = (totalStuffCostValue).toFixed(2);
    $("input#totalStuffCostValue").val(totalStuffCostValue);
}



/* ------------------------------ TOTAL VARIABLE COSTS CALULATION */

function totalVariableCostsValue() {
    var totalVariableCostsValue = 
        Number($("input#totalSupermarketCostValue").val()) + 
        Number($("input#totalConsumablesCostValue").val()) +
        Number($("input#totalSocialisingFunCostValue").val()) + 
        Number($("input#totalStuffCostValue").val());

    totalVariableCostsValue = (totalVariableCostsValue).toFixed(2);
    $("input#totalVariableCostsValue").val(totalVariableCostsValue);
    $("input#totalVariableCostsValue-BudgetOverview").val(totalVariableCostsValue);
}

/* ------------------------------ TOTAL SAVINGS VALUE */

function totalSavingsValue() {
    var totalSavingsValue = 
        Number($("input#totalMonthlyIncomeValue").val()) -
        Number($("input#totalFixedCostsValue").val()) -
        Number($("input#totalVariableCostsValue").val());

    totalSavingsValue = (totalSavingsValue).toFixed(2);
    $("input#totalSavingsValue").val(totalSavingsValue);
    $("input#totalSavingsValue-BudgetOverview").val(totalSavingsValue);
}