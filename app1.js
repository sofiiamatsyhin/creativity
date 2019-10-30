function ready() {
    let slideIndex = 0;
    let slides = document.querySelectorAll('.imageLogo');
  
    
    document.querySelector('.previous3').addEventListener('click', () => changeImage(-1));
    document.querySelector('.next3').addEventListener('click', () => changeImage(1));

    showSlides(slideIndex);
  
    function changeImage(n) {
      showSlides(slideIndex += n);
    }
  
    function calcSlideNumber(num) {
      if (num < 0) {
        if (num % slides.length === 0) return 0;
  
        return slides.length + (num % slides.length);
      }
  
      return num % slides.length;
    }
    
    function switchSlide(n, order) {
      slides[n].style.display = "block";
      slides[n].style.order = order;
    }
  
    function showSlides(n) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      switchSlide(calcSlideNumber(n), 1);
      switchSlide(calcSlideNumber(n+1), 2);
      switchSlide(calcSlideNumber(n+2), 3);
      switchSlide(calcSlideNumber(n+3), 4);
    }
  }
  
  document.addEventListener("DOMContentLoaded", ready);