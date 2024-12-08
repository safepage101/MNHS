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

showSlide(slideIndex);

document.getElementById("anonymousForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const submitButton = document.querySelector('button[type="submit"]');
    const loader = document.getElementById('loader');
    const submitText = document.getElementById('buttonText');

    // Show loader and hide text visually by setting opacity
    loader.style.display = 'inline-block';
    submitText.style.opacity = '0';
    submitText.style.pointerEvents = 'none';
    submitButton.disabled = true;

    const message = document.getElementById("message").value;

    if (!message.trim()) {
        alert("Please write your concern before submitting.");
        loader.style.display = 'none';
        submitText.style.opacity = '1';
        submitText.style.pointerEvents = 'auto';
        submitButton.disabled = false;
        return;
    }

    fetch("https://script.google.com/macros/s/AKfycbxpFuDm17KAld9b5TiJkMAaph_QKX7bObQvia3mqQ5r1LQRLH1gbR2SK0ck074M3NgmDA/exec", {
        method: "POST",
        body: new URLSearchParams({ message: message })
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert("Your message was sent successfully.");
                document.getElementById("message").value = "";
            } else {
                alert("Something went wrong. Please try again.");
            }

            loader.style.display = 'none';
            submitText.style.opacity = '1';
            submitText.style.pointerEvents = 'auto';
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Could not send message. Please try again later.");
            loader.style.display = 'none';
            submitText.style.opacity = '1';
            submitText.style.pointerEvents = 'auto';
            submitButton.disabled = false;
        });
});
