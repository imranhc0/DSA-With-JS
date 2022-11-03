// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(num) {
    let flag = num.toString().split("").reverse().join("")
    if(flag.endsWith("-")){
        flag = '-' + flag.slice(0,flag.length-1)
    }
    return Number(flag)

    
}

console.log(reverseInt(-36))