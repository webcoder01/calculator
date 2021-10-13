import { useState } from 'react';
import Viewer from './Viewer';
import Button from './Button';
import './Calculator.css';
import Helper from '../Helper';

const Calculator = () => {
    const helper = new Helper();
    const [currentNumber, setCurrentNumber] = useState('0');
    const [result, setResult] = useState('0');
    const [activeOperator, setActiveOperator] = useState('');
    const buttonConstants = [
        ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '='],
        ['/', 'x', '-', '+'],
        ['CE', 'C']
    ];

    const handleButtonClick = (event) => {
        const innerText = event.target.innerText;

        if (helper.isOperand(innerText)) {
            const newText = helper.displayOperand(currentNumber, innerText);
            setCurrentNumber(newText);
        } else if (innerText === 'C') {
            setCurrentNumber('0');
            setResult('0');
        } else if (innerText === 'CE') {
            setCurrentNumber('0');
        } else if (innerText !== '=') {
            setResult(parseFloat(currentNumber));
            setActiveOperator(innerText);
            setCurrentNumber('0');
        } else {
            const total = helper.calculate(result, currentNumber, activeOperator);
            setCurrentNumber(total);
        }
    };

    const renderedButtons = buttonConstants.map(groupedButtons => {
        const buttons = groupedButtons.map(button => <Button character={button} onClick={handleButtonClick} />);

        return <div>{buttons}</div>
    });

    return (
        <div className="calculator">
            <Viewer currentNumber={currentNumber} result={result} />

            <div className="buttons-layout">
                {renderedButtons}
            </div>
        </div>
    );
};

export default Calculator;