const buttonMark = document.querySelector(".read-mark");
const firstList = document.querySelector(".first");
const secondList = document.querySelector(".second");
const thirdList = document.querySelector(".third");
const red1 = document.querySelector(".red1");
const red2 = document.querySelector(".red2");
const red3 = document.querySelector(".red3");
const count = document.querySelector(".count");

buttonMark.addEventListener('click', changes) 

function changes() {
    firstList.style.backgroundColor = "white";
    secondList.style.backgroundColor = "white";
    thirdList.style.backgroundColor = "white";
    count.innerHTML = "0";
    red1.style.visibility = "hidden";
    red2.style.visibility = "hidden";
    red3.style.visibility = "hidden";

}