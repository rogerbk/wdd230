document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#lastModified').textContent = "Last Modification: " + document.lastModified;

  const menubutton = document.querySelector("#menu-button");
  const menuitems = document.querySelector("nav ul");

  menubutton.addEventListener("click", () => {
      menubutton.classList.toggle("open");
      menuitems.classList.toggle("open");
  });

  let storedDate = localStorage.getItem('lastVisitTime');
  const now = Date.now();
  localStorage.setItem('lastVisitTime', now);

  if (storedDate == null) {
      storedDate = now;
  }

  const msInHour = 1000 * 60 * 60;
  const difference = (now - storedDate) / msInHour;
  let message;

  if (difference > 1) {
      message = `It has been ${Math.floor(difference)} hours since your last visit`;
  } else {
      message = `Welcome to my website`;
  }

  document.querySelector('#visitCount').textContent = message;  
  
});
