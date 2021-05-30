var show = document.getElementById("show");
var hide = document.getElementById("hide");
var text = document.getElementById("texte");


function hideOrShow(){
    show.addEventListener("click", function() {
        text.style.display = "block";
    });

    hide.addEventListener("click", function() {
        text.style.display = "none";
    });

}
hideOrShow();