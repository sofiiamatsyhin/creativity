function ready() {
    let slideIndex = 0;
    let slides = document.querySelectorAll('.slide');
  
    
    document.querySelector('.previous').addEventListener('click', () => changePeople(-1));
    document.querySelector('.next').addEventListener('click', () => changePeople(1));

    showSlides(slideIndex);
  
    function changePeople(n) {
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