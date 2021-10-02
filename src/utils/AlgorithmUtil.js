import store from "../"
import buckets from 'buckets-js'

export const isAlgorithmRunning = () => {
    return store.getState().algorithmStatus === 'RUNNING'
}

export const isAlgorithmCompleted = () => {
    return store.getState().algorithmStatus === 'COMPLETED'
}

export const nodeEquals = (node_1, node_2) => {
    return node_1[0] === node_2[0] && node_1[1] === node_2[1]
}

export const getNeighbors = (node) => {
    const neighbors = new Array(0)
    const dy = [0, 0, -1, 1]  // directions of i
    const dx = [1, -1, 0, 0]  // directions of j
    for (let i = 0; i < dy.length; i++) {
        neighbors.push([node[0] + dy[i], node[1] + dx[i]])
    }
    return neighbors
}

// Enqueue the Node only if it is within the range of the grid, not visited, not a frontier and not a wall node
export const shouldEnqueueNode = (node, grid) => {
    const m = grid.length
    const n = grid[0].length
    const i = node[0]
    const j = node[1]
    return i >= 0 && i < m && j >= 0 && j < n && !grid[i][j].isVisitedNode && !grid[i][j].isWallNode && !grid[i][j].isFrontierNode
}

export const tracePath = async (endNode, grid, togglePathNode) => {
    let node = endNode
    const stack = buckets.Stack() 
    while (node != null) {
        stack.push(node)
        node = grid[node[0]][node[1]].parent
    }
    while (!stack.isEmpty()) {
        node = stack.pop()
        togglePathNode(node[0], node[1])
        await sleep(40)
    }
}

export const sleep = (duration) => {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}