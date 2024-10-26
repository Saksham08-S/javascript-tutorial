// array

const myarr=[0,1,2,3,4,5]
const myheroes=['luffy','naruto','ichigo']
console.log(myarr[0]);      // accessing elements through array indexes
console.log(myheroes[1]);

// second way of declaring array
const arr=new Array(1,2,3,4)

// array methods

arr.push(6)             // add value at the end of array
console.log(arr);
arr.pop()             // deletes value from the end of the array
console.log(arr);
arr.unshift(9)         // adds a element at the starting of the array 
console.log(arr);
arr.shift()           // removes a element from the start
console.log(arr);

console.log(myarr.includes(9));     // returns true or false if the elemnt is in the array or not
console.log(myarr.indexOf(5));      // returns the index of the elment

const newArr=myarr.join()           // binds all the element int he array into a string
console.log(newArr);
console.log(typeof(newArr));      // string

// slice and splice

console.log("A",myarr);
const myn1=myarr.slice(1,3)     // 3 index is not included only from 1 to 2   [1,2] origanal arry is not  changed  [0,1,2,3,4,5]
console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)    // it changes the oringinal array   [0,4,5]
console.log("C",myarr);

console.log(myn2);





