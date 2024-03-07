// const mysmb = Symbol("key")
// const obj ={
//     name : "John",
//    [mysmb]:"mykey"
// }
// console.log( typeof obj[mysmb]);
//  // {name: "John", symbol.
//  console.log(obj)

 let na =["ram", "shyama", "kamal"]
let ob= {}
 na.map((key , value)=>{
    ob[na] = value;

})
console.log(ob)

const array = ['a', 'b', 'c'];
const object = {};
array.forEach((element, index) => {
    object[element] = index;
});
const array1 = ['a', 'b', 'c'];
const object1 = array1.reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
}, {});


const array2 = ['a', 'b', 'c'];
const object2 = {};
array2.forEach((element, index) => {
    object2[element] = index;
});

// if u want to merge data of arry object u can use object .assign() method or Object.assign({},object1,object2);
// const array4 = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }];
// const object4 = Object.assign({}, ...array4.map(item => ({ [item.key]: item.value })));
// console.log(object4)

// if you have an array of key-value pairs, you can use Object.fromEntries() directly to convert it into an object.





// object.fromEntries(iterable) method is used to create an object from a given iterable from give array whih give key and value 
// const array5 = [['a', 1], ['b', 2], ['c', 3]];
// const object5 = Object.fromEntries(array5);//output {a:1 , b:2, c:3}



//Object.assign(): This method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object. If multiple source objects have properties with the same key, the last source object's value is used for that key. 

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const merged = Object.assign({}, target, source);
// console.log(merged); // Output: { a: 1, b: 3, c: 4 }

// Object.entries(): This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. Essentially, it extracts the key-value pairs of an object into an array. Here's a simple example
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj))
; // Output: [ ['a', 1], ['b', 2], ['c', 3] ]
let o = Object.entries(obj).flat(Infinity);
console.log(o);


const userobj={
    email:"ujwal@gamil",
    fullname:{
    name: "Ujwal",
    lastName: "Sharma",
    }
}
console.log(userobj.email)
console.log(userobj?.fullname.name)
//