///you have been provided an array of number
//you have to maximum number and minmum number , and diference between min and max numbers

function minMax(arr){
    let min = arr[0]
    let max = arr[0]
    let dif = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min) {
            min = arr[i];
        }

        if(arr[i] > max) {
            max = arr[i];
        }
        
    }
    dif = max - min;
    console.log(min, max, dif)
}

console.log(minMax([1,25,36,4,5]))