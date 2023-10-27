// // Q1. Double using callback.
// // Write a function that takes in an array of integers and a callback function, and returns a new array where each
// // element is doubled using the callback.
 
// function doublearray(x,fun){///here fun is call back
//    ///here x is an array 
//    fun(x);
// }
// function fun1(x){
// newarray=[]
// x.forEach((element)=>{
    
//   newarray.push( element*2) 
// })
//   console.log(newarray)

// }
// result([11,12,13,13,15,16],fun1)

// // Q2. String Manipulation.
// // Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// // function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// // with the manipulated string or the new string to the console.
// function manipulateString(str,callback){///str me sohil gaya ,callback me logstring funtion gaya 
//    newstr= str.toUpperCase()  //newstr me str uppercase hokar newstr ban gya
//    callback(newstr)  //callback function ko call kiya with usme newstr value pass krdiya ,callback me hi lostring function hhai
// }
// function logString(x){
//     console.log("The manipulated string is:",x) ///final result ye line degi
// }
// manipulateString("sohil",logString)

// // Q3. Age in Days.
// // Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// // name, and age in years as input. The function should concatenate the first and last name into a single string
// // and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// // variable called ageInDays.
// // The ageInDays function should then return a callback function that logs a message to the console. The
// // message should include the person's full name and age in days, and should be in the format: "The person's full
// // name is [full name] and their age in days is [age in days]."
// // Note that the ageInDays function should not log the message to the console directly, but should instead return
// // a callback function that can be used to log the message at a later time.

// let person={
//     name:"sohil",
//     lastname:"yeole",
//     age:14

// }//// here we create an object whos name is person

// function  ageInDays(x,callback){//in x store person which is an object and callback means it store function logresult
//     let fullName=person.name+person.lastname  //fullname is variable 
//     let ageindays=person.age*365 //ageindays is also variable
//     callback(fullName,ageindays) //we pass these two variable value into the function logresult

// }
// function logResult(x,y){ //here x contain fullname and y contain ageindays variable value
//     console.log(`The person's full name is ${x}, and their age in days is ${y}`)
// }
// ageInDays(person,logResult)


// // Q4. Arrange in alphabetical order.
// // Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// // function. The program should use the map function to create a new list containing only the titles of the books,
// // and then pass this new list to the callback function. The callback function should then log the titles to the
// // console in alphabetical order.
// let list=[
// {title: "wings of fire",
// author:"apbj abdul kalam",
// year:2008},
// {title: "The India Story",
// author:"Bimal Jalal",
// year:2010},
// {title: "Listen to Your Heart: The London Adventure",
// author:"Ruskin Bond",
// year:2018},
// {title: "Business of Sports: The Winning Formula for Success",
// author:"Vinit Karnik",
// year:2020}
// ]
// function titleslist(a,callback){
//     newlist=[]
//     a.map((e)=>{
//         newlist.push(e.title)

//     })
//     sorted(newlist)

// }
// function sorted(x){  ///x contain newlist array 
//     let  sorted=[] ///from this line is the sorting to string 
//     let result=[]
//  x.forEach((ele)=>{
//    let z= ele[0].charCodeAt(0)
//    sorted.push(z)
  
// })
// for(let i=0;i<sorted.length-1;i++){
//     for(let j=0;j<sorted.length;j++){
//         if(sorted[j]>sorted[j+1]){
//         let temp=sorted[j]
//       sorted[j]=sorted[j+1]
//     sorted[j+1]=temp
//     }
//     }
    
// }
// for(i=0;i<sorted.length;i++){
       
//     x.forEach((ele)=>{
//          //  console.log(ele[0])
//          //   console.log(sorted[i])
//         if( ele[0].charCodeAt(0)==sorted[i]){
          
//             result.push(ele)
//         }
//     })
      
// }
//   console.log(result)
// }
// titleslist(list,sorted)

// // Q5. Greeting Promise.
// // You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// // message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// // For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".
//  function createpromise(x){
//     return new Promise((resolve, reject) => {
//        console.log("hellow,",x)
//     })
    
//  }
 
//  createpromise("sohil")

// // Q6. Fetch results asynchronously.
// // Write a function that asynchronously fetches data from an API
// // [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(function f (responce){
//    return responce.json() //ise return data hoga jo ek object ki form me hoga
// })
// .then(function f(value){
//    console.log(value) ///  value ek data hai to object hai
//    console.log(value.id)  //isliye obj.id ki value ko print kr pa rhe hai
// })

// Q7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.
// async function getdata(){
   
// const[data1,data2]= await Promise.all ( /// await promise.all se pehle sara dataload hoga  ye nahi lika to pending dikhayega
//    [fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{return response.json()}),
// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{return response.json()})]
// )
//  const combineddata={  //yaha ek object banaya cobindadname se jisme todo me first data rha post me second
//    todo:data1,
//    post:data2
//  }
//  return combineddata;


// }
// getdata().then((value)=>{console.log(value)})  //yaha response jo api se liya hai uski values ko fetch kiy hai