import React from 'react'
import { connect } from 'react-redux'
import { generateRowKey, generateCellKey } from '../utils/GridUtil'
import Node from './Node'
import '../css/Grid.css'

function Grid(props) {
    return (
        <div className='grid'>
            {props.grid.map((cellRow, row) => 
                <div className='grid-row' key={generateRowKey(row)}>
                    {cellRow.map((cell, col) => 
                        <Node row={row} col={col} key={generateCellKey(row, col)} />
                    )}
                </div>
            )}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        grid: state.board.grid
    }
}

export default connect(mapStateToProps)(Grid)
