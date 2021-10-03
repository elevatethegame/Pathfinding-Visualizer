import React from 'react'
import { connect } from 'react-redux'
import '../css/Statbar.css'

function Statbar({ statistics }) {
    return (
        <div className='statbar'>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node start'></div>
                    <span className='stat-description'>Start</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node end'></div>
                    <span className='stat-description'>End</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node unvisited'></div>
                    <span className='stat-description'>Unvisited</span>
                </div>
                <div>
                    <span className='stat-value'>{statistics.numTotal - statistics.numVisited - statistics.numWall}</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node visited'></div>
                    <span className='stat-description'>Visited</span>
                </div>
                <div>
                    <span className='stat-value'>{statistics.numVisited}</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node frontier'></div>
                    <span className='stat-description'>Frontier</span>
                </div>
                <div>
                    <span className='stat-value'>{statistics.numFrontier}</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node wall'></div>
                    <span className='stat-description'>Wall</span>
                </div>
                <div>
                    <span className='stat-value'>{statistics.numWall}</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node path'></div>
                    <span className='stat-description'>Path</span>
                </div>
                <div>
                    <span className='stat-value'>{statistics.numPath}</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        statistics: state.board.statistics,
    }
}

export default connect(mapStateToProps)(Statbar)
