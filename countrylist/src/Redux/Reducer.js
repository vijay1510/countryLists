const initialState = {
  allCounrtry: [],
  erros: {},
  country: {},
  favourites: [],
  searchCountries: [],
  theme: { bgcolor: "#E0F2F1", color: "#212121" },
  sortBy: "asc",
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
          theme: { bgcolor: "#616161", color: "white" },
        };
      }
      return {
        ...state,
        theme: { bgcolor: "#E0F2F1", color: "#212121" },
      };
    }

    case "SEARCH": {
      const input = action.payload;

      if (input) {
        const searchData = state.allCounrtry.filter(
          (e) =>
            e.name.common.toLowerCase().includes(input.toLowerCase()) ||
            e.region.toLowerCase().includes(input.toLowerCase())
        );
        console.log({ searchData });
        return {
          ...state,
          searchCountries: searchData,
        };
      } else {
        return {
          ...state,
          searchCountries: [],
        };
      }
    }
    case "SORTING": {
      const sort = state.allCounrtry.sort((a, b) => {
        if (action.payload === "desc") {
          return a.name.common.toLowerCase() < b.name.common.toLowerCase()
            ? 1
            : -1;
        } else if (action.payload === "asc") {
          return a.name.common.toLowerCase() > b.name.common.toLowerCase()
            ? 1
            : -1;
        }
      });
      const sortSearch =
        state.searchCountries &&
        state.searchCountries.sort((a, b) => {
          if (action.payload === "desc") {
            return a.name.common.toLowerCase() < b.name.common.toLowerCase()
              ? 1
              : -1;
          } else if (action.payload === "asc") {
            return a.name.common.toLowerCase() > b.name.common.toLowerCase()
              ? 1
              : -1;
          }
        });

      return {
        ...state,
        allCounrtry: [...sort],
        searchCountries: sortSearch && [...sortSearch],
        sortBy: action.payload === "desc" ? "asc" : "desc",
      };
    }
    case "SORT_REGION": {
      const sort = state.allCounrtry.sort((a, b) => {
        if (action.payload === "desc") {
          return a.region.toLowerCase() < b.region.toLowerCase() ? 1 : -1;
        } else if (action.payload === "asc") {
          return a.region.toLowerCase() > b.region.toLowerCase() ? 1 : -1;
        }
      });
      const sortSearch =
        state.searchCountries &&
        state.searchCountries.sort((a, b) => {
          if (action.payload === "desc") {
            return a.region.toLowerCase() < b.region.toLowerCase() ? 1 : -1;
          } else if (action.payload === "asc") {
            return a.region.toLowerCase() > b.region.toLowerCase() ? 1 : -1;
          }
        });

      return {
        ...state,
        allCounrtry: [...sort],
        searchCountries: sortSearch && [...sortSearch],
        sortBy: action.payload === "desc" ? "asc" : "desc",
      };
    }
    case "SORT_POPULATION": {
      const sort = state.allCounrtry.sort((a, b) => {
        if (action.payload === "desc") {
          return a.population < b.population ? 1 : -1;
        } else if (action.payload === "asc") {
          return a.population > b.population ? 1 : -1;
        }
      });
      const sortSearch =
        state.searchCountries &&
        state.searchCountries.sort((a, b) => {
          if (action.payload === "desc") {
            return a.population < b.population;
          } else if (action.payload === "asc") {
            return a.population > b.population ? 1 : -1;
          }
        });

      return {
        ...state,
        allCounrtry: [...sort],
        searchCountries: sortSearch && [...sortSearch],
        sortBy: action.payload === "desc" ? "asc" : "desc",
      };
    }

    default:
      return state;
  }
};
