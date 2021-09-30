// create and export types for our actions
export const TOGGLE_ALGORITHM_RUNNING = "TOGGLE_ALGORITHM_RUNNING"
export const SET_BFS_ALGORITHM = "SET_BFS_ALGORITHM"
export const SET_DFS_ALGORITHM = "SET_DFS_ALGORITHM"
export const SET_ASTAR_ALGORITHM = "SET_ASTAR_ALGORITHM"
export const SET_GREEDY_ALGORITHM = "SET_GREEDY_ALGORITHM"
export const TOGGLE_VISITED_NODE = "TOGGLE_VISITED_NODE"
export const TOGGLE_FRONTIER_NODE = "TOGGLE_FRONTIER_NODE"
export const TOGGLE_WALL_NODE = "TOGGLE_WALL_NODE"
export const TOGGLE_START_NODE = "TOGGLE_START_NODE"
export const TOGGLE_END_NODE = "TOGGLE_END_NODE"
export const TOGGLE_PATH_NODE = "TOGGLE_PATH_NODE"
export const TOGGLE_ALGORITHM_COMPLETED = "TOGGLE_ALGORITHM_COMPLETED"
export const SET_ALGORITHM_STATE = "SET_ALGORITHM_STATE"
export const CLEAR_ALGORITHM_STATE = "CLEAR_ALGORITHM_STATE"
export const SET_START_NODE = "SET_START_NODE"
export const SET_END_NODE = "SET_END_NODE" 

// action creators for grid state
export const toggleVisitedNode = (row, col) => {
    return {
        type: TOGGLE_VISITED_NODE,
        payload: {row, col}
    }
}

export const toggleFrontierNode = (row, col) => {
    return {
        type: TOGGLE_FRONTIER_NODE,
        payload: {row, col}
    }
}

export const toggleWallNode = (row, col) => {
    return {
        type: TOGGLE_WALL_NODE,
        payload: {row, col}
    }
}

export const toggleStartNode = (row, col) => {
    return {
        type: TOGGLE_START_NODE,
        payload: {row, col}
    }
}

export const toggleEndNode = (row, col) => {
    return {
        type: TOGGLE_END_NODE,
        payload: {row, col}
    }
}

export const togglePathNode = (row, col) => {
    return {
        type: TOGGLE_PATH_NODE,
        payload: {row, col}
    }
}

// action creators for algorithm state
export const toggleAlgorithmRunning = () => {
    return {
        type: TOGGLE_ALGORITHM_RUNNING
    }
};

export const toggleAlgorithmCompleted = () => {
    return {
        type: TOGGLE_ALGORITHM_COMPLETED
    }
}

export const setBFSAlgorithm = () => {
    return {
        type: SET_BFS_ALGORITHM
    }
}

export const setDFSAlgorithm = () => {
    return {
        type: SET_DFS_ALGORITHM
    }
}

export const setAStarAlgorithm = () => {
    return {
        type: SET_ASTAR_ALGORITHM
    }
}

export const setGreedyAlgorithm = () => {
    return {
        type: SET_GREEDY_ALGORITHM
    }
}

export const setAlgorithmState = (algorithmState) => {
    return {
        type: SET_ALGORITHM_STATE,
        payload: algorithmState
    }
}

export const clearAlgorithmState = () => {
    return {
        type: CLEAR_ALGORITHM_STATE
    }
}

export const setStartNode = (row, col) => {
    return {
        type: SET_START_NODE,
        payload: {row, col}
    }
}

export const setEndNode = (row, col) => {
    return {
        type: SET_END_NODE,
        payload: {row, col}
    }
}