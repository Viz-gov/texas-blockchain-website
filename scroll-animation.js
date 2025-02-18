document.addEventListener("DOMContentLoaded", () => {
  const divisionBoxes = document.querySelectorAll(".division-box");
  
  const options = {
      threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Stop observing after becoming visible
          }
      });
  }, options);

  divisionBoxes.forEach(box => {
      observer.observe(box);
  });
});

// Uncomment if you need to animate elements with the ".hidden" class
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// if you got this far this was viz