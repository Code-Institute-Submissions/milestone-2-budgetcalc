var data = [{
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('myDiv', data, layout);




/* TESTING - CALCULATE INCOME PERCENTAGES */

function getPercentageBankValue(){  
    var accountBankValuePercentage=document.getElementById("accountBankValue").value;
    var totalAccountsValuePercentage=document.getElementById("totalAccountsValue").value;
alert(Math.floor((accountBankValuePercentage / totalAccountsValuePercentage) * 100)); 
}

function getPercentageSavingsValue(){  
    var accountSavingsValuePercentage=document.getElementById("accountaccountSavingsValueBankValue").value;
    var totalAccountsValuePercentage=document.getElementById("totalAccountsValue").value;
alert(Math.floor((accountSavingsValuePercentage / totalAccountsValuePercentage) * 100)); 
}


function getPercentageCashValue(){  
    var accountCashValuePercentage=document.getElementById("accountCashValue").value;
    var totalAccountsValuePercentage=document.getElementById("totalAccountsValue").value;
alert(Math.floor((accountCashValuePercentage / totalAccountsValuePercentage) * 100)); 
}
