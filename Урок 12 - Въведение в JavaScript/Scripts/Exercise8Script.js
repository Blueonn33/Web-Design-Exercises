const age = Number(prompt("На колко години си?"));

function calculate(age) {
  if (65 - age <= 0) {
    console.log("Вече си се пенсионирал 🎉");
  } else {
    console.log(`Остават ти ${65 - age} години до пенсия.`);
  }
}

calculate(age);
