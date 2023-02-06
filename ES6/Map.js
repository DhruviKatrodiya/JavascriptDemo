//Maps using iterable constructor
let name = {ename:"Dhruvi"},
    name2 = {ename:"Shilu"},
    name3 = {ename:"Krinal"}
let emp = new Map([
    [name,'Software Daveloper'],
    [name2,'Developer'],
    [name3,'CA']
])
console.log(emp)

//Checking size of the map
let daysMap = new Map()
daysMap.set('1','Monday')
daysMap.set('2','Tuesday')
daysMap.set('3','Wednesday')
daysMap.set('4','Thursday')
daysMap.set('5','Friday')
console.log("Size of the map : ",daysMap.size)

//WeakMap
let empMap = new WeakMap()
let e1 = {ename:'Dhruvi'},
    e2 = {ename:'Vidhi'},
    e3 = {ename:'Krinal'}

empMap.set(e1,1001)
empMap.set(e2,1002)
empMap.set(e3,1003)

console.log(empMap)
console.log(empMap.get(e2))
console.log(empMap.has(e2))
empMap.delete(e1)
console.log(empMap)

//Set
//Iterating a set
let names = new Set(['A','B','C','D'])
console.log('Foreach')
names.forEach(n => console.log(n))

console.log('for of...')

//iterate using for..of
for(let n of names){
    console.log(n)
}