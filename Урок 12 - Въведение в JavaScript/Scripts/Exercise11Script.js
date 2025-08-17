const temperatures = [-3, 8, 17, -4, 0, "грешка", 20, -7, -1];
const validTemperatures = [];

function temperatureAmplitude(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "грешка") {
      continue;
    }
    validTemperatures.push(array[i]);
  }

  for (let i = 0; i < validTemperatures.length; i++) {
    for (let j = 0; j < validTemperatures.length; j++) {
      if (validTemperatures[i] < validTemperatures[j]) {
        let temp = validTemperatures[i];
        validTemperatures[i] = validTemperatures[j];
        validTemperatures[j] = temp;
      }
    }
  }

  console.log(validTemperatures);
  const minValue = validTemperatures[0];
  console.log(minValue);
  const maxValue = validTemperatures[validTemperatures.length - 1];
  console.log(maxValue);
  const amplitude = maxValue - Math.abs(minValue);

  return amplitude;
}

console.log(temperatureAmplitude(temperatures));
