

let inputArr = [5, 4, 2, 5, 1, 5, 3, 2, 1, 6, 7]

function findMax(a, b){
    if(a >= b){
        return a
    }
    return b;
}

function findMin(a, b){
    if(a<=b){
        return a
    }
    return b;
}

function leftMaxArr(arr){
    let resultArr = [];
    let currMax = arr[0];
    for(let i=1; i< arr.length-1;i++){
        if(arr[i]> currMax){
            currMax = arr[i]
        }
        resultArr.push(currMax);
    }
    return resultArr;
}

function rightMaxArr(arr){
    let resultArr = [];
    let currMax = arr[arr.length-1];
    for(let i = arr.length -2; i> 0; i--){
        if(arr[i] > currMax){
            currMax = arr[i]
        }
        resultArr.push(currMax);
    }
    return resultArr;
}


function trappingRainWater(arr){

    let waterAmount = 0;
    let leftMaxArray = leftMaxArr(arr);
    let rightMaxArray = rightMaxArr(arr);

    for(let i = 1; i< arr.length-1; i++){
        waterAmount += (findMin(leftMaxArray[i-1], rightMaxArray[i-1])  - arr[i]);
    }
    return waterAmount;
}



console.log(trappingRainWater(inputArr));


