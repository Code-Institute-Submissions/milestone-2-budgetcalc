/* Page 1 currentAccounts */
$("#next-monthlyIncome, sideNavIncome").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").show();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "Current Accounts";
    document.getElementById("sideNavIncome").innerHTML = "<strong>Income (Monthly)</strong>";
    document.getElementById("sideNavFixedCosts").innerHTML = "Fixed Costs (Monthly)";
    document.getElementById("sideNavVariableCosts").innerHTML = "Variable Costs (Monthly)";
    document.getElementById("sideNavBudgetOverview").innerHTML = "Budget Overview";
});

/* Page 2 monthlyIncome */
$("#previous-currentAccounts").click(function(){
    $("#currentAccounts").show();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "<strong>Current Accounts</strong>";
    document.getElementById("sideNavIncome").innerHTML = "Income (Monthly)";
    document.getElementById("sideNavFixedCosts").innerHTML = "Fixed Costs (Monthly)";
    document.getElementById("sideNavVariableCosts").innerHTML = "Variable Costs (Monthly)";
    document.getElementById("sideNavBudgetOverview").innerHTML = "Budget Overview";
});

$("#next-fixedCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").show();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "Current Accounts";
    document.getElementById("sideNavIncome").innerHTML = "Income (Monthly)";
    document.getElementById("sideNavFixedCosts").innerHTML = "<strong>Fixed Costs (Monthly)</strong>";
    document.getElementById("sideNavVariableCosts").innerHTML = "Variable Costs (Monthly)";
    document.getElementById("sideNavBudgetOverview").innerHTML = "Budget Overview";
});


/* Page 3 fixedCosts */
$("#previous-monthlyIncome").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").show();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "Current Accounts";
    document.getElementById("sideNavIncome").innerHTML = "<strong>Income (Monthly)</strong>";
    document.getElementById("sideNavFixedCosts").innerHTML = "Fixed Costs (Monthly)";
    document.getElementById("sideNavVariableCosts").innerHTML = "Variable Costs (Monthly)";
    document.getElementById("sideNavBudgetOverview").innerHTML = "Budget Overview";
});

$("#next-variableCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").show();
    $("#budgetOverview").hide();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "Current Accounts";
    document.getElementById("sideNavIncome").innerHTML = "Income (Monthly)";
    document.getElementById("sideNavFixedCosts").innerHTML = "Fixed Costs (Monthly)";
    document.getElementById("sideNavVariableCosts").innerHTML = "<strong>Variable Costs (Monthly)</strong>";
    document.getElementById("sideNavBudgetOverview").innerHTML = "Budget Overview";
});


/* Page 4 variableCosts */
$("#previous-fixedCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").show();
    $("#variableCosts").hide();
    $("#budgetOverview").hide();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "Current Accounts";
    document.getElementById("sideNavIncome").innerHTML = "Income (Monthly)";
    document.getElementById("sideNavFixedCosts").innerHTML = "<strong>Fixed Costs (Monthly)</strong>";
    document.getElementById("sideNavVariableCosts").innerHTML = "Variable Costs (Monthly)";
    document.getElementById("sideNavBudgetOverview").innerHTML = "Budget Overview";
});

$("#next-budgetOverview").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").hide();
    $("#budgetOverview").show();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "Current Accounts";
    document.getElementById("sideNavIncome").innerHTML = "Income (Monthly)";
    document.getElementById("sideNavFixedCosts").innerHTML = "Fixed Costs (Monthly)";
    document.getElementById("sideNavVariableCosts").innerHTML = "Variable Costs (Monthly)";
    document.getElementById("sideNavBudgetOverview").innerHTML = "<strong>Budget Overview</strong>";
});


/* Page 5 budgetOverview */
$("#previous-variableCosts").click(function(){
    $("#currentAccounts").hide();
    $("#monthlyIncome").hide();
    $("#fixedCosts").hide();
    $("#variableCosts").show();
    $("#budgetOverview").hide();
    document.getElementById("sideNavCurrentAccounts").innerHTML = "Current Accounts";
    document.getElementById("sideNavIncome").innerHTML = "Income (Monthly)";
    document.getElementById("sideNavFixedCosts").innerHTML = "Fixed Costs (Monthly)";
    document.getElementById("sideNavVariableCosts").innerHTML = "<strong>Variable Costs (Monthly)</strong>";
    document.getElementById("sideNavBudgetOverview").innerHTML = "Budget Overview";
});
/* NOT CURRENTLY USED
$("#next-fixedCosts").click(function(){
    $("#monthlyIncome").hide();
    $("#fixedCosts").show();
});
*/