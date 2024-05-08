const userInput = document.querySelector("#user_input");
let expression = "";

// Function to convert binary to decimal
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

// Function to perform binary addition
function binaryAddition(binary1, binary2) {
    const decimal1 = binaryToDecimal(binary1);
    const decimal2 = binaryToDecimal(binary2);
    return decimal1 + decimal2;
}

// Function to perform binary subtraction
function binarySubtraction(binary1, binary2) {
    const decimal1 = binaryToDecimal(binary1);
    const decimal2 = binaryToDecimal(binary2);
    return decimal1 - decimal2;
}

press = (input) => {
    if (input === '+' || input === '-') {
        expression += input;
    } else {
        expression += input;
        userInput.value = expression;
    }
}

equal = () => {
    const operands = expression.split(/[-+]/);
    const operator = expression.match(/[-+]/)[0];
    
    if (operator === '+') {
        const result = binaryAddition(operands[0], operands[1]);
        userInput.value = result;
    } else if (operator === '-') {
        const result = binarySubtraction(operands[0], operands[1]);
        userInput.value = result;
    }
    
    expression = "";
}

erase = () => {
    expression = "";
    userInput.value = expression;
}
