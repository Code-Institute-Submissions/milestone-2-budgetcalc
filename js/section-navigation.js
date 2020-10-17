/* Scroll into view has been taken from an answer on StackOverflow SRC: https://stackoverflow.com/questions/13266746/scroll-jump-to-id-without-jquery */

/* Page 1 currentAccounts */
$("#next-monthlyIncome, #sideNavIncome").click(function(){
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
    document.getElementById('fixedCosts').scrollIntoView({
        behavior: 'smooth'
    });
});

/* Page 2 monthlyIncome */
$("#previous-currentAccounts, #sideNavCurrentAccounts").click(function(){
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
    document.getElementById('currentAccounts').scrollIntoView({
        behavior: 'smooth'
    });
});

$("#next-fixedCosts, #sideNavFixedCosts").click(function(){
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
    document.getElementById('fixedCosts').scrollIntoView({
        behavior: 'smooth'
    });
});


/* Page 3 fixedCosts */
$("#previous-monthlyIncome, #sideNavIncome").click(function(){
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
    document.getElementById('monthlyIncome').scrollIntoView({
        behavior: 'smooth'
    });
});

$("#next-variableCosts, #sideNavVariableCosts").click(function(){
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
    document.getElementById('variableCosts').scrollIntoView({
        behavior: 'smooth'
    });
});


/* Page 4 variableCosts */
$("#previous-fixedCosts, #sideNavFixedCosts").click(function(){
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
    document.getElementById('fixedCosts').scrollIntoView({
        behavior: 'smooth'
    });
});

$("#next-budgetOverview, #sideNavBudgetOverview").click(function(){
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
    document.getElementById('budgetOverview').scrollIntoView({
        behavior: 'smooth'
    });
});


/* Page 5 budgetOverview */
$("#previous-variableCosts, #sideNavVariableCosts").click(function(){
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
    document.getElementById('variableCosts').scrollIntoView({
        behavior: 'smooth'
    });
});
/* NOT CURRENTLY USED
$("#next-fixedCosts").click(function(){
    $("#monthlyIncome").hide();
    $("#fixedCosts").show();
});
*/