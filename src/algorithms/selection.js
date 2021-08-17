const performSwap = (array, barOne, barTwo) => {
    const temp = array[barOne]
    array[barOne] = array[barTwo]
    array[barTwo] = temp
}

const doSelectionSort = (bars) => {
    const tempBars = bars.slice()
    const animations = []

    for (let i = 0; i< tempBars.length; i++) {
        for (let j = i + 1; j < tempBars.length; j++) {
            animations.push([i , j , null, null])
            if (tempBars[i] > tempBars[j]) {
                performSwap(tempBars, i, j)
                animations.push([i, j, tempBars.slice(), null])
            }
        }
        animations.push([null, null, null, i])
    }
    return animations
}

export default doSelectionSort