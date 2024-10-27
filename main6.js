const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  loginForm = document.querySelector(".login form"),
  signupForm = document.querySelector(".signup form"),
  loginLinks = document.querySelectorAll(".login-link"),
  signupLinks = document.querySelectorAll(".signup-link");

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        // If password is hidden
        password.type = "text"; // Show password
        eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon to show state
        return;
      }
      password.type = "password"; // Hide password
      eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon to hide state
    });
  });
});

// Add click event listener to each link to toggle between forms
loginLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    forms.classList.toggle("show-signup");
  });
});

signupLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    forms.classList.toggle("show-signup");
  });
});

// Login form validation
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginEmail = loginForm.querySelector("input[type=email/username]");
  const loginPassword = loginForm.querySelector("input[type=password]");
  const loginErrorMsg = loginForm.querySelector(".error-msg");

  if (loginEmail.value === "" || loginPassword.value === "") {
    loginErrorMsg.innerHTML = "Please fill out this field.";
    loginErrorMsg.style.display = "block";
  } else {
    loginErrorMsg.style.display = "none";
    loginForm.submit();
    setTimeout(() => {
      swal("Login Successful!", "You have logged in successfully!", "success");
    }, 1000);
  }
});

// Signup form validation
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const signupEmail = signupForm.querySelector("input[type=email/username]");
  const signupPassword = signupForm.querySelector("input[type=password]");
  const signupConfirmPassword = signupForm.querySelector(
    "input[type=password][placeholder='Confirm password']"
  );
  const signupErrorMsg = signupForm.querySelector(".error-msg");

  if (
    signupEmail.value === "" ||
    signupPassword.value === "" ||
    signupConfirmPassword.value === ""
  ) {
    signupErrorMsg.innerHTML = "Please fill out this field.";
    signupErrorMsg.style.display = "block";
  } else if (signupPassword.value !== signupConfirmPassword.value) {
    signupErrorMsg.innerHTML = "Passwords do not match.";
    signupErrorMsg.style.display = "block";
  } else {
    signupErrorMsg.style.display = "none";
    signupForm.submit();
    setTimeout(() => {
      swal("Account Created!", "Your account has been created successfully!", "success");
    }, 1000);
  }
});
