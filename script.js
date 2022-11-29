const loginContainer = document.getElementById("login-container");

const moveOverlay = () => loginContainer.classList.toggle("movie");

document.getElementById("open-register").addEventListener("click", moveOverlay);
document.getElementById("open-login").addEventListener("click", moveOverlay);

document
  .getElementById("open-register-mobile")
  .addEventListener("click", moveOverlay);
document
  .getElementById("open-login-mobile")
  .addEventListener("click", moveOverlay);
