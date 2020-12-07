const historyList = (state = { historyList: [] }, action: { type: String; payload: any; }) : any => {
    switch (action.type) {
      case "ADD_TO_HISTORY":
        return state.historyList.length >= 5
          ? {
              ...state,
              historyList: [...state.historyList.filter((item, index) => index !== 0), action.payload],
            }
          : { ...state, historyList: [...state["historyList"], action.payload] };
      case "WEATHER_RECEIVED":
        return { ...state, weather: action.payload };
      default:
        return state;
    }
  };
  
  export default historyList;
  