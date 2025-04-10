const operatorBtns = document.querySelectorAll("#btn-operator");
const numDisplay = document.querySelector("#display");
const numberBtns = document.querySelectorAll("#num");

let numsInDisplay = []

function numberBtnEventListener(event) {
    let numberPressed = parseInt(event.target.innerText)
    numsInDisplay.push(numberPressed)
    numDisplay.innerText = numsInDisplay.join("")
}

function operatorBtnEventListener(event) {
    let operatorPressed = event.target.innerText
    
    switch(operatorPressed) {
        case "AC":
            console.log("should clear everything")
            numsInDisplay = []
            numDisplay.innerText = ""
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
            console.log("add by the next number")
        break;

        case "-":
            console.log("subtract by the next number")
        break;

        case ".":
            console.log("create a decimal number")
        break;

        case "=":
            console.log("solve the problem")
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