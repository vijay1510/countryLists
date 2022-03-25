//get all countriies

export const getAllCountries = () => {
  return async (dispatch, getState) => {
    try {
      const countries = await fetch("https://restcountries.com/v3.1/all");
      const countriesJson = await countries.json();

      dispatch(allCountries(countriesJson));
    } catch (error) {}
  };
};

export const allCountries = (data) => {
  return {
    type: "ALL_COUNTRIES",
    payload: data,
  };
};
//-------------------------------------------------------------------

//get single country

export const getSingleCountry = (name) => {
  return async (dispatch, getState) => {
    try {
      const country = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const countryJson = await country.json();
      dispatch(singleCountry(countryJson));
    } catch (error) {
      console.log(error);
    }
  };
};

export const singleCountry = (data) => {
  return {
    type: "SINGLE_COUNTRY",
    payload: data,
  };
};

//-------------------------------------------------------------------------------

//add/remove from cart

export const addToFavor = (data) => {
  return {
    type: "ADD_TO_FAVOUR",
    payload: data,
  };
};

//remove all
export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
//---------------------------------------------------
//theme

export const changeTheme = () => {
  return {
    type: "CHANGE_THEME",
  };
};
//----------------------------------------------------------------------------

//search

export const getSearch = (data) => {
  return {
    type: "SEARCH",
    payload: data,
  };
};

//----------------------------------------------------------------------------------------

//sorting
export const getSorting = () => {
  return {
    type: "SORTING",
  };
};
