var div = document.querySelector("#text");
var input = document.querySelector("#name");

input.addEventListener("change", function() {
    div.innerHTML = input.value;
});