function countVolwels(someWord = "some word"){
    let volwelNum = 0
    for(let i=1; i<someWord.length; i++){
        if(someWord[i] === "a" ||someWord[i] === "o" || someWord[i] === "e" || someWord[i] === "i" || someWord[i]=== "u")volwelNum++
    }
    return volwelNum
}
console.log(countVolwels("Bobur Nuriddinov"))