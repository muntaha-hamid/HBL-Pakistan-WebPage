// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const lightModeToggle = document.getElementById("light-mode-toggle");
    const countryToggle = document.getElementById("country-toggle");
    const dropdownContent = document.querySelector(".dropdown-content");

    darkModeToggle.addEventListener("click", function() {
        document.body.style.backgroundColor = "#333";
    
        document.documentElement.style.setProperty('--text-color', '#fff');
        lightModeToggle.style.display = "inline";
    });

    lightModeToggle.addEventListener("click", function() {
        document.body.style.backgroundColor = "#fff";
        document.documentElement.style.setProperty('--text-color', '#000');
        darkModeToggle.style.display = "inline";
    });

    countryToggle.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function() {
        dropdownContent.style.display = "none";
        
    });
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const textElements = slider.querySelectorAll('.text h1, .text p'); // Select all text elements within slides
    const imageElements = slider.querySelectorAll('.image img'); // Select all image elements within slides
    let currentSlide = 0;
    const imageData = [
      // Array containing image and text data for each slide
      { image: "row1-1.webp", text: "<h1>GLOBAL MARKETS OUTLOOK...</h1> <p>Click to watch...</p>" },
      { image: "row1-2.webp", text: "<h1>Our Services</h1> <p>Providing the best...</p>" },
      // ... Add data for remaining slides
    ];
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
  
      // Update text and image based on imageData array
      textElements[currentSlide].innerHTML = imageData[currentSlide].text;
      imageElements[currentSlide].src = imageData[currentSlide].image;
  
      slides[currentSlide].classList.add('active');
    }
  
    setInterval(nextSlide, 5000);

});


