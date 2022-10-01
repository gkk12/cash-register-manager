const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const cashGivenLabel = document.querySelector("#cash-given-label");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

cashGiven.style.display = "None";
cashGivenLabel.style.display = "None";

//bonus question
billAmount.addEventListener("keyup", function displaySecond() {
    if (billAmount.value > 0) {
        cashGiven.style.display = "inline-block";
        cashGivenLabel.style.display = "block";
    } else {
        cashGiven.style.display = "None";
        cashGivenLabel.style.display = "None";
        showMessage("Invalid input value")
    }

})

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    const cash = Number(cashGiven.value);
    const bill = Number(billAmount.value);
    if (cash > 0) {
        console.log(bill)
        console.log(cash)
        if (cash == bill) {
            showMessage("No change to return")
            resetTable();
        } else if (cash < bill) {
            showMessage("Cash provided should be greater than the bill amount")
            resetTable();
        } else {
            const amountToBeReturned = cash - bill;
            calculateChange(amountToBeReturned);
        }
    } else {
        showMessage("Invalid input values")
        resetTable();
    }
})

function resetTable() {
    for (let i = 0; i < availableNotes.length; i++) {
        noOfNotes[i].innerText = "";
    }
}

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block"
    message.innerText = msg;
}