// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {

        // Prevent default submission for validation
        event.preventDefault();

        // Get field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic email validation using regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation checks
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message === "") {
            alert("Please write a message before submitting.");
            return;
        }

        // If all good → redirect user to LinkedIn
        alert("Form submitted successfully! Redirecting…");

        window.location.href = "https://www.linkedin.com/in/aashutoshbakhrel";
    });
});
