function calculateCompound() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value) / 100;
    let t = parseFloat(document.getElementById("years").value);

    let result = p * Math.pow((1 + r), t);
    document.getElementById("compoundResult").innerText =
        "Future Value: $" + result.toFixed(2);

    createChart(p, r, t);
}

function calculateLoan() {
    let L = parseFloat(document.getElementById("loanAmount").value);
    let r = parseFloat(document.getElementById("loanRate").value) / 100 / 12;
    let n = parseFloat(document.getElementById("loanYears").value) * 12;

    let payment = (L * r) / (1 - Math.pow(1 + r, -n));
    document.getElementById("loanResult").innerText =
        "Monthly Payment: $" + payment.toFixed(2);
}

function createChart(p, r, t) {
    let labels = [];
    let data = [];

    for (let i = 0; i <= t; i++) {
        labels.push("Year " + i);
        data.push(p * Math.pow((1 + r), i));
    }

    new Chart(document.getElementById("chart"), {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Investment Growth",
                data: data
            }]
        }
    });
}
