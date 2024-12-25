// Light switcher
const lightSwitches = document.querySelectorAll(".light-switch");
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem("dark-mode") === "true") {
      // eslint-disable-next-line no-param-reassign
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener("change", () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          // eslint-disable-next-line no-param-reassign
          el.checked = checked;
        }
      });
      document.documentElement.classList.add("[&_*]:!transition-none");
      if (lightSwitch.checked) {
        document.documentElement.classList.add("dark");
        document.querySelector("html").style.colorScheme = "dark";
        localStorage.setItem("dark-mode", true);
        document.dispatchEvent(
          new CustomEvent("darkMode", { detail: { mode: "on" } })
        );
      } else {
        document.documentElement.classList.remove("dark");
        document.querySelector("html").style.colorScheme = "light";
        localStorage.setItem("dark-mode", false);
        document.dispatchEvent(
          new CustomEvent("darkMode", { detail: { mode: "off" } })
        );
      }
      setTimeout(() => {
        document.documentElement.classList.remove("[&_*]:!transition-none");
      }, 1);
    });
  });
}






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

      // Move focus to the next input if current input is valid
      if (index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      // Handle Backspace key
      if (e.key === "Backspace" && !input.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });

    input.addEventListener("paste", (e) => {
      // Handle paste for multiple digits
      const data = e.clipboardData.getData("text");
      const digits = data.match(/\d/g); // Extract only digits
      if (digits) {
        e.preventDefault();
        digits.slice(0, otpInputs.length).forEach((digit, i) => {
          otpInputs[i].value = digit;
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
  const pin = Array.from(pinInputs).map((input) => input.value).join("");
  console.log(pin);
});




