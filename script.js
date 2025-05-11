// script.js

// Animate sections on scroll using IntersectionObserver
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Load resized developer photo from Pexels
const header = document.querySelector("header");
const img = document.createElement("img");
img.src = "https://images.pexels.com/photos/5638835/pexels-photo-5638835.jpeg?auto=compress&cs=tinysrgb&h=300"; // Resized image URL
img.alt = "Developer Image";
img.style.width = "400px"; // Set width
img.style.height = "auto"; // Auto-adjust height to maintain aspect ratio
img.style.marginTop = "20px";
img.style.borderRadius = "12px"; // Optional: adds rounded corners
img.style.boxShadow = "0 0 20px #00ffe0"; // Optional: glowing effect around the image
img.style.transition = "transform 0.3s ease"; // Smooth hover animation
img.addEventListener("mouseover", () => {
  img.style.transform = "scale(1.05)"; // Hover effect: scale up the image
});
img.addEventListener("mouseout", () => {
  img.style.transform = "scale(1)"; // Hover effect: reset scale
});
header.appendChild(img);

console.log("Portfolio loaded - Made by Nitin, Sahil and Ashish");
