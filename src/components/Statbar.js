import React from 'react'
import '../css/Statbar.css'

function Statbar() {
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
                    <span className='stat-value'>170</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node visited'></div>
                    <span className='stat-description'>Visited</span>
                </div>
                <div>
                    <span className='stat-value'>170</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node frontier'></div>
                    <span className='stat-description'>Frontier</span>
                </div>
                <div>
                    <span className='stat-value'>170</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node wall'></div>
                    <span className='stat-description'>Wall</span>
                </div>
                <div>
                    <span className='stat-value'>170</span>
                </div>
            </div>
            <div className='stat-container'>
                <div className='stat-node-container'>
                    <div className='stat-node path'></div>
                    <span className='stat-description'>Path</span>
                </div>
                <div>
                    <span className='stat-value'>170</span>
                </div>
            </div>
        </div>
    )
}

export default Statbar
