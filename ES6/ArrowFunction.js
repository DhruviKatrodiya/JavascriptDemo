//two function expressions add and isEven using arrow function
const add = (n1,n2) => n1 + n2
console.log(add(10,20))

const isEven = (n1) => {
    if(n1%2 == 0)
        return true
    else
        return false
}
console.log(isEven(20))

//Array.prototype.map() and arrow function
const names = ['Dhruvi','Namrata','Shilu','Prarthna']
names.map((element,index) => {
    setTimeout(()=>{
        console.log("Inside Arrow Function")
        console.log("index is " + index + " element value is : " + element)
    },1000)
    
})

//Arrow function and “this”

//constructor function
function Student(rollno,firstname,lastname){
    this.rollno = rollno
    this.firstname = firstname
    this.lastname = lastname
    this.fullnameAnonymous = function(){
        setTimeout(function(){
            console.log(this.firstname + " " + this.lastname)
        },2000)
    }
    this.fullnameArrow = function(){
        setTimeout(() => {
            console.log(this.firstname + " " + this.lastname)
        },3000)
    }
}
const s1 = new Student(101,"Dhruvi","Katrodiya")
s1.fullnameAnonymous()
s1.fullnameArrow()