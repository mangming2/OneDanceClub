const htmlName = document.querySelector("main").id
const maxLengthImg = 5;
let num = 1;

const prevImg = (imgId) => {
    if(num > 1) num -= 1;
    else num = maxLengthImg;
    loadImage(imgId);
};

const nextImg = (imgId) => {
    if(num < maxLengthImg) num += 1;
    else num = 1;
    loadImage(imgId);
};

const loadImage = (imgId) => {
    
    const changeimg = document.querySelector(`.${imgId}`);
    changeimg.setAttribute("src", `image/${htmlName}/${imgId}${num}.jpg`);
    
    
};

// 이미지들 jpg-png 통일시키기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 사진 개수마다 maxLengthImg도 달리 해야 함 (귀찮으면 찾아오는 길 사진 개수에 맞추면 될 듯?)
