document.addEventListener("DOMContentLoaded", () => {
    // Typing animation and cursor removal logic
    const typingElement = document.querySelector(".typing");

    if (typingElement) {
        // Wait for the typing animation to finish (2.5 seconds)
        setTimeout(() => {
            typingElement.classList.add("done"); // Add class to stop the blinking cursor
        }, 2500); // Duration matches the typing animation (2.5s)
    }

    // Tab switching logic
    const programmingTab = document.getElementById("programming-tab");
    const toolsTab = document.getElementById("tools-tab");
    const programmingSkills = document.getElementById("programming-skills");
    const toolsSkills = document.getElementById("tools-skills");

    if (programmingTab && toolsTab && programmingSkills && toolsSkills) {
        // Add click event listeners to tabs
        programmingTab.addEventListener("click", () => {
            programmingTab.classList.add("active");
            toolsTab.classList.remove("active");
            programmingSkills.classList.add("active");
            toolsSkills.classList.remove("active");
        });

        toolsTab.addEventListener("click", () => {
            toolsTab.classList.add("active");
            programmingTab.classList.remove("active");
            toolsSkills.classList.add("active");
            programmingSkills.classList.remove("active");
        });
    }

    // Navbar hide/show on scroll logic
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    if (navbar) {
        window.addEventListener('scroll', () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll <= 0) {
                navbar.style.top = "20px"; // Show navbar when at the top
            } else if (currentScroll > lastScrollTop) {
                navbar.style.top = "-80px"; // Hide navbar when scrolling down
            } else {
                navbar.style.top = "20px"; // Show navbar when scrolling up
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
        });
    }
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const programmingTab = document.getElementById('programming-tab');
    const toolsTab = document.getElementById('tools-tab');
    const programmingSkills = document.getElementById('programming-skills');
    const toolsSkills = document.getElementById('tools-skills');

    programmingTab.addEventListener('click', () => {
        programmingTab.classList.add('active');
        toolsTab.classList.remove('active');
        programmingSkills.classList.add('active');
        toolsSkills.classList.remove('active');
    });

    toolsTab.addEventListener('click', () => {
        toolsTab.classList.add('active');
        programmingTab.classList.remove('active');
        toolsSkills.classList.add('active');
        programmingSkills.classList.remove('active');
    });
});


// Change Navbar style on scroll
window.onscroll = function () {
    var navbar = document.querySelector("nav");
    var logo = document.getElementById("logo");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
};

// JavaScript to handle scroll event and add class for navbar effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const logo = document.querySelector('#logo');
    
    if (window.scrollY > 50) { // Scroll threshold
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
