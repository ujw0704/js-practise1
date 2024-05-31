const word = "Java"

if(word === "Java"){
    console.log("its correct")

}else{
    console.log("sorry your wrong")
}



function words(str){
  return str.replace(/[^aeiou]/g,"").length
}

console.log(words("ujwal"))

//deep cloning object 

function deepclone(clone){
    
    return JSON.parse(JSON.stringify(clone))
}

console.log(deepclone("ujwal"))


function toTitleCase(str) { 

    return str.replace(/\b\w/g, l => l.toUpperCase()); 
  
  } 
//   console.log(toTitleCase("ujwal"))

  //Implement a function to reverse a string without using the built-in reverse() method.
  
  function news(rev){
  let replace = ""
    for(let i=rev.length-1;i>= 0;i--){
        // console.log(rev[i])
       replace += rev[i]
    }
 
    return replace
  }
  
   console.log(news("kushal"))

//   Given a string, write a function to count the occurrences of each character in the strin?\

function countCharacterOccurrences(str) { 

  const charCount = {}; 

  for (let char of str) { 

    charCount[char] = (charCount[char] || 0) + 1; 

  } 

  return charCount; 

} 
console.log(countCharacterOccurrences("ujwal sharma"))
//Write a function that returns the sum of all numbers in an array. 

function sum(newsum){
 return newsum.reduce((newsum,arry) =>newsum+arry,0)
}
console.log(sum([4+5]))


// Write a JavaScript program to remove false values from a given array.
let aty = [1, 2, 3, 4, 5, 6, 7]
let newarr =[]
for(let i = 0 ; i<aty.length;i++){
  if(aty[i]){
   newarr.push(aty)
  }
}

console.log(newarr)


// we have egiht ball one ball is less in weight  create a function 
function weight(ball){
    let lessweight = 0
  for(let i= 0; i<ball.length;i++){
    console.log(ball[i])
    if(ball[i]<ball.length){
      let newball =ball[i]
      
      
      }

    }
    return lessweight
  }
 let balls =[1, 2, 3, 4, 5,6,7,8,9]

console.log(weight(balls))

// comparing two object
obj1={
  name:"ujwal",
  work:"nothing",
  country:"india"
}

obj2={
  name:"kushal",
  work:"project manager",
  country:"canada",
}


function one (obj1, obj2){
return JSON.stringify(obj1)===JSON.stringify(obj2)
    
  }
  console.log(one(obj1, obj2))
const can = {
  name: "ujwal",
  mark: 60,
  values: 30
};

Object.keys(can).forEach(key => {
  console.log(can[key]);
  if (typeof can[key] === 'number') {
    can[key] += 20;

  }
  console.log(can[key]);
});



// splice
let wrd =["ujwal", "kushal", "sajal"]
wrd.forEach((value ,index, arry)=>{
  arry[index] =value.substring(1)

})
console.log(wrd)


let num = [1, 2, 3, 4, 5]
num.forEach((value ,index, arry)=>{
  arry[index]= value

 console.log(num.splice(1))

})

