const operatorBtns = document.querySelectorAll("#btn-operator");
const numDisplay = document.querySelector("#display");
const numberBtns = document.querySelectorAll("#num");

let numsInDisplay = [];
let numsToCalculate = [];
let lastOperationEquals = false;

function clear() {
    console.log("should clear everything")
    numsInDisplay = []
    numsToCalculate = []
    numDisplay.innerText = ""
    lastOperationEquals = false
}

function determineCalculation(sign) {
    if (lastOperationEquals) {
        numsToCalculate.push(sign, ...numsInDisplay)
    } else {
        numsToCalculate.push(...numsInDisplay, sign)
    }
    numsInDisplay = []
    numDisplay.innerText = ""
}

function operate(expression = "") {
    const cleaned = expression.replace(/\s+/g, '')
    const operatorMatch = cleaned.match(/([+\-*/])/)
    
    const operator = operatorMatch[0];
    const [num1, num2] = cleaned.split(operator).map(Number)

    if (isNaN(num1) || isNaN(num2)) {
        throw new console.error("Invalid numbers in expression");
    }
    lastOperationEquals = true
    numsInDisplay = []
    numsToCalculate = []
    switch (operator) {
        case "+":
            let sum = num1 + num2
            numDisplay.innerText = sum
            numsToCalculate[0] = sum
        break;

        case "-":
            let difference = num1 - num2
            numDisplay.innerText = difference
            numsToCalculate[0] = difference
        break;

        case "*":
            let product = num1 * num2
            numDisplay.innerText = product
            numsToCalculate[0] = product
        break;

        case "/":
            if (num1 == 0 || num2 == 0) {
                numDisplay.innerText = "Baka, don't do that"
            } else {
                let quotient = num1 / num2
                numDisplay.innerText = quotient
                numsToCalculate[0] = quotient
            }
        break;
    }
}

function numberBtnEventListener(event) {
    let numberPressed = parseInt(event.target.innerText)
    numsInDisplay.push(numberPressed)
    numDisplay.innerText = numsInDisplay.join("")
}

function operatorBtnEventListener(event) {
    let operatorPressed = event.target.innerText
    
    switch(operatorPressed) {
        case "AC":
            clear()
        break;

        case "+/-":
            console.log("change number to the opposite sign")
        break;

        case ".":
            console.log("create a decimal number")
        break;

        case "=":
            numsToCalculate.push(...numsInDisplay)
            let expression = numsToCalculate.join("")
            operate(expression)
        break;

        case "backspace":
            console.log("delete the number that was last inputted")
        break;

        default:
            determineCalculation(operatorPressed)
    }
}

for (const numberBtn of numberBtns) {
    numberBtn.addEventListener("click", numberBtnEventListener)
}

for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click", operatorBtnEventListener)
}