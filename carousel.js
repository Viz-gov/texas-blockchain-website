const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0; // Current image index
const totalImages = images.length;

function showImage(index) {
  const offset = -index * 600; // Shift carousel by image width
  carousel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages; // Go back in a loop
  console.log("Previous Index:", index); // Debugging

  showImage(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalImages; // Go forward in a loop
  console.log("Next Index:", index); // Debugging

  showImage(index);
});

// Start the auto-slide (change slide every 2 seconds)
let slideInterval = setInterval(autoSlide, 2000);

// Pause auto-slide on hover
document.querySelector(".carousel-container").addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

// Resume auto-slide when not hovering
document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
  slideInterval = setInterval(autoSlide, 2000);
});
