import store from "../"

export const isAlgorithmRunning = () => {
    return store.getState().algorithmRunning
}