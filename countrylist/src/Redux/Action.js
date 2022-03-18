//get all countriies

export const getAllCountries = () => {
  return async (dispatch, getState) => {
    try {
      const countries = await fetch("https://restcountries.com/v3.1/all");
      const countriesJson = await countries.json();
      console.log(countriesJson);
      dispatch(allCountries(countriesJson));
    } catch (error) {
      console.log(error);
    }
  };
};

export const allCountries = (data) => {
  return {
    type: "ALL_COUNTRIES",
    payload: data,
  };
};
//-------------------------------------------
