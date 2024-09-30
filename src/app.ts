interface Pizza {
  name: string;
  price: number;
  getName(): string;
}

interface Order {
  pizza: Pizza;
  toppings: string[];
}

const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  },
};

console.log(pizza.getName());

const toppings = ['pepperoni'];


function createOrder(pizza: Pizza, toppings: string[]): Order {
  return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));
