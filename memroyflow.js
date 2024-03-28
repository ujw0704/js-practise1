// heap and stack 
// stack is premative data type  in  stack it give the  copy of  orginal data where as 
// heap is a non-premative data type in heap it  changes the data  from orginal  object or array

 let myname = "ujwal"
 let  anothername =  myname
 anothername = "vikas"

 // now it changes to an another name but  my name which is orginal name is the same as orginal

//heap

let Userone = {
    email:"username@gmail.com",
    upi:"user@ybl"
}
let userTwo = Userone
 userTwo.email = "user@gmail.com"
// how do we acess object we acess by (.notation) to acess email
 console.log(userTwo.email)


// now we have delraed a variable but  the data flow is comming fron heap which is non premative data so it will changes in orginal memory
const mysmb = Symbol("key")
const onj= {
    name :"ujwal",
    age :"20",
    place :"darjeeling",
    [mysmb]:"key"
}

console.log(onj.name)
console.log(onj[mysmb])


let aee = ["ujwal", "kushal", "sajal"]

let r = aee.join().substring(1).replace(1, "k")
console.log(r)




// / Blastoff countdown
console.log(3); // Engines are getting ready
console.log(2); // Buckle your seatbelts
console.log(1); // Initiating launch sequence
// Lift off!

const flow = {
    name:"sajal",
    class:"12"

}
const newObject = Object.fromEntries([['name', flow.name]]); //object
console.log(flow)
const ar = Object.entries(['name', flow.name])// array
console.log(ar)

if(Object.keys(flow)!=ar.length){
    console.log("true")
}else{
    console.log("false")
}
 let total = [40,50,70,90,60]

let sum = total.reduce((accumulator,current)=>accumulator+current,0) // when we pass number we give 0
console.log(sum)

let s = ["ujwal","sajal","kushal"]
let h = s.reduce((accumulator, current)=>accumulator + current," ")// when we pass string we use ""
console.log(h)


