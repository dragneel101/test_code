\\Given two strinbgs, write a function to determine if thge second string is an anagram of the first. An anagram is a word,phrase, of name formed by rearrangig the letters of another such as cinema, formed from iceman

function validAnagram(input1,input2){
    if(input1.length != input2.length){
        console.log("false due to not matching length")
        return false;
    }
    let counter1={}
    let counter2={}
    for (let char of input1){
        counter1[char]=(counter1[char] || 0)+1
    }
    for (let char of input2){
        counter2[char]=(counter2[char] || 0)+1
    }
    
    for(key in counter1){
        if(!(key in counter2)){
            console.log("false due to no same alpha")
            return false;
        }
        if(counter2[key] != counter1[key]){
            console.log("false due to no same alpha frequency")
            return false;
        }
    }
    console.log(counter1)
    console.log(counter2)
    console.log("true")
    return true;
}

//test Case
validAnagram("appless","ppleasa")//false
