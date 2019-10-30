// slide text
  
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideText");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex-1].classList.toggle('active');
}
