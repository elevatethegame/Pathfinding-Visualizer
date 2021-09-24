import React from 'react'
import '../css/Carousel.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

function Carousel() {
    return (
        <div className='carousel-container'>
            <div className='carousel'>
                <h1>BFS Algorithm</h1>
                <AiFillCloseCircle className='window-close-icon' />
                <div>
                    <FaArrowAltCircleLeft className='arrow-circle-icon' />
                    {/* <img src={props.algoGIF} alt={props.algoName} /> */}
                    <FaArrowAltCircleRight className='arrow-circle-icon' />
                </div>
                <p>
                    This is a description of the algorithm.
                </p>
            </div>
        </div>
    )
}

export default Carousel
