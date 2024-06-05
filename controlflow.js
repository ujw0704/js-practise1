const isuserLoggin =true

if(isuserLoggin){
    console.log( "User Logged In") 
}
     else if(!isuserLoggin){
        console.log("please logged in ")

    }else{
        console("throw error")
    }

    //assign opeartor
    // <,>,<=,>=, ==, != === !== nagative value
    function islogn(){

        const isLoggin= false
        const email =true
        const google =false
        isLoggin?"islogin":"!isloggin"

        isLoggin ? (email ? "isLoggin":"!isLoggin"||google?"isLoggin":"!isLo0gin"):"!isLoogin"
        console.log(islogn(isLoggin))
    }

    //falsey value  false bignit  empty string  undefined and null nan
    //truthy value "0 "false" " " [] {} function (){}

    // how to check array and object 
    let check = []

    if(check.length===0){
        console.log("check is empty")

    }
    let object ={}
    if(Object.keys(object).length ===0){
        console.log(object)
    }
// nullish ?? null


    
//exchanging values

let a = 10
let b = 2
   a = a+b
  b = a-b 
  a = b-a
console.log(a)
console.log(b)

let n = 5
let j = 8 
[j,n]= [n,j]
console.log(n, j)


 // fizz buzz
let fizz = (n)=>{
    for(let i = 1 ;i<n; i++){
        if(i%3===0 && i%5 ===0){
            console.log("fizzbuzz")
        }
            else if(i%3 ===0){
                console.log("fizz")

            }else if(i%5===0){
                console.log("buzz")
            }else{
                console.log("throw error")
            }


    }
 

}
fizz(20)


function cap(str){
    const caps =  str.charAt(0).toUpperCase()+str.slice(1)
    return caps
}
  
 console.log(cap("ujwal"))