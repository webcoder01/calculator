function Helper () {};

Helper.prototype.isOperand = function (text) {
    const numberToCheck = typeof text === 'number' ? text : parseFloat(text);

    return !isNaN(numberToCheck) || text === '.';
};

Helper.prototype.displayOperand = function (oldOperand, newDigit) {
    if (oldOperand === '0' && newDigit !== '.') {
        return newDigit;
    }

    return `${oldOperand}${newDigit}`;
};

Helper.prototype.calculate = function (firstNumber, secondNumber, operator) {
    let result = 0;
    const firstOperand = parseFloat(firstNumber);
    const secondOperand = parseFloat(secondNumber);

    if (
        !this.isOperand(firstOperand)
        || !this.isOperand(secondOperand)
        || ['/', 'x', '-', '+'].indexOf(operator) < 0
    ) {
        return result;
    }

    
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case 'x':
            result = firstOperand * secondOperand;
            break;
        default:
            result = firstOperand / secondOperand;
    }

    return result;
}

export default Helper;