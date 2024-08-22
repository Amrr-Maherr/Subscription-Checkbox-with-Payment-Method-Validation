// Get references to the elements by their IDs and class names
let subscribeCheckbox = document.getElementById("subscribeCheckbox"); // Checkbox for subscription
let visaRadio = document.getElementById("visaRadio"); // Radio button for Visa payment
let masterCardRadio = document.getElementById("masterCardRadio"); // Radio button for MasterCard payment
let paypalRadio = document.getElementById("paypalRadio"); // Radio button for PayPal payment
let btn = document.querySelector(".btn"); // Button that triggers validation
let warning = document.querySelector(".warning"); // Element to display warning or success messages

// Function to validate subscription status and selected payment method
function validate() {
  // Check if the subscribe checkbox is checked
  if (subscribeCheckbox.checked) {
    // If subscribed, determine which payment method is selected
    if (visaRadio.checked) {
      // Show success message for Visa payment
      warning.innerHTML = `<div class="alert alert-success" role="alert"> You chose Visa for payment and subscribed.</div>`;
    } else if (masterCardRadio.checked) {
      // Show success message for MasterCard payment
      warning.innerHTML = `<div class="alert alert-success" role="alert"> You have chosen MasterCard for payment.</div>`;
    } else if (paypalRadio.checked) {
      // Show success message for PayPal payment
      warning.innerHTML = `<div class="alert alert-success" role="alert"> You have chosen PayPal for payment.</div>`;
    } else {
      // Show warning message if no payment method is selected
      warning.innerHTML = `<div class="alert alert-warning" role="alert"> You must choose a payment method!</div>`;
    }
  } else {
    // Show warning message if the subscribe checkbox is not checked
    warning.innerHTML = `<div class="alert alert-warning" role="alert"> You must Subscribe!</div>`;
  }
}

// Attach the validate function to the button's click event
btn.onclick = validate; // When the button is clicked, the validate function is called
