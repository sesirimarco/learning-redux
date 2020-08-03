import { combineReducers } from 'redux';
import { 
    ADD_TODO, 
    COMPLETE_TODO, 
    SET_VISIBILITY_FILTER, 
    visibilityFilters,
    INIT_TODOS
} from '../actions';

const initState = [];
const { SHOW_ALL } = visibilityFilters;
const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
const todos = (state = initState, action) => {
    switch(action.type) {
        case INIT_TODOS:
            return [...state, ...action.todos]
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.length + 1, 
                    title: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            return state.map((todo, index) => {
                if(action.id === todo.id) {
                    return Object.assign({}, todo, {
                        completed: true
                    })
                }
                return todo;
            })
        default:
            return state
    };
};
const todoApp = combineReducers({
    visibilityFilter,
    todos
});
export default todoApp;