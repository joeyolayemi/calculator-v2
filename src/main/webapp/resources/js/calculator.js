// Calculator Program

const display = document.getElementById('display');
const keys = document.getElementById('keys');
let calculationPerformed = false;  // New flag to track calculation state

function appendToDisplay(input) {
    // Check if input is an operator
    const isOperator = ['+', '-', '*', '/'].includes(input);
    // Check if last character in display is an operator
    const lastChar = display.value.slice(-1);
    const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);

    // Clear display if starting new calculation
    if (calculationPerformed && !isOperator) {
        display.value = '';
        calculationPerformed = false;
    } else if (calculationPerformed && isOperator) {
        calculationPerformed = false;
    }

    if (isOperator && isLastCharOperator) {
        // Replace the last operator with the new one
        display.value = display.value.slice(0, -1) + input;
    } else {
        // Normal append behavior
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '';
    calculationPerformed = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        calculationPerformed = true;  // Set flag when calculation is performed
    } catch (error) {
        display.value = 'Error';
        calculationPerformed = true;
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
    calculationPerformed = false;
}
