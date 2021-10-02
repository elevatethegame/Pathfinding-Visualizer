import { combineReducers } from "redux"
import { generateEmptyGrid, setEndNode, setFrontierNode, setPathNode, setStartNode, setVisitedNode, setWallNode } from "../utils/GridUtil"
import { TOGGLE_ALGORITHM_RUNNING, SET_BFS_ALGORITHM, SET_ASTAR_ALGORITHM, SET_DFS_ALGORITHM, SET_GREEDY_ALGORITHM,
    TOGGLE_END_NODE, TOGGLE_FRONTIER_NODE, TOGGLE_PATH_NODE, TOGGLE_START_NODE, TOGGLE_VISITED_NODE, TOGGLE_WALL_NODE,
    TOGGLE_ALGORITHM_COMPLETED, SET_ALGORITHM_STATE, CLEAR_ALGORITHM_STATE, SET_START_NODE, SET_END_NODE } from '../actions'

const numRows = 20  // Grid Dimensions
const numCols = 50
const start = [9, 15]  // Start Node
const end = [9, 35]  // End Node

function board(state = { grid: generateEmptyGrid(numRows, numCols, start, end) }, action) {
    switch(action.type) {
        case TOGGLE_VISITED_NODE:
            return {
                ...state,
                grid: setVisitedNode(state.grid, action.payload)
            }
        case TOGGLE_WALL_NODE:
            return {
                ...state,
                grid: setWallNode(state.grid, action.payload)
            }
        case TOGGLE_FRONTIER_NODE:
            return {
                ...state,
                grid: setFrontierNode(state.grid, action.payload)
            }
        case TOGGLE_START_NODE:
            return {
                ...state,
                grid: setStartNode(state.grid, action.payload)
            }
        case TOGGLE_END_NODE:
            return {
                ...state,
                grid: setEndNode(state.grid, action.payload)
            }
        case TOGGLE_PATH_NODE:
            return {
                ...state,
                grid: setPathNode(state.grid, action.payload)
            }
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

function algorithmCompleted(state = false, action) {
    switch(action.type) {
        case TOGGLE_ALGORITHM_COMPLETED:
            return !state;
        default:
            return state
    }
}

function algorithmSelected(state = 'BFS', action) {  // we set initial to BFS for now to test
    switch(action.type) {
        case SET_BFS_ALGORITHM:
            return 'BFS';
        case SET_ASTAR_ALGORITHM:
            return 'A Star';
        case SET_DFS_ALGORITHM:
            return 'DFS';
        case SET_GREEDY_ALGORITHM:
            return 'Greedy';
        default:
            return state
    }
}

function algorithmState(state = null, action) {  
    switch(action.type) {
        case SET_ALGORITHM_STATE:
            return action.payload;
        case CLEAR_ALGORITHM_STATE:
            return null;
        default:
            return state
    }
}

function startNode(state = start, action) {  
    switch(action.type) {
        case SET_START_NODE:
            return [action.row, action.col];
        default:
            return state
    }
}

function endNode(state = end, action) {  
    switch(action.type) {
        case SET_END_NODE:
            return [action.row, action.col];
        default:
            return state
    }
}

const reducer = combineReducers({
    board,
    algorithmRunning,
    algorithmCompleted,
    algorithmSelected,
    algorithmState,
    startNode,
    endNode
})

export default reducer