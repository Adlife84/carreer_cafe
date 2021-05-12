// Career cafe
// Coding Exercise 3- Array Flattening

const arr = ['a', ['b', 'c', ['d', 1]], 2, [3]];
// Result should be ['a', 'b', 'c', 'd', 1, 2, 3]

// go throght array and concat current variable with last one, if it is array run myFunction again else concat current variable with last one

function myFunction(arr) {
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? myFunction(cur) : cur), []);
};
 
const flateArr = myFunction(arr);
console.log(flateArr);


