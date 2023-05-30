function isPalindrom(word){
    let value = "Bu so'z palindrom."
    for(i=0; i<word.length/2; i++){
        if(word[i] !== word[word.length-i-1]) value = "Bu so'z palindrom emas."
    }
    return value
}
console.log(isPalindrom("Bobur Nuriddinov"))