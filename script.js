/* ================================================================
   SCRIPT.JS — Noor Faisel's Portfolio Website
   ----------------------------------------------------------------
   HOW THIS FILE IS ORGANIZED:
   1. Set the current year in the footer
   2. Smooth scrolling for the "Read My Story" button
   3. Smooth scrolling for all navigation links
   4. Contact form validation
================================================================ */


/* ----------------------------------------------------------------
   1. SET CURRENT YEAR IN FOOTER
   ----------------------------------------------------------------
   - new Date() gives us today's date
   - .getFullYear() gets just the year number (e.g. 2025)
   - We then put that number inside the <span id="year"> element
   - This means you never need to update the year manually!
---------------------------------------------------------------- */

// Get the <span id="year"> element from the HTML
const yearElement = document.getElementById('year');

// Get the current year as a number
const currentYear = new Date().getFullYear();

// Put the year number inside the <span> tag
// Now the footer shows: © 2025 (or whatever year it is)
yearElement.textContent = currentYear;


/* ----------------------------------------------------------------
   2. SCROLL BUTTON — "Read My Story" button in the Home section
   ----------------------------------------------------------------
   - When clicked, the page smoothly scrolls down to the About section
   - document.getElementById() finds an element by its id attribute
   - .addEventListener('click', function) runs our code when clicked
   - scrollIntoView() scrolls so the element is visible
   - { behavior: 'smooth' } makes it animate smoothly instead of jumping
---------------------------------------------------------------- */

// Find the scroll button
const scrollButton = document.getElementById('scroll-btn');

// Find the About section (our destination)
const aboutSection = document.getElementById('about');

// When the button is clicked, scroll to the About section
scrollButton.addEventListener('click', function () {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});


/* ----------------------------------------------------------------
   3. SMOOTH SCROLLING FOR ALL NAVIGATION LINKS
   ----------------------------------------------------------------
   - We want ALL nav links (Home, About, Contact) to scroll smoothly
   - querySelectorAll('.nav-links a') finds ALL <a> links inside .nav-links
   - We loop through each one and add a click event
   - preventDefault() stops the page from jumping (default browser behavior)
   - We find the target section using the link's href attribute
---------------------------------------------------------------- */

// Get all the navigation links inside the .nav-links element
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each nav link
// 'link' represents one link at a time as we loop
navLinks.forEach(function (link) {

  // When this link is clicked...
  link.addEventListener('click', function (event) {

    // Prevent the default "jump" behavior of anchor links
    event.preventDefault();

    // Get the href value — e.g., "#about" or "#contact"
    const targetId = this.getAttribute('href');

    // Find the section element with that id
    // e.g., if href="#about", we find document.getElementById("about")
    const targetSection = document.querySelector(targetId);

    // If the section exists, scroll to it smoothly
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

});


/* ----------------------------------------------------------------
   4. CONTACT FORM VALIDATION
   ----------------------------------------------------------------
   - We check that all fields are filled in before "submitting"
   - If a field is empty, we show a red error message below it
   - If everything is filled, we show a thank-you message
   - No data is actually sent anywhere (no backend needed)
   
   KEY CONCEPTS USED:
   - .value.trim() gets the typed text, removing extra spaces
   - If value is empty (""), it means the user didn't type anything
   - We add/remove CSS classes to show or hide error messages
---------------------------------------------------------------- */

// Find the form element
const contactForm = document.getElementById('contact-form');

// When the form is submitted (Submit button clicked)...
contactForm.addEventListener('submit', function (event) {

  // Prevent the form from refreshing the page (default behavior)
  event.preventDefault();

  // ---- Get the values the user typed ----
  // .value gives us the text inside an input
  // .trim() removes spaces from the start and end
  const nameValue    = document.getElementById('name').value.trim();
  const emailValue   = document.getElementById('email').value.trim();
  const messageValue = document.getElementById('message').value.trim();

  // ---- Get the error message elements ----
  const nameError    = document.getElementById('name-error');
  const emailError   = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // ---- Get the input elements (to add/remove the red border) ----
  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // ---- Track if everything is valid ----
  // We start assuming everything is valid (true)
  // If we find any empty field, we set this to false
  let isValid = true;

  // ---- Validate Name ----
  if (nameValue === '') {
    // Name is empty — show error
    nameError.classList.add('visible');      // Show the red error message
    nameInput.classList.add('error');        // Add red border to input
    isValid = false;                          // Mark as invalid
  } else {
    // Name is filled — hide any previous error
    nameError.classList.remove('visible');
    nameInput.classList.remove('error');
  }

  // ---- Validate Email ----
  // We also check that the email contains "@" using .includes()
  if (emailValue === '' || !emailValue.includes('@')) {
    emailError.classList.add('visible');
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailError.classList.remove('visible');
    emailInput.classList.remove('error');
  }

  // ---- Validate Message ----
  if (messageValue === '') {
    messageError.classList.add('visible');
    messageInput.classList.add('error');
    isValid = false;
  } else {
    messageError.classList.remove('visible');
    messageInput.classList.remove('error');
  }

  // ---- If all fields are valid, show success message ----
  if (isValid) {
    // Show a simple thank you alert
    alert('✅ Thank you for your message! I will get back to you soon.');

    // Clear all the form fields after submitting
    // .reset() is a built-in form method that empties all fields
    contactForm.reset();
  }

});
