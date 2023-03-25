import { useState } from "react";
import DateBuilder from "./DateBuilder";
import "./forcast.css";

function Forcast() {
  const [cityname, setCityname] = useState("");
  const [weather, setWeather] = useState({});
  const api = {
    key: "a46a09f7e8d4072454209ddcb43933ee",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  let weatherIcon;
  function weatherHandler(e) {
    // if (e.key === "Enter") {
    fetch(
      `${api.base}weather?q=${cityname.trimEnd()}&appid=${
        api.key
      }&units=metric&icon=50ns`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setCityname("");
        // console.log(data);
      });
    // }
  }

  let icon = {
    cloueIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 25 25"
      >
        <path
          fill="white"
          d="M20.422 11.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484z"
        />
      </svg>
    ),
    rainIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 25 25"
      >
        <path d="M20.422 7.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm1.842 8.713l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.253-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.175-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.301 3.287l-1.41-1.397 2.302-2.303 1.41 1.41-2.302 2.29z" />
      </svg>
    ),
    stromeIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 25 25"
      >
        <path
          fill="white"
          d="M6.406 17h3.594l-3.416 3h1.688l-6.272 4 2.542-3h-2.167l4.031-4zm14.016-9.484c-.178-3.232-3.031-5.777-6.432-5.491-1.087-1.24-2.693-2.025-4.49-2.025-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209.967 0 1.714.25 2.29.645-1.823.921-3.096 2.745-3.212 4.871-2.022.357-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.257-1.057 2.278-2.355 2.278zm-6.935 6.713l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.175-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.301 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29z"
        />
      </svg>
    ),
    smokeIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 25 25"
      >
        <path
          fill="white"
          d="M20.422 11.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484z"
        />
      </svg>
    ),
    defaultIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 25 25"
      >
        <path
          fill="white"
          d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"
        />
      </svg>
    ),
  };

  let weatherName = {
    ā: "a",
    ū: "u",
  };
  let newWeatherName;
  if (weather.main !== undefined) {
    let Name = weather.name.split("");
    // console.log(Name);
    let charConverted = [];

    for (let i = 0; i < Name.length; i++) {
      let char = Name[i];
      charConverted.push(weatherName[char] || char);
      // console.log(weatherName[char]);
      // console.log(char);
    }
    newWeatherName = charConverted.join("");

    if (weather.weather[0].main === "Clouds") {
      weatherIcon = icon.cloueIcon;
    } else if (weather.weather[0].main === "Rain") {
      weatherIcon = icon.rainIcon;
    } else if (weather.weather[0].main === "Strome") {
      weatherIcon = icon.stromeIcon;
    } else if (weather.weather[0].main === "Smoke") {
      weatherIcon = icon.smokeIcon;
    } else {
      weatherIcon = icon.defaultIcon;
    }
  }

  return (
    <div className="weather-sec">
      <div className="input">
        <input
          className="weather-input"
          type="text"
          onChange={(e) => setCityname(e.target.value)}
          value={cityname}
          placeholder="Enter City Name"
          //   onKeyPress={weatherHandler}
        />
        <button className="btn" onClick={weatherHandler}>
          Submit
        </button>
      </div>
      {weather.main !== undefined && weather.cos !== 404 ? (
        <div className="weatherinfo">
          <div className="cityname">
            {newWeatherName}
            <span>, {weather.sys.country}</span>
          </div>
          <div className="dayInfo">{<DateBuilder />}</div>
          <div className="temp">
            {Math.ceil(weather.main.temp)}
            <span>&#176;</span>
          </div>
          <div className="desc">{weather.weather[0].main}</div>
          <div className="icon">
            {/* <img src={weatherIcon} alt={weather.name} /> */}
            {weatherIcon}
          </div>
        </div>
      ) : (
        <div className="error-message">{weather.message}</div>
      )}
    </div>
  );
}

// https://api.openweathermap.org/data/2.5/weather?q=london&appid=a46a09f7e8d4072454209ddcb43933ee&units=metric&icon=50ns

export default Forcast;
