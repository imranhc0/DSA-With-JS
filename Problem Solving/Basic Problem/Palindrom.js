//check provided string is palindrome
//if palindrome return true otherwise false
//non-alphanumeric characters should be ignored
//palindrome(“race car”) should return true
// palindrome(“not a palindrome”) should return false


function palindrome(str) {
    const re = /[\W_]/g
    const normalizeStr = str.toLowerCase().replace(re, "")
    const revStr = normalizeStr.split("").reverse().join("")
    return revStr === normalizeStr 

}

console.log(palindrome("race car"))