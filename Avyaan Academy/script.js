// Our Mission and Vision
// Mission: To empower students with practical computer skills and knowledge for real-world success.
// Vision: To become a leading center of excellence in computer education, fostering innovation and growth.

document.getElementById('admissionForm').addEventListener('submit', function(e){
  let phone = document.getElementById('phone').value;
  if(!/^[0-9]{10}$/.test(phone)){
    alert('Please enter a valid 10-digit phone number');
    e.preventDefault();
  }

  let aadhar = document.querySelector('input[name="aadhar"]').value;
  let allowedExtensions = /\.(pdf|jpg|jpeg|png)$/i;
  if(!allowedExtensions.exec(aadhar)){
    alert('Please enter a valid 12-digit aadhar number and upload Aadhar card in PDF, JPG, JPEG, or PNG format');
    e.preventDefault();
  }
  // script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);

});
