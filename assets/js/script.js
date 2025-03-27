// Remove Preloader When Page Loads
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});



// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Change icon when menu is open/closed
    if (navLinks.classList.contains("show")) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
    if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove("show");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

// Check if dark mode is saved in local storage
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Store mode in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem("dark-mode", "disabled");
        modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
        once: true,
    });
});



const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

// Function to Change Slide
function changeSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        indicators[i].classList.toggle("active", i === index);
    });
}

// Auto Slide Function
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide(currentIndex);
}

// Set Auto Slide Interval
let slideInterval = setInterval(autoSlide, 5000);

// Click Indicator to Change Slide
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        currentIndex = index;
        changeSlide(currentIndex);
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 5000);
    });
});

// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
        once: true,
    });
});


/* portfolio section*/

document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".before-after");

    sliders.forEach((container) => {
        const sliderHandle = container.querySelector(".slider-handle");
        const beforeContainer = container.querySelector(".before");
        let isDragging = false;

        const updateSlider = (offsetX, rect) => {
            let percentage = (offsetX / rect.width) * 100;

            // Prevent out-of-bound movement
            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;

            // Move handle & update widths simultaneously
            sliderHandle.style.left = `${percentage}%`;
            beforeContainer.style.width = `${percentage}%`;
        };

        const startDrag = (event) => {
            isDragging = true;
            event.preventDefault();
        };

        const onDrag = (event) => {
            if (!isDragging) return;
            let rect = container.getBoundingClientRect();
            let offsetX = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
            updateSlider(offsetX, rect);
        };

        const endDrag = () => {
            isDragging = false;
        };

        // Mouse Events
        sliderHandle.addEventListener("mousedown", startDrag);
        document.addEventListener("mousemove", onDrag);
        document.addEventListener("mouseup", endDrag);

        // Touch Events (for mobile)
        sliderHandle.addEventListener("touchstart", startDrag);
        document.addEventListener("touchmove", onDrag);
        document.addEventListener("touchend", endDrag);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector(".slider-track");
    const portslides = document.querySelectorAll(".before-after");
    const indicatorsContainer = document.querySelector(".portslider-indicators"); // Corrected selector

    let currentIndex = 0;
    let totalSlides = portslides.length;

    // Set the correct width for slider-track
    sliderTrack.style.width = `${totalSlides * 100}%`;

    // Create indicators dynamically
    indicatorsContainer.innerHTML = ""; // Clear previous indicators
    portslides.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.dataset.index = index;
        dot.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
    });

    const updateIndicators = () => {
        document.querySelectorAll(".portslider-indicators span").forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    };

    const goToSlide = (index) => {
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;

        sliderTrack.style.transform = `translateX(-${(index * 100) / totalSlides}%)`;
        currentIndex = index;
        updateIndicators();
    };

    // Auto-slide every 5 seconds
    setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 5000);

    // Initialize first indicator
    updateIndicators();
});




/* testimonial section*/
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const testindicators = document.querySelectorAll(".testimonial-indicator");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        testindicators[i].classList.remove("active");
    });

    testimonials[index].classList.add("active");
    testindicators[index].classList.add("active");
}

function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
}

// Auto-slide testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Manually select testimonial using indicators
testindicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
        testimonialIndex = i;
        showTestimonial(i);
    });
});

// Show first testimonial on load
showTestimonial(testimonialIndex);



// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Live Chat (Dummy Alert for Now)
document.getElementById("liveChatBtn").addEventListener("click", function () {
    alert("Live chat feature coming soon!");
});







function toggleFAQ(index) {
    let answer = document.getElementById("faq" + index);
    let icon = answer.previousElementSibling.querySelector(".icon");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "-";
    }
}


