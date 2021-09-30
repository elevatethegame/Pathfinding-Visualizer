

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