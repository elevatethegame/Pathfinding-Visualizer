import React from 'react'
import Grid from './Grid'
import Navbar from './Navbar'
import Statbar from './Statbar'
import Carousel from './Carousel'
import '../css/Menu.css'
import { setBFSAlgorithm, toggleVisitedNode, toggleFrontierNode, setStartNode, setEndNode,
    setAlgorithmState, readyAlgorithm, runAlgorithm, pauseAlgorithm, completeAlgorithm,
    togglePathNode, setParentNode, generateWalls, clearBoard } from '../actions'
import { connect } from 'react-redux'
import { runBFS } from '../utils/Algorithms/BFS'
import { isAlgorithmRunning } from '../utils/AlgorithmUtil'

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
                    props.toggleFrontierNode, props.togglePathNode, props.completeAlgorithm, props.setParentNode)
                break
            case 'DFS':
                break
            case 'A Star':
                break
            case 'Greedy':
                break
            default:
                break
        }

        props.setAlgorithmState(state)
        
    }

    return (
        <div>
            <Navbar runAlgorithm={runAlgorithm} 
                algorithmStatus={props.algorithmStatus}
                algorithmSelected={props.algorithmSelected}
                generateWalls={props.generateWalls}
                clearBoard={props.clearBoard} />
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
        readyAlgorithm: () => dispatch(readyAlgorithm()),
        runAlgorithm: () => dispatch(runAlgorithm()),
        pauseAlgorithm: () => dispatch(pauseAlgorithm()),
        completeAlgorithm: () => dispatch(completeAlgorithm()),
        setParentNode: (row, col, parent) => dispatch(setParentNode(row, col, parent)),
        generateWalls: () => dispatch(generateWalls()),
        clearBoard: () => dispatch(clearBoard()),
    }
}

const mapStateToProps = (state) => {
    return {
        grid: state.board.grid,
        algorithmSelected: state.algorithmSelected,
        startNode: state.startNode,
        endNode: state.endNode,
        algorithmState: state.algorithmState,
        algorithmStatus: state.algorithmStatus,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
