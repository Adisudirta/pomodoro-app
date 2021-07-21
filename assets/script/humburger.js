const icon = document.getElementById("toggle");
const nav = document.querySelector(".container-header nav");

// buat button baru untuk menu humburger
const button = document.createElement("button");
button.classList.add('media-btn');
button.innerHTML = "Login / Sign In";
nav.appendChild(button);

icon.addEventListener("click", function(){ 
    nav.classList.toggle("show");
    button.classList.toggle("show");
});