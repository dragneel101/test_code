//Implement a function called countuniqueValues,which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted.
function countUniqueValues(input1){
    let point1 =0;
    let point2=0;
    let unique=0;
    if(input1.length !=0){
        unique++;
    }
    else{
        console.log(unique);
        return unique;
    }
    for(point1; point1< input1.length;point1++){
        if(input1[point1] !== input1[point2]){
            unique++;
            point2 = point1
        }
    }
    console.log(unique);
    return unique;
}

//Test cases
countUniqueValues([1,1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])//7
countUniqueValues([])//0
countUniqueValues([-2,-1,-1,0,1])//4
