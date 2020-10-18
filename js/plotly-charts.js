var data = [{
  values: [50, 30, 20],
  labels: ['Bank Accounts', 'Savings Accounts', 'Cash-on-Hand'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('incomePieChart', data, layout);

function testPER() {
    console.log("called");
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
    $("input#netSalaryPER").val(netSalaryPER);
}