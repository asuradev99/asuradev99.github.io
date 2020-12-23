const myHeading = document.querySelector("h1");
const img = document.querySelector("img");

myHeading.textContent = 'Hello World';

img.onclick = function () {
    if (img.getAttribute("src") === "images/tomato.jpg") {
        img.setAttribute("src", "images/eggman.jpg");
    } else {
        img.setAttribute("src", "images/tomato.jpg");

    }
}