// for of

const arr = [1, 2,3, 4,5,6]

for(const array of arr){
    console.log(array)
}


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

const  n = [1, 2, 3, 4, 5]

    if(n.length<4){
    const np=  n.slice(0,3)
    console.log(np)
    }

    const numbers = [10, 20, 30, 40, 50];

    const average = numbers.reduce((total, current) => total + current, 0) / numbers.length;
    
    console.log(average); // Output: 30
    