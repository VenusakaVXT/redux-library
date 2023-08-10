// Use the redux library available through Skypack
// import { createStore } from 'https://cdn.skypack.dev/redux';

// ===========================REDUX===========================
interface Store {
    getState: () => number;
    dispatch: (action: Action) => void;
    subscribe: (subscriber: () => void) => void;
}

type Action = {
    type: string;
    payload: any;
}

function createStore(reducer: (state: number, action: Action) => number): Store {
    let state = reducer(initState, { type: 'INIT', payload: {} });
    const subscribers: (() => void)[] = [];

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
function piggyBank(state = initState, action: Action) {
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
function actionDeposit(payload: number): Action {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload: number): Action {
    return {
        type: 'WITHDRAW',
        payload
    }
}

// DOM Events
const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');

// Event handler
if (deposit && withdraw) {
    deposit.addEventListener('click', () => {
        store.dispatch(actionDeposit(10));
    })
    
    withdraw.addEventListener('click', () => {
        store.dispatch(actionWithdraw(10));
    })
}

// Store
const store: Store = createStore(piggyBank);

// Listener
store.subscribe(() => {
    render()
})

function render() {
    const output = document.getElementById('output');
    if (output) {
        output.innerText = `${store.getState()}$`;
    }
}

render();