// Node constructor
function Node() {
    this.isStartNode = false
    this.isEndNode = false
    this.isWallNode = false
    this.isFrontierNode = false
    this.isVisitedNode = false
    this.isPathNode = false
    this.parent = null
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

export const setVisitedNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col].isVisitedNode = !grid[row][col].isVisitedNode;
    return grid
}

export const setWallNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col].isWallNode = !grid[row][col].isWallNode;
    return grid
}

export const setFrontierNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col].isFrontierNode = !grid[row][col].isFrontierNode;
    return grid
}

export const setStartNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col].isStartNode = !grid[row][col].isStartNode;
    return grid
}

export const setEndNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col].isEndNode = !grid[row][col].isEndNode;
    return grid
}

export const setPathNode = (grid, {row, col}) => {
    grid = grid.slice()
    grid[row][col].isPathNode = !grid[row][col].isPathNode;
    return grid
}

export const setParentNode = (grid, {row, col, parent}) => {
    grid = grid.slice()
    grid[row][col].parent = parent;
    return grid
}

export const generateWalls = (grid) => {
    const p = 0.3  // probability that a node becomes a wall node 
    grid = grid.slice()
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const node = grid[i][j]
            if (!node.isStartNode && !node.isEndNode && Math.random() <= p) {
                node.isWallNode = true
            } else {
                node.isWallNode = false
            }
        }
    }
    return grid
}

export const clearBoard = (grid) => {
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
    return grid
}