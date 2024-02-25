let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function openbtn1() {
  content1.style.transform = "translatex(0)";
  content2.style.transform = "translatex(100%)";
  content3.style.transform = "translatex(100%)";
}

function openbtn2() {
  content1.style.transform = "translatex(100%)";
  content2.style.transform = "translatex(0)";
  content3.style.transform = "translatex(100%)";
}

function openbtn3() {
  content1.style.transform = "translatex(100%)";
  content2.style.transform = "translatex(100%)";
  content3.style.transform = "translatex(0)";
}
