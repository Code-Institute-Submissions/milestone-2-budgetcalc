/* The following charts were created with Plotly and bugs were solved by using the documentation and tutor support SRC: https://plotly.com/javascript/pie-charts/# */

/*INCOME PIE CHART*/
function incomeTEST() {
    var data = [{
    values: [],
    labels: ['Salary', 'Bonuses', 'Gigs'],
    type: 'pie'
    }];

    var layout = {
        title: "Please enter data<br>above to graph",
        font: {size: 12},
        paper_bgcolor:"#ade7ba"
    };

    var config = {responsive: true}

    Plotly.newPlot('incomePieChart', data, layout, config );
}

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
    data[0].values[0] = netSalaryPER;
    data[0].values[1] = bonusSalaryPER
    data[0].values[2] = gigSalaryPER
    /* TESTING PURPOSES USE THIS TO WRITE PERCENTAGES $("input#netSalaryPER").val(netSalaryPER); */
    layout.title = 'Income Overview';
    Plotly.newPlot('incomePieChart', data, layout, config );
}

/*FIXED COSTS PIE CHART*/
function fixedTEST2() {
    var data = [{
    values: [],
    labels: ["Home", "Transport", "Insurance", "Subscriptions", "Credit Card Payments"],
    type: "pie"
    }];

    var layout = {
        title: "Please enter data<br>above to graph",
        font: {size: 12},
        paper_bgcolor:"#ade7ba"
    };


    var config = {responsive: true}

    Plotly.newPlot("fixedCostsPieChart", data, layout, config );
}

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
    data[0].values[0] = totalHomeCostValuePER;
    data[0].values[1] = totalTransportCostValuePER;
    data[0].values[2] = totalInsuranceCostValuePER;
    data[0].values[3] = totalSubscriptionCostValuePER;
    data[0].values[4] = totalCreditcardCostValuePER;
    layout.title = "Fixed Costs";
    Plotly.newPlot("fixedCostsPieChart", data, layout, config );
}

/*VARIABLE COSTS PIE CHART*/
function fixedTEST3() {
    var data = [{
    values: [],
    labels: ["Food and Drink", "Consumables", "Socialising / Fun", "Stuff"],
    type: "pie"
    }];

    var layout = {
        title: "Please enter data<br>above to graph",
        font: {size: 12},
        paper_bgcolor:"#ade7ba"
    };


    var config = {responsive: true}

    Plotly.newPlot("variableCostsPieChart", data, layout, config );
}

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
    data[0].values[0] = totalSupermarketCostValuePER;
    data[0].values[1] = totalConsumablesCostValuePER;
    data[0].values[2] = totalSocialisingFunCostValuePER;
    data[0].values[3] = totalStuffCostValuePER;
    layout.title = "Fixed Costs";
    Plotly.newPlot("variableCostsPieChart", data, layout, config );
}