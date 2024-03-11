// for of

const arr = [1, 2,3, 4,5,6]

// for(const array of arr){
//     console.log(array)
// }


const greet = "hello world"

for(const greeting of greet){
    console.log(greeting.trim())
}

arr.forEach(element => {
    console.log(element)
    
});

const coding = ["js", "ruby", "python", "cpp"]


const value = coding.forEach((item)=>{
    console.log(item)

})