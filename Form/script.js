const form = document.querySelector(".form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const positionInput = document.getElementById("job-position");
const resumeInput = document.getElementById("resume");
const message = document.getElementById("message");

// Handle form submission
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing
  event.preventDefault();

  // Clear the previous message
  message.textContent = "";
  message.style.color = "";

  // Get the user's input
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const position = positionInput.value;
  const resume = resumeInput.files[0];

  // Validate full name
  if (name.length < 2) {
    showMessage("Please enter your full name.", "red");
    nameInput.focus();
    return;
  }

  // Validate email
  if (!emailInput.validity.valid || email === "") {
    showMessage("Please enter a valid email address.", "red");
    emailInput.focus();
    return;
  }

  // Validate phone number
  if (!/^[0-9]{10}$/.test(phone)) {
    showMessage("Please enter a valid 10-digit phone number.", "red");
    phoneInput.focus();
    return;
  }

  // Validate job position
  if (position === "") {
    showMessage("Please select a job position.", "red");
    positionInput.focus();
    return;
  }

  // Validate resume selection
  if (!resume) {
    showMessage("Please upload your resume.", "red");
    resumeInput.focus();
    return;
  }

  // Validate resume file type
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

const allowedExtensions = /\.(pdf|doc|docx)$/i;

  if (
    !allowedTypes.includes(resume.type) &&
    !allowedExtensions.test(resume.name)
  ) {
    showMessage("Please upload a PDF, DOC, or DOCX file.", "red");
    resumeInput.focus();
    return;
  }

  // Validate resume file size (maximum 5 MB)
 const maxSize = 5 * 1024 * 1024;

  if (resume.size > maxSize) {
    showMessage("Resume size must not exceed 5 MB.", "red");
    resumeInput.focus();
    return;
  }

  // All validations passed
 showMessage(
  `Thank you, ${name}! Your application passed validation.`,
  "green"
);

  console.log("Application details:", {
    name,
    email,
    phone,
    position,
    resumeName: resume.name,
  });
});

// Reusable function for showing messages
function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

// Handle form reset
form.addEventListener("reset", function () {
  message.textContent = "";
  message.style.color = "";
});
