//coverstion

let score = 33
console.log(typeof (score)) 

let sc = "33abc"
console.log(typeof (sc))
// covertimg to number
let  numScore = Number(sc)
console.log(numScore) 

// you chnage the Number

let k = null
console.log("null", typeof(k), Number.isNaN(k));
let l= undefined
console.log( typeof(k))
console.log (typeof(l));
console.log( isNaN(l));
console.log(  typeof(isNaN(l)));

// if you  use isNan it will return true because Und
// efined is not a value but a type of data in JS

let isloggedIn = 1
console.log(( typeof(isloggedIn)))
// conerting number to boolen 
let bol = Boolean(1)
console.log((bol))
let str ="hello world"
console.log(typeof(str),Number(str))
// how to convert string to number
let nmbr = parseInt(str,
    2)
    console.log(nmbr);
    // another way to do that
    let nmbrTwo = +'456'
    console.log(nmbrTwo)
    // converting String to array
    let arrStr="Hello World"
    let r =[...arrStr]
    console.log(r)
    let a = arrStr.split(",")
    console.log( a)
    //there are two way we can get one by split others by  charCodeAt()
    console.log( a[0].charCodeAt())
   // now lets join them back together
    let j = a.join(",");
    console.log( j)
    // how to use map here
    a = a.map((e)=>
    e+ '!!')
    console.log(a)
    // how to join an array into one string

    console.log(a)
    console.log( typeof a)

    let arr=[...arrStr].join().split(",").slice(0,5)
    console.log(arr)
    console.log( typeof arr)
    console.log(arr)

    let st = arrStr.split(",")
    console.log( typeof st)
    let ar =arr.join()
    // array to string
    let nam = ["ujwal","sween", "vikas"]
    let joinName =nam.join(' ,')
    console.log( joinName)
   
    

    
   



    // how to join an Array to String
    let jntArr= arr.join(" ")
    console.log(jntArr)

    //**************************opeations********************************/

    let value = 3
    let negvalue = -value
    console.log(negvalue)

    // perfix post fix 
    let nubs = 4
    // nubs++ // postfix is recemdomanded to use because we cn it it to update
    ++nubs // prefis is not recomended be it can the the inital value as well  mdn doc
    console.log(nubs)
 
//************************comparison********************************//

console.log(null ==0)// false specical methods
console.log(null>= 0)// true
console.log(null > 0)// false

console.log("2">=1) // we shuld aviod all this


// data type  summmury 


 // primitive // non primitive

 //7  type it is call by value primitve string, number boolen , null ,undefined ,symbol is umquie
 // bignit scentific

 // non primitive is refance   allocated in memory is the body // array on object function
 // data type of non primitive  is always a object

 const object1 = {
    key: "value",
  };
  
  const object2 = {
    key: "value",
  };
  
  console.log(object1 != object2); // true
  console.log(object1 != object1); // false
  
  // js is dyamic or static
  // is dyamic typed language 


 // stack heap

 //*************************************************//
 // there are two type of memory stack(primetive)(copy) or heap (non-primetive)(refance  change in original value) //

 let na = "ujwal"
 let o = na
 u =  "shree"

 console.log(o); //ujwal
 console.log(u); //shree
 //***************when variable store in memory
 //**************************************************/
 let x = 4;
 let y = x;

 let user1={
  name :"ujwal",
  age :15,
  }
let user2=user1;
user2.name = "kushal"
console.log("User1");
console.log(user1.name)
console.log(user1.age)
console.log(user2.name) 

console.log(user2.age)

//***********************************string**********************************/

//""  '' single and double quotes are same but use of "" is more popular because it looks good

let strs="HELLO WORLD";
let repoCount = 50;
console.log(`I have ${repoCount} repositories name is ${strs.toLowerCase()}`)

 let nsstr = new String("sween");
console.log((typeof nsstr)); //object
console.log(nsstr.length); 
    //H
    console.log(nsstr[0]); 
    console.log(nsstr.indexOf("e")) 
    //*******************substring */
    console.log(nsstr.substring(0,3))   // sween // we cnt be nagative
    //*****************slice() method **************************
    console.log(nsstr.slice(-4 ,3))     // swen
    //*********************************replace */
    let url = 'https://github.com/Ujwalsingh1992';
    console.log(url.replace('https://',''));

      url.includes('github');
      //covert string to array we can use split("") or spilit('') both works
      
      let arr1 = url.split('/');
      console.log(arr1);
      //*******************Number**********/
      let numObj1 = new Number(876);
      console.log(numObj1 + 567);
      
     //**************************************tofixed********************* is fixed used to presission e .com/
     //toFixed(n) n means how many decimal places u want to show
    //  console.log((9.7654).toFixed(2));
     let pi=3.1415
     console.log(pi.toFixed(2));
      let hunderd = 100000
      console.log(hunderd.toLocaleString("en-IN"))
      
//******************array**********************************/


let arry =[1,2,3,'hello',true];
console.log(arry)
 arry.pop()
 console.log(arry)
 arry.push("ujwal")
 console.log(arry)
 arry.shift()
 arry.unshift(5)
 console.log(arry)
arry.includes(1)
console.log(arry)
let newarry = arry.join("," )
console.log( typeof newarry)



let arry1 = [1, 2, 3, 'hello', true];

// Check if the array includes the value 1
console.log(arry1.includes(1)); // This will print true or false depending on whether 1 is in the array

// Print the array
console.log(arry1);
 arry = [1, 2, 3, 'hello', true];

// Check if the array includes the value 1
let includesOne = arry.includes(1);

// Use the result in a conditional statement
if (includesOne) {
    console.log("The array includes the value 1.");
} else {
    console.log("The array does not include the value 1.");
}












      





 




 



