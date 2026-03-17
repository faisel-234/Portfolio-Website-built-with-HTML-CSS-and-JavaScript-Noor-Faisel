
const yearElement = document.getElementById('year');


const currentYear = new Date().getFullYear();

const scrollButton = document.getElementById('scroll-btn');

const aboutSection = document.getElementById('about');

scrollButton.addEventListener('click', function () {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});



const navLinks = document.querySelectorAll('.nav-links a');


navLinks.forEach(function (link) {

  
  link.addEventListener('click', function (event) {

    event.preventDefault();

    const targetId = this.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

});




const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameValue    = document.getElementById('name').value.trim();
  const emailValue   = document.getElementById('email').value.trim();
  const messageValue = document.getElementById('message').value.trim();

  const nameError    = document.getElementById('name-error');
  const emailError   = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');
  let isValid = true;
  if (nameValue === '') {
    
    nameError.classList.add('visible');      // Show the red error message
    nameInput.classList.add('error');        // Add red border to input
    isValid = false;                          // Mark as invalid
  } else {

    nameError.classList.remove('visible');
    nameInput.classList.remove('error');
  }

  if (emailValue === '' || !emailValue.includes('@')) {
    emailError.classList.add('visible');
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailError.classList.remove('visible');
    emailInput.classList.remove('error');
  }

  if (messageValue === '') {
    messageError.classList.add('visible');
    messageInput.classList.add('error');
    isValid = false;
  } else {
    messageError.classList.remove('visible');
    messageInput.classList.remove('error');
  }

  if (isValid) {
    alert('Thank you for your message! I will get back to you soon.');

    // Clear all the form fields after submitting
    // .reset() is a built-in form method that empties all fields
    contactForm.reset();
  }

});
