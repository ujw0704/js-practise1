document.addEventListener("DOMContentLoaded", function() {
    const id = document.getElementById("title");
    console.log(id);
});

 
document.addEventListener("DOMContentLoaded", function() {
    const myul = document.querySelectorAll("#oh");
    console.log(myul);
    // const myLI = myul.getElementsByTagName("li"); // Get all <li> elements within the <ul>
    // myLI[0].style.color = "red";
    myul.forEach(element => {
        element.style.backgroundColor = "blue"
        
    });
     // if want to use node list use foreach
    // Change the color of the first <li> element to green

    //if u want to covernt html or and thing we can use ARRAY.FROM()
});