import React from 'react'
import '../css/Node.css'
import { connect } from 'react-redux'
import { toggleWallNode, setDraggedNode, clearDraggedNode, setStartNode, setEndNode, setStartMaskedNode, setEndMaskedNode, 
    setParentNode, rerunAlgorithm, clearPath, applyStartMaskedNode, applyEndMaskedNode, resetEndMaskedNode, resetStartMaskedNode } from '../actions'
import { nodeEquals, isAlgorithmCompleted, isAlgorithmUnselected, isAlgorithmReady } from '../utils/AlgorithmUtil'

function Node({isVisitedNode, isWallNode, isEndNode, isStartNode, isFrontierNode, isPathNode,
    toggleWallNode, row, col, startNode, endNode, draggedNode, setDraggedNode, clearDraggedNode,
    setStartNode, setEndNode, setStartMaskedNode, applyStartMaskedNode, algorithmSelected, rerunAlgorithm,
    clearPath, setEndMaskedNode, applyEndMaskedNode }) {

    const handleMouseOver = () => {
        if (draggedNode) {  // if there was a node being dragged to this position
            if (draggedNode.isWallNode && !isVisitedNode && !isFrontierNode && !isWallNode && !isStartNode && !isEndNode) {
                toggleWallNode(row, col)  // only allow toggling of wall boolean for unvisited/grey nodes and wall nodes
            } else if (draggedNode.isStartNode && !isEndNode) {  // do not allow dragging start node over end node
                applyStartMaskedNode(draggedNode.row, draggedNode.col)  // restore masked node properties back to the node we came from
                // do not save visited, frontier or path node states
                // or else if start node masks one of these, and we click clearPath button afterward,
                // upon moving the start node away the visited, frontier or path node we have saved will
                // be applied to that particular node, which is the wrong behavior 
                if (!isVisitedNode && !isFrontierNode && !isPathNode)  
                    setStartMaskedNode(row, col)  // save the state of this node, to be reapplied to this node if we drag to somewhere else
                setStartNode(row, col)  // replace the state of this node
                setDraggedNode(row, col)  // update the dragged node to be this node

                if (isAlgorithmCompleted()) {  // if the algorithm has status completed, run the algorithm instantly
                    clearPath()  // clear all the node state except the walls
                    rerunAlgorithm(algorithmSelected)  // draw the new path, visited and frontier nodes for this new start position
                }
            } else if (draggedNode.isEndNode && !isStartNode) {  // do not allow dragging end node over start node
                applyEndMaskedNode(draggedNode.row, draggedNode.col)  // restore masked node properties back to the node we came from
                if (!isVisitedNode && !isFrontierNode && !isPathNode)
                    setEndMaskedNode(row, col)  // save the state of this node, to be reapplied to this node if we drag to somewhere else
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
        if (isAlgorithmReady() || isAlgorithmCompleted() || isAlgorithmUnselected()) {  // only allow interactions with the grid when not running
            if (!nodeEquals([row, col], startNode) && !nodeEquals([row, col], endNode) && !isVisitedNode && !isFrontierNode && !isPathNode)
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
        setStartMaskedNode: (row, col) => dispatch(setStartMaskedNode(row, col)),
        setEndMaskedNode: (row, col) => dispatch(setEndMaskedNode(row, col)),
        applyStartMaskedNode: (row, col) => dispatch(applyStartMaskedNode(row, col)),
        applyEndMaskedNode: (row, col) => dispatch(applyEndMaskedNode(row, col)),
        resetStartMaskedNode: (row, col) => dispatch(resetStartMaskedNode(row, col)),
        resetEndMaskedNode: (row, col) => dispatch(resetEndMaskedNode(row, col)),
        rerunAlgorithm: (algorithmSelected) => dispatch(rerunAlgorithm(algorithmSelected)),
        clearPath: () => dispatch(clearPath()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Node)
