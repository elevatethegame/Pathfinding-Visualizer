import React from 'react'
import '../css/Node.css'
import { connect } from 'react-redux'
import { toggleWallNode } from '../actions'
import { nodeEquals } from '../utils/AlgorithmUtil'

function Node({isVisitedNode, isWallNode, isEndNode, isStartNode, isFrontierNode, isPathNode,
    toggleWallNode, row, col, startNode, endNode }) {

    const handleMouseOver = () => {
        
    }

    const handleMouseOut = () => {
        
    }

    const handleMouseDown = () => {
        if (!nodeEquals([row, col], startNode) && !nodeEquals([row, col], endNode))
            toggleWallNode(row, col)
    }

    const handleMouseUp = () => {
        
    }

    let nodeClass
    if (isStartNode) {
        nodeClass = 'start'
    } else if (isEndNode) {
        nodeClass = 'end'
    } else if (isWallNode) {
        nodeClass = 'wall'
    } else if (isPathNode) {
        nodeClass = 'path'
    } else if (isVisitedNode) {
        nodeClass = 'visited'
    } else if (isFrontierNode) {
        nodeClass = 'frontier'
    } else {
        nodeClass = 'unvisited'
    }

    return (
        <div className={`node ${nodeClass}`} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}
            onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} >
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        isVisitedNode: state.board.grid[ownProps.row][ownProps.col].isVisitedNode,
        isWallNode: state.board.grid[ownProps.row][ownProps.col].isWallNode,
        isStartNode: state.board.grid[ownProps.row][ownProps.col].isStartNode,
        isEndNode: state.board.grid[ownProps.row][ownProps.col].isEndNode,
        isPathNode: state.board.grid[ownProps.row][ownProps.col].isPathNode,
        isFrontierNode: state.board.grid[ownProps.row][ownProps.col].isFrontierNode,
        startNode: state.startNode,
        endNode: state.endNode,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleWallNode: (row, col) => dispatch(toggleWallNode(row, col)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node)
