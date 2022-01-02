//Write a function called sunZero which accepts a sorted array of intergers. the function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

//more time consuming
function sumZero(input1){
    for(let i =0; i < input1.length;i++){
        for(let j = i+1; j < input1.length;j++){
            if(input1[i]+input1[j] === 0 ){
                console.log('found')
                console.log(input1[i],input1[j])
                return [input1[i],input1[j]];
            }
        }
    }
    console.log('not found')
}

//more efficient using two pointers
function sumZero(input1){
    let left =0;
    let right = input1.length-1;
    while(left < right){
        let sum = input1[left]+input1[right]
        if(sum === 0 ){
            console.log('found')
            console.log(input1[left],input1[right])
            return [input1[left],input1[right]];
        }else if (sum > 0){
            right --;
        }else if(sum < 0){
            left ++;
        }
    }
    console.log('not found')
}



//test cases
sumZero([-3,-2,-1,0,1,2,3])//[-3,3]
sumZero([-2,-1,0,3])//undefined
sumZero([1,2,3])//undefined
