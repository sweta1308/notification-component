const buttonMark = document.querySelector(".read-mark");
const firstList = document.querySelector(".first");
const secondList = document.querySelector(".second");
const thirdList = document.querySelector(".third");
const redDots = document.querySelectorAll(".red-dot");
const count = document.querySelector(".count");

buttonMark.addEventListener('click', changes) 

function changes() {
    firstList.style.backgroundColor = "white";
    secondList.style.backgroundColor = "white";
    thirdList.style.backgroundColor = "white";
    count.innerHTML = "0";
    redDots.style.visibility = "hidden";
}