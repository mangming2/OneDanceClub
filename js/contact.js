const howtogoImg = document.querySelector(".howtogo_img");
const maxLengthImg = 2;
let num = 1;

const prevImg = () => {
    if(num > 1) num -= 1;
    loadImage();
};

const nextImg = () => {
    if(num < maxLengthImg) num += 1;
    loadImage();
};

const loadImage = () => {
    howtogoImg.setAttribute("src", `image/contact/test${num}.jpg`);
};

const init = () => {
    loadImage();
};

init();