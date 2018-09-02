import { combineReducers } from 'redux'
import { 
    VisibilityFilters, 
    SET_VISIBILITY_FILTER, 
    ADD_TODO, 
    TOGGLE_TODO } from './actions'

const { SHOW_ALL } = VisibilityFilters

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state.todos,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO: 
            return state.todos.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp