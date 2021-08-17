let animations = []

const doMerge = (tempBars, left, middle, right) => {
    let i = left, j = middle + 1

    const arr = []

    while((i <= middle) && (j <= right)) {
        animations.push([i, j, null, null])
        if (tempBars[i] <= tempBars[j]) {
            arr.push(tempBars[i++])
        }
        else {
            arr.push(tempBars[j++])
        }
    }

    while (i <= middle) {
        animations.push([i, null, null, null])
        arr.push(tempBars[i++])
    }

    while (j <= right){
        animations.push([null, j, null, null])
        arr.push(tempBars[j++])
    }

    for (i = left; i <= right; i++) {
        tempBars[i] = arr[i - left]
        animations.push([i, null, tempBars.slice(), null])
    }
}

const doMergeSortHelper = (tempBars, left, right) => {
    if (left >= right) {
        return 
    }

    const middle = Math.floor((left + right) / 2)

    doMergeSortHelper(tempBars, left, middle)
    doMergeSortHelper(tempBars, middle + 1, right)

    doMerge(tempBars, left, middle, right)
}

const merge = (bars) => {
    animations = []
    const tempBars = bars.slice()

    doMergeSortHelper(tempBars, 0, tempBars.length - 1)

    for (let i = 0; i < tempBars.length; i++) {
        animations.push([null, null, null, i])
    }

    return animations
}

export default merge