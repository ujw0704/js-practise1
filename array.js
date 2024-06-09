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
const arry5 = [1, 2, 3, [4, 5, 6], 0, [7, 8, 9]];
const arrx1 = arry5.flat(Infinity);
console.log(arrx1);

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


//A JavaScript array's length property and numerical properties are connected.

// Several of the built-in array methods (e.g., join(), slice(), indexOf(), etc.) take into account the value of an array's length property when they're called.

// Other methods (e.g., push(), splice(), etc.) also result in updates to an array's length property.



const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3


// The following methods create new arrays by accessing this.constructor[Symbol.species] to determine the constructor to use: concat(), filter(), flat(), flatMap(), map(), slice(), and splice() (to construct the array of removed elements that's returned).


// Mutating method   	Non-mutating alternative
// copyWithin()  	No one-method alternative
// fill()	         No one-method alternative
// pop()	       slice(0, -1)
// push(v1, v2)	    concat([v1, v2])
// reverse()	   toReversed()
// shift()	       slice(1)
// sort()	       toSorted()
// splice()	        toSpliced()
// unshift(v1, v2)	   toSpliced(0, 0, v1, v2)

 // what is maution arry and non mutating arry?

//  mautation methods will changes and mutate orginal array 

// non- mutation
// will  return a new value but will give a copy of the new value instead of changing in orginal array









    
