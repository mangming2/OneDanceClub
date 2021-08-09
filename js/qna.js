const questions = document.querySelectorAll(".question");


const toggling = (e) => {
  const clicked = e.target.className === "question" ? e.target : e.target.parentElement;
  const arrowImg = clicked.lastElementChild;
  const toggled = clicked.nextElementSibling;
  if(toggled.classList.contains("open")) {
    toggled.classList.remove("open");
    arrowImg.style.backgroundImage = 'url("./image/qna/icon_arrow_down.gif")';
  } else {
    toggled.classList.add("open");
    arrowImg.style.backgroundImage = 'url("./image/qna/icon_arrow_up.gif")';
  }
}

const init = () => {
  questions.forEach(question => question.addEventListener("click", toggling));
};

init();