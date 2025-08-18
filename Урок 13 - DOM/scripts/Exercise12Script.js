function saveColor() {
  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;

  console.log(red, green, blue);
  document.getElementById(
    "image"
  ).style.border = `10px solid rgb(${red}, ${green}, ${blue})`;
}
