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