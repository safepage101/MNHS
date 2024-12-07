let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

const showSlide = (index) => {
    slides.style.transform = `translateX(${-index * 100}%)`;
};

const nextSlide = () => {
    if (slideIndex < totalSlides - 1) {
        showSlide(++slideIndex);
    }
};

const prevSlide = () => {
    if (slideIndex > 0) {
        showSlide(--slideIndex);
    }
};

// Initialize slider
showSlide(slideIndex);

document.getElementById("anonymousForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const message = document.getElementById("message").value;

            if (!message.trim()) {
                alert("Please write your concern.");
                return;
            }

            fetch("https://script.google.com/macros/s/AKfycbyBhUDYkJ5X6XYKTPsO1MAeaTqtG6ZJYp7OcmRjaPA0HjEaiy-Fr9VCIdRxRYNyF8NX/exec", {
                method: "POST",                
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            })
            .then(() => {
                alert("Your message has been submitted. Thank you!");
                document.getElementById("message").value = "";
            })
            .catch(() => {
                alert("There was an error submitting your message. Please try again later.");
            });
        });
