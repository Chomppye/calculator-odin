const operatorBtns = document.querySelectorAll("#btn-operator");
const numDisplay = document.querySelector("#display");
const numberBtns = document.querySelectorAll("#num");

let numsInDisplay = [];
let numsToCalculate = [];

function clear() {
    console.log("should clear everything")
    numsInDisplay = []
    numsToCalculate = []
    numDisplay.innerText = ""
}

function add() {
    numsToCalculate.push(...numsInDisplay, "+")
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

    switch (operator) {
        case "+":
            let result = num1 + num2
            numDisplay.innerText = result
        break;

        case "-":
            num1 - num2
        break;

        case "*":
            num1 * num2
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

        case "%":
            console.log("find the remainder of the number")
        break;

        case "*":
            console.log("Multiply by the next number")
        break;

        case "+":
            add()
        break;

        case "-":
            console.log("subtract by the next number")
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
    }
}

for (const numberBtn of numberBtns) {
    numberBtn.addEventListener("click", numberBtnEventListener)
}

for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click", operatorBtnEventListener)
}