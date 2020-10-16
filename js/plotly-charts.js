TESTER = document.getElementById("tester");
	Plotly.newPlot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );
    


    
var data = [{
  values: [50, 10, 10, 10, 20],
  labels: ["Home", "Transport", "Insurance", "Subscriptions", "Credit Card Payments"],
  type: "pie"
}];

var layout = {
  height: 200,
  width: 250
};

Plotly.newPlot("pieChartFixedCosts", data, layout);