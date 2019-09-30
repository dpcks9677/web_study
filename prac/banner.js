const header = document.querySelector("header");

//const IMG_NUMBER = 1;

function bgMaker() {
  const image = new Image();
  image.src = `src/banner.jpg`
  image.classList.add("bannerImage");
  header.appendChild(image);
}

/*
function randomNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
*/

function init() {
  //const randNumber = randomNumber();
  bgMaker();
}

init();
