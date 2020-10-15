/* This calculator sample code comes from http://www.youcandealwithit.com/borrowers/calculators-and-resources/calculators/budget-calculator.shtml and is to be used as a reference and then deleted */

var calculators = (function() {
    var d = $(document),
        g = $("div.calcWrapper").attr("id"),
        b = "collegeCost",
        h = "budgetCalculator",
        a = "debtRepaymentCalculator",
        c = "loanRepaymentCalculator",
        f = "gracePeriodCalculator",
        e = "interestSavingsCalculator";
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
    }, fnCalculate = function(l) {
        if (l == a) {
            fnDRC();
            $("html, body").animate({
                scrollTop: $("a#currentPaymentsAnchor").offset().top - 13
            }, 1500)
        }
        if (l == f) {
            var m = $("input#loanAmount").val();
            var D = $("input#interestRate").val();
            var v = $("input#totalPaidDuringGrace").val();
            var w = parseFloat(D) / 100;
            var q = (w / 365) * 31;
            var A = (parseFloat(m) * q) / (1 - (1 / Math.pow((1 + q), (120))));
            var i = parseFloat(m);
            var B = 0;
            var z = 0;
            var n = 0;
            while (i > 0) {
                n += 1;
                var p = i * q;
                B += p;
                i += p;
                i -= A;
                z += A
            }
            n = 0;
            i = m - v;
            var u = 0;
            var y = 0;
            while (i > 0) {
                if (p != 0) {
                    n += 1;
                    p = i * q;
                    u += p;
                    i += p;
                    i -= A;
                    y += A
                }
            }
            var C = z - y;
            totalSaved = Math.round(C * 100) / 100;
            var k = 120 - n;
            if (k < 1) {
                k = 0
            }
            var x = B - u;
            var o = Math.round(Number(x) * 100) / 100;
            $("input#payPeriodReduction").val(k);
            $("input#interestSaved").val(o);
            $("html, body").animate({
                scrollTop: $("a#savingsAnchor").offset().top - 13
            }, 1500)
        }
        if (l == e) {
            function t(F, r, I) {
                var H = r / 1200;
                var G = Math.pow((1 + H), I);
                var E = F * (H + (H / ((G - 1))));
                E = Math.round(E * 100) / 100;
                if (isNaN(E)) {
                    E = 0
                }
                return E
            }

            function s(L) {
                var r = 0;
                var J;
                var H = 0;
                var M;
                var I;
                var E;
                for (var F = 1; F <= 8; F++) {
                    J = Number($("#loan" + F + "Amount").val());
                    M = Number($("#loan" + F + "IntRate").val() / 100);
                    if (!L) {
                        J += J * M * 4.5
                    }
                    I = $("#loan" + F + "PaymentPeriod").val();
                    E = t(J, M * 100, I);
                    r += J;
                    for (var G = 1; G <= I / 12 * 365; G++) {
                        var K = r * M / 365;
                        K = Math.round(K * 100) / 100;
                        r += K;
                        J += K;
                        if (G % 30 == 0) {
                            if (r > E) {
                                r -= E
                            } else {
                                G = I / 12 * 365
                            }
                        }
                    }
                    H += J
                }
                return Number(H)
            }

            function j() {
                normalPayments = 0;
                newPayments = 0;
                savedPayments = 0;
                for (var G = 1; G <= 8; G++) {
                    var E = Number($("#loan" + G + "Amount").val());
                    var F = $("#loan" + G + "IntRate").val() / 100;
                    var H = $("#loan" + G + "PaymentPeriod").val();
                    var r = E + (E * F * 4.5);
                    if (F != 0) {
                        normalPayments += t(r, F * 100, H);
                        newPayments += t(E, F * 100, H)
                    } else {
                        normalPayments += E / H;
                        newPayments += E / H
                    }
                }
                normalPayments = Math.round(normalPayments * 100) / 100;
                newPayments = Math.round(newPayments * 100) / 100;
                savedPayments = normalPayments - newPayments;
                savedPayments = Math.round(savedPayments * 100) / 100;
                normalLoanDebt = s(false);
                normalLoanDebt = Math.round(normalLoanDebt * 100) / 100;
                newLoanDebt = s(true);
                newLoanDebt = Math.round(newLoanDebt * 100) / 100;
                savedLoanDebt = normalLoanDebt - newLoanDebt;
                savedLoanDebt = Math.round(savedLoanDebt * 100) / 100;
                normalInterest = normalLoanDebt - $("input#totalPrincipal").val();
                normalInterest = Math.round(normalInterest * 100) / 100;
                newInterest = newLoanDebt - $("input#totalPrincipal").val();
                newInterest = Math.round(newInterest * 100) / 100;
                savedInterest = normalInterest - newInterest;
                savedInterest = Math.round(savedInterest * 100) / 100;
                $("input#totalLoanDebtNoInterest").val(normalLoanDebt.toFixed(2));
                $("input#totalPaidNoInterest").val(normalInterest.toFixed(2));
                $("input#monthlyPaymentNoInterest").val(normalPayments.toFixed(2));
                $("input#totalLoanDebtYesInterest").val(newLoanDebt.toFixed(2));
                $("input#totalPaidYesInterest").val(newInterest.toFixed(2));
                $("input#monthlyPaymentYesInterest").val(newPayments.toFixed(2));
                $("input#savingsTotalSaved").val(savedLoanDebt.toFixed(2));
                $("input#savingsTotalSavedInterest").val(savedInterest.toFixed(2));
                $("input#savingsMonthlySavings").val(savedPayments.toFixed(2));
                $("html, body").animate({
                    scrollTop: $("a#noInterestAnchor").offset().top - 13
                }, 1500)
            }
            j()
        }
    }, fnReset = function(i) {
        if (i == b) {
            $("input.zero").val("0");
            $("input.zeroes").val("0");
            $("input.one").val("1")
        }
        if (i == h) {
            $("input.zero").val("0")
        }
        if (i == a) {
            $("input.zero").val("0");
            $("input.zeroes").val("0.00")
        }
        if (i == c) {
            $("input.zero").val("0");
            $("input.one").val("1");
            $("div.checkbox input").attr("checked", "checked")
        }
        if (i == f) {
            $("input.zero").val("0");
            $("input#payPeriodReduction").val("0");
            $("input#interestSaved").val("0.00")
        }
        if (i == e) {
            $("input.zero").val("0");
            $("input.months").val("120");
            $("div.results input").val("0.00")
        }
        $("html, body").animate({
            scrollTop: $("a#main").offset().top - 13
        }, 1500);
        fnUpdate(i)
    }, fnCC = function() {
        var o = 0,
            k = 0,
            l = Number($("input#yearsAttending").val()) || 1,
            j = Number($("input#currentCost").val()) || 0,
            p = Number($("input#grantsScholarships").val()) || 0,
            q = Number($("input#personalPayment").val()) || 0,
            n = Number($("input#books").val()) || 0,
            r = Number($("input#tuitionIncrease").val()) / 100;
        for (var m = 1; m <= l; m++) {
            o += j;
            k += j;
            j *= (1 + r)
        }
        o -= (l * p);
        o -= (l * q);
        o += (l * n);
        k -= (l * p);
        k += (l * n);
        $("input#estimatedAmtBorrowed").val(Math.round(o));
        $("input#estimatedCollegeCost").val(Math.round(k))
    }, fnBC = function() {
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
    }, fnDRC = function() {
        fnCalcPayPeriod = function(r, q, p, o) {
            var n = 1 - ((r * (q / 100)) / ((p * 12) + (o * 12)));
            var m = 12 * (-Math.log(n)) / (12 * Math.log(1 + ((q / 100) / 12)));
            if (m % 1 != 0) {
                m++
            }
            if (isNaN(m)) {
                return -1
            } else {
                return (Math.round(m * 100) / 100).toFixed(0)
            }
        };
        fnCalcIntPaid = function(n, u, o, s, m) {
            var q = 0;
            var r = q;
            q += Number(n);
            for (var p = 1; p <= m / 12 * 365; p++) {
                var t = q * (u / 100) / 365;
                t = Math.round(t * 100) / 100;
                q += t;
                r += t;
                if (p % 30 == 0) {
                    if (q > o) {
                        q -= o
                    } else {
                        p = m / 12 * 365
                    }
                }
            }
            return Math.round(r * 100) / 100
        };
        var l = $("input#amountOfDebt").val(),
            k = $("input#interestRate").val(),
            j = $("input#monthlyPayment").val(),
            i = $("input#addMonthlyPayment").val();
        currentMonths = Math.round(fnCalcPayPeriod(l, k, j, 0) * 100) / 100;
        additionalPaymentMonths = Math.round(fnCalcPayPeriod(l, k, j, i) * 100) / 100;
        savingsMonths = Math.round((currentMonths - additionalPaymentMonths) * 100) / 100;
        currentInterest = fnCalcIntPaid(l, k, j, 0, currentMonths);
        additionalPaymentInterest = fnCalcIntPaid(l, k, j, i, additionalPaymentMonths);
        savingsInterest = currentInterest - additionalPaymentInterest;
        if (currentMonths == "-1" || additionalPaymentMonths == "-1") {
            currentMonths = "0";
            additionalPaymentMonths = "0.00";
            savingsMonths = "0";
            currentInterest = "0.00";
            additionalPaymentInterest = "0";
            savingsInterest = "0.00"
        } else {
            $("input#currentTotalTimeToPay").val(currentMonths.toFixed(0));
            $("input#currentTotalInterestPaid").val(currentInterest.toFixed(2));
            $("input#additionalTimeToPay").val(additionalPaymentMonths.toFixed(0));
            $("input#additionalTotalInterestPaid").val(additionalPaymentInterest.toFixed(2));
            $("input#payPeriodReduction").val(savingsMonths.toFixed(0));
            $("input#interestSaved").val(savingsInterest.toFixed(2))
        }
    }, fnLRC = function() {
        var p = $("input#loanAmount").val(),
            q = $("input#interestRate").val(),
            k = $("input#repaymentPd").val(),
            m = $("input#isSubsidized");
        var o = 4;
        var n = Number(q) / 1200;
        var i = Math.pow((1 + n), Number(k));
        var l = 0;
        if (m.is(":checked")) {
            l = p * (n + (n / ((i - 1))))
        } else {
            var j = p * (q / 100) * o;
            j += p * (q / 100) * 0.5;
            j += Number(p);
            l = j * (n + (n / ((i - 1))))
        }
        l = (Math.round(l * 100) / 100).toFixed(2);
        if (q == "0" || q == "") {
            l = (Math.round((p / k) * 100) / 100).toFixed(2)
        }
        if (l == "Infinity") {
            l = "0.00"
        }
        $("input#monthlyPaymentAmt").val(l)
    }, fnGPC = function() {
        var i = Number($("input#month1payment").val()) + Number($("input#month2payment").val()) + Number($("input#month3payment").val()) + Number($("input#month4payment").val()) + Number($("input#month5payment").val()) + Number($("input#month6payment").val());
        i = (Math.round(i * 100) / 100).toFixed(2);
        $("input#totalPaidDuringGrace").val(i)
    }, fnISC = function() {
        var i = Number($("input#loan1Amount").val()) + Number($("input#loan2Amount").val()) + Number($("input#loan3Amount").val()) + Number($("input#loan4Amount").val()) + Number($("input#loan5Amount").val()) + Number($("input#loan6Amount").val()) + Number($("input#loan7Amount").val()) + Number($("input#loan8Amount").val());
        if (isNaN(i)) {
            i = "Invalid Entry"
        } else {
            i = (Math.round(i * 100) / 100).toFixed(2)
        }
        $("input#totalPrincipal").val(i)
    };
    return {
        init: function() {
            var i = $("div.calcWrapper").attr("id");
            d.find(".calcWrapper").show().end().find(".calcField input:not([readonly='readonly'])").keypress(function(j) {
                return (j.which != 8 && j.which != 0 && (j.which < 48 || j.which > 57)) ? false : true
            }).keyup(function() {
                fnUpdate(i)
            }).end().find("div.checkbox input").change(function() {
                fnUpdate(i)
            }).end().find(".calcField.pct input, input.intRate").unbind("keypress").keypress(function(j) {
                return (j.which != 8 && j.which != 0 && j.which != 46 && (j.which < 48 || j.which > 57)) ? false : true
            }).end().find("div.calcButton a.reset").click(function() {
                fnReset(i);
                return false
            }).end().find("div.calcButton a.calculate").click(function() {
                fnCalculate(i);
                return false
            }).end();
            fnPlaceholderText()
        }
    }
}());
$(document).ready(calculators.init);