import React from 'react'
import Grid from './Grid'
import Navbar from './Navbar'
import Statbar from './Statbar'
import '../css/Menu.css'

function Menu() {
    return (
        <div>
            <Navbar />
            <div className='grid-container'>
                <Grid />
            </div>
            <Statbar />
        </div>
    )
}

export default Menu
