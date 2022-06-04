import React, { useState } from "react";
const api = {
  key: "90081885d6a580d3dbdfbb79ce31d486",
  base: "https://api.openweathermap.org/data/2.5/"
};

export default function Weather(props) {
  const [weather, setWeather] = useState({});

  function getWeather() {
    fetch(
      `${api.base}weather?lat=-6.25&lon=106.61&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  }

  if (props.render === 1) {
    return (
      <div>
        <main>
          <button onClick={getWeather}>Get Weather</button>
          {typeof weather.main !== "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </main>
      </div>
    );
  }
}
