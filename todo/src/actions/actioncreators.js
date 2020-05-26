import  { ADD_TASK, TOGGLE_TODO, REMOVE_TODO } from "./actiontypes";


export const addTask = item => ({
    type: ADD_TODO,
    id: Date.now(),
    item
})

export const removeTodo = (id) => ({
    type: REMOVE_TASK,
    id: id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TASK,
    id: id
})
