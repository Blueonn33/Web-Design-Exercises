function changeImage1() {
  const image = document.getElementById("first");
  image.style.borderTop = "10px solid black";
  image.style.borderLeft = "10px solid black";
  image.style.borderRight = "10px solid black";
  image.style.borderBottomLeftRadius = "50px";
  image.style.borderBottomRightRadius = "50px";
}
function changeImage2() {
  const image = document.getElementById("second");
  image.style.borderTop = "8px dashed purple";
  image.style.borderBottom = "8px dashed purple";
  image.style.borderRadius = "20px";
}
function changeImage3() {
  const image = document.getElementById("third");
  image.style.borderTop = "10px solid blue";
  image.style.borderBottom = "10px solid blue";
  image.style.borderTopLeftRadius = "100px";
  image.style.borderBottomRightRadius = "100px";
}
