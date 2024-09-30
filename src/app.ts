const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];
// map return name in uppercaase
const mappedPizzas = pizzas.map(
  (pizza, i) => `${i}. ${pizza.name.toUpperCase()}`
);

console.log(mappedPizzas); // ['PEPPERONI']

/* const pizza = {
  name: "Blazing Inferno",
  getName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
}; */
/* const pizza = {
  name: "Blazing Inferno",
  getName: () => pizza.name,
};

console.log(pizza.getName()); */


function multiply(a: number, b = 25) {
  return a * b;
} //

console.log(multiply(5));
console.log(multiply(5, 35));
