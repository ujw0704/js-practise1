// let nam = "John is going to the market";
// let words = nam.split(" ");
// let anothername = words.slice(0, 5).join(" ");
// console.log(anothername); // John is going to the market

// let nam = "John is going to the market";
// let spaceIndices = [];
// for (let i = 0; i < nam.length; i++) {
//   if (nam[i] === " ") {
//     spaceIndices.push(i);
//   }
// }

// let anothername = nam.substring(0, spaceIndices[4]);
// console.log(anothername); // John is going to

// what is the wrok of substr
// let str = "Hello world!";
// console.log(str.substr(1)); // ello world!
// console.log(str.substr(2,3)); // llo
// console.log(str.substr(  7)); // world!

// let o = "ujwal is trying hard";
// let j = o.split(" ");
// let k = "";

// for (let i = 0; i < j.length; i++) {
//     if (i >= 3) break; // Exit loop if more than 3 words processed
//     k += j[i].substring(0, 6) + " ";
// }

// console.log(k.trim()); // ujwal is trying

// substr extract the part of string
// slice cuts out a portion of a string and returns the extracted section in a new string
// split breaks up a string into an array of substrings based on a specified delimiter and returns the
// resulting array

let nam = "kushal lives in canada"
let m= nam.substring(0,1)
console.log(m)

let num = 5
let text = num.toString()
console.log(text)
// if i want to add string behined the number
let pad = text.padEnd(6,"hello")
console.log(pad)