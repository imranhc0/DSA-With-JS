//Adding Sum from an array

//you have been provide an array of number
//you have to sum the numbers


function sum (arr) {
    let result = 0;
    for(element of arr){
        result += element;
    }

    return result
}

console.log(sum([1,2,3,4,5,6]))