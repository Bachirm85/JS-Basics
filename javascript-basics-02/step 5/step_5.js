var image1 = document.querySelector("#image1");
var image2 = document.querySelector("#image2");
var image3 = document.querySelector("#image3");
var image4 = document.querySelector("#image4");
var image5 = document.querySelector("#image5");

imageChanger(image1,"./images/image1_2.jpg")
imageChanger(image2,"./images/image2_2.jpg")
imageChanger(image3,"./images/image3_2.jpg")
imageChanger(image4,"./images/image4_2.jpg")
imageChanger(image5,"./images/image5_2.jpg")


function imageChanger(img,path) {
  img.onmouseover = function () {
    img.src = path;
  };
}
