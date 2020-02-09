let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
	calculatorScreen.value = number;
}

const inputNumber = (number) =>{
	if(currentInput === '0'){
		currentInput = number;
	}
	else{
		currentInput += number;
	}
}

const inputOperator = (operator) => {
	prevInput = currentInput;
	calculationOperator = operator;
	currentInput = '0';
}

const inputDecimal = () =>{
	if(currentInput === '0'){
		currentInput = '0.';
	}
	else{
		currentInput += '.';
	}
}

const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value);
		updateScreen(currentInput);
	})
})

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value);
	})
})

const percentages = document.querySelector('.percentage');

percentages.addEventListener("click", (event) => {
	currentInput=(currentInput/100);
	updateScreen(currentInput);
})

const decimals = document.querySelector('.decimal');

decimals.addEventListener("click", (event) => {
	inputDecimal();
	updateScreen(currentInput);
})

const calculate = () => {
	let result = 0;
	let a = parseFloat(prevInput);
	let b = parseFloat(currentInput);
	switch(calculationOperator){
		case '+':
		result = a + b;
		break;
		case '-':
		result = a - b;
		break;
		case '*':
		result = a * b;
		break;
		case '/':
		result = a / b;
		break;
		default:
		return;
	}
	currentInput = result.toString();
	calculationOperator = '';
}

const clearAll = () => {
	prevInput = '0';
	calculationOperator = '';
	currentInput = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentInput);
})

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentInput);
})
