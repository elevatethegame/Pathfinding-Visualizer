import React from 'react'
import '../css/Navbar.css'


function Navbar({ algorithmStatus, algorithmSelected, runAlgorithm, generateWalls, clearBoard, clearPath,
    readyAlgorithm }) {

    const handleClickRun = () => {
        runAlgorithm()
    }

    const handleClickGenerateWalls = () => {
        generateWalls()
    }

    const handleClickClearPath = () => {
        clearPath()
        readyAlgorithm()
    }

    const handleClickClearBoard = () => {
        clearBoard()
        readyAlgorithm()
    }

    let runButtonText;
    let runButtonClass;
    let runButtonDisabled = '';
    if (algorithmStatus === 'UNSELECTED') {
        runButtonText = 'Select an Algorithm'
        runButtonClass = 'unselected'
        runButtonDisabled = 'true'
    } else if (algorithmStatus === 'READY') {
        runButtonText = 'Run'
        runButtonClass = 'run'
    } else if (algorithmStatus === 'PAUSED') {
        runButtonText = 'Resume'
        runButtonClass = 'resume'
    } else if (algorithmStatus === 'RUNNING') {
        runButtonText = 'Pause'
        runButtonClass = 'pause'
    } else {  // if 'COMPLETED'
        runButtonText = 'Completed'
        runButtonClass = 'completed'
        runButtonDisabled = 'true'
    }

    return (
        <nav className='navbar'>
            <div className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li className='navbar-item'>
                        <button className='navbar-button navbar-normal-button' onClick={handleClickGenerateWalls}>Generate Walls</button>
                    </li>
                    <li className='navbar-item'>
                        <button  className='navbar-button navbar-normal-button'>Select Algorithm</button>
                    </li>
                    <li className='navbar-item'>
                        <button className={`navbar-button navbar-run-button ${runButtonClass}`} disabled={runButtonDisabled} onClick={handleClickRun}>
                            {runButtonText}
                        </button>
                    </li>  
                    <li className='navbar-item'>
                        <button  className='navbar-button navbar-normal-button' onClick={handleClickClearPath}>Clear Path</button>
                    </li>
                    <li className='navbar-item'>
                        <button  className='navbar-button navbar-normal-button' onClick={handleClickClearBoard}>Clear Board</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
