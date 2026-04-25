const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstValue = null;

function updateDisplay(value) {
    display.value = value || "";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        
        if (button.classList.contains("numbers")) {
            currentInput += value;
            updateDisplay(currentInput);
        }

        
        else if (button.classList.contains("operators")) {
            if (currentInput === "") return;
            firstValue = parseFloat(currentInput);
            operator = value;
            currentInput = "";
        }

        
        else if (value === "=") {
            if (firstValue === null || currentInput === "") return;

            let secondValue = parseFloat(currentInput);
            let result = 0;

            switch (operator) {
                case "+":
                    result = firstValue + secondValue;
                    break;
                case "−":
                    result = firstValue - secondValue;
                    break;
                case "×":
                    result = firstValue * secondValue;
                    break;
                case "÷":
                    result = firstValue / secondValue;
                    break;
            }

            updateDisplay(result);
            currentInput = result.toString();
            firstValue = null;
            operator = "";
        }

        else if (value === "C") {
            currentInput = "";
            firstValue = null;
            operator = "";
            updateDisplay("");
        }

        else if (value === "CE") {
            currentInput = "";
            updateDisplay("");
        }

        
        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        }

        
        else if (value === ".") {
            if (!currentInput.includes(".")) {
                currentInput += ".";
                display.value = currentInput;
            }
        }

        
        else if (value === "±") {
            if (currentInput) {
                currentInput = (parseFloat(currentInput) * -1).toString();
                display.value = currentInput;
            }
        }

        else if (value === "%") {
            if (currentInput) {
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateDisplay(currentInput);
            }
        }

        else if (value === "1/x") {
            if (currentInput && parseFloat(currentInput) !== 0) {
                currentInput = (1 / parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
            }
        }

        else if (value === "x²") {
            if (currentInput) {
                currentInput = (Math.pow(parseFloat(currentInput), 2)).toString();
                updateDisplay(currentInput);
            }
        }

        else if (value === "²√x") {
            if (currentInput && parseFloat(currentInput) >= 0) {
                currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                updateDisplay(currentInput);
            }
        }
    });
});