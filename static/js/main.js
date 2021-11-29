const Order = (size, crust, toppings, quantity, deliveryCost) => {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
  this.deliveryCost = deliveryCost;
};

const toppingsSmall = {
  mushroom: 70,
  bacon: 80,
  sausage: 80,
  brocolli: 60
};

const toppingsMedium = {
  mushroom: 80,
  bacon: 90,
  sausage: 90,
  brocolli: 70
};

const toppingsLarge = {
  mushroom: 90,
  bacon: 100,
  sausage: 100,
  brocolli: 80
};

const pizzaPrices = {
  small: 600,
  medium: 800,
  large: 1000
};
