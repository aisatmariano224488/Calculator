import Buttons from './components/Buttons';
import Display from './components/Display';

import { state, reset, inputNumber, inputOperation, inputPercent, compute, evaluate } from './core/state';

import './style.css';

function handleButtonClick(state, value) {
  	if (!isNaN(value) || value === '.') {
    	return inputNumber(state, value);
  	} else if (value === 'clear') {
    	return reset(state);
  	} else if (value === '=') {
    	return evaluate(state);
  	} else if (value === '%') {
		return inputPercent(state)
	} else if (value === '+' || value === '-' || value === '*' || value === '/') {
    	return inputOperation(state, value);
  	}
}

document.addEventListener('keydown', (e) => {

	const keyMap = {
		'Enter': '=',
		'Delete': 'clear',
		'Escape': 'clear',
	}

  	window.onButtonClick(keyMap[e.key] || e.key);
});

window.onButtonClick = value => {
	handleButtonClick(state, value);
	initApp();
}

const initApp = () => {
  	const app = document.querySelector('#app');

  	app.innerHTML = `
		<div class="bg-neutral min-h-screen flex justify-center">
			<div class="m-auto p-6 bg-secondary rounded-2xl border-amber-50">
				${Display(state.currentOperand)}
				${Buttons(onButtonClick)}
			</div>
		</div>
  	`;
}
 
document.addEventListener('DOMContentLoaded', initApp);