import React from 'react'
import './TextArea.css'
// import './test.scss'

const TextArea = ({algo}) => {
    return (
        
        <div className='SortInfo'>
                <hr/>
                <h1>{algo=== 'bubbleSort' ? <>Bubble Sort</>:
                                                    algo === 'insertionSort' ?  <>Insertion Sort</>:
                                                    algo === 'selectionSort' ?  <>Selection Sort</>:
                                                    algo === 'mergeSort' ? <>Merge Sort</>: 
                                                    algo === 'quickSort' ? <>Quick Sort</> : null}</h1>
                <div class="SortInfo_Body">
                    <div className="SortInfo__Article">
                        <h3>Outline</h3>
                        <p> {algo === 'bubbleSort' ? <><b>Bubble Sort</b> is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order. Due to its simplicity, bubble sort is often used to introduce the concept of a sorting algorithm. In computer graphics it is popular for its capability to detect a very small error (like swap of just two elements) in almost-sorted arrays and fix it with just linear complexity (2n). For example, it is used in a polygon filling algorithm, where bounding lines are sorted by their x coordinate at a specific scan line (a line parallel to x axis) and with incrementing y their order changes (two elements are swapped) only at intersections of two lines. <br></br><br></br>Source: <a href="https://www.geeksforgeeks.org/bubble-sort/">Geeks for Geeks</a></> : 
                                            algo === 'insertionSort' ? <><b>Insertion sort</b> is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array. <br></br><br></br>Source: <a href = "https://www.geeksforgeeks.org/insertion-sort/">Geeks for Geeks</a></>: 
                                            algo === 'selectionSort' ? <>The <b>Selection sort</b> algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.<br></br><br></br>1) The subarray which is already sorted.<br></br>2) Remaining subarray which is unsorted.<br></br><br></br>In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.<br></br><br></br>Source: <a href="https://www.geeksforgeeks.org/selection-sort/">Geeks for Geeks</a></> :
                                            algo === 'mergeSort' ? <>Like Quick Sort, <b>Merge Sort</b> is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. <br></br><br></br> Source: <a href="https://www.geeksforgeeks.org/merge-sort/">Geeks For Geeks</a></> : 
                                            algo === 'quickSort' ? <>Like Merge Sort, <b>Quick Sort</b> is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. <br></br><br></br> 1. Always pick first element as pivot. (Demonstrated above)<br></br>2. Always pick last element as pivot<br></br>3. Pick a random element as pivot.<br></br>4. Pick median as pivot. <br></br><br></br>The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time. <br></br><br></br>Source: <a href="https://www.geeksforgeeks.org/quick-sort/">Geeks for Geeks</a></> : null}
                        </p>
                    </div>
                    <div className = "SortInfo__Aside">
                        <h3>Performance</h3>
                        <table align="center">
                            <tbody>
                                <tr>
                                    <td>Worse-case time complexity: </td>
                                    <td>
                                        <code>
                                            <span>
                                                {algo=== 'bubbleSort' ? <>O(n<sup>2</sup>)</>:
                                                    algo === 'insertionSort' ?  <>O(n<sup>2</sup>)</>:
                                                    algo === 'selectionSort' ?  <>O(n<sup>2</sup>)</>:
                                                    algo === 'mergeSort' ? <>O(n log n)</>: 
                                                    algo === 'quickSort' ? <>O(n<sup>2</sup>)</> : null}
                                            </span>
                                        </code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Average time complexity: </td>
                                    <td>
                                        <code>
                                            <span>
                                                {algo=== 'bubbleSort' ? <>O(n<sup>2</sup>)</>:
                                                    algo === 'insertionSort' ?  <>O(n<sup>2</sup>)</>:
                                                    algo === 'selectionSort' ?  <>O(n<sup>2</sup>)</>:
                                                    algo === 'mergeSort' ? <>O(n log n)</>: 
                                                    algo === 'quickSort' ? <>O(n log n)</> : null}
                                            </span>
                                        </code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Best-Case time Complexity: </td>
                                    <td>
                                        <code>
                                            <span>
                                                {algo=== 'bubbleSort' ? <>O(n)</>:
                                                    algo === 'insertionSort' ?  <>O(n)</>:
                                                    algo === 'selectionSort' ?  <>O(n<sup>2</sup>)</>:
                                                    algo === 'mergeSort' ? <>O(n log n)</>: 
                                                    algo === 'quickSort' ? <>O(n log n)</> : null}
                                            </span>
                                        </code>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Worst-case space complexity: </td>
                                    <td>
                                        <code>
                                            <span>
                                                {algo=== 'bubbleSort' ? <>O(1)</>:
                                                    algo === 'insertionSort' ?  <>O(1)</>:
                                                    algo === 'selectionSort' ?  <>O(1)</>:
                                                    algo === 'mergeSort' ? <>O(n)</>: 
                                                    algo === 'quickSort' ? <>O(log n)</> : null}
                                            </span>
                                        </code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>   
    )
}

export default TextArea