function changeTextColor() {
  const items = document.getElementsByClassName("unordered");
  for (let i = 0; i < items.length; i++) {
    items[i].style.color = "red";
  }
}
function changeBackgroundColor() {
  const items = document.getElementsByClassName("ordered");
  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "red";
  }
}
