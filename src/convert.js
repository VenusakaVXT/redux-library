'use strict';

// ===========================REDUX===========================
function createStore(reducer) {
    // Passing the default parameter value is always to avoid 
    // when no argument is passed, reducer() will fail.
    
    let state = reducer(undefined, {});
    const subscribers = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber());
        },
        subscribe(subscriber) {
            subscribers.push(subscriber);
        }
    }
}


// ===========================APP===========================
const initState = 0;

// Reducer
function piggyBank(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}

// Actions
function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}

// DOM Events
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');

// Event handler
deposit.addEventListener('click', () => {
    store.dispatch(actionDeposit(10));
})

withdraw.addEventListener('click', () => {
    store.dispatch(actionWithdraw(10));
})

// Store
const store = window.store = createStore(piggyBank);

// Listener
store.subscribe(() => {
    render()
})

function render() {
    const output = document.getElementById('output');
    output.innerText = `${store.getState()}$`;
}

render()