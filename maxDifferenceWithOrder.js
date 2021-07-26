let arr = [2, 3, 10, 6, 4, 8, 1];

function maxDifferenceOrder(arr){
    let min = arr[0];
    let max = arr[0];
    let maxDiff = max - min;

    for(let i = 1; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            max = arr[i];
        } else if(arr[i] > max){
            max = arr[i];
        }

        if(max - min > maxDiff){
            maxDiff = max - min;
        }
    }
    return maxDiff;
}

console.log(maxDifferenceOrder(arr));
