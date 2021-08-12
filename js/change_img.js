const htmlname=document.querySelector("main").id
const maxLengthImg = 2;
let num = 1;

const prevImg = (clicked_id) => {
    if(num > 1) num -= 1;
    loadImage(clicked_id);
};

const nextImg = (clicked_id) => {
    if(num < maxLengthImg) num += 1;
    loadImage(clicked_id);
};

const loadImage = (clicked_id) => {
    
    const changeimg = document.querySelector(`.${clicked_id}`);
    changeimg.setAttribute("src", `image/${htmlname}/${clicked_id}${num}.jpg`);
    
    
};

