import React from "react";
import { useSelector, useDispatch } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectSortedPizzas = (reduxState) => {
  return reduxState.pizzas.sort(
    (pizza_a, pizza_b) => pizza_b.bought - pizza_a.bought
  );
};

// useDispatch and UseSelector, need to be placed inside of the component

export default function PizzaList() {
  const dispatch = useDispatch(); // send action to the store, from reducer (= global state)
  const user = useSelector(selectUser); // selects data from the store, from reducer (= global state)
  const sortedPizzas = useSelector(selectSortedPizzas);
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your have {sortedPizzas.length} favorite pizzas.
      </p>
      {sortedPizzas.map((pizza) => {
        const favoritePizza = user.favorites.includes(pizza.id);
        return (
          <ul key={pizza.id}>
            <li>
              <h2>{pizza.name}</h2>
              <p>{pizza.description}</p>
              <p>You bought this pizza: {pizza.bought} times.</p>
              <p>Ingredients:
              {pizza.ingredients
                ? pizza.ingredients.map((ingredient) => <ul>
                <li>{ingredient}</li>
                </ul>)
                : ""}
                </p>
              <button
                onClick={(e) =>
                  dispatch({
                    type: "LOVE",
                    payload: pizza.id,
                  })
                }
              >
                {favoritePizza ? "♥" : "♡"}
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
