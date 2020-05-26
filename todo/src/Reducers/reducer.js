import React, { useReducer } from "react";

const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn more about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Practise so I can understand reducers',
        completed: false,
        id: 3892987589
    }
];


export const reducerTodos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return { 
                ...state,
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
        case 'TOGGLE_TODO':
            return state.map(todo => 
                todo.item === action.item ? {...todo, completed: !todo.completed } : todo
                )
        default:
            return state;
    }
}

export default reducer