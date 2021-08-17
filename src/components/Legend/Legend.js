import React from 'react'
import './Legend.css'

const Legend = ({algo}) => {
    return (
        <div className='legends'>
        <div className='key'> 
            <span className='sq compare'></span> Bars Currently Comparing
        </div>
        <div className='key'> 
            <span className='sq swap'></span> {algo !== 'mergeSort' ? 'Swapping' : 'Taking From Auxillary Space'}
        </div>
        <div className='key'> 
            <span className='sq sorted'></span> Sorted bars
        </div>
    </div>
    )
}

export default Legend