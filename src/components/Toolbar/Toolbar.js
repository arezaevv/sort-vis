import React from 'react'
import './Toolbar.css'

const Toolbar = ({
    handleLength,
    handleSpeed,
    handleAlgo,
    generateRandomArray,
    handleSort,
    sorting,
    completed,
    len,
    speed,
    algo
}) => {
    return (
        <nav>
        {/* <div className='nav-brand'>Sorting Visualizer</div> */}

        <div className='toolbox'>
            <div>
                <div className='group speed'>
                    <label>Speed</label>
                    <input type='range' onChange={handleSpeed} min='1' max='10' value={Math.ceil(400/ speed)} disabled={sorting}></input>
                </div>
                

                <div className='group length'>
                    <label>Size</label>
                    <input type='range' onChange={handleLength} min='5' max={100} step='1' disabled={sorting} value={len}></input>
                </div>
                <button class= "randomize" onClick={generateRandomArray} disabled={sorting}>Generate New Array!</button>
                <select class = "selecter" onChange={handleAlgo} disabled={sorting} value={algo}>
                    <option value='bubbleSort'>Bubble Sort</option>
                    <option value='insertionSort'>Insertion Sort</option>
                    <option value='selectionSort'>Selection Sort</option>
                    <option value='mergeSort'>Merge Sort</option>
                    <option value='quickSort'>Quick Sort</option>
                </select>
            </div>            
            <div>
                <button class="glow-on-hover" onClick={handleSort} disabled={sorting || completed}>Sort!</button>
            </div>
        </div>
    </nav> 
    )
}

export default Toolbar