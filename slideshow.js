let img_src = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

i = 0;
let slider = document.getElementById("slider");

let timer;

let effect = "size";

function prev(n) {
  i--;
  if (i <= img_src.length) i = img_src.length - 1;

  addEffect();
  setTimeout(change, 1000);
}

function next(n) {
  i++;
  if (i >= img_src.length) i = 0;
  addEffect();
  setTimeout(change, 1000);
}

function start() {
  stop();
  timer = setInterval(next, 2000);
}

function stop() {
  clearInterval(timer);
}

function addEffect() {
  slider.classList.add(effect);
}

function change() {
  slider.src = img_src[i];
  slider.classList.remove(effect);
}

let ef = document.forms["effects"];
for (let i = 0; i < ef.length; i++) {
  ef[i].addEventListener("change", changeEffect);
}

function changeEffect(event) {
  effect = event.target.value;
}

function showSlides(n) {
  slider.src = img_src[n];
  slider.classList.add("slider");
}
