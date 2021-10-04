import React from 'react'
import '../css/Node.css'
import { connect } from 'react-redux'
import { toggleWallNode, setDraggedNode, clearDraggedNode, setStartNode, setEndNode, setMaskedNode, applyMaskedNode, 
    toggleVisitedNode, toggleFrontierNode, togglePathNode, setParentNode, rerunAlgorithm, clearPath } from '../actions'
import { nodeEquals, isAlgorithmCompleted, isAlgorithmRunning } from '../utils/AlgorithmUtil'
import { rerunBFS } from '../utils/Algorithms/BFS'

function Node({isVisitedNode, isWallNode, isEndNode, isStartNode, isFrontierNode, isPathNode,
    toggleWallNode, row, col, startNode, endNode, draggedNode, setDraggedNode, clearDraggedNode,
    setStartNode, setEndNode, setMaskedNode, applyMaskedNode, algorithmSelected, rerunAlgorithm,
    clearPath }) {

    const handleMouseOver = () => {
        if (draggedNode) {  // if there was a node being dragged to this position
            if (draggedNode.isWallNode && !isVisitedNode && !isFrontierNode && !isWallNode && !isStartNode && !isEndNode) {
                toggleWallNode(row, col)
            } else if (draggedNode.isStartNode) {
                applyMaskedNode(draggedNode.row, draggedNode.col)  // restore masked node properties back to the node we came from
                setMaskedNode(row, col)  // save the state of this node, to be reapplied to this node if we drag to somewhere else
                setStartNode(row, col)  // replace the state of this node
                setDraggedNode(row, col)  // update the dragged node to be this node

                if (isAlgorithmCompleted()) {  // if the algorithm has status completed, run the algorithm instantly
                    clearPath()
                    rerunAlgorithm(algorithmSelected)
                }
            } else if (draggedNode.isEndNode) {
                applyMaskedNode(draggedNode.row, draggedNode.col)  // restore masked node properties back to the node we came from
                setMaskedNode(row, col)  // save the state of this node, to be reapplied to this node if we drag to somewhere else
                setEndNode(row, col)  // replace the state of this node
                setDraggedNode(row, col)  // update the dragged node to be this node

                if (isAlgorithmCompleted()) {  // if the algorithm has status completed, run the algorithm instantly
                    clearPath()
                    rerunAlgorithm(algorithmSelected)
                }
            }
        }
    }

    const handleMouseDown = () => {
        if (!isAlgorithmRunning()) {  // only allow interactions with the grid when not running
            if (!nodeEquals([row, col], startNode) && !nodeEquals([row, col], endNode))
                toggleWallNode(row, col)
            setDraggedNode(row, col)  // this is the current node being dragged
        }
    }

    const handleMouseUp = () => {
        clearDraggedNode()
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
        <div className={`node ${nodeClass} unselectable`} onMouseOver={handleMouseOver}
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
        startNode: state.board.startNode,
        endNode: state.board.endNode,
        draggedNode: state.board.draggedNode,
        algorithmSelected: state.algorithmSelected,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleWallNode: (row, col) => dispatch(toggleWallNode(row, col)),
        setParentNode: (row, col) => dispatch(setParentNode(row, col)),
        setDraggedNode: (row, col) => dispatch(setDraggedNode(row, col)),
        clearDraggedNode: () => dispatch(clearDraggedNode()),
        setStartNode: (row, col) => dispatch(setStartNode(row, col)),
        setEndNode: (row, col) => dispatch(setEndNode(row, col)),
        setMaskedNode: (row, col) => dispatch(setMaskedNode(row, col)),
        applyMaskedNode: (row, col) => dispatch(applyMaskedNode(row, col)),
        rerunAlgorithm: (algorithmSelected) => dispatch(rerunAlgorithm(algorithmSelected)),
        clearPath: () => dispatch(clearPath()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node)
