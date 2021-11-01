let slideIndex = 1;
let sls;let t;

showSlides(slideIndex);
function Slideswitchh(sls){
t=sls;
}
function nextSlide(tt) {
showSlides(slideIndex += 1);
}


function previousSlide() {
showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let slides;
slides = document.getElementsByClassName("item4");
if (n > slides.length) {
slideIndex = 1
}
if (n < 1) {
slideIndex = slides.length
}
for (let slide of slides) {
slide.style.display = "none";
}
slides[slideIndex - 1].style.display = "block"; 
}