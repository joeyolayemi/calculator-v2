// Calculator Program

const display = document.getElementById('display');
const keys = document.getElementById('keys');

function appendToDisplay(input) {
    // Check if input is an operator
    const isOperator = ['+', '-', '*', '/'].includes(input);
    // Check if last character in display is an operator
    const lastChar = display.value.slice(-1);
    const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);

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
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
