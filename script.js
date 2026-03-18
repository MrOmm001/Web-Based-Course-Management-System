// 1. Button Click (Book Now)
document.querySelector(".btn").addEventListener("click", function () {
    alert("Booking feature coming soon!");
});

// 2. Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email address");
        return;
    }

    // Message length validation
    if (message.length < 10) {
        alert("Message should be at least 10 characters long");
        return;
    }

    // Success message
    alert("Form submitted successfully!");
    this.submit(); // allow Formspree to process
});

// 3. Smooth Scrolling for Navbar Links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let targetId = this.getAttribute("href");
        if (targetId !== "" && document.querySelector(targetId)) {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
