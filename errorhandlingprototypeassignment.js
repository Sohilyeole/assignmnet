// //Q1 Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// // number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// // Use error handling in javascript to achieve this output.
// function convertToNumber(n){
//     let convert=parseInt(n)
//     if(isNaN(convert)==true){
//         console.log(`${n} is inavalid number`)
//     }

//     else{
//         console.log(convert)
//     }
// }
// convertToNumber("123456 ")

//Q3 Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.
class cardetail{
    constructor(c,m,y){
        this.company=c
        this.model=m
        this.year=y
    }
    getdescription(){
        console.log(`this is a ${this.year} ${this.company} ${this.model}`)
    }
}
const mycar=new cardetail("skoda","yatro",2022)
mycar.getdescription()

/////Q4Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.
 class Employee{
    constructor(n,p,s){
        this.name=n 
        this.position=p
        this.salary=s
    }
    getsalaray(){
        return this.salary
    }
 }
 const employee1=new Employee("sohil","manager",800000)
 console.log(employee1.getsalaray())

 /////////Q5Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person{
    constructor(n,a){
        this.name=n
        this.age=a
        if(a==undefined && n==undefined){
            this.age=0
            this.name="unknown"
        }
        
    }
    getdetail(){ 
        
        return(`Name: ${this.name}, Age: ${this.age}`)
    }
    
}

   

const person1=new Person("mithun",22)
console.log(person1.getdetail())
const person2=new Person()
console.log(person2.getdetail())

//////Q6Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.
class Calculator{
     
    constructor(a,b){
       this.firstnumber=a
        this.secondnumber=b
    }
     
        static add(x){ // yaha x ek pura object hai jise humne as parameter liya hai 
            return x.firstnumber+ x.secondnumber // x.firstnumber se us object ki value le rahe hai
            
        }
    
}
const cal=new Calculator(23,35)
 const result=Calculator.add(cal)   ///cal object static add function ke parameter me dal diYA
 console.log(result)
 ///////////////////////////////Q7Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.
 class user{
    #username
    #password
    constructor(u,p){
        this.#username=u
        this.#password=p
    }
    
    setpassword(r){
         let str=""
         let str2="*"
        if(r.length>=8 && r!=r.toLowerCase() ){
             let z=r.length
             for(let i=0;i<z;i++){
                 str=str.concat(str2)
             }
             this.#password=str;
        console.log(str)
        }
        else{
            console.log("pssword error is shold grater than 8 digit or atleast one Uppercase character ")
        }
       

    }
 }
const userinfo=new user("sohil","Sohilyeole")
userinfo.setpassword("sohilyeole")
userinfo.setpassword("Sohilyeoletwo")

