// document.addEventListener("DOMContentLoaded", function() {
//     const id = document.getElementById("title");
//     console.log(id);
// });

 
// document.addEventListener("DOMContentLoaded", function() {
//     const myul = document.querySelectorAll("#oh");
//     console.log(myul);
//     // const myLI = myul.getElementsByTagName("li"); // Get all <li> elements within the <ul>
//     // myLI[0].style.color = "red";
//     myul.forEach(element => {
//         element.style.backgroundColor = "blue"
        
//     });
     // if want to use node list use foreach
    // Change the color of the first <li> element to green

    //if u want to covernt html or and thing we can use ARRAY.FROM()
// });


//innerHTML example that includes both markup and text 
//innerText example that prints text as it appears on screen
//textContent example that prints text as it is in the markup including hidden text

const parent = document.querySelector(".parent");
console.log(parent);
// console.log(parent.children);

// Loop through each child element and log it
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

// Set the color of the second child to black
parent.children[1].style.color = "red";
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
const day = document.querySelector(".day")
console.log(day.parentElement)
console.log(day.nextElementSibling.innerText)

console.log(parent.childNodes);