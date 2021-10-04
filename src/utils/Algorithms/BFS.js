import { isAlgorithmRunning, nodeEquals, shouldEnqueueNode, getNeighbors, 
    sleep, tracePath, setPath } from '../AlgorithmUtil'
import buckets from 'buckets-js'

export const runBFS = async (queue, grid, startNode, endNode, toggleVisitedNode, toggleFrontierNode,
    togglePathNode, completeAlgorithm, setParentNode) => {
        
    // While the algorithm has not been completed or paused
    while (isAlgorithmRunning()) {
        
        // Create a new queue if the current algorithm state is empty; this is the first iteration
        if (!queue) {
            queue = buckets.Queue()
            queue.enqueue(startNode)
        }

        if (queue.isEmpty()) {  // No path was found
            completeAlgorithm()
            return
        }

        // Perform one iteration of BFS
        const currNode = queue.dequeue()
        toggleVisitedNode(currNode[0], currNode[1])
        toggleFrontierNode(currNode[0], currNode[1])  // this node is no longer a frontier node

        if (nodeEquals(endNode, currNode)) {
            await tracePath(endNode, grid, togglePathNode)
            completeAlgorithm()
            return
        }

        const neighbors = getNeighbors(currNode)
        for (const neighbor of neighbors) {
            if (shouldEnqueueNode(neighbor, grid)) {
                toggleFrontierNode(neighbor[0], neighbor[1])
                setParentNode(neighbor[0], neighbor[1], currNode.slice())
                queue.enqueue(neighbor)
            }
        }

        // Timeout ensures that the animation has enough time to render fully
        await sleep(0)

    }

    return queue

}

export const rerunBFS = (grid, startNode, endNode) => {
    const queue = buckets.Queue()
    queue.enqueue(startNode)
    while (!queue.isEmpty()) {
        const currNode = queue.dequeue()
        grid[currNode[0]][currNode[1]].isVisitedNode = true
        grid[currNode[0]][currNode[1]].isFrontierNode = false  // this node is no longer a frontier node

        if (nodeEquals(endNode, currNode)) {
            setPath(endNode, grid)
            break
        }

        const neighbors = getNeighbors(currNode)
        for (const neighbor of neighbors) {
            if (shouldEnqueueNode(neighbor, grid)) {
                grid[neighbor[0]][neighbor[1]].isFrontierNode = true
                grid[neighbor[0]][neighbor[1]].parent = currNode.slice()
                queue.enqueue(neighbor)
            }
        }

    }

    return grid
}