// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//n * 5
//a,e,i, o, u


function vowels(str){
    let count = 0
    
    for(let i =0; i < str.length; i++){
        count += str[i] === 'a' && 1 ||  str[i] === 'e'&& 1 ||  str[i] === 'i' && 1 ||  str[i] === 'o'&& 1 ||  str[i] === 'u' && 1
    }

    return count


}

console.log(vowels('Why do you ask?'))
console.log(vowels('Hi There!'))