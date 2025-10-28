const myHeading = document.getElementById("myHeading")
myHeading.innerHTML = "Martin"

const myLink = document.querySelector("nav ul li")
myLink.setAttribute("class", "currentPage")

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

// for (let i = 0; i < colourButtons.length; i++) {
//     colourButtons[i].style.backgroundColor = "green";
// }

document.getElementById("myTestBtn").addEventListener("click",function(ev){
    console.info(ev.target)
})

const redBtn = document.querySelector(".red")
redBtn.addEventListener("click", function(){
    console.info("Red Button clicked")
    document.body.setAttribute("class", "redBack")
})

const defaultBtn = document.querySelector(".reset")
defaultBtn.addEventListener("click", function(){
    document.body.removeAttribute("class")
})
