const tlColor = document.querySelectorAll(".tl-color");
const tlColor1 = document.querySelector(".tl-color1");
const tlColor2 = document.querySelector(".tl-color2");
const tlColor3 = document.querySelector(".tl-color3");
const count = document.querySelector(".count");
const count1 = document.querySelector(".count1");

const light = (time) => {
  setTimeout(() => {
    tlColor2.style.opacity = "1";
  }, time);
};
const dark = (time) => {
  setTimeout(() => {
    tlColor2.style.opacity = "0.3";
  }, time);
};
const getReady = () => {
  setTimeout(() => {
    light(1000);
    dark(2000);
    light(3000);
    dark(4000);
    light(5000);
    dark(6000);
  }, 11000);
};
const counter = (colorName) => {
  let num = 11;
  setInterval(() => {
    num--;
    count.innerHTML = num;
    if (count.innerHTML < "0") {
      count.innerHTML = "";
      colorName.style.opacity = "0.3";
    }
  }, 1000);
};
const counter1 = (colorName) => {
  let num = 11;
  setInterval(() => {
    num--;
    count1.innerHTML = num;
    if (count1.innerHTML < "0") {
      count1.innerHTML = "";
      colorName.style.opacity = "0.3";
    }
  }, 1000);
};
const active = (colorName) => {
  colorName.style.opacity = "1";
  counter(colorName);
};
const active1 = (colorName) => {
  colorName.style.opacity = "1";
  counter1(colorName);
};

const start = () => {
  active(tlColor1);
  getReady();
  setTimeout(() => {
    active1(tlColor3);
  }, 18000);
  setTimeout(() => {
    getReady();
  }, 18000);
};
start();
