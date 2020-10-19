/* The following charts were created with Plotly and bugs were solved by using the documentation and tutor support SRC: https://plotly.com/javascript/pie-charts/# */

/*INCOME PIE CHART VARS*/
var dataIncome = [{
values: [],
labels: ['Salary', 'Bonuses', 'Gigs'],
type: 'pie'
}];

var layoutIncome = {
    title: "Please enter data<br>above to graph",
    font: {size: 12},
    paper_bgcolor:"#ade7ba"
};

var configIncome = {responsive: true}

Plotly.newPlot('incomePieChart', dataIncome, layoutIncome, configIncome );

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
    /* TESTING PURPOSES USE THIS TO WRITE PERCENTAGES $("input#netSalaryPER").val(netSalaryPER); */
    layoutIncome.title = 'Income Overview';
    Plotly.newPlot('incomePieChart', dataIncome, layoutIncome, configIncome );
}





/*FIXED COSTS PIE CHART VARS*/

var dataFixed = [{
values: [],
labels: ["Home", "Transport", "Insurance", "Subscriptions", "Credit Card Payments"],
type: "pie"
}];

var layoutFixed = {
    title: "Please enter data<br>above to graph",
    font: {size: 12},
    paper_bgcolor:"#ade7ba"
};


var configFixed = {responsive: true}

Plotly.newPlot("fixedCostsPieChart", dataFixed, layoutFixed, configFixed );

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
    layoutFixed.title = "Fixed Costs";
    Plotly.newPlot("fixedCostsPieChart", dataFixed, layoutFixed, configFixed );
}





/*VARIABLE COSTS PIE CHART VARS*/

var dataVariable = [{
values: [],
labels: ["Food and Drink", "Consumables", "Socialising / Fun", "Stuff"],
type: "pie"
}];

var layoutVariable = {
    title: "Please enter data<br>above to graph",
    font: {size: 12},
    paper_bgcolor:"#ade7ba"
};


var configVariable = {responsive: true}

Plotly.newPlot("variableCostsPieChart", dataVariable, layoutVariable, configVariable );

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
    layoutVariable.title = "Fixed Costs";
    Plotly.newPlot("variableCostsPieChart", dataVariable, layoutVariable, configVariable );
}
