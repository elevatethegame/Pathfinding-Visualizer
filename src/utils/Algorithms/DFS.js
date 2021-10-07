import { isAlgorithmRunning, nodeEquals, shouldAddNode, getNeighbors, 
    sleep, tracePath, setPath } from '../AlgorithmUtil'
import buckets from 'buckets-js'

export const runDFS = async (stack, grid, startNode, endNode, toggleVisitedNode, toggleFrontierNode,
    togglePathNode, completeAlgorithm, setParentNode) => {
        
    // While the algorithm has not been completed or paused
    while (isAlgorithmRunning()) {
        
        // Create a new stack if the current algorithm state is empty; this is the first iteration
        if (!stack) {
            stack = buckets.Stack()
            stack.push(startNode)
        }

        if (stack.isEmpty()) {  // No path was found
            completeAlgorithm()  // set the status to COMPLETED
            return
        }

        // Perform one iteration of DFS
        const currNode = stack.pop()
        toggleVisitedNode(currNode.row, currNode.col)
        toggleFrontierNode(currNode.row, currNode.col)  // this node is no longer a frontier node

        if (nodeEquals(endNode, currNode)) {
            await tracePath(endNode, grid, togglePathNode)
            completeAlgorithm()
            return
        }

        const neighbors = getNeighbors(currNode)
        for (const neighbor of neighbors) {
            if (shouldAddNode(neighbor, grid)) {
                toggleFrontierNode(neighbor.row, neighbor.col)
                setParentNode(neighbor.row, neighbor.col, { ...currNode })
                stack.push(neighbor)
            }
        }

        // Timeout ensures that the animation has enough time to render fully
        await sleep(20)

    }

    return stack

}

// Run the algorithm on the grid and return the grid state
// corresponding to the completed algorithm 
// (rerun does not have the tracing animation; no timeout between each node visit => instantaneous render of traversed graph)
export const rerunDFS = (grid, startNode, endNode) => {
    const stack = buckets.Stack()
    stack.push(startNode)
    while (!stack.isEmpty()) {
        const currNode = stack.pop()
        grid[currNode.row][currNode.col].isVisitedNode = true
        grid[currNode.row][currNode.col].isFrontierNode = false  // this node is no longer a frontier node

        if (nodeEquals(endNode, currNode)) {
            setPath(endNode, grid)
            break
        }

        const neighbors = getNeighbors(currNode)
        for (const neighbor of neighbors) {
            if (shouldAddNode(neighbor, grid)) {
                grid[neighbor.row][neighbor.col].isFrontierNode = true
                grid[neighbor.row][neighbor.col].parent = { ...currNode }
                stack.push(neighbor)
            }
        }

    }

    return grid
}