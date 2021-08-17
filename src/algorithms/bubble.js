const bubble = (bars) => {

    const tempBars = bars.slice()
    const animations = []

    let i, j

    for (i = 0; i < tempBars.length; i++) {
        for (j = 0; j < tempBars.length - i - 1; j++) {
            animations.push([j, j + 1, null, null])
            if (tempBars[j + 1] < tempBars[j]) {
                performSwap(tempBars, j, j + 1)
                animations.push([j, j + 1, tempBars.slice(), null])
            }
        }

        animations.push([null, null, null, j])
    }

    return animations
}

const performSwap = (array, barOne, barTwo) => {
    const temp = array[barOne]
    array[barOne] = array[barTwo]
    array[barTwo] = temp
}
export default bubble