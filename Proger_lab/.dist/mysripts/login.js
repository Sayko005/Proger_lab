// Login form validation and authentication
document.getElementById("login-form").addEventListener("submit", function (event) {
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  event.preventDefault();

  let valid = true;

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Email validation
  if (email.trim() === "") {
    document.getElementById("emailError").textContent = "Email must not be empty!";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Incorrect email format!";
    valid = false;
  }

  // Password validation
  if (password.length < 8) {
    document.getElementById("passwordError").textContent = "Length of the password must be greater than 7!!!";
    valid = false;
  } else if (!/\d/.test(password)) {
    document.getElementById("passwordError").textContent = "Password must contain at least one digit!!!";
    valid = false;
  } else if (!/[@.!*?_,#$%^&-+]/.test(password)) {
    document.getElementById("passwordError").textContent = 
      "Password must contain at least one special character from [@.!*?_,#$%^&-+]";
    valid = false;
  }

  if (valid) {
    localStorage.setItem('emailname', email); // Save email to localStorage
    alert("Form submitted successfully!");
    window.location.replace("index.html"); // Redirect to the main page or dashboard
  }
});

// Arrow key navigation for pages
let currentPage = 6; // Initialize to 'login.html' page ID
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    navigateToPageWithActions(event.key);
  }
});

function navigateToPageWithActions(key) {
  const pageMap = {
    '1': 'index.html',
    '2': 'About Course.html',
    '3': 'Teachers.html',
    '4': 'Students.html',
    '5': 'About Us.html',
    '6': 'login.html'
  };

  if (key === 'ArrowRight') {
    currentPage = (currentPage % 6) + 1;
  } else if (key === 'ArrowLeft') {
    currentPage = (currentPage - 2 + 6) % 6 + 1;
  }

  if (pageMap[currentPage]) {
    window.location.href = pageMap[currentPage];
  }
}


