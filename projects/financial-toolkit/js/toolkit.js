function formatCurrency(num){
    return new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format(num);
}

function calculateBudget(){
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);

    if(isNaN(income) || isNaN(expenses)){
        document.getElementById("budgetResult").innerText = "Enter valid numbers.";
        return;
    }

    const remaining = income - expenses;
    document.getElementById("budgetResult").innerText =
        remaining >= 0
            ? "Remaining: " + formatCurrency(remaining)
            : "Overspending: " + formatCurrency(Math.abs(remaining));
}

function calculateInvestment(){
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value)/100;
    const years = parseFloat(document.getElementById("years").value);

    if(isNaN(principal) || isNaN(rate) || isNaN(years)){
        document.getElementById("investmentResult").innerText = "Enter valid numbers.";
        return;
    }

    let total = principal;
    let labels = [];
    let data = [];

    for(let i=1;i<=years;i++){
        total = total*(1+rate);
        labels.push("Year "+i);
        data.push(total);
    }

    document.getElementById("investmentResult").innerText =
        "Future Value: " + formatCurrency(total);

    const ctx = document.getElementById("investmentChart");
    new Chart(ctx,{
        type:'line',
        data:{
            labels:labels,
            datasets:[{
                label:'Growth',
                data:data
            }]
        }
    });
}
