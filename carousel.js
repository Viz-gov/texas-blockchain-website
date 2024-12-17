document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    let currentIndex = 0;
  
    function updateCarousel() {
      images.forEach((img, index) => {
        img.classList.remove("active");
  
        if (index === currentIndex) {
          img.classList.add("active");
        }
      });
    }
  
    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  
    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  
    updateCarousel(); // Initialize the carousel
  });
  