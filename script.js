/*
Program name: script.js
Author: Bareera Tariq
Date created: 06/20/2025
Version: 1.0
Description: JavaScript validation for Homework 3 form
*/

document.addEventListener("DOMContentLoaded", function () {
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");

  fname.addEventListener("input", validateFirstName);
  lname.addEventListener("input", validateLastName);
});

function validateFirstName() {
  const fname = document.getElementById("fname");
  const error = document.getElementById("fname-error");
  const regex = /^[a-zA-Z'-]{1,30}$/;

  if (!regex.test(fname.value.trim())) {
    error.textContent = "First name must be 1–30 letters, apostrophes, or dashes.";
    fname.classList.add("invalid");
  } else {
    error.textContent = "";
    fname.classList.remove("invalid");
  }
  toggleSubmit();
}

function validateLastName() {
  const lname = document.getElementById("lname");
  const error = document.getElementById("lname-error");
  const regex = /^[a-zA-Z'-]{1,30}$/;

  if (!regex.test(lname.value.trim())) {
    error.textContent = "Last name must be 1–30 letters, apostrophes, or dashes.";
    lname.classList.add("invalid");
  } else {
    error.textContent = "";
    lname.classList.remove("invalid");
  }
  toggleSubmit();
}

function toggleSubmit() {
  const errors = document.querySelectorAll(".error-message");
  let hasErrors = false;
  errors.forEach(err => {
    if (err.textContent !== "") {
      hasErrors = true;
    }
  });

  const fnameEmpty = document.getElementById("fname").value.trim() === "";
  const lnameEmpty = document.getElementById("lname").value.trim() === "";

  const submitBtn = document.getElementById("submit-button");
  submitBtn.style.display = (!hasErrors && !fnameEmpty && !lnameEmpty) ? "inline-block" : "none";
}

function validateForm() {
  validateFirstName();
  validateLastName();
}

function submitForm() {
  // Simulate redirect
  window.location.href = "thankyou.html";
}
