/* This calculator sample code comes from http://www.youcandealwithit.com/borrowers/calculators-and-resources/calculators/budget-calculator.shtml and is to be used as a reference and then deleted */

var calculators = (function() {
    var d = $(document),
        g = $("div.calcWrapper").attr("id"),
        h = "budgetCalculator",
    fnPlaceholderText = function() {
        d.find("input.zero").focus(function() {
            if (this.value == "0") {
                this.value = ""
            }
        }).blur(function() {
            if (this.value == "") {
                this.value = "0"
            }
        }).end().find("input.one").focus(function() {
            if (this.value == "1") {
                this.value = ""
            }
        }).blur(function() {
            if (this.value == "") {
                this.value = "1"
            }
        }).end().find("input.months").focus(function() {
            if (this.value == "120") {
                this.value = ""
            }
        }).blur(function() {
            if (this.value == "") {
                this.value = "120"
            }
        }).end()
    }, fnUpdate = function(i) {
        if (i == b) {
            fnCC()
        }
        if (i == h) {
            fnBC()
        }
        if (i == c) {
            fnLRC()
        }
        if (i == f) {
            fnGPC()
        }
        if (i == e) {
            fnISC()
        }
    },
    /*This is where the Budget Calculator starts */
    
    fnBC = function() {
        var l = Number($("input#emergencyFund").val()) + Number($("input#investments").val()) + Number($("input#retirement").val());
        l = (Math.round(l * 100) / 100).toFixed(2);
        $("input#totalMonthlySavings").val(l);
        var m = Number($("input#food").val()) + Number($("input#clothing").val()) + Number($("input#shelter").val()) + Number($("input#household").val()) + Number($("input#transportation").val()) + Number($("input#health").val()) + Number($("input#studentLoans").val()) + Number($("input#personal").val()) + Number($("input#misc").val());
        m = (Math.round(m * 100) / 100).toFixed(2);
        $("input#totalMonthlyExpenses").val(m);
        var j = Number($("input#tuition").val()) + Number($("input#homeowners").val()) + Number($("input#car").val()) + Number($("input#taxes").val()) + Number($("input#vacation").val()) + Number($("input#other").val());
        j = (Math.round(j * 100) / 100).toFixed(2);
        $("input#totalAnnualExpenses").val(j);
        var i = Number(j / 12);
        i = (Math.round(i * 100) / 100).toFixed(2);
        $("input#totalAnnualExpensesMonthly").val(i);
        var n = Number($("input#monthlyPay").val()) + Number($("input#monthlyOther").val()) + Number($("input#annualGifts").val() / 12) + Number($("input#annualTaxReturn").val() / 12);
        n = (Math.round(n * 100) / 100).toFixed(2);
        $("input#totalMonthlyIncome").val(n);
        var k = n - (Number(l) + Number(m) + (Number(j / 12)));
        k = (Math.round(k * 100) / 100).toFixed(2);
        $("input#underOverBudget").val(k)
    }, 
    
    
$(document).ready(calculators.init);