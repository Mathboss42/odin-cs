function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const left = array.splice(0, array.length / 2);
        const right = array;
        const toMergeLeft = mergeSort(left);
        const toMergeRight = mergeSort(right);
        return merge(toMergeLeft, toMergeRight);
    }
}


function merge(leftArray, rightArray) {
    let i = 0;
    let j = 0;
    let k = 0;

    let bufferArray = [];

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            bufferArray[k] = leftArray[i];
            i++;
            k++;
        } else {
            bufferArray[k] = rightArray[j];
            j++;
            k++;
        }
    }
    for (i; i < leftArray.length; i++) {
        bufferArray[k] = leftArray[i];
        k++;
    }
    for (j; j < rightArray.length; j++) {
        bufferArray[k] = rightArray[j];
        k++;
    }

    return bufferArray;
}


console.log('mergeSort', mergeSort([5, 2, 6, 3, 7, 120, 22, 18, 18, 9, 8, 4, 3]));