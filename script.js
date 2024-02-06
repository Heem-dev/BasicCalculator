// Select operators.
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const equals = document.getElementById("equal");
const clear = document.getElementById("clear");
const decimal = document.getElementById("decimal");
const clearOne = document.getElementById("clearOne");

// Select numbers.
const numbers = document.querySelectorAll(".number");

// Select result.
const result = document.getElementById("result");

let currentOperator = "";
let operatorClicked = false;

// Add event listeners to numbers.
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    result.value += number.textContent;
  });
});

// Add event listeners to operators.
function handleOperatorClick(operator, symbol) {
  if (result.value !== "" && !operatorClicked) {
    currentOperator = operator;
    operatorClicked = true;
    result.value += symbol;
  }
}

multiply.addEventListener("click", () => {
  handleOperatorClick("*", multiply.textContent);
});

divide.addEventListener("click", () => {
  handleOperatorClick("/", divide.textContent);
});

add.addEventListener("click", () => {
  handleOperatorClick("+", add.textContent);
});

subtract.addEventListener("click", () => {
  handleOperatorClick("-", subtract.textContent);
});

// Add event listener to equals.
equals.addEventListener("click", () => {
  if (result.value !== "") {
    const numbers = result.value.split(currentOperator);
    const number1 = Number(numbers[0]);
    const number2 = Number(numbers[1]);

    let answer;
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

// Add event listener to clear.
clear.addEventListener("click", () => {
  result.value = "";
  operatorClicked = false;
  currentOperator = "";
});

// Add event listener to decimal.
decimal.addEventListener("click", () => {
  if (result.value !== "") {
    result.value += decimal.textContent;
  }
});

// Add event listener to clearOne.
clearOne.addEventListener("click", () => {
  if (result.value !== "") {
    const lastDigit = result.value[result.value.length - 1];

    // Check if last digit is an operator.
    if (["*", "/", "+", "-"].includes(lastDigit)) {
      currentOperator = "";
      operatorClicked = false;
    }

    // Remove last digit.
    result.value = result.value.slice(0, -1);
  }
});

// Add event listeners to keyboard.
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    result.value += e.key;
  } else if (["*", "/", "+", "-"].includes(e.key)) {
    if (result.value !== "" && !operatorClicked) {
      currentOperator = e.key;
      operatorClicked = true;
      result.value += e.key;
    }
  } else if (e.key === ".") {
    if (result.value !== "") {
      result.value += e.key;
    }
  } else if (e.key === "Backspace") {
    if (result.value !== "") {
      const lastDigit = result.value[result.value.length - 1];

      // Check if last digit is an operator.
      if (["*", "/", "+", "-"].includes(lastDigit)) {
        currentOperator = "";
        operatorClicked = false;
      }

      // Remove last digit.
      result.value = result.value.slice(0, -1);
    }
  } else if (e.key === "c" || e.key === "C" || e.key === "Delete") {
    result.value = "";
    operatorClicked = false;
    currentOperator = "";
  } else if (e.key === "Enter") {
    equals.click();
  }
});
