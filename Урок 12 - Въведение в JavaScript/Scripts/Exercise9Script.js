const martin = {
  firstName: "Мартин",
  age: 20,
  town: "Горна Оряховица",
  job: "програмист",
  projects: ["Mansor", "Indigo", "Onyx"],
};

const display = function (person) {
  const result = `Казвам се ${person.firstName} и съм на ${person.age} години. От град ${person.town} съм. 
  Искам да стана ${person.job}. Моите проекти са ${person.projects}`;
  return result;
};

console.log(display(martin));
