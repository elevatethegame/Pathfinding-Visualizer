import { isAlgorithmRunning, nodeEquals, shouldEnqueueNode, getNeighbors, 
    sleep, tracePath } from '../AlgorithmUtil'
import buckets from 'buckets-js'

export const runBFS = async (queue, startNode, endNode, grid, toggleVisitedNode, toggleFrontierNode,
    togglePathNode, completeAlgorithm, setParentNode) => {
        
    // While the algorithm has not been completed or paused
    while (isAlgorithmRunning()) {
        
        // Create a new queue if the current algorithm state is empty; this is the first iteration
        if (!queue) {
            queue = buckets.Queue()
            queue.enqueue(startNode)
        }

        // Perform one iteration of BFS
        const currNode = queue.dequeue()
        toggleVisitedNode(currNode[0], currNode[1])
        toggleFrontierNode(currNode[0], currNode[1])  // this node is no longer a frontier node

        if (nodeEquals(endNode, currNode)) {
            await tracePath(endNode, grid, togglePathNode)
            completeAlgorithm()
            break
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
        await sleep(5)

    }

    return queue

}