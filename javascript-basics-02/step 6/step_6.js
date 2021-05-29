var image1 = document.querySelector("#image1");
var image2 = document.querySelector("#image2");
var image3 = document.querySelector("#image3");
var image4 = document.querySelector("#image4");
var image5 = document.querySelector("#image5");


imageChangerMouseOn(image1,"./images/image1_2.jpg")
imageChangerMouseOn(image2,"./images/image2_2.jpg")
imageChangerMouseOn(image3,"./images/image3_2.jpg")
imageChangerMouseOn(image4,"./images/image4_2.jpg")
imageChangerMouseOn(image5,"./images/image5_2.jpg")

imageChangerMouseOut(image1,"./images/image1.jpg")
imageChangerMouseOut(image2,"./images/image2.jpg")
imageChangerMouseOut(image3,"./images/image3.jpg")
imageChangerMouseOut(image4,"./images/image4.jpg")
imageChangerMouseOut(image5,"./images/image5.jpg")



function imageChangerMouseOn(img,path) {
  img.onmouseover = function () {
    img.src = path;
  };
}

function imageChangerMouseOut(img,path) {
    img.onmouseout = function () {
      img.src = path;
    };
  }