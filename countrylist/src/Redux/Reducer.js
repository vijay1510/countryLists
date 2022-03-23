const initialState = {
  allCounrtry: [],
  erros: {},
  country: {},
  favourites: [],
  theme: { bgcolor: "#E0F2F1", color: "black" },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_COUNTRIES": {
      return {
        ...state,
        allCounrtry: action.payload,
      };
    }
    case "SINGLE_COUNTRY": {
      return {
        ...state,
        country: action.payload,
      };
    }
    case "ADD_TO_FAVOUR": {
      const favCountry = action.payload;
      console.log({ favCountry });
      const isAvailable =
        state.favourites &&
        state.favourites.find((e) => e.name.common === favCountry.name.common);
      if (isAvailable) {
        return {
          ...state,
          favourites: state.favourites.filter(
            (e) => e.name.common !== favCountry.name.common
          ),
        };
      }
      return {
        ...state,
        favourites: [...state.favourites, favCountry],
      };
    }
    case "REMOVE_ALL": {
      return {
        ...state,
        favourites: [],
      };
    }
    case "CHANGE_THEME": {
      if (state.theme.bgcolor === "#E0F2F1") {
        return {
          ...state,
          theme: { bgcolor: "grey", color: "white" },
        };
      }
      return {
        ...state,
        theme: { bgcolor: "#E0F2F1", color: "black" },
      };
    }

    default:
      return state;
  }
};
