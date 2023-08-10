// Action types
const ADD_USER = 'ADD_USER';
const EDIT_USER = 'EDIT_USER';
const DELETE_USER = 'DELETE_USER';

// Action creators
const addUser = (user) => ({
    type: ADD_USER,
    payload: user
});

const editUser = (id, updatedUser) => ({
    type: EDIT_USER,
    payload: { id, updatedUser }
});

const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id
});

// Reducer
const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload.updatedUser : user
                )
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        default:
            return state;
    }
};

// Redux store
const store = Redux.createStore(userReducer);

// Dispatch actions
store.dispatch(addUser({ id: 1, name: 'Vo Xuan Tuan', age: 25 }));
store.dispatch(addUser({ id: 2, name: 'Venus', age: 30 }));
store.dispatch(editUser(1, { id: 1, name: 'Vo Xuan Tuan', age: 26 }));
store.dispatch(deleteUser(2));

// Get current state
console.log(store.getState());