const martin = {
  firstName: "Мартин",
  birthYear: 2004,
  calculateAge(birthYear) {
    return 2025 - birthYear;
  },
  town: "Горна Оряховица",
  job: "програмист",
  projects: ["Mansor", "Indigo", "Onyx"],
};

const display = function (person) {
  const result = `Казвам се ${person.firstName} и съм на ${person.calculateAge(
    person.birthYear
  )} години. От град ${person.town} съм. 
  Искам да стана ${person.job}. Моите проекти са ${person.projects}`;
  return result;
};

function isAdult(age) {
  if (age >= 18) {
    console.log("Пълнолетен си");
  } else if (age < 18) {
    console.log(`Остават ти ${18 - age} години до пълнолетие`);
  } else {
    console.log("Невалидни данни");
  }
}

console.log(display(martin));
isAdult(martin.calculateAge(martin.birthYear));
