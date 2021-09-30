import React from 'react'
import Grid from './Grid'
import Navbar from './Navbar'
import Statbar from './Statbar'
import Carousel from './Carousel'
import '../css/Menu.css'
import { toggleAlgorithmRunning, setBFSAlgorithm, toggleVisitedNode } from '../actions'
import { connect } from 'react-redux'
import { runBFS } from '../utils/Algorithms/BFS'

function Menu(props) {

    const runAlgorithm = () => {
        // props.toggleAlgorithmRunning()
        switch (props.algorithmSelected) {
            case 'BFS':
                runBFS(props.grid, props.toggleVisitedNode)
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
    }

    return (
        <div>
            <Navbar runAlgorithm={runAlgorithm} />
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
        toggleAlgorithmRunning: () => dispatch(toggleAlgorithmRunning()),
        setBFSAlgorithm: () => dispatch(setBFSAlgorithm()),
        toggleVisitedNode: (row, col) => dispatch(toggleVisitedNode(row, col)),
    }
}

const mapStateToProps = (state) => {
    return {
        grid: state.board.grid,
        algorithmSelected: state.algorithmSelected
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
