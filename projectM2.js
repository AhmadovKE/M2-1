
document.getElementById("calculate").addEventListener("click", activateFunctions);

function getResult(startBalance, monthly, percent, days) {

    let errorList = "";

    if (startBalance <= 0) {
        errorList += "Starting balance is not true, input error \n";
        document.getElementById("errors").className = '';
    }
    else if (monthly <= 0) {
        errorList += "Income amount can not be negative, input error \n";
        document.getElementById("errors").className = '';
    }
    else if (percent <= 0) {
        errorList += "Percent cannot be  negative, need to be not higher than 100 \n";
        document.getElementById("errors").className = '';
    }

   else  if (days <= 0 || Math.trunc(days) != days) {
        errorList += "Income amount can not be negative, input error \n";
        document.getElementById("errors").className = '';
    }
    console.error("NaN");
    document.getElementById("errors").innerHTML = errorList;
    return false;
}

function calculate(startBalance, monthly, percent, days) {
    if (days < 30) {
        return 'Your money will be: ' + startBalance;
    } else {
        let month = Math.trunc(days / 30);
        for (let i = 0; i < month; i++) {
            startBalance = +startBalance + +monthly + +startBalance * +percent / 100 / 12;
        }
    }
    return startBalance.toFixed(2);
}

function activateFunctions() {
    startBalance = +document.getElementById("startBalance").value;
    monthly = +document.getElementById("monthly").value;
    percent = +document.getElementById("percent").value;
    days = +document.getElementById("days").value;
    if (getResult(startBalance, monthly, percent, days)===true) {
        alert(calculate(startBalance, monthly, percent, days));
    } else {
        return NaN;
    }
}

