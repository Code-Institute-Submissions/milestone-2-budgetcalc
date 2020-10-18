/* TESTING - CALCULATE INCOME PERCENTAGES */

function getPercentageBankValue(){  
    var accountBankValuePercentage=document.getElementById("accountBankValue").value;
    var totalAccountsValuePercentage=document.getElementById("totalAccountsValue").value;
    var A = (Math.floor((accountBankValuePercentage / totalAccountsValuePercentage) * 100)); 
}

function getPercentageSavingsValue(){  
    var accountSavingsValuePercentage=document.getElementById("accountaccountSavingsValueBankValue").value;
    var totalAccountsValuePercentage=document.getElementById("totalAccountsValue").value;
    var B = (Math.floor((accountSavingsValuePercentage / totalAccountsValuePercentage) * 100)); 
}


function getPercentageCashValue(){  
    var accountCashValuePercentage=document.getElementById("accountCashValue").value;
    var totalAccountsValuePercentage=document.getElementById("totalAccountsValue").value;
    var C = (Math.floor((accountCashValuePercentage / totalAccountsValuePercentage) * 100)); 
}

var data = [{
  values: [12, 26, 55],
  labels: ['Bank Accounts', 'Savings Accounts', 'Cash-on-Hand'],
  type: 'pie'
}];

var contents = $("#accountCashValue");
console.log(contents);




function testingNumbers(){
var number1 = 4.954848;
var number2 = 5.9797;

console.log(Math.floor((number1 / number2) * 100));
}


var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('incomePieChart', data, layout);