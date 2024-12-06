document.getElementById("anonymousForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const message = document.getElementById("message").value;

            if (!message.trim()) {
                alert("Please write your concern.");
                return;
            }

            fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
                method: "POST",
                mode: "no-cors",
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
