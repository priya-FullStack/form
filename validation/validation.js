function validate(){
    const email=document.getElementById("email");
    const mobile_number=document.getElementById("mobile-number");
    const phone_number=document.getElementById("phone-number");
    const url=document.getElementById("url");
    const dob=document.getElementById("dob");
    const password=document.getElementById("password");
    const cpassword=document.getElementById("cpassword");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern = /^\+91[0-9]\d{1,10}+$/;
const PhonePattern = /^\+91[0-9]\d{1,10}+$/;
const urlPattern=/^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/;
const dobPattern= /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const passowrdPatern=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
if (!emailRegex.test(emailInput.value)) {
    alert("Invalid email format!");
    isValid = false;
  }

  if (!mobilePattern.test(mobile_number.value) && !phonePattern.test(phone_number.value)) {
    // Consider combining mobile and phone inputs for a single validation
    alert("Invalid phone number format!");
    isValid = false;
  }

  if (!urlPattern.test(url.value)) {
    alert("Invalid URL format!");
    isValid = false;
  }

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    isValid = false;
  } else if (!passwordPattern.test(password.value)) {
    // Additional validation for password complexity (optional)
    alert("Password must be at least 8 characters with at least one digit, one lowercase letter, and one uppercase letter.");
    isValid = false;
  }

  // Handle successful validation (prevent form submission by default)
  if (isValid) {
    // You can uncomment the following line to allow form submission
    // return true;  // Allow form submission

    // Handle form submission logic (e.g., send data to server)
    console.log("Form is valid! Submitting data...");
    // ... (your form submission logic here)
  } else {
    return false; // Prevent form submission if validation fails
  }
}
