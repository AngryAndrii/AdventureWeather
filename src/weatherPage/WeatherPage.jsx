import { uid } from "uid";
import Card from "../components/cityCard/CityCard";
import StyledWeatherPage from "./WeatherPage.styled";
import { useContext, createContext, useState } from "react";
export const Context = createContext();

const WeatherPage = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const { address, icon, datetime, temp } = currentWeather;
  const day = new Date(datetime);
  const dayOfWeek = dayArr[day.getDay()];

  const cities = [
    {
      name: "paris",
      image: "parisImage",
      date: null,
    },
    {
      name: "california",
      image: "californiaimage",
      date: null,
    },
    {
      name: "poltava",
      image: "poltavaimgae",
      date: null,
    },
    {
      name: "antalya",
      image: "antalyaimage",
      date: null,
    },
    // {
    //   name: "bern",
    //   image: "bernimage",
    //   date: null,
    // },
    // {
    //   name: "berlin",
    //   image: "berlinimage",
    //   date: null,
    // },
  ];

  return (
    <Context.Provider value={[currentWeather, setCurrentWeather]}>
      <StyledWeatherPage>
        <div className="city-list">
          {cities.map((el) => {
            return <Card data={el} key={uid()} />;
          })}
        </div>
        <div className="current-weather">
          {!currentWeather && <p>select city, please</p>}
          {currentWeather && (
            <div>
              <p>{dayOfWeek}</p>
              <p>{temp}</p>
              <p>{icon}</p>
              <p>{address}</p>
            </div>
          )}
        </div>
      </StyledWeatherPage>
    </Context.Provider>
  );
};

export default WeatherPage;
