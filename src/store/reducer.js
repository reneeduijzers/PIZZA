const initialState = {
  user: {
    name: "Pizza Lover",
    favorites: [],
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      ingredients: ["tomatoes", "mozzarella", "basil", "oil"],
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      ingredients: ["tomatoes", "mozzarella", "oil"],
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      ingredients: ["ricotta", "mozzarella", "garlic"],
    },
  ],
};

export default function reducer(state = initialState, action) {
  console.log("yes i got here1", action);
  switch (action.type) {
    case "NEW_PIZZA": {
      console.log("yes i got here2");
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    // copying over the state (object) spreading the pizza array, and adding a new pizza object to the array: so there still be one pizza array.
    case "LOVE": {
      console.log("yes i got here3", action);
      const isFavorite = state.user.favorites.includes(action.payload);
      console.log("What is isFavorite?", isFavorite);
      // if false id needs to be added = else, if true it needs to be filtered out of the array
      if (isFavorite) {
        const filteredFavorites = state.user.favorites.filter((pizzaId) => {
          if (pizzaId === action.payload) {
            return false;
          } else {
            return true;
          }
        });
        // SHORTER VERSION:
        // (pizzaId) => {
        //   console.log("What is pizza id", pizzaId);
        //   return pizzaId !== action.payload;
        // } // true and stays in the new filtered array
        // );
        console.log("What is filtered favorites?", filteredFavorites); // filter and map return a new array!
        return {
          ...state,
          user: {
            ...state.user,
            favorites: filteredFavorites,
          },
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            favorites: [...state.user.favorites, action.payload],
          },
        };
      }
    }
    default: {
      return state;
    }
  }
}
