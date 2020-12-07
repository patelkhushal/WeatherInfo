const addToHistory = (cityName: String) => {
    return {
      type: "ADD_TO_HISTORY",
      payload: cityName
    };
  };

export default addToHistory