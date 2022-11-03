//string reversal
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    //const revStr = str.split("").reverse().join("") //Very short Way to reverse a String

    let revStr = ''
    for(let i = str.length - 1; i >= 0; i--){
        revStr =  revStr + str[i];
    }


    return revStr;

}

console.log(reverse('hello'))
console.log(reverse('Greetings! samim'))
//olleh