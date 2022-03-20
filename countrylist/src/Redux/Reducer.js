const initialState = {
  allCounrtry: [],
  erros: {},
  country: {},
  favourites: [],
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

    default:
      return state;
  }
};
