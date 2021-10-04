import { rerunBFS } from "./Algorithms/BFS"

// Node constructor
export function Node() {
    this.isStartNode = false
    this.isEndNode = false
    this.isWallNode = false
    this.isFrontierNode = false
    this.isVisitedNode = false
    this.isPathNode = false
    this.parent = null
}

export const initializeStartNode = () => {
    const node = new Node()
    node.isStartNode = true
    return node
}

export const initializeEndNode = () => {
    const node = new Node()
    node.isEndNode = true
    return node
}

function Statistic(numTotal) {
    this.numTotal = numTotal
    this.numVisited = 0
    this.numFrontier = 0
    this.numWall = 0
    this.numPath = 0
}

// Key generators for React Grid mapping to rows and cells
export const generateRowKey = (row) => {
    return row.toString()
}

export const generateCellKey = (row, col) => {
    return row.toString() + '#' + col.toString()
}

// Utilities for generating grids
export const generateEmptyGrid = (numRows, numCols, startNode, endNode) => {
    const grid = new Array(0)
    for (let i = 0; i < numRows; i++) {
        grid.push(new Array(0))
        for (let j = 0; j < numCols; j++) {
            grid[i].push(new Node())
        }
    }
    grid[startNode[0]][startNode[1]].isStartNode = true
    grid[endNode[0]][endNode[1]].isEndNode = true
    return grid
}

const calculateStatistics = (grid) => {
    const numRows = grid.length
    const numCols = grid[0].length
    const statistics = new Statistic(numRows * numCols)
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            statistics.numWall += grid[i][j].isWallNode ? 1 : 0
            statistics.numVisited += grid[i][j].isVisitedNode ? 1 : 0
            statistics.numFrontier += grid[i][j].isFrontierNode ? 1 : 0
            statistics.numPath += grid[i][j].isPathNode ? 1 : 0
        }
    }
    console.log(statistics)
    return statistics
}

export const generateRerunAlgorithmGrid = (grid, startNode, endNode, algorithmSelected) => {
    grid = grid.slice()
    switch (algorithmSelected) {
        case 'BFS':
            grid = rerunBFS(grid, startNode, endNode)
            break
        case 'DFS':
            break
        case 'ASTAR':
            break
        case 'GREEDY':
            break
        default:
            break
    }
    return { 
        grid, 
        statistics: calculateStatistics(grid) 
    }
}

export const setVisitedNode = (grid, statistics, {row, col}) => {
    grid = grid.slice()
    const node = grid[row][col]
    node.isVisitedNode = !node.isVisitedNode;
    return {
        grid,
        statistics: {
            ...statistics,
            numVisited: node.isVisitedNode ? statistics.numVisited + 1 : statistics.numVisited - 1
        }
    }
}

export const setWallNode = (grid, statistics, {row, col}) => {
    grid = grid.slice()
    const node = grid[row][col]
    node.isWallNode = !node.isWallNode;
    return {
        grid,
        statistics: {
            ...statistics,
            numWall: node.isWallNode ? statistics.numWall + 1 : statistics.numWall - 1
        }
    }
}

export const setFrontierNode = (grid, statistics, {row, col}) => {
    grid = grid.slice()
    const node = grid[row][col]
    node.isFrontierNode = !node.isFrontierNode;
    return {
        grid,
        statistics: {
            ...statistics,
            numFrontier: node.isFrontierNode ? statistics.numFrontier + 1 : statistics.numFrontier - 1
        }
    }
}

export const setPathNode = (grid, statistics, {row, col}) => {
    grid = grid.slice()
    const node = grid[row][col]
    node.isPathNode = !node.isPathNode;
    return {
        grid,
        statistics: {
            ...statistics,
            numPath: node.isPathNode ? statistics.numPath + 1 : statistics.numPath - 1
        }
    }
}

export const setStartNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col] = initializeStartNode()
    return grid
}

export const setEndNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col] = initializeEndNode()
    return grid
}

export const setParentNode = (grid, {row, col, parent}) => {
    grid = grid.slice()
    grid[row][col].parent = parent;
    return grid
}

export const applyMaskedNode = (grid, statistics, {row, col}, maskedNode) => {
    grid = grid.slice()
    
    grid[row][col] = maskedNode;
    return { 
        grid,
        statistics: {
            ...statistics,
            numWall: statistics.numWall + (maskedNode.isWallNode ? 1 : 0),
        }
    }
}

export const calculateMaskedStatistic = (grid, statistics, {row, col}) => {
    const newMaskedNode = grid[row][col]
    return {
        statistics: {
            ...statistics,
            numWall: statistics.numWall - (newMaskedNode.isWallNode ? 1 : 0),
        }
    }
}

export const generateWalls = (grid, statistics) => {
    grid = grid.slice()
    const p = 0.3  // probability that a node becomes a wall node 
    let numWall = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const node = grid[i][j]
            if (!node.isStartNode && !node.isEndNode && Math.random() <= p) {
                node.isWallNode = true
                numWall++
            } else {
                node.isWallNode = false
            }
        }
    }
    return { 
        grid, 
        statistics: {
            ...statistics,
            numWall
        }
    }
}

export const clearBoard = (grid, statistics) => {
    grid = grid.slice()
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const node = grid[i][j]
            if (!node.isStartNode && !node.isEndNode) {
                grid[i][j] = new Node()
            } else {
                node.isWallNode = false
                node.isVisitedNode = false
                node.isPathNode = false
            }
        }
    }
    return { 
        grid, 
        statistics: initializeStatistics(grid.length, grid[0].length)
    }
}

export const clearPath = (grid, statistics) => {
    grid = grid.slice()
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const node = grid[i][j]
            node.isPathNode = false
            node.isVisitedNode = false
            node.isFrontierNode = false
        }
    }
    return { 
        grid, 
        statistics: {
            ...statistics,
            numPath: 0,
            numFrontier: 0,
            numVisited: 0
        }
    }
}

// Utilities for generating statistics
export const initializeStatistics = (numRows, numCols) => {
    return new Statistic(numRows * numCols)
}