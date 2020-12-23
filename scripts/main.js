let myHeading = document.querySelector("h1");
let img = document.querySelector("img");
let button = document.querySelector("button");

img.onclick = function () {
    if (img.getAttribute("src") === "images/tomato.jpg") {
        img.setAttribute("src", "images/eggman.jpg");
    } else {
        img.setAttribute("src", "images/tomato.jpg");
    }
}

button.onclick = function () {
    setUserName();
}

function setUserName () {
    let myName = prompt("Please enter your name");
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Welcome ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let myName = localStorage.getItem("name");
    myHeading.textContent = 'Welcome ' + myName;
}
