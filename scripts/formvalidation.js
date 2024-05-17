document.addEventListener('DOMContentLoaded', () => {
  const password1 = document.querySelector('input[name="password1"]');
  const password2 = document.querySelector('input[name="password2"]');
  const feedback = document.querySelector('#passwordFeedback');
  const ratingDisplay = document.querySelector('#ratingValue');
  const ratingSlider = document.querySelector('input[type="range"]');

  password2.addEventListener("focusout", validatePasswords);
  ratingSlider.addEventListener('input', updateRating);

  function validatePasswords() {
    if (password1.value !== password2.value) {
      feedback.textContent = "Passwords DO NOT MATCH";
      password1.value = "";
      password2.value = "";
      password1.focus();
    } else {
      feedback.textContent = "";
    }
  }

  function updateRating() {
    ratingDisplay.innerHTML = ratingSlider.value;
  }
});