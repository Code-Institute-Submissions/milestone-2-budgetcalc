/* The following charts were created with Plotly and bugs were solved by using the documentation and tutor support SRC: https://plotly.com/javascript/pie-charts/# */

/*CURRENT ACCOUNTS CHART VARS*/
var dataAccounts = [{
values: [],
labels: ["Bank Accounts", "Savings Accounts", "Cash-on-hand"],
type: "pie"
}];

var layoutAccounts = {
    title: "Current Accounts<br>Overview",
    font: {size: 10},
    paper_bgcolor:"#ade7ba",
    margin: {
    l: 5,
    r: 5,
    b: 20,
    t: 100,
    pad: 0
  },
};

var configAccounts = {responsive: true}

/*INCOME PIE CHART DATA*/
function accountsPieChart() {
    var accountBankValuePER =
        Number($("input#accountBankValue").val()) / 
        Number($("input#totalAccountsValue").val()) 
        * 100;
    var accountSavingsValuePER =
        Number($("input#accountSavingsValue").val()) / 
        Number($("input#totalAccountsValue").val()) 
        * 100;
    var accountCashValuePER =
        Number($("input#accountCashValue").val()) / 
        Number($("input#totalAccountsValue").val()) 
        * 100;
    dataAccounts[0].values[0] = accountBankValuePER;
    dataAccounts[0].values[1] = accountSavingsValuePER
    dataAccounts[0].values[2] = accountCashValuePER
    Plotly.newPlot("accountsPieChart", dataAccounts, layoutAccounts, configAccounts );
}





/*INCOME PIE CHART VARS*/
var dataDebts = [{
values: [],
labels: ["Loans", "American Expres", "Visa", "Mastercard"],
type: "pie"
}];

var layoutDebts = {
    title: "Current Debts<br>Overview",
    font: {size: 10},
    paper_bgcolor:"#ade7ba",
    margin: {
    l: 5,
    r: 5,
    b: 20,
    t: 100,
    pad: 0
  },
};

var configDebts = {responsive: true}

/*INCOME PIE CHART DATA*/
function debtsPieChart() {
    var debtLoanValuePER =
        Number($("input#debtLoanValue").val()) / 
        Number($("input#totalDebtsValue").val()) 
        * 100;
    var debtAmexValuePER =
        Number($("input#debtAmexValue").val()) / 
        Number($("input#totalDebtsValue").val()) 
        * 100;
    var debtMastercardValuePER =
        Number($("input#debtMastercardValue").val()) / 
        Number($("input#totalDebtsValue").val()) 
        * 100;
    var debtVisaValuePER =
        Number($("input#debtVisaValue").val()) / 
        Number($("input#totalDebtsValue").val()) 
        * 100;
    dataDebts[0].values[0] = debtLoanValuePER;
    dataDebts[0].values[1] = debtAmexValuePER
    dataDebts[0].values[2] = debtMastercardValuePER
    dataDebts[0].values[3] = debtVisaValuePER
    Plotly.newPlot("debtsPieChart", dataDebts, layoutDebts, configDebts );
}





/*INCOME PIE CHART VARS*/
var dataIncome = [{
values: [],
labels: ["Salary", "Bonuses", "Gigs"],
type: "pie"
}];

var layoutIncome = {
    title: "Income<br>Overview",
    font: {size: 10},
    paper_bgcolor:"#ade7ba",
    margin: {
    l: 5,
    r: 5,
    b: 20,
    t: 100,
    pad: 0
  },
};

var configIncome = {responsive: true}

/*INCOME PIE CHART DATA*/
function incomePieChart() {
    var netSalaryPER =
        Number($("input#netSalary").val()) / 
        Number($("input#totalIncomeValue").val()) 
        * 100;
    var bonusSalaryPER =
        Number($("input#bonusSalary").val()) / 
        Number($("input#totalIncomeValue").val()) 
        * 100;
    var gigSalaryPER =
        Number($("input#gigSalary").val()) / 
        Number($("input#totalIncomeValue").val()) 
        * 100;
    dataIncome[0].values[0] = netSalaryPER;
    dataIncome[0].values[1] = bonusSalaryPER
    dataIncome[0].values[2] = gigSalaryPER
    Plotly.newPlot("incomePieChart", dataIncome, layoutIncome, configIncome );
}





/*FIXED COSTS PIE CHART VARS*/

var dataFixed = [{
values: [],
labels: ["Home", "Transport", "Insurance", "Subscriptions", "Credit Card Payments"],
type: "pie"
}];

var layoutFixed = {
    title: "Fixed<br>Costs",
    font: {size: 12},
    paper_bgcolor:"#ade7ba",
    margin: {
    l: 5,
    r: 5,
    b: 20,
    t: 100,
    pad: 0
  },
};


var configFixed = {responsive: true}

/*FIXED COSTS PIE CHART DATA*/

function fixedCostsPieChart() {
    var totalHomeCostValuePER =
        Number($("input#totalHomeCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var totalTransportCostValuePER =
        Number($("input#totalTransportCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var totalInsuranceCostValuePER =
        Number($("input#totalInsuranceCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var totalSubscriptionCostValuePER =
        Number($("input#totalSubscriptionCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var totalCreditcardCostValuePER =
        Number($("input#totalCreditcardCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    dataFixed[0].values[0] = totalHomeCostValuePER;
    dataFixed[0].values[1] = totalTransportCostValuePER;
    dataFixed[0].values[2] = totalInsuranceCostValuePER;
    dataFixed[0].values[3] = totalSubscriptionCostValuePER;
    dataFixed[0].values[4] = totalCreditcardCostValuePER;
    Plotly.newPlot("fixedCostsPieChart", dataFixed, layoutFixed, configFixed );
}





/*VARIABLE COSTS PIE CHART VARS*/

var dataVariable = [{
values: [],
labels: ["Food and Drink", "Consumables", "Socialising / Fun", "Stuff"],
type: "pie"
}];

var layoutVariable = {
    title: "Variable<br>Costs",
    font: {size: 12},
    paper_bgcolor:"#ade7ba",
    margin: {
    l: 5,
    r: 5,
    b: 20,
    t: 100,
    pad: 0
  },
};


var configVariable = {responsive: true}

/*VARIABLE COSTS PIE CHART DATA*/

function variableCostsPieChart() {
    var totalSupermarketCostValuePER =
        Number($("input#totalSupermarketCostValue").val()) / 
        Number($("input#totalVariableCostsValue").val()) 
        * 100;
    var totalConsumablesCostValuePER =
        Number($("input#totalConsumablesCostValue").val()) / 
        Number($("input#totalVariableCostsValue").val()) 
        * 100;
    var totalSocialisingFunCostValuePER =
        Number($("input#totalSocialisingFunCostValue").val()) / 
        Number($("input#totalVariableCostsValue").val()) 
        * 100;
    var totalStuffCostValuePER =
        Number($("input#totalStuffCostValue").val()) / 
        Number($("input#totalVariableCostsValue").val()) 
        * 100;
    dataVariable[0].values[0] = totalSupermarketCostValuePER;
    dataVariable[0].values[1] = totalConsumablesCostValuePER;
    dataVariable[0].values[2] = totalSocialisingFunCostValuePER;
    dataVariable[0].values[3] = totalStuffCostValuePER;
    Plotly.newPlot("variableCostsPieChart", dataVariable, layoutVariable, configVariable );
}