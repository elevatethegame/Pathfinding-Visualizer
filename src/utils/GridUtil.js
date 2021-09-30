

// Key generators for React Grid mapping to rows and cells
export const generateRowKey = (row) => {
    return row.toString()
}

export const generateCellKey = (row, col) => {
    return row.toString() + '#' + col.toString()
}

const numRows = 20;
const numCols = 50;

// Utilities for generating grids
export const generateEmptyGrid = () => {
    const grid = new Array(0)
    for (let i = 0; i < numRows; i++) {
        grid.push(new Array(0))
        for (let j = 0; j < numCols; j++) {
            grid[i].push({
                isStartNode: false,
                isEndNode: false,
                isWallNode: false,
                isFrontierNode: false,
                isVisitedNode: false,
                isPathNode: false
            })
        }
    }
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