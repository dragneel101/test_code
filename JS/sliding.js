//Write a function acalled maxSubarraySum which accepts an array of intergers and a number called n. the function shoould calculate the maximun sum of n consecutive elements in the array.
function maxSubarraySum(inputarr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(inputarr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += inputarr[i];
    }
    tempSum = maxSum;
    for(let i=num; i <inputarr.length;i++){
        tempSum = tempSum - inputarr[i-num]+inputarr[i];
        maxSum =Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
    return maxSum;
}

//Test Cases
maxSubarraySum([1,2,5,2,8,1,5],2)//10
maxSubarraySum([1,2,5,2,8,1,5],4)//17
maxSubarraySum([4,2,1,6],1)//6
maxSubarraySum([4,2,1,6,2],4)//13
maxSubarraySum([],4)//null
