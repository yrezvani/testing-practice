function analyzeArray(arr) {
    let sum = 0;
    let currentMin = arr[0];
    let currentMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (arr[i] < currentMin) currentMin = arr[i];

        if (arr[i] > currentMax) currentMax = arr[i];

    }

    const average = parseFloat((sum / arr.length).toFixed(2));;
    const min = currentMin;
    const max = currentMax;
    const length = arr.length;


    
    return {
        average: average,
        min: min,
        max: max,
        length: length

    }
}

module.exports = analyzeArray;
