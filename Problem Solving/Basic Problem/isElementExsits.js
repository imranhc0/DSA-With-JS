// Compare arr1 and arr2 and find the match
// if any match found then return true otherwise return false

// Expected I/O
// ['a', 'b', 'c'], [1, 2, 3, 'z'] == False
// ['a', 'b', 'c'], [1, 2, 3, 'c'] == True

//Complexity of this code
//Time - O(m + n)
//Space - O(n)

function isElementExists(arr1, arr2) {
    const hashMap = {}
    
    for(element of arr1){
        hashMap[element] = element
    }

    for(elem of arr2){
        if(elem in hashMap){
            return true
        }
    }
    
    return false;
    //output
  }



// //Complexity of this code
// //Time - O(n)2
// function isElementExists(arr1, arr2) {
    
//     for(element of arr1){
//         for(elem of arr2) {
//             if(element === elem){
//                 return true
//             }
//         }
//     }
//     return false
   
//   }
  
  console.log(isElementExists(['a', 'b', 'c'], [1, 2, 3, 'z']))
  console.log(isElementExists(['a', 'b', 'c'], [1, 2, 3, 'b']))