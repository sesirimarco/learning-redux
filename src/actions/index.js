import axios from 'axios';
export const INIT_TODOS = 'INIT_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const initTodos = () => {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos',
        })
        .then(res => {
            console.log('hola', res.data[0])
            dispatch({ type: INIT_TODOS, todos: res.data})
        })
        .catch(error => {

        })
    };

};
export const addTodo = (text) => {
    return { type: ADD_TODO, text };
};
export const completeTodo = (id) => {
    return { type: COMPLETE_TODO, id };
};
export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter: filter };
};