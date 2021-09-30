import { combineReducers } from "redux"
import { generateEmptyGrid } from "../utils/GridUtil"
import { TOGGLE_ALGORITHM_RUNNING } from '../actions'

function board(state = { grid: generateEmptyGrid() }, action) {
    switch(action.type) {
        case 1:
            break
        case 2:
            break
        default:
            return state
    }
} 

function algorithmRunning(state = false, action) {
    switch(action.type) {
        case TOGGLE_ALGORITHM_RUNNING:
            return !state;
        default:
            return state
    }
}

const reducer = combineReducers({
    board,
    algorithmRunning
})

export default reducer