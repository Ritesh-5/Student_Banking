document.addEventListener("DOMContentLoaded", function () { let balance = 0; const balanceDisplay = document.getElementById("balance"); const amountInput = document.getElementById("amount");

function updateBalance() {
    balanceDisplay.innerText = balance;
}

window.deposit = function () {
    let amount = parseFloat(amountInput.value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        alert("Deposited ₹" + amount);
    } else {
        alert("Enter a valid amount.");
    }
    amountInput.value = "";
};

window.withdraw = function () {
    let amount = parseFloat(amountInput.value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        alert("Withdrawn ₹" + amount);
    } else {
        alert("Invalid amount or insufficient balance.");
    }
    amountInput.value = "";
};

});