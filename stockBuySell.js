let arr = [1, 5, 3, 8, 12];


function findMax(arr){
    let profit = 0;

    for(let i=0; i< arr.length; i++){
        if(arr[i-1] && arr[i]> arr[i-1]){
            profit += arr[i] - arr[i-1]
        }
    }
    return profit;
}


console.log(findMax(arr));