let animations = []

const performSwap = (array, barOne, barTwo) => {
    const temp = array[barOne]
    array[barOne] = array[barTwo]
    array[barTwo] = temp
}

const doPartition = (tempBars, left, right) => {
    const pivotPoint = left
    let j = left
    
    for (let i = left + 1; i <= right; i++) {
        animations.push([i, pivotPoint, null, null])
        if (tempBars[i] < tempBars[pivotPoint]) {
            j += 1
            performSwap(tempBars, i, j)
            animations.push([i , j, tempBars.slice(), null])
        }
    }

    performSwap(tempBars, pivotPoint, j)
    animations.push([pivotPoint, j, tempBars.slice(), null])
    animations.push([null, null, null, j])
    return j
}

const doQuickSortHelper = (tempBars, left, right) => {
    if (left >= right) {
        if (left === right) animations.push([null, null, null, left])
        return
    }

    const pivotPoint = left + Math.floor(Math.random() * (right - left))

    performSwap(tempBars, left, pivotPoint)
    animations.push([left, pivotPoint, tempBars.slice(), null])

    const middle = doPartition(tempBars, left, right)

    doQuickSortHelper(tempBars, left, middle - 1)
    doQuickSortHelper(tempBars, middle + 1, right)

    return
}

const doQuickSort = (bars) => {
    const tempBars = bars.slice()
    animations = []

    doQuickSortHelper(tempBars, 0, tempBars.length - 1)

    return animations
}

export default doQuickSort