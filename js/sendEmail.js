/* The following code has been adapted from the Code Institute lessons on adding emailJS API to a Web App */

function sendMail(contactForm) {
    emailjs.send("gmail", "BudgetCalcTemplate", {

/* Email details */
        "userName": contactForm.userName.value,
        "userEmail": contactForm.userEmail.value,
/* Current accounts details */
        "accountBankValue": document.getElementById('accountBankValue').value,
        "accountSavingsValue": document.getElementById('accountSavingsValue').value,
        "accountCashValue": document.getElementById('accountCashValue').value,
        "totalAccountsValue": document.getElementById('totalAccountsValue').value,
/* Current Debts details */
        "debtLoanValue": document.getElementById('debtLoanValue').value,
        "debtAmexValue": document.getElementById('debtAmexValue').value,
        "debtMastercardValue": document.getElementById('debtMastercardValue').value,
        "debtVisaValue": document.getElementById('debtVisaValue').value,
        "totalDebtsValue": document.getElementById('totalDebtsValue').value,
/* Net worth deatils */
        "netWorthValue": document.getElementById('netWorthValue').value,
/* Income details */
        "netSalary": document.getElementById('netSalary').value,
        "bonusSalary": document.getElementById('bonusSalary').value,
        "gigSalary": document.getElementById('gigSalary').value,
        "totalIncomeValue": document.getElementById('totalIncomeValue').value,
/* Fixed costs deatils */
        "totalHomeCostValue": document.getElementById('totalHomeCostValue').value,
        "totalTransportCostValue": document.getElementById('totalTransportCostValue').value,
        "totalInsuranceCostValue": document.getElementById('totalInsuranceCostValue').value,
        "totalSubscriptionCostValue": document.getElementById('totalSubscriptionCostValue').value,
        "totalCreditcardCostValue": document.getElementById('totalCreditcardCostValue').value,
        "totalFixedCostsValue": document.getElementById('totalFixedCostsValue').value,
/* Fixed costs deatils */
        "totalSupermarketCostValue": document.getElementById('totalSupermarketCostValue').value,
        "totalConsumablesCostValue": document.getElementById('totalConsumablesCostValue').value,
        "totalSocialisingFunCostValue": document.getElementById('totalSocialisingFunCostValue').value,
        "totalStuffCostValue": document.getElementById('totalStuffCostValue').value,
        "totalVariableCostsValue": document.getElementById('totalVariableCostsValue').value,
/* Fixed costs deatils */
        "totalSavingsValue": document.getElementById('totalSavingsValue').value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}


function sendBugMail(contactForm) {
    emailjs.send("gmail", "resume-page", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "reportabug": contactForm.reportabug.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
