---
title: Cheatsheet Array Javascript
author: Mansour Mahamat
date: 2020-08-07
hero: ./images/array2.jpeg
excerpt: The list of array methods I use most often in JavaScript.
---

### ARRAY LENGTH()
The length () method returns the length of the array.
```javascript
const array = ["hello", "world", "javascript", "array"];
array.length();

4
```

### ARRAY PUSH()
The push () method adds one or more elements to the end of an array and returns the new size of the array.
```javascript
const array = ["hello", "world", "javascript", "array"];
array.push("goodnight");

array = ["hello"," world"," javascript"," array", "goodnight"]
```

### ARRAY POP()
The pop () method removes the last element from an array and returns that element. This method changes the length of the array.
```javascript
const array = ["hello", "world", "javascript", "array"];
array.pop();

array = ["hello"," world"," javascript"]
```

### ARRAY UNSHIFT()
The unshift () method adds one or more elements to the start of an array and returns the new length of the array.
```javascript
const array = ["hello", "world", "javascript", "array"];
array.unshift("code", "everyday")

array = ["code", "everyday", "hello"," world"," javascript"," array"]
```

### ARRAY SHIFT()
The shift () method removes the first element from an array and returns that element. This method changes the length of the array.
```javascript
const array = ["hello", "world", "javascript", "array"];
array.shift()

array = [" world"," javascript"," array"]
```

### ARRAY FOREACH()
The forEach () method iterates through the array elements one by one to perform a function.
```javascript
const array = ["a", "b", "c", "d"];
array.forEach((element, index) => {
    console.log(`Element ${element} at index ${index} </br>`)  
} );

 Element a at index 0
 Element b at index 1
 Element c at index 2
 Element d at index 2
```

### ARRAY  FILTER()
The filter () method creates and returns an array containing the elements that check the filter.
```javascript
const array2 = [1, 2, 3, 4, 5];
filter = array2.filter(number => number >= 3);

filter = [3,4,5]
```

### ARRAY MAP()
The map () method returns a new array containing all the elements of the initial array on which the function is called.
```javascript
const array2 = [1, 2, 3, 4, 5];
const map = array2.map(number => number );
const mapWithCondition = array2.map(number => number * 2);

map = [1, 2, 3, 4, 5]
mapWithCondition = [2,4,6,8,10]
```

### ARRAY REDUCE()
The reduce () method applies a function which is an "accumulator" and which processes each value in the array (from left to right) to reduce it to a single value.
```javascript
const array2 = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const arrayReduce = array2.reduce(reducer );
const arrayReduceWithCondition = array2.reduce(reducer, 100 );

arrayReduce = 15
arrayReduceWithCondition = 115
```

### ARRAY SLICE()
The slice () method returns an array, containing a copy of part of the original array, the portion is defined by a start index and an end index (excluded). The original array will not be modified.
```javascript
const array = ["hello", "world", "javascript", "array"];
const slice = array.slice(1, 3);

slice = ["world", "javascript"]

```

### ARRAY CONCAT()
The concat () method is used to merge one or more arrays by concatenating them. This method does not modify existing arrays, it returns a new array which is the result of the operation.
```javascript
const array2 = [1, 2, 3, 4, 5];
const array3 = [6, 7, 8, 9, 10];
const arrayConcat = array2.concat(array3);

arrayConcat = [1,2,3,4,5,6,7,8,9,10]

```

### ARRAY JOIN()
The join () method creates and returns a new character string by concatenating all the elements of an array. The concatenation uses the comma or another string, supplied as an argument, as the separator.
```javascript
const array2 = [1, 2, 3, 4, 5];
const join = array2.join("-");

arrayConcat = [1-2-3-4-5]

```

### ARRAY REVERSE()
The reverse() method reverses an array. The first array element becomes the last, and the last array element becomes the first.
```javascript
const array2 = [1, 2, 3, 4, 5];
const reverse = array2.reverse();

reverse = [5, 4, 3, 2, 1];

```