import React, { useState, useEffect } from 'react'
import './App.css'

//Components
import Toolbar from './components/Toolbar/Toolbar'
import Bars from './components/Bars/Bars'
import Legend from './components/Legend/Legend'
import TextArea from './components/TextArea/TextArea'

//Import Algorithms
import bubble from './algorithms/bubble'
import doInsertionSort from './algorithms/insertion'
import doSelectionSort from './algorithms/selection'
import merge from './algorithms/merge'
import doQuickSort from './algorithms/quick'

function App() {
  const generateArray = (len) => {
    setCompleted(false)
	setSorting(false)
	setSortedIndex([])

    const randomArray = Array.from(Array(len + 1).keys()).slice(1)

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randIndex = Math.floor(Math.random() * (i - 1))
      const temp = randomArray[i]

      randomArray[i] = randomArray[randIndex]
      randomArray[randIndex] = temp
    }

    setBlocks(randomArray)
  }

  //state initilization
  	const [algo, setAlgorithm] = useState('bubbleSort')
	const [len, setLength] = useState(30)
	const [blocks, setBlocks] = useState([])
	const [sorting, setSorting] = useState(false)
	const [completed, setCompleted] = useState(true)
	const [speed, setSpeed] = useState(250)
	const [compare, setCompare] = useState([])
	const [swap, setSwap] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])
  
  //Randomize the bars array whenever the length is changed
  useEffect(()=> {
    generateArray(len)
  }, [len, algo])

  //set user selected algorithm
  const AlgorithmHandler = (event) => {
    setAlgorithm(event.target.value)
  }

  //set user selected speed
  const handleSpeed = (event) => {
    setSpeed(Math.ceil(400 / Number(event.target.value)))
  }

  //set user selected length
  const handleLength = (event) => {
    setLength(Number(event.target.value))
  }
  const handleSort = () => {
		
		const sortAccOrder = (order) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = order[i]
					setCompare([j, k])
					setSwap([])

					if(index !== null){
						setSortedIndex((prevState) => (
							[...prevState, index]
						))
					}
		
					if(arr){
						
						setBlocks(arr)
						if(j !== null || k != null)
							setSwap([j, k])

					}

					if (++i < order.length){
						loop(i)
					} else {
						setSorting(false)
						setCompleted(true)
					}   
				}, speed)
			})(0)
			
		}

		setSorting(true)

		algo === 'bubbleSort' ? sortAccOrder(bubble(blocks)) : 
		algo === 'insertionSort' ?  sortAccOrder(doInsertionSort(blocks)) :
		algo === 'selectionSort' ? sortAccOrder(doSelectionSort(blocks)) :
		algo === 'mergeSort' ? sortAccOrder(merge(blocks)) : 
		algo === 'quickSort' ? sortAccOrder(doQuickSort(blocks)) : (() => {
			setSorting(false)
			setCompleted(true)
		})()
	}
  return (
    <div className="App">
			<Toolbar 
				generateRandomArray={() => generateArray(len)}
				handleLength={handleLength} 
				handleSpeed={handleSpeed}
				handleAlgo={AlgorithmHandler}
				handleSort={handleSort} 
				sorting={sorting}
				completed={completed}
				len={len}
				speed={speed}
				algo={algo}
			/>
			
			<Bars 
				blocks={blocks} 
				compare={sorting && compare}
				swap={sorting && swap}
				sorted={sortedIndex} 
			/>

			<Legend algo={algo}/>
			<TextArea algo={algo}/>
		</div>
  );
}

export default App;
