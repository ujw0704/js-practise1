// function

// if u want to add nuender in cart price


function shopingcart(...num1){
    return num1

}
console.log(shopingcart(5,6)) 


// passing object into function
// const user = {
//     name: "ujwal",
//     age: 23,
//     country: "india",
//     price: "199"
    
// };

// function objdetails({ alldata }) {
//     console.log("Please print name:");
//     if (alldata === "") {
//         console.log("Please enter your name");
//     } else {
//         console.log(`Name is ${alldata.name}`);
//         if (alldata.age === undefined) {
//             console.log("Please enter your age");
//         } else {
//             console.log(`Age is ${alldata.age}`);
//         }
//     }
// }

// objdetails({ alldata: user }); // Pass the user object as an argument to objdetails


const arr =[1,2, 3, 4, 5];
arr.splice(2, 0,6)
console.log(arr)


// one d arry 
let arry = [1,2,3,4,5]
  let sum =0

function oned(numb){
    for(let i = 0 ;i<numb.length;i++){
        sum += num[i]
        
    }
    return sum
    console.log(oned(arry))

}

let numbers = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];// try wid function


function flatten(numbers) {
   const flatArr = [];
   for (let i=0; i <numbers.length; i++) {
    if (Array.isArray(numbers[i])){
        flatArr.push(...flatten(numbers[i]));
            }else {
                flatArr.push(numbers[i ]);
               }
               }
               return flatArr;
            }
            console.log(flatten(numbers));



//print hello i reverse

let n = "hello"

// let reverse = n.split(" ").reverse(n).join(" ")
// console.log(reverse)
   
function  revers(strr) {
    let ne= ""
    for(let i=strr.length-1; i>=0; i--) {
        ne+= strr[i];
        let sub = ne.substring(1,ne.length)
        console.log(sub)
        

    }
    console.log ( typeof ne)
}
revers(n)
// filer the number and add in 5 in oddno



// how it going in call stack


// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

let  numbrs = [1,2 , 3, 4, 5, 6, 7 , 8, 9, 10]


function  filterNum(numb){
    
    let newnumb  = []
    for(let i = 0; i<numb.length;i++){
        // console.log(numb[i])
        if(numb[i] % 2 == 0 ){
            newnumb .push(numb[i]);

        }
    }
        return newnumb
}
console.log(filterNum(numbrs))





// // Write a JavaScript function to check if a given number is prime. 
function  isPrime(number) {
    if(number < 2 ) {
        return false ;
    }
    else{
        for(var i=2; i*i<= number; i++ ){
            if(number%i==0){
                return false ;
                }
            }
         return true ;  
         }
      }
      console.log(isPrime(11));

// Implement a function to find the sum of all the numbers in an array. 

function sume(arry){
    let sum=[]
   if(Array .isArray(arry)){
    sum+=(arry.reduce((a, b)=> a + b ,0))
       return sum
   }
}
console.log(sume([3,4,5,6]));

 
// Given a string, write a function to count the occurrences of each character in the string. 
 let strings = "my name is ujwal"
function string (str){
    newstr= ""
    for(let i =0; i <str.length;i++){
     console.log(  str[i])
     if(str[i]!= undefined){
        newstr+=(str[i])
      } else{
        console.log("throw error")

        
     }
     
    }
    return newstr


}
console.log(string(strings))

//Write a function that sorts an array of numbers in ascending order. 

let number =[1, 2, 4, 5, 7, 8, 9, 10 , 12, 7]

for(let i=0;i<number.length;i++){

    for(let j = i + 1; j < number.length; j++){
        // console.log(number[i])
        if(number[i]>number[j]){
            // console.log(number[i]>number[j])
            let newaary=number[i]
             number[i]=number[j]
             number[j]= newaary

               
        }

        }
    }
    console.log(numbers)
    let newno = number.flat(number)
    console.log(newno)



// Implement a function to remove duplicates from an array.



// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 