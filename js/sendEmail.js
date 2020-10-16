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