const nam = ["ujwal", "kushal", "ritu"]
const anothername =["swwen", "vikas", "sachin"]

console.log(nam)
console.log(anothername)

// nam.push(anothername) 
// //push add array to the end of pervious array and add a length 
//  //add element
//  console.log(nam);

 const  nam2 = nam.concat(anothername)
 //contact  two array using concat method  and give a new array 
 console.log(nam2)

 const sp = [...nam, ...anothername] 
//  more pefered is spred concat n spread 
 const arry4 = [1, 2 ,3, [4,5, 6] ,0,[7, 8, 9]]
 const  arrx = arry4.flat(Infinity)
 console.log(arrx)
// const arry4 = [1, 2, 3, [4, 5, 6], 0, [7, 8, 9]];
// const arrx = arry4.flat(Infinity);
// console.log(arrx);

// array isarray give boolen value 
console.log(Array.isArray(arry4));

console.log(Array.from("ujwal"));
//converting to  string 
console.log(Array.from({name:"ujwal"}))
// we can achive dis by using one object methods
// console.log(Array.from(Object.entries({name:"ujwal"}))[0][1].split('').join('-'))
//how can we achive dis 

// console.log(Array.from(Object.entries({name: "ujwal"})).flatMap(([key, value]) => value.split('')).join('-'));

//finding max elemnt in array
// const numb= [5, 9, 2, 7];
// let max = Math.max(...numb);
// console.log(max);

const score1 =800
const score2 = 600
const score3 = 700
console.log(Array .of(score1, score2, score3))
// Returns a new array from a set of elements.

// @param items — A set of elements to include in the new array object.
const obj ={
    name : "John",
    symbol:"key"
}
console.log(obj.symbol);

//arry to object

let na =["ram", "shyama", "kamal"]
let ob= {}
 na.map((key , value)=>{
    obj[na] =value;

})
console.log(ob)


//json+ object 
// destructing
const person={
    firstName: 'Ujjal',
    lastName:'Kumar',
    age:42

}
const   {firstName,lastName}= person ;
console.log(person)

//json dosnt hold name it can be direcltly return













    
