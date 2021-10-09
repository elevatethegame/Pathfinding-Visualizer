import { isAlgorithmRunning, nodeEquals, shouldAddNode, getNeighbors, 
    sleep, tracePath, setPath, calculateManhattanDistance } from '../AlgorithmUtil'
import Heap from 'mnemonist/heap';

const generateCostGrid = (m, n) => {
    const costGrid = []
    for (let i = 0; i < m; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push(null)
        }
        costGrid.push(row)
    }
    return costGrid
}

export const runAStar = async (algorithmState, grid, startNode, endNode, toggleVisitedNode, toggleFrontierNode,
    togglePathNode, completeAlgorithm, setParentNode, setEstimateValues) => {
        
    // While the algorithm has not been completed or paused
    while (isAlgorithmRunning()) {
        // Create a new priorityQueue if the current algorithm state is empty; this is the first iteration

        if (!algorithmState) {
            const priorityQueue = new Heap((node_1, node_2) => {
                return grid[node_1.row][node_1.col].f - grid[node_2.row][node_2.col].f
            })
            const costGrid = generateCostGrid(grid.length, grid[0].length)  // contains the best cost so far to travel to every node (g-value)
            algorithmState = { priorityQueue, costGrid }
            const h = calculateManhattanDistance(startNode, endNode)
            const g = 0
            const f = h + g
            setEstimateValues(startNode.row, startNode.col, f, g, h)
            priorityQueue.push(startNode)
            toggleFrontierNode(startNode.row, startNode.col)
            costGrid[startNode.row][startNode.col] = 0
        }

        const { priorityQueue, costGrid } = algorithmState

        if (priorityQueue.size === 0) {  // No path was found
            completeAlgorithm()
            return
        }

        // Perform one iteration of A Star
        const currNode = priorityQueue.pop()
        if (!grid[currNode.row][currNode.col].isVisitedNode) {  // Skip over nodes already visited; the optimal path to this node already found
            toggleVisitedNode(currNode.row, currNode.col)
            toggleFrontierNode(currNode.row, currNode.col)  // this node is no longer a frontier node
        }

        if (nodeEquals(endNode, currNode)) {
            await tracePath(endNode, grid, togglePathNode)
            completeAlgorithm()
            return
        }

        const neighbors = getNeighbors(currNode)
        for (const neighbor of neighbors) {
            if (shouldAddNode(neighbor, grid, true)) {
                const g = grid[currNode.row][currNode.col].g + 1
                if (costGrid[neighbor.row][neighbor.col] === null ||  g < costGrid[neighbor.row][neighbor.col]) {
                    const h = calculateManhattanDistance(neighbor, endNode)
                    const f = h + g
                    setEstimateValues(neighbor.row, neighbor.col, f, g, h)
                    if (costGrid[neighbor.row][neighbor.col] === null)  // only set to frontier node if there are no duplicates in the heap
                        toggleFrontierNode(neighbor.row, neighbor.col)
                    setParentNode(neighbor.row, neighbor.col, { ...currNode })
                    priorityQueue.push(neighbor)
                    costGrid[neighbor.row][neighbor.col] = g
                }
            }
        }

        // Timeout ensures that the animation has enough time to render fully
        await sleep(20)

    }

    return algorithmState

}

// Run the algorithm on the grid and return the grid state
// corresponding to the completed algorithm 
// (rerun does not have the tracing animation; no timeout between each node visit => instantaneous render of traversed graph)
export const rerunAStar = (grid, startNode, endNode) => {
    const priorityQueue = new Heap((node_1, node_2) => {
        return grid[node_1.row][node_1.col].f - grid[node_2.row][node_2.col].f
    })
    const costGrid = generateCostGrid(grid.length, grid[0].length)  // contains the best cost so far to travel to every node (g-value)
    const h = calculateManhattanDistance(startNode, endNode)
    const g = 0
    const f = h + g
    grid[startNode.row][startNode.col].f = f
    grid[startNode.row][startNode.col].g = g
    grid[startNode.row][startNode.col].h = h
    priorityQueue.push(startNode)
    costGrid[startNode.row][startNode.col] = 0

    while (priorityQueue.size > 0) {
        const currNode = priorityQueue.pop()
        
        grid[currNode.row][currNode.col].isVisitedNode = true
        grid[currNode.row][currNode.col].isFrontierNode = false  // this node is no longer a frontier node

        if (nodeEquals(endNode, currNode)) {
            setPath(endNode, grid)
            break
        }

        const neighbors = getNeighbors(currNode)
        for (const neighbor of neighbors) {
            if (shouldAddNode(neighbor, grid, true)) {
                const g = grid[currNode.row][currNode.col].g + 1
                if (costGrid[neighbor.row][neighbor.col] === null ||  g < costGrid[neighbor.row][neighbor.col]) {
                    const h = calculateManhattanDistance(neighbor, endNode)
                    const f = h + g
                    grid[neighbor.row][neighbor.col].f = f
                    grid[neighbor.row][neighbor.col].g = g
                    grid[neighbor.row][neighbor.col].h = h
                    if (costGrid[neighbor.row][neighbor.col] === null)  // only set to frontier node if there are no duplicates in the heap
                        grid[neighbor.row][neighbor.col].isFrontierNode = true
                    grid[neighbor.row][neighbor.col].parent = { ...currNode }
                    priorityQueue.push(neighbor)
                    costGrid[neighbor.row][neighbor.col] = g
                }
            }
        }

    }

    return grid
}