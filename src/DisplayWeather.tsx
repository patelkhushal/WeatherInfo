import React from "react";
import { useSelector } from "react-redux";

export const DisplayWeather: React.FC = () => {
  const weather = useSelector((state: any) => state.weather);
  const cityName = useSelector(
    (state: any) => state.historyList[state.historyList.length - 1]
  );

  return (
    <div>
      {weather && Array.isArray(weather.weather) && (
        <div id="weather-display">
          Weather at {cityName} right now: {weather.weather[0].description}{" "}
          <br />
          <img
            src={"https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"} alt="weather"
          ></img>
        </div>
      )}
      {weather && weather.cod === "404" && <h3 id="weather-error" style={{color: "red"}}>City "{cityName}" not found</h3>}
    </div>
  );
}

