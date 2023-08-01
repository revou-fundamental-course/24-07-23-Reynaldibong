let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    currentSlide = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 3000);

// validation Name

let name = document.forms["form"]["name"];

let nameError = document.getElementById("nameError");

function validationName() {
  if (name.value.length < 1) {
    name.style.border = "1px solid red";
    nameError.style.display = "block";
    name.focus();
    return false;
  }

  if (name.value.length < 8) {
    nameError.innerHTML = "Username minimum 8 Character";
    name.style.border = "1px solid red";
    name.focus();
    return false;
  }
}

// validation email

const validationEmail = () => {
  let emailBorder = document.forms["form"]["email"];

  let form = document.getElementById("inputForm");
  let email = document.getElementById("email").value;
  let textError = document.getElementById("emailError");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    textError.innerHTML = "Your email Address Valid";
    textError.style.color = "#1f7c33";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    textError.innerHTML = "Please Enter Valid Email Address";
    textError.style.color = "#ff0000";
    emailBorder.style.border = "1px solid red";
  }

  if (email === "") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    textError.innerHTML = "";
    textError.style.color = "#00ff00";
  }
};
// document
//   .getElementById("inputForm")
//   .addEventListener("submit", function (event) {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     console.log(name);
//     if (name.trim() === "") {
//       alert("Please enter your name");
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters long.");
//       return;
//     }

//     alert("Form submitted successfully!");
//   });
