import React, { useState } from 'react'
import '../css/Carousel.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

function Carousel({ toggleShowCarousel, setBFSAlgorithm, readyAlgorithm }) {
    const algorithms = [{name: 'BFS', header: 'BFS Algorithm'}, {name: 'DFS', header: 'DFS Algorithm'}]
    const [ slideNum, setSlideNum ] = useState(0)
    const handleClickSelect = () => {
        setBFSAlgorithm()
        toggleShowCarousel()
        readyAlgorithm()
    }
    return (
        <div className='carousel-container'>
            <div className='carousel'>
                <h1>{ algorithms[0].header }</h1>
                <AiFillCloseCircle className='window-close-icon' onClick={toggleShowCarousel} />
                <div>
                    <FaArrowAltCircleLeft className='arrow-circle-icon' />
                    {/* <img src={props.algoGIF} alt={props.algoName} /> */}
                    <FaArrowAltCircleRight className='arrow-circle-icon' />
                </div>
                <p className='algorithm-description'>
                    This is a description of the algorithm.
                </p>
                <button className='carousel-select-button' onClick={handleClickSelect}>Select</button>
            </div>
        </div>
    )
}

export default Carousel
