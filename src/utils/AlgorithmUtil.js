import store from "../"

export const isAlgorithmRunning = () => {
    return store.getState().algorithmRunning
}

export const isAlgorithmCompleted = () => {
    return store.getState().algorithmCompleted
}