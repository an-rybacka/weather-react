import "./Styles.css"
import axios from "axios";
import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);

    setWeather({
      temp: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0efb4fc16a9ed98dc0b3aafd8491d6ad";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function insertSearch(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
        autoFocus="on"
        onChange={insertSearch}
      />
      <input type="submit" value="Search" className="btn btn-primary" />
    </form>
  );

  if (loaded) {
    return (
      <div className="col-6">
        {" "}
        {form}
        <ul>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li>Temperature: {weather.temp}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
