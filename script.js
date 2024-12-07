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
        alert("Please write your concern before submitting.");
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbxTwz5nR34mmlgfqo1DSZmBtSe_K56roXClnAStFAzfVHLtl0ZkvuCDJiGi3dw3SXO2/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("Your message has been submitted successfully.");
            document.getElementById("message").value = "";
        } else {
            alert("An error occurred. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error submitting the message:", error);
        alert("Unable to connect to server. Please try again later.");
    });
});
