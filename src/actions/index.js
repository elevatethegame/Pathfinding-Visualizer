// create and export types for our actions
export const TOGGLE_ALGORITHM_RUNNING = "TOGGLE_ALGORITHM_RUNNING";

// create functions that return pre-defined actions
export const toggleAlgorithmRunning = () => {
    return {
        type: TOGGLE_ALGORITHM_RUNNING
    }
};