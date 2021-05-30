var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var text = document.getElementById("text")


green.addEventListener("click", function() {
    text.style.color = "green";
});

red.addEventListener("click", function() {
    text.style.color = "red";
});

blue.addEventListener("click", function() {
    text.style.color = "blue";
});