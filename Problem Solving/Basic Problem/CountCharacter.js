//Count Character Each 
// Expected Input/Outpu
// "hello" = {h: 1, e: 1, l : 2, o: 1}

function countCharacter(inputStr){
    const countStr = {}
    for(let i = 0; i < inputStr.length; i++){
        //Typical if else Solution

        // if(inputStr[i] in countStr){
        //     countStr[inputStr[i]] += 1
        // }else {
        //     countStr[inputStr[i]] = 1
        // }

        //Alternet Solution with using JavaScript OR Operator
        // countStr[inputStr[i]] = ( countStr[inputStr[i]] || 0) + 1

        //Another Alternet Solution With Ternary Operator
        countStr[inputStr[i]] = countStr[inputStr[i]]? countStr[inputStr[i]] +1 : 1


    }
   
    return countStr
}
console.log(countCharacter("Hello"))
console.log(countCharacter("Mohammad Imran Hossen"))

