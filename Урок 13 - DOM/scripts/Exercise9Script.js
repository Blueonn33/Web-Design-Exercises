function changeImage() {
  let number = Math.floor(Math.random() * 5 + 1);
  document.getElementById("image").src = "Images/Meme" + number + ".jpg";
}
function changeBackground() {
  let colors = ["red", "blue", "green", "brown", "#431264"];
  let number = Math.floor(Math.random() * colors.length);
  document.getElementById("container").style.backgroundColor = colors[number];
  document.querySelector("h3").style.color = "white";
}
