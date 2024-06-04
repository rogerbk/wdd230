const today = new Date()
if (today.getDay() > 4) {
  document.querySelector('#banner').className = "hide"
}