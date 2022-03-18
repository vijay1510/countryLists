const initialState = {
  allCounrtry: [],
  erros: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_COUNTRIES": {
      return {
        ...state,
        allCounrtry: action.payload,
      };
    }

    default:
      return state;
  }
};
