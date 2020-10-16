/* The following code has been adapted from the Code Institute lessons on adding emailJS API to a Web App */

function sendMail(contactForm) {
    emailjs.send("gmail", "BudgetCalcTemplate", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "accountBankValue": document.getElementById('accountBankValue').value,
        "accountSavingsValue": document.getElementById('accountSavingsValue').value,
        "totalAccountsValue": document.getElementById('totalAccountsValue').value,
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