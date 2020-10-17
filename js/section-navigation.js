/* Page 1 currentAccounts */
$("#next-monthlyIncome").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").show();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
});


/* Page 2 monthlyIncome */
$("#previous-currentAccounts").click(function(){
    $("#currentAccounts").show();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
});

$("#next-fixedCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").show();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
});


/* Page 3 fixedCosts */
$("#previous-monthlyIncome").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").show();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
});

$("#next-variableCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").show();
    $("#budgetOverview").hide();
});


/* Page 4 variableCosts */
$("#previous-fixedCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").show();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
});

$("#next-budgetOverview").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").show();
});


/* Page 5 budgetOverview */
$("#previous-variableCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").show();
    $("#budgetOverview").hide();
});
/* NOT CURRENTLY USED
$("#next-fixedCosts").click(function(){
    $("#monthlyIncome").hide();
    $("#fixedCosts").show();
});
*/