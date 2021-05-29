var myName = document.querySelector("#name");
var surname = document.querySelector("#surname");
var city = document.querySelector("#city");
var reset = document.querySelector("#reset");

reset.addEventListener("click", function() {
    //there are no features to change the Cancel and the OK button
    if(confirm("Do You Want To Reset The Form?")){ 
        myName.value = "";
        surname.value = "";
        city.value = "";
    }
});