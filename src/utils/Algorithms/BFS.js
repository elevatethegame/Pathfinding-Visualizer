import { isAlgorithmRunning, nodeEquals, shouldAddNode, getNeighbors, 
    sleep, tracePath, setPath } from '../AlgorithmUtil'
import Queue from 'mnemonist/queue'

export const runBFS = async (queue, grid, startNode, endNode, toggleVisitedNode, toggleFrontierNode,
    togglePathNode, completeAlgorithm, setParentNode) => {
        
    // While the algorithm has not been completed or paused
    while (isAlgorithmRunning()) {
        
        // Create a new queue if the current algorithm state is empty; this is the first iteration
        if (!queue) {
            queue = new Queue()
            queue.enqueue(startNode)
        }

        if (queue.size === 0) {  // No path was found
            completeAlgorithm()
            return
        }

        // Perform one iteration of BFS
        const currNode = queue.dequeue()
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
                queue.enqueue(neighbor)
            }
        }

        // Timeout ensures that the animation has enough time to render fully
        await sleep(20)

    }

    return queue

}

// Run the algorithm on the grid and return the grid state
// corresponding to the completed algorithm 
// (rerun does not have the tracing animation; no timeout between each node visit => instantaneous render of traversed graph)
export const rerunBFS = (grid, startNode, endNode) => {
    const queue = new Queue()
    queue.enqueue(startNode)
    while (queue.size > 0) {
        const currNode = queue.dequeue()
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
                queue.enqueue(neighbor)
            }
        }

    }

    return grid
}