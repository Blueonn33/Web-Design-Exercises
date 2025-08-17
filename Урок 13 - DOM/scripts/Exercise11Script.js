function fillForm(name, newName) {
  const result = document.getElementById(newName).value;
  if (result == "") {
    alert("Въведи стойност!");
  }
  document.getElementById(name).value = result;
}
