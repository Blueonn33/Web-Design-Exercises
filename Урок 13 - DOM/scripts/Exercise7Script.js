function changeImage() {
  const number = Math.floor(Math.random() * 3);
  const elements = document.getElementsByClassName("images");
  elements[number].src = "images/Image4.jpg";
}
