var container = document.querySelector("#container");
var headingBox = document.querySelector("#headingBox");
var title = document.querySelector("#title");
var box1 = document.querySelector("#one");
var box2 = document.querySelector("#two")
var box3 = document.querySelector("#three");
var box4 = document.querySelector("#four");
var box5 = document.querySelector("#five");
var box6 = document.querySelector("#six");

//set up connections and event
box1.addEventListener("mouseover", onBoxOver);
box1.addEventListener("mouseout", onBoxOut);
box1.addEventListener("click", onMakeItSpin);

function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
  
}

function onBoxOut(event) {
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}
//BOX 2
box2.addEventListener("mouseover", onBoxOver);
box2.addEventListener("mouseout", onBoxOut);
box2.addEventListener("click", onMakeItSpin);

function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
  
}

function onBoxOut(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}

//BOX 3
box3.addEventListener("mouseover", onBoxOver);
box3.addEventListener("mouseout", onBoxOut);
box3.addEventListener("click", onMakeItSpin);

function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
  
}

function onBoxOut(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}

//BOX 4
box4.addEventListener("mouseover", onBoxOver);
box4.addEventListener("mouseout", onBoxOut);
box4.addEventListener("click", onMakeItSpin);

function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
  
}

function onBoxOut(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}

//BOX 5
box5.addEventListener("mouseover", onBoxOver);
box5.addEventListener("mouseout", onBoxOut);
box5.addEventListener("click", onMakeItSpin);

function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
  
}

function onBoxOut(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}

//BOX 6
box6.addEventListener("mouseover", onBoxOver);
box6.addEventListener("mouseout", onBoxOut);
box6.addEventListener("click", onMakeItSpin);

function onBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOver");
  event.target.classList.remove("boxOut");
  
}

function onBoxOut(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("boxOut");
  event.target.classList.remove("boxOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}

//TITLE
title.addEventListener("mouseover", onTitleOver);
title.addEventListener("mouseout", onTitleOut);
title.addEventListener("click", onMakeItSpin);

function onTitleOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("titleOver");
  event.target.classList.remove("titleOut");
  
}

function onTitleOut(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("titleOut");
  event.target.classList.remove("titleOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}

//HEADING BOX
headingBox.addEventListener("mouseover", onBigBoxOver);
headingBox.addEventListener("mouseout", onBigBoxOut);
headingBox.addEventListener("click", onMakeItSpin);

function onBigBoxOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("bigBoxOver");
  event.target.classList.remove("bigBoxOut");
  
}

function onBigBoxOut(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("bigBoxOut");
  event.target.classList.remove("bigBoxOver");
}

function onMakeItSpin(event) {
  event.target.classList.add("makeItSpin");
}