document.getElementById("calculate").addEventListener("click", activateFunctions);

function getResult(startBalance, monthly, percent, days) {

    let errorList = "";

    if (+startBalance <= 0) {
        errorList = "Starting balance is not true, input error \n";
        // document.getElementById("errors").className = '';
   
    } else if (+monthly <= 0) {
        errorList = "Income amount can not be negative, input error \n";
        // document.getElementById("errors").className = '';
       
    } else if (+percent <= 0) {
        errorList = "Percent cannot be  negative, need to be not higher than 100 \n";
        // document.getElementById("errors").className = '';
       
       
    } else if (+days <= 0 || Math.trunc(days) != days) {
        errorList = "Income amount can not be negative, input error \n";
        // document.getElementById("errors").className = '';
      
    } else {
        document.getElementById("errors").innerHTML = errorList;
        return true;
    }
}

function calculate(startBalance, monthly, percent, days) {
    if (getResult(startBalance, monthly, percent, days) == true) {
        if (days < 30) {
            return 'Your money will be: ' + startBalance;
        } else {
            let month = Math.trunc(days / 30);
            for (let i = 0; i < month; i++) {
                startBalance = startBalance + monthly + startBalance * percent / 100 / 12;
            }
        }
        return alert(startBalance.toFixed(2));
    } else {
        let errorList = "";

        if (+startBalance <= 0) {
            errorList = "Starting balance is not true, input error \n";
            document.getElementById("errors").innerHTML = '<p>Starting balance is not true, input error</p>';
            console.error("NaN");
            

        } else if (+monthly <= 0) {
            errorList = "Income amount can not be negative, input error \n";
            document.getElementById("errors").innerHTML ='<p>Income amount can not be negative, input error <p>'
            console.error("NaN");
           
        } else if (+percent <= 0) {
            errorList = "Percent cannot be  negative, need to be not higher than 100 \n";
            document.getElementById("errors").innerHTML ='<p>Percent cannot be  negative, need to be not higher than 100 </p>'
            console.error("NaN");
            
        } else if (+days <= 0 || Math.trunc(days) != days) {
            errorList = "Income amount can not be negative, input error \n";
            document.getElementById("errors").innerHTML ='<p>Income amount can not be negative, input error</p>';
            console.error("NaN");
            
        }
    }
}

function activateFunctions() {
    startBalance = +document.getElementById("startBalance").value;
    monthly = +document.getElementById("monthly").value;
    percent = +document.getElementById("percent").value;
    days = +document.getElementById("days").value;
    calculate(startBalance, monthly, percent, days);
}