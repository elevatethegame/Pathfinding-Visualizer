import React from 'react'
import '../css/Navbar.css'
import { toggleAlgorithmRunning } from '../actions'
import { connect } from 'react-redux'

function Navbar(props) {

    const handleClickRun = () => {
        props.toggleAlgorithmRunning()
    }

    return (
        <nav className='navbar'>
            <div className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li className='navbar-item'>
                        <button className='navbar-button navbar-normal-button'>Generate Walls</button>
                    </li>
                    <li className='navbar-item'>
                        <button  className='navbar-button navbar-normal-button'>Select Algorithm</button>
                    </li>
                    <li className='navbar-item'>
                        <button className='navbar-button navbar-run-button' onClick={handleClickRun}>Run</button>
                    </li>  
                    <li className='navbar-item'>
                        <button  className='navbar-button navbar-normal-button'>Clear Path</button>
                    </li>
                    <li className='navbar-item'>
                        <button  className='navbar-button navbar-normal-button'>Clear Board</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAlgorithmRunning: () => dispatch(toggleAlgorithmRunning())
    }
}

export default connect(null, mapDispatchToProps)(Navbar)
