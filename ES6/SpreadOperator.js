//the spread operator is represented by three dots(...). It is a converts an array into individual array elements
function addNumbers(a,b,c){
    return a + b + c
} 
const arr = [10,20,30]
console.log('Sum is : ',addNumbers(...arr))
console.log('Sum is : ',addNumbers(...[1,2,3]))

//Spread Operator Array Copy and Concat
//copy array using spread operator
let source_arr = [10,20,30]
let dest_arr = [...source_arr]
console.log("Copied array : ",dest_arr)

//concatenate two arrays
let arr1 = [10,20,30]
let arr2 = [40,50,60]
let arr3 = [...arr1,...arr2]
console.log("Concatenate 2 arrays : ",arr3)

