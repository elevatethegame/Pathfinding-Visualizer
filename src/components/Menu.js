import React from 'react'
import Grid from './Grid'
import Navbar from './Navbar'
import Statbar from './Statbar'
import Carousel from './Carousel'
import '../css/Menu.css'
import { setBFSAlgorithm, toggleVisitedNode, toggleFrontierNode, setStartNode, setEndNode,
    setAlgorithmState, readyAlgorithm, runAlgorithm, pauseAlgorithm, completeAlgorithm,
    togglePathNode, setParentNode, generateWalls, clearBoard, clearPath, clearAlgorithmState } from '../actions'
import { connect } from 'react-redux'
import { runBFS } from '../utils/Algorithms/BFS'
import { isAlgorithmRunning, isAlgorithmCompleted, isAlgorithmReady } from '../utils/AlgorithmUtil'

function Menu(props) {

    const runAlgorithm = async () => {

        if (isAlgorithmRunning()) {
            props.pauseAlgorithm()
            return
        }
        
        props.runAlgorithm()
        
        let state;
        switch (props.algorithmSelected) {
            case 'BFS':
                state = await runBFS(props.algorithmState, props.startNode, props.endNode, props.grid, props.toggleVisitedNode, 
                    props.toggleFrontierNode, props.togglePathNode, props.completeAlgorithm, props.setParentNode, props.clearAlgorithmState)
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

        // We have to clear the algorithm state if it is completed or sent back to the ready state from the running state
        // this happens when we click clearBoard or clearPath buttons while the algorithm is still running
        if (isAlgorithmCompleted() || isAlgorithmReady()) {
            props.clearAlgorithmState()
        } else {
            props.setAlgorithmState(state)
        }
        
    }

    return (
        <div>
            <Navbar runAlgorithm={runAlgorithm} 
                algorithmStatus={props.algorithmStatus}
                algorithmSelected={props.algorithmSelected}
                generateWalls={props.generateWalls}
                clearBoard={props.clearBoard}
                clearPath={props.clearPath}
                readyAlgorithm={props.readyAlgorithm}
                clearAlgorithmState={props.clearAlgorithmState} />
            <div className='grid-container'>
                <Grid />
            </div>
            <div className='statbar-container'>
                <Statbar />
            </div>
            {/* <Carousel /> */}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBFSAlgorithm: () => dispatch(setBFSAlgorithm()),
        toggleVisitedNode: (row, col) => dispatch(toggleVisitedNode(row, col)),
        toggleFrontierNode: (row, col) => dispatch(toggleFrontierNode(row, col)),
        togglePathNode: (row, col) => dispatch(togglePathNode(row, col)),
        setAlgorithmState: (state) => dispatch(setAlgorithmState(state)),
        clearAlgorithmState: () => dispatch(clearAlgorithmState()),
        readyAlgorithm: () => dispatch(readyAlgorithm()),
        runAlgorithm: () => dispatch(runAlgorithm()),
        pauseAlgorithm: () => dispatch(pauseAlgorithm()),
        completeAlgorithm: () => dispatch(completeAlgorithm()),
        setParentNode: (row, col, parent) => dispatch(setParentNode(row, col, parent)),
        generateWalls: () => dispatch(generateWalls()),
        clearBoard: () => dispatch(clearBoard()),
        clearPath: () => dispatch(clearPath()),
    }
}

const mapStateToProps = (state) => {
    return {
        grid: state.board.grid,
        algorithmSelected: state.algorithmSelected,
        startNode: state.board.startNode,
        endNode: state.board.endNode,
        algorithmState: state.algorithmState,
        algorithmStatus: state.algorithmStatus,
        statistics: state.board.statistics,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
