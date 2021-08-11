const howtogoImg = document.querySelector(".social_activities");
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
    howtogoImg.setAttribute("src", `image/portfolio/test${num}.png`);
};

const init = () => {
    loadImage();
};

init();