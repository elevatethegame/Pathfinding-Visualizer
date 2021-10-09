import React, { useState, useEffect, useRef } from 'react'
import '../css/Carousel.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs"
import { isAlgorithmUnselected } from '../utils/AlgorithmUtil';
import BFS_GIF from '../assets/images/BFS.gif'
import AStar_GIF from '../assets/images/A Star.gif'
import Greedy_GIF from '../assets/images/Greedy.gif'
import DFS_GIF from '../assets/images/DFS.gif'

function Carousel({ toggleShowCarousel, setBFSAlgorithm, readyAlgorithm, setDFSAlgorithm, setAStarAlgorithm, setGreedyAlgorithm }) {
    const algorithms = [{name: 'BFS', header: 'BFS Algorithm', dispatch: setBFSAlgorithm, gif: BFS_GIF, 
        description: "It starts at the root and explores all of it’s children in the next level (neighbors) before moving to each of the root neighbors," + 
        " and then, it explores the neighbors of the root neighbors, and so on. The algorithm uses a queue to perform the BFS."}, 
        {name: 'DFS', header: 'DFS Algorithm', dispatch: setDFSAlgorithm, gif: DFS_GIF,
        description: "It starts at the root and explores one of it’s children’s sub tree, and then moves to the next child’s sub tree, and so on. " + 
        "It uses stack, or recursion to perform the DFS."},
        {name: 'AStar', header: 'A Star Algorithm', dispatch: setAStarAlgorithm, gif: AStar_GIF,
        description: "A* is uses a combination of an educated guess (heuristic distance to the goal) and the distance from the root node " + 
        "to determine the estimated cost of traveling to the goal node using a particular node. Nodes with lower estimated cost are traversed first." + 
        " The algorithm terminates when we find the goal node."}, 
        {name: 'Greedy', header: 'Greedy Algorithm', dispatch: setGreedyAlgorithm, gif: Greedy_GIF,
        description: "Greedy is an algorithm which makes a choice based on educated guesses (heuristics) at each stage. The node with shortest " + 
        "heuristic distance from the goal node will be explored next. Here we use the manhattan distance between a node and the goal node as the heuristic." + 
        " It should be noted that the Greedy algorithm does not guarantee an optimal path."}]
    const [ slideNum, setSlideNum ] = useState(0)
    const wrapperRef = useRef(null)

    // Close the Carousel when a click outside is detected
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef && !wrapperRef.current.contains(event.target))
                toggleShowCarousel()
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return (() => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        })
        
    }, [wrapperRef, toggleShowCarousel])

    // Custom modulo function. The default Javascript modulo operator that gives -3 % 4 = -3. Instead, we want it to be 1
    const mod = (m, n) => {
        return ((m % n) + n) % n
    }

    const handleClickSelect = (slideNum) => {
        algorithms[slideNum].dispatch()
        toggleShowCarousel()
        if (isAlgorithmUnselected())
            readyAlgorithm()
    }

    const handleClickLeft = (event) => {
        setSlideNum(mod(slideNum - 1, algorithms.length))
    }

    const handleClickRight = (event) => {
        setSlideNum(mod(slideNum + 1, algorithms.length))
    }

    return (
        <div className='carousel-container'>
            <div className='carousel' ref={wrapperRef}>
                <h1>{ algorithms[slideNum].header }</h1>
                <AiFillCloseCircle className='window-close-icon' onClick={toggleShowCarousel} />
                <div className='carousel-upper-mid'>
                    <div className='carousel-arrow-container'>
                        <FaArrowAltCircleLeft className='arrow-circle-icon' onClick={handleClickLeft} />
                    </div>
                    <img src={algorithms[slideNum].gif} alt={algorithms[slideNum].name} />
                    <div className='carousel-arrow-container'>
                        <FaArrowAltCircleRight className='arrow-circle-icon' onClick={handleClickRight} />
                    </div>
                </div>
                <div className='carousel-lower-mid'>
                    <p className='algorithm-description'>
                        {algorithms[slideNum].description}
                    </p>
                </div>
                <div className='carousel-bottom'>
                    <button className='carousel-select-button' onClick={() => handleClickSelect(slideNum)}>Select</button>
                    <div className='carousel-navigation'>
                        <BsFillCircleFill className={`carousel-navigation-button ${slideNum === 0 ? 'carousel-navigation-button-selected' : ''}`} onClick={() => setSlideNum(0)} />
                        <BsFillCircleFill className={`carousel-navigation-button ${slideNum === 1 ? 'carousel-navigation-button-selected' : ''}`} onClick={() => setSlideNum(1)} />
                        <BsFillCircleFill className={`carousel-navigation-button ${slideNum === 2 ? 'carousel-navigation-button-selected' : ''}`} onClick={() => setSlideNum(2)} />
                        <BsFillCircleFill className={`carousel-navigation-button ${slideNum === 3 ? 'carousel-navigation-button-selected' : ''}`} onClick={() => setSlideNum(3)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
