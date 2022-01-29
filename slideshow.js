  
// var arr_src = [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROatvj44LZ_o8-uyc1QxmaZfLEkpLXKnuMvjzMEpL8VOVxDgcF_gjOwvH4KdvOoWv4Ws4&usqp=CAU",
//   " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKY5HHngoypOTRj4KZ7zAu-qXs9kzXQFB7td1Hp82nXR8PxWQ9YRiAF4y3YyS9aDwPIrI&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVixRcB3ogSgQTolsw0n71gC1Pg3Fod1r_eC_HCRQtldqcLDBZcMlLBL96YsV0Zihs1U&usqp=CAU",
// ];
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function auto_next (n){
    setInterval(plusSlides(n),100)
}
auto_next ()
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// function getEffect() {
//     let ef = document.forms["effects"];
//     for (let i = 0; i < ef.length; i++) {
//     if (ef[i].checked) {
//         effect = ef[i].value;
//     }
//   }
// }

// let ef = document.forms["effects"];
// for (let i = 0; i < ef.length; i++) {
//      ef[i].addEventListener("change", changeEffect);
// }

// function changeEffect(event) {
//    effect = event.target.value;
// }