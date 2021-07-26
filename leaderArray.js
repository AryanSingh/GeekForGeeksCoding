let array = [7, 10, 4, 10, 6, 5, 2];


class Solution{

    findLeader(arr){
        let leaderCount = 1;
        let max = arr[arr.length-1];
        for(let i = arr.length-2; i>=0; i--){
            if(arr[i] > max){
                leaderCount += 1;
                max = arr[i]
            }
        }
        return leaderCount;
    }
}

let soln = new Solution();


console.log(soln.findLeader(array));
