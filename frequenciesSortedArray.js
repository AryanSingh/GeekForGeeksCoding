let arr = [10, 10, 10, 30, 30, 40];

function countFrequency(arr){
    let countOjb = {};
    arr.forEach((item) => {
        if(countOjb[item]){
            countOjb[item] += 1
        }else {
            countOjb[item] = 1
        }
    });
    return countOjb
}

console.log(countFrequency(arr));