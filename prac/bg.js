const body = document.querySelector("body");

const IMG_NUMBER = 1;

function bgMaker(imgNumber) {
  const image = new Image();
  image.src = `src/bg/${imgNumber+1}.jpg`
  image.classList.add("bgImage");
  body.appendChild(image);
}

function randomNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randNumber = randomNumber();
  bgMaker(randNumber);
}

init();
