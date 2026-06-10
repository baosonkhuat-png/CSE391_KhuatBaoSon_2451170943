const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const confirmInput = document.getElementById("confirmInput");
const phoneInput = document.getElementById("phoneInput");
const submitButton = document.getElementById("submitButton");
const successModal = document.getElementById("successModal");
const successMessage = document.getElementById("successMessage");
const closeSuccess = document.getElementById("closeSuccess");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const phoneError = document.getElementById("phoneError");
const strengthFill = document.getElementById("strengthFill");

const nameStatus = document.getElementById("nameStatus");
const emailStatus = document.getElementById("emailStatus");
const passwordStatus = document.getElementById("passwordStatus");
const confirmStatus = document.getElementById("confirmStatus");
const phoneStatus = document.getElementById("phoneStatus");

function setStatus(element, message, valid) {
  element.textContent = valid ? "✅" : "❌";
  element.style.color = valid ? "#16a34a" : "#dc2626";
  return valid;
}

function validateName() {
  const value = nameInput.value.trim();
  const valid = value.length >= 2 && value.length <= 50;
  nameError.textContent = valid ? "" : "Tên phải từ 2 đến 50 ký tự.";
  return setStatus(nameStatus, nameError.textContent, valid);
}

function validateEmail() {
  const value = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = regex.test(value);
  emailError.textContent = valid ? "" : "Email không hợp lệ.";
  return setStatus(emailStatus, emailError.textContent, valid);
}

function evaluatePassword() {
  const value = passwordInput.value;
  const lengthValid = value.length >= 8;
  const hasLower = /[a-z]/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSymbol = /[^A-Za-z0-9]/.test(value);

  let score = 0;
  if (lengthValid) score += 1;
  if (hasLower && hasUpper) score += 1;
  if (hasNumber) score += 1;
  if (hasSymbol) score += 1;

  let strength = "Weak";
  let width = "25%";
  let color = "#dc2626";

  if (score === 2) {
    strength = "Medium";
    width = "50%";
    color = "#f59e0b";
  } else if (score === 3) {
    strength = "Strong";
    width = "75%";
    color = "#16a34a";
  } else if (score === 4) {
    strength = "Very strong";
    width = "100%";
    color = "#0f766e";
  }

  strengthFill.style.width = width;
  strengthFill.style.background = color;

  const valid = lengthValid && hasLower && hasNumber;
  passwordError.textContent = valid ? "" : "Mật khẩu phải có ít nhất 8 ký tự, chữ thường và số.";
  return setStatus(passwordStatus, passwordError.textContent || strength, valid);
}

function validateConfirm() {
  const value = confirmInput.value;
  const valid = value === passwordInput.value && value.length > 0;
  confirmError.textContent = valid ? "" : "Mật khẩu không khớp.";
  return setStatus(confirmStatus, confirmError.textContent, valid);
}

function formatPhone(value) {
  const digits = value.replace(/[^0-9]/g, "").slice(0, 10);
  const part1 = digits.slice(0, 4);
  const part2 = digits.slice(4, 7);
  const part3 = digits.slice(7, 10);
  let formatted = part1;
  if (part2) formatted += "-" + part2;
  if (part3) formatted += "-" + part3;
  return formatted;
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const regex = /^\d{4}-\d{3}-\d{3}$/;
  const valid = regex.test(value);
  phoneError.textContent = valid ? "" : "Số điện thoại phải là 10 chữ số dạng 0901-234-567.";
  return setStatus(phoneStatus, phoneError.textContent, valid);
}

function updateSubmitState() {
  const valid = validateName() && validateEmail() && evaluatePassword() && validateConfirm() && validatePhone();
  submitButton.disabled = !valid;
}

nameInput.addEventListener("input", () => {
  validateName();
  updateSubmitState();
});

emailInput.addEventListener("input", () => {
  validateEmail();
  updateSubmitState();
});

passwordInput.addEventListener("input", () => {
  evaluatePassword();
  validateConfirm();
  updateSubmitState();
});

confirmInput.addEventListener("input", () => {
  validateConfirm();
  updateSubmitState();
});

phoneInput.addEventListener("input", (event) => {
  const formatted = formatPhone(event.target.value);
  event.target.value = formatted;
  validatePhone();
  updateSubmitState();
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.textContent = `Tên: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nPhone: ${phoneInput.value.trim()}`;
  successModal.classList.remove("hidden");
});

closeSuccess.addEventListener("click", () => {
  successModal.classList.add("hidden");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    successModal.classList.add("hidden");
  }
});
