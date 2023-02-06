//destructuring an array
let names = ["Dhruvi","Namrata","Kiran"]
let[n1,n2,n3] = names
console.log("Names : ",n1,n2,n3)

//rest operator with array destructuring
let locations = ["Mumbai","Hydrabad","Chennai"]
let[l1,...otherValues] = locations
console.log(l1)
console.log(otherValues)

//variables already declared
let name1,name2
[name1,name2] = names
console.log(name1)
console.log(name2)