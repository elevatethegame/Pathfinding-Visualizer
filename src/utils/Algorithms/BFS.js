import { isAlgorithmRunning } from '../AlgorithmUtil'


export const runBFS = (grid, toggleVisitedNode) => {

    // While the algorithm has not been completed or paused
    // while (isAlgorithmRunning()) {

    // }

    console.log(grid[0][0])
    toggleVisitedNode(0, 0)
    console.log(grid[0][0])

}