
// SHOW & OFF PASWWORD

  // LOGIN PASSWORD
  document.addEventListener("DOMContentLoaded", () => {

    const toggleLoginPasswordButton = document.querySelector(
      "button[data-toggle='loginPassword']"
    );
    const passwordLoginInput = document.getElementById("loginPassword");
    const icon = toggleLoginPasswordButton.querySelector(".loginPassword-icon");
  
    toggleLoginPasswordButton.addEventListener("click", () => {
      const showIcons = icon.querySelectorAll(".loginPasswordShow-icon");
      const hideIcons = icon.querySelectorAll(".loginPasswordHide-icon");
  
      if (passwordLoginInput.type === "password") {
        passwordLoginInput.type = "text";
        showIcons.forEach((el) => el.classList.add("hidden"));
        hideIcons.forEach((el) => el.classList.remove("hidden"));
      } else {
        passwordLoginInput.type = "password";
        hideIcons.forEach((el) => el.classList.add("hidden"));
        showIcons.forEach((el) => el.classList.remove("hidden"));
      }
    });
    
  });
  
  
    // SIGNUP PASSWORD
  document.addEventListener("DOMContentLoaded", () => {
    // SIGN UP
    const togglePasswordButton = document.querySelector(
      "button[data-toggle='password']"
    );
    const toggleConfirmPasswordButton = document.querySelector(
      "button[data-toggle='confirmPassword']"
    );
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordIcon = togglePasswordButton.querySelector(".password-icon");
    const confirmPasswordIcon = toggleConfirmPasswordButton.querySelector(
      ".confirmPassword-icon"
    );
  
    // Function to toggle visibility for both inputs
    const toggleVisibility = () => {
      const passwordShowIcons = passwordIcon.querySelectorAll(".show-icon");
      const passwordHideIcons = passwordIcon.querySelectorAll(".hide-icon");
      const confirmPasswordShowIcons = confirmPasswordIcon.querySelectorAll(
        ".confirmPasswordShow-icon"
      );
      const confirmPasswordHideIcons = confirmPasswordIcon.querySelectorAll(
        ".confirmPasswordHide-icon"
      );
  
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
  
        // Update icons
        passwordShowIcons.forEach((el) => el.classList.add("hidden"));
        passwordHideIcons.forEach((el) => el.classList.remove("hidden"));
        confirmPasswordShowIcons.forEach((el) => el.classList.add("hidden"));
        confirmPasswordHideIcons.forEach((el) => el.classList.remove("hidden"));
      } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
  
        // Update icons
        passwordHideIcons.forEach((el) => el.classList.add("hidden"));
        passwordShowIcons.forEach((el) => el.classList.remove("hidden"));
        confirmPasswordHideIcons.forEach((el) => el.classList.add("hidden"));
        confirmPasswordShowIcons.forEach((el) => el.classList.remove("hidden"));
      }
    };
  
    togglePasswordButton.addEventListener("click", toggleVisibility);
    toggleConfirmPasswordButton.addEventListener("click", toggleVisibility);
  });
  
  



// LOGIN ONly 
document.addEventListener("DOMContentLoaded", () => {
    const otpInputs = document.querySelectorAll(".otp-login-input");
    const otpForm = document.getElementById("login-pin-form");
  
    otpInputs.forEach((input, index) => {
      // Restrict input to numbers only
      input.addEventListener("input", (e) => {
        const value = e.target.value;
  
        // Validate if input is a single digit (0-9)
        if (!/^\d$/.test(value)) {
          e.target.value = ""; // Clear input if not a valid digit
          return;
        }
  
        // Hide the entered value and change it to a dot
        input.type = "password";
  
        // Move focus to the next input if current input is valid
        if (index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });
  
      input.addEventListener("focus", () => {
        input.type = "tel";
      });
  
      input.addEventListener("keydown", (e) => {
        // Handle Backspace key
        if (e.key === "Backspace" && !input.value && index > 0) {
          otpInputs[index - 1].focus();
          otpInputs[index - 1].type = "tel";
        }
      });
  
      input.addEventListener("paste", (e) => {
        const data = e.clipboardData.getData("text");
        const digits = data.match(/\d/g);
        if (digits) {
          e.preventDefault();
          digits.slice(0, otpInputs.length).forEach((digit, i) => {
            otpInputs[i].value = digit;
            otpInputs[i].type = "password";
          });
          if (digits.length < otpInputs.length) {
            otpInputs[digits.length].focus();
          }
        }
      });
    });
  
    otpForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission
      const otpCode = Array.from(otpInputs)
        .map((input) => input.value)
        .join(""); // Collect the values and join them into a string
      console.log("Entered OTP Code:", otpCode);
    });
  });
  
  // LOGIN WITH PIN PAGE
  const pinInputs = document.querySelectorAll(".otp-input");
  const pinButtons = document.querySelectorAll(".pin-btn");
  const deleteBtn = document.getElementById("delete-btn");
  let activeInputIndex = 0;
  
  function updateActiveInput(index) {
    activeInputIndex = Math.max(0, Math.min(index, pinInputs.length - 1));
    pinInputs[activeInputIndex].focus();
  }
  
  pinInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
  
      // Restrict to numbers only
      if (!/^\d$/.test(value)) {
        e.target.value = ""; // Clear non-numeric input
        return;
      }
  
      if (value) {
        updateActiveInput(index + 1);
      }
    });
  
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value) {
        updateActiveInput(index - 1);
      }
    });
  });
  
  pinButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
  
      if (value === "") return; // Empty button
      if (value === "BACKSPACE") {
        // Delete last input
        if (pinInputs[activeInputIndex].value) {
          pinInputs[activeInputIndex].value = "";
        } else if (activeInputIndex > 0) {
          updateActiveInput(activeInputIndex - 1);
          pinInputs[activeInputIndex].value = "";
        }
      } else {
        if (pinInputs[activeInputIndex].value === "") {
          pinInputs[activeInputIndex].value = value;
          updateActiveInput(activeInputIndex + 1);
        }
      }
    });
  });
  
  document.getElementById("pin-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const pin = Array.from(pinInputs)
      .map((input) => input.value)
      .join("");
    console.log(pin);
  });
  