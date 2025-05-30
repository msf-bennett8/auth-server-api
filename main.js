/*

//For third party integration 
require('dotenv').config();

*/

//Pre Loader Start
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById('preloader');
  
    // Listen for full page load including assets
    window.addEventListener('load', function () {
      if (preloader) {
        // Add a fade-out effect
        preloader.classList.add('hidden');
        // Remove after transition ends
        setTimeout(() => {
          preloader.remove();
        }, 600); // match with CSS transition
      }
    });
  });
// Loader end


//Footer H4 script
document.addEventListener("DOMContentLoaded", () => {
    const footerSections = document.querySelectorAll(".footer-section h4");

    footerSections.forEach(section => {
        section.addEventListener("click", () => {
            const ul = section.nextElementSibling;
            ul.style.display = ul.style.display === "block" ? "none" : "block";
        });
    });
});


//Navigation bar move and delay
const navbar = document.querySelector('.nav');
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollTimer = null;
    let isSticky = false;

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollingDown = scrollTop > lastScrollTop;

        // Scroll down → hide the navbar and start timer for sticky
        if (scrollingDown && !isSticky) {
            navbar.style.top = "-100px";

            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                navbar.style.top = "0"; // stick to top
                isSticky = true;
            }, 300);
        }

        // Scroll up → keep sticky nav at top until top of page
        else if (!scrollingDown && isSticky) {
            clearTimeout(scrollTimer);

            if (scrollTop === 0) {
                navbar.style.top = "117px"; // restore original offset at top
                isSticky = false;
            } else {
                navbar.style.top = "0"; // stay sticky while scrolling up
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

//Navigation bar move and delay end

//Search Bar functionality
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const searchForm = document.querySelector('.search-form');
  const searchIcon = document.querySelector('.search-icon');
  
  // Handle scroll events
  window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide search bar on scroll down
    if (currentScroll > lastScrollTop) {
      // Only hide on larger screens, except for mobile portrait screens
      if (window.innerWidth > 480) {
        searchForm.classList.add('hide-search');
        searchIcon.style.display = 'block'; // Show the search icon
      }
    } else {
      // Show the search bar again when scrolling up or reaching the top
      if (currentScroll <= 0) {
        searchForm.classList.remove('hide-search');
        searchIcon.style.display = 'none'; // Hide the icon at the top
      }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Handle search icon click to open search form
  searchIcon.addEventListener('click', function () {
    searchForm.classList.remove('hide-search');
    searchIcon.style.display = 'none'; // Hide the icon after the form opens
  });
});

//Filter website content

//Mission and Vission Page Functionality
// Function to toggle popups
function togglePopup() {
    var popup = document.getElementById("homepage-popup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    var popup = document.getElementById("homepage-popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
// Optional: If you want to toggle visibility
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup-container");
    popup.style.display = "none"; // Initially hidden

    setTimeout(() => {
        popup.style.display = "block"; // Show after page load
    }, 500);
});



//Our Services start
document.addEventListener("DOMContentLoaded", () => {
    const serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
        });
    });
});

//Our Services End

//FAQ section Start 

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            item.classList.toggle("active");
        });
    });
});

//FAQ Section End


//Arrow Up End
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show"); // Show button after scrolling 300px
        } else {
            backToTop.classList.remove("show"); // Hide when at the top
        }
    });
});

//Testimonials Start
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".testimonialSwiper", {
        slidesPerView: 1, // Default for small screens
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 8000, // 8 seconds before swipe
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false,
        },
        breakpoints: {
            769: {
                slidesPerView: 2, // Two testimonials on small laptops
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2, // Two testimonials side by side on larger screens
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2, // Two testimonials side by side on large screens
                spaceBetween: 20
            }
        }
    });
});


//Testimonials End

//Team section Start
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
        new Swiper(".teamSwiper", {
            slidesPerView: 1, // Default for small screens
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: false,
            },
            breakpoints: {
                480: {
                    slidesPerView: 1, // One team container for small screens
                    spaceBetween: 10,
                },
                769: {
                    slidesPerView: 2, // Two team containers for tablets and small laptops
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3, // Three team containers for larger laptops
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4, // Four team containers for large laptops
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 5, // Five team containers for larger screens
                    spaceBetween: 20,
                }
            }
        });
    } else {
        console.error("Swiper is not loaded properly.");
    }
});

//Team Section End

//Blog Section Start
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.social-icons').style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.social-icons').style.opacity = '0';
    });
});

//Our Events calender Start
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper for Images
    new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 5000, // 5 seconds for images
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Initialize Swiper for Text Features
    new Swiper(".mySwiperText", {
        loop: true,
        autoplay: {
            delay: 8000, // 8 seconds for text
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

//Feedback Section Start
// Show Feedback Dialog
function showFeedback(type) {
    let dialog = document.getElementById("feedback-dialog");
    let message = document.getElementById("feedback-message");
    let btnRate = document.getElementById("btn-rate");
    let btnImprove = document.getElementById("btn-improve");

    if (type === "positive") {
        message.innerHTML = "Thank you for your feedback! 😊";
        btnRate.style.display = "inline-block";
        btnImprove.style.display = "none";
    } else {
        message.innerHTML = "Thank you for your feedback! How can we improve? 😞";
        btnRate.style.display = "none";
        btnImprove.style.display = "inline-block";
    }

    dialog.classList.add("active");
}

// Close Feedback Dialog with Animation
function closeFeedback() {
    let dialog = document.getElementById("feedback-dialog");
    dialog.classList.add("closing");

    setTimeout(() => {
        dialog.classList.remove("active", "closing");
    }, 500); // Wait for the animation to finish
}

// Rate Us Action
function rateUs() {
    alert("Redirecting to rating page...");
    closeFeedback();
}

// Improve Feedback Action
function improveFeedback() {
    alert("Redirecting to feedback form...");
    closeFeedback();
}

//Web Chart Start
// Draggable chat icon functionality
let chatIcon = document.getElementById('chat-icon');
let isDragging = false;
let offsetX, offsetY;

chatIcon.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - chatIcon.getBoundingClientRect().left;
    offsetY = e.clientY - chatIcon.getBoundingClientRect().top;
    chatIcon.style.transition = 'none';  // Disable transition during drag
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        chatIcon.style.left = `${e.clientX - offsetX}px`;
        chatIcon.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    chatIcon.style.transition = 'transform 0.3s ease-in-out';  // Re-enable transition
});

document.addEventListener("DOMContentLoaded", function () {
    let chatIcon = document.getElementById("chat-icon");
    let chatDialogue = document.getElementById("chat-dialogue");
    let continueBtn = document.getElementById("continue-btn");
    let whatsappBtn = document.getElementById("whatsapp-btn");
    let closeDialogue = document.getElementById("close-dialogue");
    let chatBox = document.getElementById("chat-box");
    let closeChat = document.getElementById("close-chat");

    // Show dialogue box when chat icon is clicked
    chatIcon.addEventListener("click", function () {
        chatDialogue.style.display = "block";
    });

    // Continue to open AI chat box
    continueBtn.addEventListener("click", function () {
        chatDialogue.style.display = "none";
        chatBox.style.display = "block";
    });

    //Yes continue button to open diallogue box start
    
    //Yes continue button to open diallogue box end

    // Scroll to social media section
whatsappBtn.addEventListener("click", function () {
    document.getElementById("social-media-section").scrollIntoView({ behavior: "smooth" });
});


    // Close dialogue box
    closeDialogue.addEventListener("click", function () {
        chatDialogue.style.display = "none";
    });

    // Close AI chat box
    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none";
    });
});

//Our Special Section code

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".special-item");
    const title = document.getElementById("content-title");
    const description = document.getElementById("content-description");
    const details = document.getElementById("content-details");
    const image = document.getElementById("content-image");
    const indicators = document.querySelectorAll(".indicator");

    const specials = [
        {
            title: "Community Projects",
            description: "Making a difference in local communities...",
            details: "Through various projects, we engage in improving local environments, supporting education, and fostering sustainable growth.",
            imgSrc: "https://ik.imagekit.io/te0zmfzgc/Assets/img/bg-1.jpg?updatedAt=1745386758008"
        },
        {
            title: "Fundraising Events",
            description: "Raising funds for those in need...",
            details: "Join our charity events and fundraising initiatives to support important causes and help those in need.",
            imgSrc: "https://ik.imagekit.io/te0zmfzgc/Assets/img/bg-2.png?updatedAt=1745386765625"
        },
        {
            title: "Volunteer Work",
            description: "Giving back to society...",
            details: "Become a part of our volunteer network, helping communities grow and thrive through various social programs.",
            imgSrc: "https://ik.imagekit.io/te0zmfzgc/Assets/img/bg-3.jpg?updatedAt=1745386757713"
        },
        {
            title: "Charity Drives",
            description: "Providing essentials to those in need...",
            details: "From food drives to clothing donations, our charity drives aim to support the less fortunate in meaningful ways.",
            imgSrc: "https://ik.imagekit.io/te0zmfzgc/Assets/img/bg-4.png?updatedAt=1745386779034"
        },
        {
            title: "Social Impact",
            description: "Transforming lives through action...",
            details: "We focus on long-term societal impact through sustainable projects, awareness campaigns, and advocacy.",
            imgSrc: "https://ik.imagekit.io/te0zmfzgc/Assets/img/bg.png?updatedAt=1745386779455"
        }
        //images should be named in project
    ];

    let currentIndex = 0;
    let autoSlideInterval = setInterval(nextSlide, 10000); // Auto-slide every 10 seconds

    function updateContent(index) {
        title.style.opacity = "0";
        description.style.opacity = "0";
        details.style.opacity = "0";
        image.style.opacity = "0";

        setTimeout(() => {
            title.textContent = specials[index].title;
            description.textContent = specials[index].description;
            details.textContent = specials[index].details;
            image.src = specials[index].imgSrc;

            title.style.opacity = "1";
            description.style.opacity = "1";
            details.style.opacity = "1";
            image.style.opacity = "1";
        }, 300); // Delay for smooth fade transition

        // Update active state for list items
        items.forEach((item, idx) => {
            item.classList.toggle("active", idx === index);
        });

        // Update indicators
        indicators.forEach((indicator, idx) => {
            indicator.classList.toggle("active", idx === index);
        });

        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % specials.length;
        updateContent(currentIndex);
    }

    // Event Listeners for list items
    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            clearInterval(autoSlideInterval); // Stop auto-slide when user clicks
            updateContent(index);
            autoSlideInterval = setInterval(nextSlide, 10000); // Restart auto-slide
        });
    });

    // Event Listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            clearInterval(autoSlideInterval);
            updateContent(index);
            autoSlideInterval = setInterval(nextSlide, 10000);
        });
    });

    // Initial setup
    updateContent(currentIndex);
});


//successiful events start
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".events-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    // Star Rating System
    document.querySelectorAll(".event-rating").forEach(function (ratingElement) {
        let rating = parseFloat(ratingElement.getAttribute("data-rating"));
        for (let i = 1; i <= 10; i++) {
            let star = document.createElement("span");
            star.innerHTML = "★";
            if (i > rating) {
                star.style.opacity = "0.3";
            }
            ratingElement.appendChild(star);
        }
    });
});

//General Responsive desing Start 

//Responsive design start
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    const dropdownParents = document.querySelectorAll(".has-dropdown");
    const deepDropdownParents = document.querySelectorAll(".dropdown li");

    // Toggle hamburger and mobile nav list
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent bubbling to close
        hamburger.classList.toggle("open");
        navList.classList.toggle("active");
    });

    // Handle mobile dropdown toggle
    dropdownParents.forEach(parent => {
        parent.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                parent.classList.toggle("open");
            }
        });
    });

    // Handle deep dropdown toggle
    deepDropdownParents.forEach(item => {
        if (item.querySelector(".deep-dropdown")) {
            item.addEventListener("click", (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    item.classList.toggle("open");
                }
            });
        }
    });

    // Close all nav when clicking outside
    document.addEventListener("click", (e) => {
        if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove("open");
            navList.classList.remove("active");
            dropdownParents.forEach(parent => parent.classList.remove("open"));
            deepDropdownParents.forEach(item => item.classList.remove("open"));
        }
    });

    // Optional: Close nav on link click for mobile
    document.querySelectorAll(".nav-list a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove("open");
                navList.classList.remove("active");
                dropdownParents.forEach(parent => parent.classList.remove("open"));
                deepDropdownParents.forEach(item => item.classList.remove("open"));
            }
        });
    });
});

/*
Inner page Styling
*/

//Sign Up Page
// Toggling between Sign Up and Sign In forms
const toggleToSignUp = document.getElementById('toggleToSignUp');
const toggleToLogin = document.getElementById('toggleToLogin');
const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');
const formBox = document.getElementById('formBox');
const loginBox = document.getElementById('loginBox');

// Show Sign Up form and hide Login form
toggleToSignUp.addEventListener('click', () => {
  formBox.style.display = 'block';
  loginBox.style.display = 'none';
});

// Show Sign In form and hide Sign Up form
toggleToLogin.addEventListener('click', () => {
  formBox.style.display = 'none';
  loginBox.style.display = 'block';
});

// Toggle Password Visibility
function setupPasswordToggle(toggleId, inputId) {
  const toggleIcon = document.getElementById(toggleId);
  const passwordInput = document.getElementById(inputId);

  toggleIcon.addEventListener("click", function () {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";

    // Toggle Font Awesome eye / eye-slash classes
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
}

// Apply the toggle function to each password field
setupPasswordToggle("togglePassword", "password");
setupPasswordToggle("toggleConfirmPassword", "confirm-password");
setupPasswordToggle("toggleLoginPassword", "login-password");


//Open and close Sign in and Sign Up form
function openForm() {
    document.getElementById("formWrapper").style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable body scroll
  }
  
  function closeForm() {
    document.getElementById("formWrapper").style.display = "none";
    document.body.style.overflow = "auto"; // Enable body scroll again
  }

//Check if password and confirm password match
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const message = document.getElementById('passwordMatchMessage');

// Listen for changes on either input
passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
  if (confirmPasswordInput.value === "") {
    message.style.display = 'none';
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
}

  //Case sensitive password message
  const loginPassword = document.getElementById('login-password');
const loginInfoMessage = document.getElementById('loginPasswordInfo');

// Show the message on focus
loginPassword.addEventListener('focus', () => {
  loginInfoMessage.style.display = 'block';
});

// Keep the message visible while typing
loginPassword.addEventListener('input', () => {
  loginInfoMessage.style.display = 'block';
});

  /*
    Date Month and Year Start

    */
  
    const yearSelect = document.getElementById('dob-year');
    for (let y = new Date().getFullYear(); y >= 1900; y--) {
      const option = document.createElement('option');
      option.value = y;
      option.textContent = y;
      yearSelect.appendChild(option);
    }
    
    const monthSelect = document.getElementById('dob-month');
    const daySelect = document.getElementById('dob-day');
    const dobError = document.getElementById('dob-error');
    
    function populateDays() {
      const month = monthSelect.value;
      const year = parseInt(yearSelect.value);
      if (!month || !year) return;
    
      const daysInMonth = new Date(year, new Date(`${month} 1, ${year}`).getMonth() + 1, 0).getDate();
      daySelect.innerHTML = '<option value="">Day</option>';
      for (let d = 1; d <= daysInMonth; d++) {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = d;
        daySelect.appendChild(option);
      }
    }
    
    monthSelect.addEventListener('change', populateDays);
    yearSelect.addEventListener('change', populateDays);
    
    // Show inline error if day selected before month/year
    daySelect.addEventListener('focus', function () {
      if (!monthSelect.value || !yearSelect.value) {
        dobError.textContent = "Please select the year and month first.";
        dobError.style.display = 'block';
        daySelect.blur();
      } else {
        dobError.style.display = 'none';
      }
    });
    
    // Live future-date validation
    function checkFutureDate() {
      const day = daySelect.value;
      const month = monthSelect.value;
      const year = yearSelect.value;
    
      if (!day || !month || !year) return;
    
      const selectedDate = new Date(`${month} ${day}, ${year}`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
    
      if (selectedDate > today) {
        dobError.textContent = "Date of birth cannot be in the future.";
        dobError.style.display = 'block';
      } else {
        dobError.style.display = 'none';
      }
    }
    
    daySelect.addEventListener('change', checkFutureDate);
    monthSelect.addEventListener('change', checkFutureDate);
    yearSelect.addEventListener('change', checkFutureDate);
    
    // Final validation on submit
    document.getElementById('signUpForm').addEventListener('submit', function (e) {
      const day = daySelect.value;
      const month = monthSelect.value;
      const year = yearSelect.value;
    
      if (!day || !month || !year) {
        e.preventDefault();
        dobError.textContent = "Please enter a valid date of birth.";
        dobError.style.display = 'block';
        return;
      }
    
      const selectedDate = new Date(`${month} ${day}, ${year}`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      selectedDate.setHours(0, 0, 0, 0);
    
      if (selectedDate > today) {
        e.preventDefault();
        dobError.textContent = "Date of birth cannot be in the future.";
        dobError.style.display = 'block';
        return;
      }
    
      dobError.style.display = 'none';
    });

    //Hide More info on small screens
    document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.getElementById("toggleButton");
      const infoContainer = document.getElementById("infoContainer");
  
      toggleButton.addEventListener("click", function () {
        if (infoContainer.style.display === "none" || infoContainer.style.display === "") {
          infoContainer.style.display = "block";
          toggleButton.innerHTML = 'Hide Info <span class="arrow">↑</span>';
        } else {
          infoContainer.style.display = "none";
          toggleButton.innerHTML = 'Show Info <span class="arrow">→</span>';
        }
      });
    });
    

/*

Third Part Styling start

download this
npm install passport passport-google-oauth20 passport-facebook passport-strava passport-microsoft passport-instagram passport-aws


*/


//Third party sign up option
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
const path = require('path');

// Use environment variables for your client IDs and secrets
require('dotenv').config();

// Passport Strategies
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const StravaStrategy = require('passport-strava').Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
// Note: AWS authentication generally uses AWS Cognito or other AWS SDKs.

app.use(session({ secret: 'your-session-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Configure passport to use OAuth strategies
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.use(new StravaStrategy({
  clientID: process.env.STRAVA_CLIENT_ID,
  clientSecret: process.env.STRAVA_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/strava/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.use(new MicrosoftStrategy({
  clientID: process.env.MICROSOFT_CLIENT_ID,
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/microsoft/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/instagram/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Auth Routes
// Google Auth Route
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// Facebook Auth Route
app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email'],
}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// Strava Auth Route
app.get('/auth/strava', passport.authenticate('strava', {
  scope: 'read',
}));

app.get('/auth/strava/callback', passport.authenticate('strava', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// Microsoft Auth Route
app.get('/auth/microsoft', passport.authenticate('microsoft', {
  scope: ['user.read', 'openid', 'profile'],
}));

app.get('/auth/microsoft/callback', passport.authenticate('microsoft', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// Instagram Auth Route
app.get('/auth/instagram', passport.authenticate('instagram', {
  scope: ['user_profile', 'user_media'],
}));

app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// AWS Auth Route (AWS uses Amazon Cognito or other services for OAuth flow)
app.get('/auth/aws', (req, res) => {
  // Redirect to AWS Cognito or AWS SDK-based authentication
  res.send('AWS authentication is different; use Amazon Cognito for authentication');
});

// Home Route
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`<h1>Welcome, ${req.user.displayName}</h1><a href='/logout'>Logout</a>`);
  } else {
    res.send('<h1>Home</h1><p><a href="/auth/google">Sign in with Google</a></p>');
  }
});

// Logout Route
app.get('/logout', (req, res) => {
  req.logout((err) => {
    res.redirect('/');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



/*

Third Part Styling end

*/

/*

Third Part Styling Start
//Second option

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();
require('dotenv').config(); // Load environment variables

// Passport Strategies
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const StravaStrategy = require('passport-strava').Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;

// Setup middleware for session management
app.use(session({ secret: 'your-session-secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Setup Passport strategies

// Google OAuth
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Facebook OAuth
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Strava OAuth
passport.use(new StravaStrategy({
  clientID: process.env.STRAVA_CLIENT_ID,
  clientSecret: process.env.STRAVA_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/strava/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Microsoft OAuth
passport.use(new MicrosoftStrategy({
  clientID: process.env.MICROSOFT_CLIENT_ID,
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/microsoft/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Instagram OAuth
passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/instagram/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Auth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/strava', passport.authenticate('strava', { scope: 'read' }));
app.get('/auth/strava/callback', passport.authenticate('strava', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/microsoft', passport.authenticate('microsoft', { scope: ['user.read', 'openid', 'profile'] }));
app.get('/auth/microsoft/callback', passport.authenticate('microsoft', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/instagram', passport.authenticate('instagram', { scope: ['user_profile', 'user_media'] }));
app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

// Home Route
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`<h1>Welcome, ${req.user.displayName}</h1><a href='/logout'>Logout</a>`);
  } else {
    res.send('<h1>Home</h1><p><a href="/auth/google">Sign in with Google</a></p>');
  }
});

// Logout Route
app.get('/logout', (req, res) => {
  req.logout((err) => {
    res.redirect('/');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



Third Part Styling end

*/
