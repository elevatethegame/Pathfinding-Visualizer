// create and export types for our actions
export const SET_BFS_ALGORITHM = "SET_BFS_ALGORITHM"
export const SET_DFS_ALGORITHM = "SET_DFS_ALGORITHM"
export const SET_ASTAR_ALGORITHM = "SET_ASTAR_ALGORITHM"
export const SET_GREEDY_ALGORITHM = "SET_GREEDY_ALGORITHM"
export const TOGGLE_VISITED_NODE = "TOGGLE_VISITED_NODE"
export const TOGGLE_FRONTIER_NODE = "TOGGLE_FRONTIER_NODE"
export const TOGGLE_WALL_NODE = "TOGGLE_WALL_NODE"
export const TOGGLE_PATH_NODE = "TOGGLE_PATH_NODE"
export const SET_ALGORITHM_STATE = "SET_ALGORITHM_STATE"
export const CLEAR_ALGORITHM_STATE = "CLEAR_ALGORITHM_STATE"
export const SET_START_NODE = "SET_START_NODE"
export const SET_END_NODE = "SET_END_NODE"
export const RUN_ALGORITHM = "RUN_ALGORITHM"
export const READY_ALGORITHM = "READY_ALGORITHM"
export const PAUSE_ALGORITHM = "PAUSE_ALGORITHM"
export const COMPLETE_ALGORITHM = "COMPLETE_ALGORITHM" 
export const SET_PARENT_NODE = "SET_PARENT_NODE"
export const GENERATE_WALLS = "GENERATE_WALLS"
export const CLEAR_BOARD = "CLEAR_BOARD"
export const CLEAR_PATH = "CLEAR_PATH"
export const SET_DRAGGED_NODE = "SET_DRAGGED_NODE"
export const CLEAR_DRAGGED_NODE = "CLEAR_DRAGGED_NODE"
export const SET_START_MASKED_NODE = "SET_START_MASKED_NODE"
export const APPLY_START_MASKED_NODE = "APPLY_START_MASKED_NODE"
export const RERUN_ALGORITHM = "RERUN_ALGORITHM"
export const RESET_START_MASKED_NODE = "RESET_START_MASKED_NODE"
export const SET_END_MASKED_NODE = "SET_END_MASKED_NODE"
export const APPLY_END_MASKED_NODE = "APPLY_END_MASKED_NODE"
export const RESET_END_MASKED_NODE = "RESET_END_MASKED_NODE"
export const SET_ESTIMATE_VALUES = "SET_ESTIMATE_VALUES"


// action creators for grid state
export const rerunAlgorithm = (algorithmSelected) => {
    return {
        type: RERUN_ALGORITHM,
        payload: { algorithmSelected }
    }
}

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

export const togglePathNode = (row, col) => {
    return {
        type: TOGGLE_PATH_NODE,
        payload: {row, col}
    }
}

export const setParentNode = (row, col, parent) => {
    return {
        type: SET_PARENT_NODE,
        payload: {row, col, parent}
    }
}

export const generateWalls = () => {
    return {
        type: GENERATE_WALLS
    }
}

export const clearBoard = () => {
    return {
        type: CLEAR_BOARD
    }
}

export const clearPath = () => {
    return {
        type: CLEAR_PATH
    }
}

export const setEstimateValues = (row, col, f, g, h) => {
    return {
        type: SET_ESTIMATE_VALUES,
        payload: {f, g, h, row, col}
    }
}

// action creators for algorithm state

export const runAlgorithm = () => {
    return {
        type: RUN_ALGORITHM,
    }
};

export const readyAlgorithm = () => {
    return {
        type: READY_ALGORITHM,
    }
};

export const pauseAlgorithm = () => {
    return {
        type: PAUSE_ALGORITHM,
    }
};

export const completeAlgorithm = () => {
    return {
        type: COMPLETE_ALGORITHM,
    }
};


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

// action creators for tracking nodes
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

export const setDraggedNode = (row, col) => {
    return {
        type: SET_DRAGGED_NODE,
        payload: {row, col}
    }
}

export const clearDraggedNode = (row, col) => {
    return {
        type: CLEAR_DRAGGED_NODE,
        payload: {row, col}
    }
}

export const setStartMaskedNode = (row, col) => {
    return {
        type: SET_START_MASKED_NODE,
        payload: {row, col}
    }
}


export const applyStartMaskedNode = (row, col) => {
    return {
        type: APPLY_START_MASKED_NODE,
        payload: {row, col}
    }
}

export const setEndMaskedNode = (row, col) => {
    return {
        type: SET_END_MASKED_NODE,
        payload: {row, col}
    }
}


export const applyEndMaskedNode = (row, col) => {
    return {
        type: APPLY_END_MASKED_NODE,
        payload: {row, col}
    }
}

export const resetStartMaskedNode = () => {
    return {
        type: RESET_START_MASKED_NODE
    }
}

export const resetEndMaskedNode = () => {
    return {
        type: RESET_END_MASKED_NODE
    }
}