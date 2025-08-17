function changeColor(id) {
  let container = document.getElementById(id);
  document.getElementById("topLeft").classList.remove("active");
  document.getElementById("topRight").classList.remove("active");
  document.getElementById("bottomLeft").classList.remove("active");
  document.getElementById("bottomRight").classList.remove("active");
  container.classList.add("active");
}
