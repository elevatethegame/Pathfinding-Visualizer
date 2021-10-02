import React from 'react'
import '../css/Node.css'
import { connect } from 'react-redux'

function Node({isVisitedNode, isWallNode, isEndNode, isStartNode, isFrontierNode, isPathNode}) {

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
        <div className={`node ${nodeClass}`}>
            
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
    }
}

export default connect(mapStateToProps)(Node)
