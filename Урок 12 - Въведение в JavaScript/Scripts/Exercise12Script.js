const jobs = [
  "front-end",
  "back-end",
  "QA",
  "бизнес анализатор",
  "писател на документация",
  "дизайнер",
];

function dreamJob(jobs) {
  let number = Math.floor(Math.random() * jobs.length);
  console.log("кестен");
  alert(`Твоята бъдеща работа е: ${jobs[number]} 😯`);
}

function display() {
  dreamJob(jobs);
}
