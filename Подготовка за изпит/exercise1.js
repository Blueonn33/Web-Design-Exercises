function changeColor() {
  let element = document.getElementById("header");
  element.style.color = "red";
  element.style.fontSize = "60px";
  element.innerHTML = person.name;
}

const person = {
  name: "Martin",
  age: 20,
  hello: function Hello() {
    alert("Ehooo");
  },
};
