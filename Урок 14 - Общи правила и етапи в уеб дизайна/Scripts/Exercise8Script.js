function addToCart() {
  document.getElementById("buyContainer").style.visibility = "visible";
  setInterval(hideCart, 3000);
}

function hideCart() {
  document.getElementById("buyContainer").style.visibility = "hidden";
}
