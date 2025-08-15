function produceJuice(apples, oranges) {
  console.log("Ябълки " + apples);
  console.log(`Портокали ${oranges}`);

  const result = `Произведохме сок с ${apples} ябълки и ${oranges} портокала`;
  return result;
}

const juice = produceJuice(5, 3);
console.log(juice);
