function toggleSidebar() {  
    const sidebar = document.getElementById('sidebar');  
    sidebar.classList.toggle('active');  
}  

 

// // Wait for the page to fully load
// window.addEventListener('load', () => {
//   const preloader = document.getElementById('preloader');
//   const content = document.getElementById('content');
  
//   // Hide the preloader
//   preloader.style.display = 'none';
  
//   // Show the content
//   content.style.display = 'block';
// });


// Timer for the preloader
let countdown = 2; // 3 seconds
const timerElement = document.getElementById("timer");
const preloader = document.getElementById("preloader");
const content = document.getElementById("content");

// Update timer every second
const interval = setInterval(() => {
  countdown--;
  timerElement.textContent = countdown;

  // When timer ends, hide preloader and show content
  if (countdown <= 0) {
    clearInterval(interval);
    preloader.style.display = "none"; // Hide preloader
    content.style.display = "block";  // Show content
  }
}, 1000);

  

const texts = [
    "Welcome to my portfolio.",
    "I am a frontend developer.",
    "I love problem solving.",
     
    //"Communicate effectively."
  ];
  let textIndex = 0; // Current text index
  let charIndex = 0; // Current character index
  const speed = 100; // Speed of typing in milliseconds
  const delayBetweenTexts = 1000; // Delay between each text in milliseconds

  function typeText() {
    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      document.getElementById("selfWritingText").textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, speed);
    } else {
      // Pause, then move to the next text
      setTimeout(() => {
        charIndex = 0;
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0; // Loop back to the start
        document.getElementById("selfWritingText").textContent = ""; // Clear text
        typeText();
      }, delayBetweenTexts);
    }
  }

  // Start the typing effect
  typeText();


  window.onload = function() {  
    setTimeout(function() {  
        // Hide the preloader  
        document.getElementById('preloader').style.display = 'none';  
        // Show the main content  
        document.getElementById('content').style.display = 'block';  
    }, 10000); // 10 seconds  
  };  



// var loader=document.getElementById(""); 


// window.addEventListener('load', function() {  
//     const preloader = document.getElementById('preloader');  
//     preloader.style.display = 'none';  // Hide preloader after content is loaded  
// });



// Get the button  
let backToTopButton = document.getElementById("backToTop");  

// Show the button when scrolling down  
window.onscroll = function() {  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {  
        backToTopButton.style.display = "block";  
    } else {  
        backToTopButton.style.display = "none";  
    }  
};  

// Scroll to the top when the button is clicked  
backToTopButton.onclick = function() {  
    document.body.scrollTop = 0; // For Safari  
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera  
};