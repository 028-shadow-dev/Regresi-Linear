let currentInput = '';
let currentOperation = '';
let previousInput = '';
document.getElementById('display').value = 'input number';

function appendToDisplay(value) {
    if (currentInput === 'kosong') {
        currentInput = '';
    }
    currentInput += value;
    document.getElementById('display').value = `${currentInput} ${currentOperation} ${previousInput}`
}

function appendOperator(operator) {
    if (currentInput == '') return;
    if (currentInput !== '') {
        calculate();
    }
    currentOperation = operator;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display') = `${previousInput} ${currentOperation}`
}

function calculate(){
    if(previousInput === '' || currentInput === '') return;

    let result;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    const divide = "can't divide by 0";
    switch (currentOperation) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            if(current === 0){
                document.getElementById('display').value = divide;
                clearDisplay();
                return;
            }
            result = previous / current;
            break;
        default:
            return;
        }
        currentInput = result.toString();
        previousInput = '';
        currentOperation = '';
        document.getElementById('display').value = currentInput;
}

function clearDisplay(){
    currentInput = 'kosong';
    currentOperation = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}