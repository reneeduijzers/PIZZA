const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.length;
};

const selectMostBoughtPizza = (reduxState) => {
  if (reduxState.pizzas.length === 0) {
    return null;
  }

  return reduxState.pizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};
