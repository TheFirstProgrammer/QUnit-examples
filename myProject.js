function isEven(val) {
    return val % 2 === 0;
}

        function getEstimatedPaymentDue(apr, requestedCashAdvance, originationDate, firstPaymentDate, stateTemp) {
            console.log("Don stuff: ");
            console.log("apr: " + apr);
            console.log("requestedCashAdvance: " + requestedCashAdvance);
            console.log("originationDate: " + originationDate);
            console.log("firstPaymentDate: " + firstPaymentDate);
            try {
                var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                var statementDuration = 14;//days

               
                var statementDate = new Date(firstPaymentDate - (statementDuration * oneDay));
                var numberOfdays = (Math.floor((statementDate.getTime() - originationDate.setHours(0, 0, 0, 0)) / (oneDay))) + 1;
               
                var dailyInterest = ((apr / 36500) * requestedCashAdvance).toFixed(9);
                var feePercentage = requestedCashAdvance <= 1450 ? 5 : 2;
                var principalPayment = requestedCashAdvance * (feePercentage / 100);
                var paymentAmount = (dailyInterest * numberOfdays) + principalPayment;
               
                var state = stateTemp; //auth.User.Person.State.Abbreviation.toUpperCase();
                switch(state)
                {
                    case "TN":
                        //Allow display of actual calculated expected minimum balance even if less than $50
                        break;
                    default:
                        //Display a minimum expected minimum balance of $50 even if calculated amount is less 
                        paymentAmount = (paymentAmount < 50 ? 50 : paymentAmount);
                        break;
                }
                return paymentAmount;
            }
            catch (e) {
                var input = 'apr-' + apr + ',requestedCashAdvance-' + requestedCashAdvance + ',originationDate-' + originationDate + ',firstPaymentDate-' + firstPaymentDate;
                console.error('Error occurred...getEstimatedPaymentDue()-input-' + input + ',error-' + e);
                return 0;
            }
        }