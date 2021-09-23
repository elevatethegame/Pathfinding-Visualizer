import { combineReducers } from "redux"
import { generateEmptyGrid } from "../util/GridUtil"

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

const reducer = combineReducers({
    board
})

export default reducer