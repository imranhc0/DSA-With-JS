# Array and Object Complexity

## Array Complexity

- Access by index O(1)
- Adding item/element at the end of the array O(1)
- Removing element from end of the array time complexity O(1)
- Adding element at the beginning O(n)
- Removing element at the beginning O(n)
- Finding element from an array O(n)
- Array Methode forEach, map, filter, reduce, slice, splice O(n)

## Object Complexity

- Accessing element O(1)
- Adding/inserting element O(1)
- Delete/removal element O(1)
- Traversing Object O(n)

## When to use array & when to use Object

### When to use array

- When order is important
- When you need faster access (by index)
- Adding or removal(at the end)

### When to use Object

- When order isn't important
- When you need faster access or removal

# Problem Solving approach

### 1. understanding the problem

- restate the problem in own words
- what are the input and outputs
- Is there enough information to solve the problem
- Thinking of labelling data (don't use random label like i, j, k, a, b)
- checking the example with invalid, empty input

---

> Write the problem that takes 2 numbers and returns the sum?

---

```javascript
//writing a function that takes /two number and returns the sum
function sum(num1, num2) {
  //output
}
sum(10, 15);
```

### 2.Note own the details like input, output

### 3. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).

### 4. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)

### 5. Walk through your approach, comment things and see where you may be able to break things.

### 6. Before you start coding, walk through your code and write down the steps you are going to follow

### 7. breakdown the steps and commenting is the ultimate key,Rundown of thinking process, steps. Breaking down the code will you give you the extra advantage

### 8.start coding (simplify as necessary)

### 9. can you write it better in terms of readability, time, space complexity?

### 10. If your interviewer is happy with the solution, the interview usually ends here. It is also Common that the interviewer asks you extension questions

> Write a function which takes in a string and returns counts of each character in the string.

```javascript
//writing a function that takes /two number and returns the sum
function countCharacter(inputStr) {
  //output
}
countCharacter("Hello");
```

> checking the element exists between two array

function countCharacter(inputStr){
//output
}
countCharacter("Hello")

```javascript
function isElementExists(arr1, arr2) {
  //output
}
isElementExists(["a", "b", "c"], [1, 2, 3, "z"]);
```
