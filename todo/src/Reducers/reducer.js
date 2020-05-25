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

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return { 

            }
        case 'CLEAR_TASKS':
            return {

            }
        default:
            return state;
    }
}

