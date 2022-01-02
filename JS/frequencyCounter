//write a function called same, which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. the frequency of values must be same

function same(arr1, arr2){
    if(arr1.length != arr2.length)
    {
        return false;
    }
    let freqCounter1={}
    let freqCounter2={}
    for(let val of arr1){
        freqCounter1[val]= (freqCounter1[val]||0)+1
    }
    for(let val of arr2){
        freqCounter2[val]= (freqCounter2[val]||0)+1
    }
    
    for(key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false;
        }
    }
    return true;    
}

//Test case
same([1,2,3,2,5],[9,1,4,4]) // false
