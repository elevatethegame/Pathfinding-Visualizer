import store from "../"
import buckets from 'buckets-js'

export const isAlgorithmRunning = () => {
    return store.getState().algorithmStatus === 'RUNNING'
}

export const isAlgorithmUnselected = () => {
    return store.getState().algorithmStatus === 'UNSELECTED'
}

export const isAlgorithmCompleted = () => {
    return store.getState().algorithmStatus === 'COMPLETED'
}

export const isAlgorithmReady = () => {
    return store.getState().algorithmStatus === 'READY'
}

export const nodeEquals = (node_1, node_2) => {
    return node_1.row === node_2.row && node_1.col === node_2.col
}

export const getNeighbors = (node) => {
    const neighbors = new Array(0)
    const dy = [0, 0, -1, 1]  // directions of i
    const dx = [1, -1, 0, 0]  // directions of j
    for (let i = 0; i < dy.length; i++) {
        neighbors.push({ row: node.row + dy[i], col: node.col + dx[i] })
    }
    return neighbors
}

// Enqueue the Node only if it is within the range of the grid, not visited, not a frontier and not a wall node
export const shouldAddNode = (node, grid, allowDuplicateFrontier = false) => {
    const m = grid.length
    const n = grid[0].length
    const i = node.row
    const j = node.col
    return i >= 0 && i < m && j >= 0 && j < n && !grid[i][j].isVisitedNode && !grid[i][j].isWallNode && 
        (!grid[i][j].isFrontierNode || allowDuplicateFrontier)
}

export const tracePath = async (endNode, grid, togglePathNode) => {
    let node = endNode
    const stack = buckets.Stack() 
    while (node != null) {
        stack.push(node)
        node = grid[node.row][node.col].parent
    }
    while (!stack.isEmpty()) {
        node = stack.pop()
        togglePathNode(node.row, node.col)
        await sleep(40)
    }
}

// This sets the path immediately
// without having the trace animation (no intervals between each path node animation)
export const setPath = (endNode, grid) => {
    let node = endNode
    const stack = buckets.Stack() 
    while (node != null) {
        stack.push(node)
        node = grid[node.row][node.col].parent
    }
    while (!stack.isEmpty()) {
        node = stack.pop()
        grid[node.row][node.col].isPathNode = true
    }
}

export const sleep = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

export const calculateManhattanDistance = (start, end) => {
    return Math.abs(start.row - end.row) + Math.abs(start.col - end.col)
}