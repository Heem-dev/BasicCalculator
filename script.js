// select operators.
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const equals = document.getElementById("equal");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");
const clearOne = document.getElementById("clearOne");

// select numbers.
const numbers = document.querySelectorAll(".number");

// select result.
const result = document.getElementById("result");

let currentOperator = "";
let operatorClicked = false;
let decimalClicked = false;

// add event listeners to numbers.
numbers.forEach(number => {
    number.addEventListener("click", () => {
        result.value += number.textContent;
    });
});

// add event listeners to operators.
multiply.addEventListener("click", () => {
    if (result.value !== "" && !operatorClicked) {
        currentOperator = "*";
        operatorClicked = true;
        result.value += multiply.textContent;
    }
});

divide.addEventListener("click", () => {
    if (result.value !== "" && !operatorClicked) {
        currentOperator = "/";
        operatorClicked = true;
        result.value += divide.textContent;
    }
});

add.addEventListener("click", () => {
    if (result.value !== "" && !operatorClicked) {
        currentOperator = "+";
        operatorClicked = true;
        result.value += add.textContent;
    }
});

subtract.addEventListener("click", () => {
    if (result.value !== "" && !operatorClicked) {
        currentOperator = "-";
        operatorClicked = true;
        result.value += subtract.textContent;
    }
});

// add event listener to equals.
equals.addEventListener("click", () => {
    if (result.value !== "") {


        let numbers = result.value.split(currentOperator);
        // console.log(numbers);
        let number1 = Number(numbers[0]);
        let number2 = Number(numbers[1]);

        switch (currentOperator) {
            case "*":
                answer = number1 * number2;
                break;
            case "/":
                answer = number1 / number2;
                break;
            case "+":
                answer = number1 + number2;
                break;
            case "-":
                answer = number1 - number2;
                break;
        }

        
        result.value = answer;
        operatorClicked = false;
        currentOperator = "";

    }
});

// add event listener to clear.
clear.addEventListener("click", () => {
    result.value = "";
    operatorClicked = false;
    currentOperator = "";

});

// add event listener to decimal.
decimal.addEventListener("click", () => {
    if (result.value !== "") {
        result.value += decimal.textContent;
        // decimalClicked = true;
    }
});

// add event listener to clearOne.
clearOne.addEventListener("click", () => {
    if (result.value !== "") {
        let lastDigit = result.value[result.value.length - 1];
        // console.log(lastDigit);

        // check if last digit is an operator.
        if (lastDigit === "*" || lastDigit === "/" || lastDigit === "+" || lastDigit === "-") {
            currentOperator = "";
            operatorClicked = false;

            // remove last digit.
            result.value = result.value.slice(0, -1);
        }
        else {
            // remove last digit.
            result.value = result.value.slice(0, -1);
        }

    }
});

// add event listener to keyboard for numbers.
document.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
        result.value += e.key;
    }
});

// add event listener to keyboard for operators.
document.addEventListener("keydown", (e) => {
    if (e.key === "*" || e.key === "/" || e.key === "+" || e.key === "-") {
        if (result.value !== "" && !operatorClicked) {
            currentOperator = e.key;
            operatorClicked = true;
            result.value += e.key;
        }
    }
});

        // add event listener to backspace key for clearOne.
document.addEventListener("keydown", (e) => { 
    if (e.key === "Backspace") {
        if (result.value !== "") {
            let lastDigit = result.value[result.value.length - 1];
            // console.log(lastDigit);

            // check if last digit is an operator.
            if (lastDigit === "*" || lastDigit === "/" || lastDigit === "+" || lastDigit === "-") {
                currentOperator = "";
                operatorClicked = false;

                // remove last digit.
                result.value = result.value.slice(0, -1);
            }
            else {
                // remove last digit.
                result.value = result.value.slice(0, -1);

            }

        }
    }
});

// add event listener to keyboard for decimal.
document.addEventListener("keydown", (e) => {
    if (e.key === ".") {
        if (result.value !== "") {
            result.value += e.key;

        }
    }
});

// add event listener to keyboard for clear.
document.addEventListener("keydown", (e) => {
    if (e.key === "c" || e.key === "C" || e.key === "Delete") {
        result.value = "";
        operatorClicked = false;
        currentOperator = "";

    }
});

// make equal button clickable with enter key.
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        equals.click();
        
    }
});