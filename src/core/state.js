export const state = {
    currentOperand: '0',
    operation: '',
    previousOperand: ''
}

export const reset = (state) => {
    state.currentOperand = '0';
    state.operation = '';
    state.previousOperand = '';
}   

export const inputNumber = (state, digit) => {

    if (digit === '.' && state.currentOperand.includes('.')) {
        return;
    }

    if (state.currentOperand === '0') {
        return state.currentOperand = digit;
    }

    if (state.currentOperand === "That's Infinity") {
        return state.currentOperand = digit;
    }

    state.currentOperand += digit;
}

export const inputOperation = (state, op) => {
    if (state.operation === '' && state.currentOperand !== '0') {
        state.operation = op;
        state.previousOperand = state.currentOperand;

        return state.currentOperand = '0';
    }    

    if (state.operation !== '' && state.currentOperand === '0') {
        return state.operation = op;
    }

    if (state.currentOperand !== '0') {
        state.previousOperand = String(compute(state));
        state.currentOperand = '0';
        
        return state.operation = op;
    }
}

export const compute = state => {
    const prev = parseFloat(state.previousOperand);
    const curr = parseFloat(state.currentOperand);
    
    switch (state.operation) {
        case '+':
            return prev + curr;
        case '-':
            return prev - curr;
        case '*':
            return prev * curr;
        case '/':
            return prev / curr;
    }
}

export const evaluate = state => {

    if (state.currentOperand === '0' && state.previousOperand === '') {
        return state.currentOperand;
    }

    if (state.currentOperand !== '0' && state.operation === '') {
        return state.currentOperand;
    }

    state.currentOperand = String(parseFloat(compute(state).toFixed(10)));

    if (state.currentOperand == 'Infinity') {
        state.currentOperand = "That's Infinity";
        state.previousOperand = '';
        state.operation = '';

        return state.currentOperand;
    }

    state.previousOperand = '';
    state.operation = '';
}