// ==========================
// Event handling for form submission
// Custom form validation (no HTML5-only validation)
// ==========================
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting by default

  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Message
  const message = document.getElementById("message").value.trim();
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  // Success Message
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  }
});

// ==========================
// Interactive Feature 1: Click Counter
// ==========================
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

// ==========================
// Interactive Feature 2: Dark Mode Toggle
// ==========================
document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
