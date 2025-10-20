function clearDisplay() {
  document.getElementById("display").value = "0";
}

function appendNumber(number) {
  const display = document.getElementById("display");
  if (display.value === "0" || display.value === "Error") {
    display.value = number;
  } else {
    display.value += number;
  }
}

function appendOperator(operator) {
  const display = document.getElementById("display");
  const lastChar = display.value.slice(-1);
  if (["+", "-", "*", "/"].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function appendDecimal() {
  const display = document.getElementById("display");
  const ultimoCaracter = display.value.at(-1);
  if (["+", "-", "*", "/"].includes(ultimoCaracter)) {
    display.value += "0.";
    return;
  }
  if (display.value.includes(".")) {
    return;
  }
  if (display.value === "0") {
    display.value = "0.";
    return;
  }

  const parts = display.value.split(/[\+\-\*\/]/);
  if (!parts[parts.length - 1].includes(".")) {
    display.value += ".";
  }
}

function calculateResult() {
  const display = document.getElementById("display");

  let result = eval(display.value); //12+34*5
  display.value = parseFloat(result.toFixed(2));
}
