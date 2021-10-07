import React, { useState } from 'react'
import '../css/Carousel.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { isAlgorithmUnselected } from '../utils/AlgorithmUtil';

function Carousel({ toggleShowCarousel, setBFSAlgorithm, readyAlgorithm, setDFSAlgorithm, setAStarAlgorithm, setGreedyAlgorithm }) {
    const algorithms = [{name: 'BFS', header: 'BFS Algorithm', dispatch: setBFSAlgorithm}, {name: 'DFS', header: 'DFS Algorithm', dispatch: setDFSAlgorithm},
        {name: 'AStar', header: 'A Star Algorithm', dispatch: setAStarAlgorithm}]
    const [ slideNum, setSlideNum ] = useState(0)

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

    const handleClickLeft = () => {
        setSlideNum(mod(slideNum - 1, algorithms.length))
    }

    const handleClickRight = () => {
        setSlideNum(mod(slideNum + 1, algorithms.length))
    }

    return (
        <div className='carousel-container'>
            <div className='carousel'>
                <h1>{ algorithms[slideNum].header }</h1>
                <AiFillCloseCircle className='window-close-icon' onClick={toggleShowCarousel} />
                <div>
                    <FaArrowAltCircleLeft className='arrow-circle-icon' onClick={handleClickLeft} />
                    {/* <img src={props.algoGIF} alt={props.algoName} /> */}
                    <FaArrowAltCircleRight className='arrow-circle-icon' onClick={handleClickRight} />
                </div>
                <p className='algorithm-description'>
                    This is a description of the algorithm.
                </p>
                <button className='carousel-select-button' onClick={() => handleClickSelect(slideNum)}>Select</button>
            </div>
        </div>
    )
}

export default Carousel
