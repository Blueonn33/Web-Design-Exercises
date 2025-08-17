function changeColor() {
  const items = document.getElementsByTagName("p");
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "red";
  }
}
