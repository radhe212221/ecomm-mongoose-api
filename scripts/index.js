const models = require("../models");
let a = [];

for (let i = 1; i <= 50; i++) {
  let temp = {
    title: `nike ${i}`,
    price: Math.ceil(Math.random() * 888),
    rating: Math.ceil(Math.random() * 5),
    discount: Math.ceil(Math.random() * 55),
    tags: i % 2 === 0 ? "men" : "women",
    image: `/img/a (${i}).jpg`,
  };

  a.push(temp);
}

models.products.insertMany(a)
.then((d) => console.log(d))
.catch((d) => console.log(d))
