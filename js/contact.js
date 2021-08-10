
var num=1
function changePic(idx){
    num=num+idx
    if (num==0){
        num=1
    }
    if (num==3){
        num=2
    }
    var pic=document.getElementById("photo");
    pic.setAttribute("src", "image/contact/test"+num+".jpg");
}

