## Introduction To Big O Notation

#### What is Big-O Notation?

Big-O is a standard mathematical notation that shows how efficient an algorithm is in the worst-case scenario relative to its input size. To measure the efficiency of an algorithm, we need to consider two things:

- #### Time Complexity: How much time does it take to run completely?
- #### Time Complexity: How much time does it take to run completely?

Big-O notation captures the upper bound to show how much time or space an algorithm would require in the worst case scenario as the input size grows. It is usually written as:

```
 f(n)=O(inputSize)

```

## How is complexity calculated?

Time complexity is determined by taking two factors into account: the input size and the solution of the algorithm. Here’s a generic way to calculate the complexity:

- List down all the basic operations in the code
- Count the number of times each gets executed
- Sum all the counts to get an equation in terms of n

# Example:

Based on input number operation increases roughly proportionally

- input 3 - operation 2
- input 4 - operation 3
- conclusion - O(n)
- Liner Time

```
function addThree(num1, num2, num3, num4) {
       return num1 + num2 + num3 + num4
 }
 console.log(addThree(10, 15, 20, 100))
```

This Function Operation increases how input grows.

- conclusion - O(n)
- Liner Time

```
function log(n){
    let count = 0
    for(let i = 0; i < n; i++){
        count ++
        console.log(i)
    }
    console.log(count)
}
log(12)
```

To understand what Big O notation is, we can take a look at a typical example, O(n²), which is usually pronounced “Big O squared”. The letter “n” here represents the input size, and the function “g(n) = n²” inside the “O()” gives us an idea of how complex the algorithm is with respect to the input size

- 4^2 = 16
- Big O(n^2)
- Quadratic Time

```
function log(n){
    let count = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j)
            count ++
        }

    }
    console.log(count)
}
log(4)
```

In the case of cubic complexity, the processing time of an algorithm is proportional to the cube of the input elements. The complexity of the following algorithm is 10*10*10 = 1,000. The three loops have a maximum of 10. The cubic complexity for a matrix update is O(n3).

- This Fn complexity grows inputs exponents of 3.
- Big O(n^3)
- Cubic Times

```
function log(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      for (let k = 0; k < n; k++) {
        console.log(i, j, k)
      }
    }
  }
}
log(10)
```

If an algorithm's time complexity is constant, it means that it will always run in the same amount of time, no matter the input size.

- Big O(1)
- Constant Times

```
function addItems(n) {
  console.log(n + n + n)
}

add(10)

```

## Author

- [@mohammadimran-h90](https://github.com/mohammadimran-h90)
