import { combineReducers } from "redux"
import { generateEmptyGrid, setEndNode, setFrontierNode, setPathNode, setStartNode, setVisitedNode, setWallNode,
    setParentNode, generateWalls, clearBoard, clearPath, initializeStatistics, Node, applyMaskedNode } from "../utils/GridUtil"
import { SET_BFS_ALGORITHM, SET_ASTAR_ALGORITHM, SET_DFS_ALGORITHM, SET_GREEDY_ALGORITHM,
    TOGGLE_FRONTIER_NODE, TOGGLE_PATH_NODE, TOGGLE_VISITED_NODE, TOGGLE_WALL_NODE,
    SET_ALGORITHM_STATE, CLEAR_ALGORITHM_STATE, SET_START_NODE, SET_END_NODE, READY_ALGORITHM, COMPLETE_ALGORITHM,
    PAUSE_ALGORITHM, RUN_ALGORITHM, SET_PARENT_NODE, GENERATE_WALLS, CLEAR_BOARD, CLEAR_PATH, SET_DRAGGED_NODE, 
    CLEAR_DRAGGED_NODE, SET_MASKED_NODE, APPLY_MASKED_NODE } from '../actions'

const numRows = 20  // Grid Dimensions
const numCols = 50
const start = [9, 15]  // Start Node
const end = [9, 35]  // End Node

function board(state = { grid: generateEmptyGrid(numRows, numCols, start, end), statistics: initializeStatistics(numRows, numCols), 
        draggedNode: null, maskedNode: new Node(), startNode: start, endNode: end }, action) {
    switch(action.type) {
        case TOGGLE_VISITED_NODE: {
            const { grid, statistics } = setVisitedNode(state.grid, state.statistics, action.payload)
            return {
                ...state,
                grid,
                statistics
            }
        }
        case TOGGLE_WALL_NODE: {
            const { grid, statistics } = setWallNode(state.grid, state.statistics, action.payload)
            return {
                ...state,
                grid,
                statistics
            }
        }
        case TOGGLE_FRONTIER_NODE: {
            const { grid, statistics } = setFrontierNode(state.grid, state.statistics, action.payload)
            return {
                ...state,
                grid,
                statistics
            }
        }
        case TOGGLE_PATH_NODE: {
            const { grid, statistics } = setPathNode(state.grid, state.statistics, action.payload)
            return {
                ...state,
                grid,
                statistics
            }
        }
        case SET_START_NODE:
            return {
                ...state,
                grid: setStartNode(state.grid, action.payload),
                startNode: [action.payload.row, action.payload.col]
            }
        case SET_END_NODE:
            return {
                ...state,
                grid: setEndNode(state.grid, action.payload),
                endNode: [action.payload.row, action.payload.col]
            }
        case SET_PARENT_NODE:
            return {
                ...state,
                grid: setParentNode(state.grid, action.payload)
            }
        case GENERATE_WALLS: {
            const { grid, statistics } = generateWalls(state.grid, state.statistics)
            return {
                ...state,
                grid,
                statistics
            }
        }
        case CLEAR_BOARD: {
            const { grid, statistics } = clearBoard(state.grid, state.statistics)
            return {
                ...state,
                grid,
                statistics
            }
        }
        case CLEAR_PATH: {
            const { grid, statistics } = clearPath(state.grid, state.statistics)
            return {
                ...state,
                grid,
                statistics
            }
        }
        case SET_DRAGGED_NODE:
            return {
                ...state,
                draggedNode: {
                    ...state.grid[action.payload.row][action.payload.col]
                }
            }
        case CLEAR_DRAGGED_NODE:
            return {
                ...state,
                draggedNode: null
            }
        case SET_MASKED_NODE: 
            return {
                ...state,
                maskedNode: {
                    ...state.grid[action.payload.row][action.payload.col]
                }
            }
        case APPLY_MASKED_NODE: 
            return {
                ...state,
                grid: applyMaskedNode(state.grid, action.payload, state.maskedNode)
            }
        default:
            return state
    }
} 

function algorithmStatus(state = 'READY', action) {
    switch(action.type) {
        case READY_ALGORITHM:
            return 'READY';
        case RUN_ALGORITHM:
            return 'RUNNING';
        case PAUSE_ALGORITHM:
            return 'PAUSED';
        case COMPLETE_ALGORITHM:
            return 'COMPLETED';
        default:
            return state
    }
}

function algorithmSelected(state = 'BFS', action) {  // we set initial to BFS for now to test
    switch(action.type) {
        case SET_BFS_ALGORITHM:
            return 'BFS';
        case SET_ASTAR_ALGORITHM:
            return 'ASTAR';
        case SET_DFS_ALGORITHM:
            return 'DFS';
        case SET_GREEDY_ALGORITHM:
            return 'GREEDY';
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

const reducer = combineReducers({
    board,
    algorithmStatus,
    algorithmSelected,
    algorithmState
})

export default reducer