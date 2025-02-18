const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".carousel img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0; // Current image index
const totalImages = images.length;
const imageWidth = images[0].clientWidth; // Dynamically get image width

function showImage(index) {
  const offset = -index * imageWidth; // Shift carousel by image width
  carousel.style.transform = `translateX(${offset}px)`;
}

// Function to automatically slide to the next image
function autoSlide() {
  index = (index + 1) % totalImages; // Move to the next image in a loop
  showImage(index);
}

// Start the auto-slide (change slide every 2 seconds)
let slideInterval = setInterval(autoSlide, 2000);

prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalImages) % totalImages; // Go back in a loop
  showImage(index);
  resetInterval(); // Reset auto-slide timer
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalImages; // Go forward in a loop
  showImage(index);
  resetInterval(); // Reset auto-slide timer
});

// Pause auto-slide on hover
document.querySelector(".carousel-container").addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

// Resume auto-slide when not hovering
document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
  resetInterval();
});

// Function to reset the auto-slide interval when user clicks buttons
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 2000);
}

// Ensure carousel resizes correctly when window size changes
window.addEventListener("resize", () => {
  imageWidth = images[0].clientWidth; // Update image width dynamically
  showImage(index); // Adjust positioning
});