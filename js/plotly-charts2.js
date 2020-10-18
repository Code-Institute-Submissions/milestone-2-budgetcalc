/*FIXED COSTS PIE CHART*/
var data = [{
  values: [],
  labels: ['Home', 'Transport', 'Insurance', 'Subscriptions', 'Credit Card Payments'],
  type: 'pie'
}];

var layout = {
  title: 'Please enter data above',
  font: {size: 12}
};

var config = {responsive: true}

Plotly.newPlot('fixedCostsPieChart', data, layout, config );

function fixedCostsPieChart() {
    var totalHomeCostValuePER =
        Number($("input#totalHomeCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var totalTransportCostValuePER =
        Number($("input#totalTransportCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var gigSalaryPER =
        Number($("input#totalInsuranceCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var gigSalaryPER =
        Number($("input#totalSubscriptionCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    var gigSalaryPER =
        Number($("input#totalCreditcardCostValue").val()) / 
        Number($("input#totalFixedCostsValue").val()) 
        * 100;
    data[0].values[0] = totalHomeCostValuePER;
    data[0].values[1] = totalTransportCostValuePER;
    data[0].values[2] = totalInsuranceCostValue;
    data[0].values[3] = totalSubscriptionCostValue;
    data[0].values[4] = totalCreditcardCostValue;
    layout.title = 'Fixed Costs';
    Plotly.newPlot('fixedCostsPieChart', data, layout, config );
}