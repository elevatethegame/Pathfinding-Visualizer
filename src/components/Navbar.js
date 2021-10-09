import React from 'react'
import '../css/Navbar.css'


function Navbar({ algorithmStatus, algorithmSelected, runAlgorithm, generateWalls, clearBoard, clearPath,
    readyAlgorithm, clearAlgorithmState, resetStartMaskedNode, resetEndMaskedNode, toggleShowCarousel }) {

    const handleClickRun = () => {
        runAlgorithm()
    }

    const handleClickGenerateWalls = () => {
        generateWalls()
    }

    const handleClickClearPath = () => {
        clearPath()
        // discard the state saved by any algorithm pauses
        clearAlgorithmState()
        readyAlgorithm()
    }

    const handleClickClearBoard = () => {
        clearBoard()
        clearAlgorithmState()
        readyAlgorithm()
        resetStartMaskedNode()
        resetEndMaskedNode()
    }

    let runButtonText;
    let runButtonClass;
    let runButtonDisabled = false
    let generateWallsButtonDisabled = false
    if (algorithmStatus === 'UNSELECTED') {
        runButtonText = 'Select an Algorithm'
        runButtonClass = 'unselected'
        runButtonDisabled = true
    } else if (algorithmStatus === 'READY') {
        runButtonText = 'Run'
        runButtonClass = 'run'
    } else if (algorithmStatus === 'PAUSED') {
        runButtonText = 'Resume'
        runButtonClass = 'run'
        generateWallsButtonDisabled = true
    } else if (algorithmStatus === 'RUNNING') {
        runButtonText = 'Pause'
        runButtonClass = 'pause'
        generateWallsButtonDisabled = true
    } else {  // if 'COMPLETED'
        runButtonText = 'Completed'
        runButtonClass = 'completed'
        runButtonDisabled = true
        generateWallsButtonDisabled = true
    }

    return (
        <nav className='navbar'>
            <div className='navbar-list-container'>
                <ul className='navbar-list'>
                    <li className='navbar-item'>
                        <button className={`navbar-button ${generateWallsButtonDisabled ? 'navbar-disabled-button' : 'navbar-normal-button'}`} 
                            onClick={handleClickGenerateWalls} disabled={generateWallsButtonDisabled}>Generate Walls</button>
                    </li>
                    <li className='navbar-item'>
                        <button  className={`navbar-button ${generateWallsButtonDisabled ? 'navbar-disabled-button' : 'navbar-normal-button'}`}
                            disabled={generateWallsButtonDisabled} onClick={toggleShowCarousel}>Select Algorithm</button>
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
