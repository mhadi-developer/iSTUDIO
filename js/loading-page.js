const preloader = document.getElementById("preloader");
const content = document.querySelector(".content");

// Show preloader for 3 seconds
setTimeout(() => {
  preloader.style.opacity = "0"; // start fade

  // After fade (1s), hide and show content
  setTimeout(() => {
    preloader.style.display = "none";
    content.style.opacity = "1";
  }, 1000); // match CSS transition time
}, 3000); // 3 seconds sharp
