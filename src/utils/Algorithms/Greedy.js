import { isAlgorithmRunning, nodeEquals, shouldAddNode, getNeighbors, 
    sleep, tracePath, setPath, calculateManhattanDistance } from '../AlgorithmUtil'
import buckets from 'buckets-js'

export const runGreedy = async (priorityQueue, grid, startNode, endNode, toggleVisitedNode, toggleFrontierNode,
    togglePathNode, completeAlgorithm, setParentNode, setEstimateValues) => {
        
    // While the algorithm has not been completed or paused
    while (isAlgorithmRunning()) {
        // Create a new priorityQueue if the current algorithm state is empty; this is the first iteration
        if (!priorityQueue) {
            priorityQueue = buckets.PriorityQueue((node_1, node_2) => {
                return grid[node_2.row][node_2.col].f - grid[node_1.row][node_1.col].f
            })
            const f = calculateManhattanDistance(startNode, endNode)
            setEstimateValues(startNode.row, startNode.col, f, null, null)
            priorityQueue.enqueue(startNode)
        }

        if (priorityQueue.isEmpty()) {  // No path was found
            completeAlgorithm()
            return
        }

        // Perform one iteration of Greedy
        const currNode = priorityQueue.dequeue()
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
                const f = calculateManhattanDistance(neighbor, endNode)
                setEstimateValues(neighbor.row, neighbor.col, f, null, null)
                toggleFrontierNode(neighbor.row, neighbor.col)
                setParentNode(neighbor.row, neighbor.col, { ...currNode })
                priorityQueue.enqueue(neighbor)
            }
        }

        // Timeout ensures that the animation has enough time to render fully
        await sleep(20)

    }

    return priorityQueue

}

// Run the algorithm on the grid and return the grid state
// corresponding to the completed algorithm 
// (rerun does not have the tracing animation; no timeout between each node visit => instantaneous render of traversed graph)
export const rerunGreedy = (grid, startNode, endNode) => {
    const priorityQueue = buckets.PriorityQueue((node_1, node_2) => {
        return grid[node_2.row][node_2.col].f - grid[node_1.row][node_1.col].f
    })
    const f = calculateManhattanDistance(startNode, endNode)
    grid[startNode.row][startNode.col].f = f
    priorityQueue.enqueue(startNode)
    while (!priorityQueue.isEmpty()) {
        const currNode = priorityQueue.dequeue()
        grid[currNode.row][currNode.col].isVisitedNode = true
        grid[currNode.row][currNode.col].isFrontierNode = false  // this node is no longer a frontier node

        if (nodeEquals(endNode, currNode)) {
            setPath(endNode, grid)
            break
        }

        const neighbors = getNeighbors(currNode)
        for (const neighbor of neighbors) {
            if (shouldAddNode(neighbor, grid)) {
                const f = calculateManhattanDistance(neighbor, endNode)
                grid[neighbor.row][neighbor.col].f = f
                grid[neighbor.row][neighbor.col].isFrontierNode = true
                grid[neighbor.row][neighbor.col].parent = { ...currNode }
                priorityQueue.enqueue(neighbor)
            }
        }

    }

    return grid
}