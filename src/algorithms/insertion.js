const performSwap = (array, barOne, barTwo) => {
    const temp = array[barOne]
    array[barOne] = array[barTwo]
    array[barTwo] = temp
}

const doInsertionSort = (bars) => {
    const tempBars = bars.slice()
    const animations = []

    for (let i = 0; i < tempBars.length; i++) {
        let j = i - 1
        while (tempBars[j] > tempBars[j + 1] && j >= 0) {
            performSwap(tempBars, j, j + 1)
            animations.push([j, j + 1, null, null])
            animations.push([j, j + 1, tempBars.slice(), null])
            j -= 1
        }
    }

    for (let i = 0; i < tempBars.length; i++) {
        animations.push([null,null,null,i])
    }

    return animations
}

export default doInsertionSort