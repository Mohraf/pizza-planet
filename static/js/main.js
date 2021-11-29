function Order (size, crust, toppings, quantity, deliveryCost) {
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

$("#submit").on('click', () => {
  let size = $('#size').val();
  let crust = $('#crust').val();
  let toppings = $('#toppings').val();
  let quantity = Number($('#quantity').val());
  let delivery = $('#delivery').val();
  let deliveryCost;
  let toppingsCost = 0;
  let totalCost = 0;

  if (delivery !== ""){
    deliveryCost = 100;
  }
  else {
    deliveryCost = 0;
  }

  let myOrder = new Order(size, crust, toppings, quantity, deliveryCost);

  alert("You will be charged Ksh " + deliveryCost + " for Delivery");

  if(size == "small") {
    if(toppings.includes("mushroom")){
      toppingsCost += toppingsSmall.mushroom;
    }
    if(toppings.includes("bacon")){
      toppingsCost += toppingsSmall.bacon;
    }
    if(toppings.includes("sausage")){
      toppingsCost += toppingsSmall.sausage;
    }
    if(toppings.includes("brocolli")){
      toppingsCost += toppingsSmall.brocolli;
    }

    totalCost = (pizzaPrices.small + toppingsCost + deliveryCost) * quantity;
  } else if (size == "medium") {
    if(toppings.includes("mushroom")){
      toppingsCost += toppingsSmall.mushroom;
    }
    if(toppings.includes("bacon")){
      toppingsCost += toppingsSmall.bacon;
    }
    if(toppings.includes("sausage")){
      toppingsCost += toppingsSmall.sausage;
    }
    if(toppings.includes("brocolli")){
      toppingsCost += toppingsSmall.brocolli;
    }

    totalCost = (pizzaPrices.medium + toppingsCost + deliveryCost) * quantity;
  } else if (size == "large") {
    if(toppings.includes("mushroom")){
      toppingsCost += toppingsSmall.mushroom;
    }
    if(toppings.includes("bacon")){
      toppingsCost += toppingsSmall.bacon;
    }
    if(toppings.includes("sausage")){
      toppingsCost += toppingsSmall.sausage;
    }
    if(toppings.includes("brocolli")){
      toppingsCost += toppingsSmall.brocolli;
    }

    totalCost = (pizzaPrices.large + toppingsCost + deliveryCost) * quantity;
  } else {
    alert("Please Choose a pizza size");
  }

  document.getElementById("totalCost").innerHTML = totalCost;
  document.getElementById("toppingsCost").innerHTML = toppingsCost;
  document.getElementById("deliveryCost").innerHTML = deliveryCost;
});