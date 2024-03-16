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

function str(count){

   for(let i=0; i<count.length;i++){
    if(count.length>=1){
     console.log( count[i])
    count+1
   
    }   
    
    
    return count      
  }


}
console.log(str( typeof"ujwal "))