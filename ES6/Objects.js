//object initializers
var person = {
    firstname:"Dhruvi",
    lastname:"Katrodiya",
    func:function(){ return "Hello! "}
}

//access the object values
console.log(person.firstname)
console.log(person.lastname)
console.log(person.func())

//code snippet defines an object baz
var foo = "bar"
var baz = {foo:foo}
console.log(baz.foo)

//Using a Function Constructor
function Car(){
    this.make = "Ford"
    this.model = "F123"
}
var obj = new Car()
console.log(obj.make)
console.log(obj.model)

//The Object.create Method
var roles = {
    type: "Admin",
    displayType : function(){
        console.log(this.type)
    }
}
// Create new role type called super_role 
var super_role = Object.create(roles)
super_role.displayType()

// Create new role type called Guest 
var guest_role = Object.create(roles)
guest_role.type = "Guest"
guest_role.displayType()

//The Object.assign() Function
"use strict"
var det = { name:"Dhruvi",ID:"1001"}
var copy = Object.assign({},det)
console.log(copy)
for(let val in copy){
    console.log(copy[val])
}


//Object De-structuring
//destructuring refers to breaking up the structure of an entity
let student = {
    roll:20,
    name:'Dhruvi',
    cgpa:7.4
}
//destructuring to same property name
let {name,cgpa} = student
console.log(name)
console.log(cgpa)
//destructuring to different name
let {name:student_name,cgpa:student_cgpa} = student
console.log(student_cgpa)
console.log("Student Name : ",student_name)