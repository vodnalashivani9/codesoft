let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    // Avoid multiple operators at the end
    if (currentInput === '') return;
    let lastChar = currentInput.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
}
