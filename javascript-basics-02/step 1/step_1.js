// I understand better than query selector
function setNewImage() {
    document.getElementById("image1").src ="images/image1_2.jpg";
}
function setOldImage() {
    document.getElementById("image1").src ="images/image1.jpg";
}

// need more practice on that
var img = document.querySelector("#image2");

img.addEventListener("mouseover",() => {
    img.setAttribute("src", "images/image1_2.jpg");
});

img.addEventListener("mouseout",() => {
    img.setAttribute("src", "images/image1.jpg");
});