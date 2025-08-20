function printForecast(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += `... ${arr[i]}*C - ден ${i + 1} `;
  }
  result += " ... ";
  document.writeln(result);
}

const array = [17, 22, 28, 29, 33];
printForecast(array);
