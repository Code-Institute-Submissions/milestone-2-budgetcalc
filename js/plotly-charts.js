/* The following charts were created with Plotly and bugs were solved by using the documentation and tutor support SRC: https://plotly.com/javascript/pie-charts/# */

var data = [{
  values: [],
  labels: ['Bank Accounts', 'Savings Accounts', 'Cash-on-Hand'],
  type: 'pie'
}];

var layout = {
  title: 'Please enter data above',
  font: {size: 12}
};

var config = {responsive: true}

Plotly.newPlot('incomePieChart', data, layout, config );

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
    Plotly.newPlot('incomePieChart', data, layout, config );
}