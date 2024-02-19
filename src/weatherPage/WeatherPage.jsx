import { uid } from "uid";
import Card from "../components/cityCard/CityCard";
import StyledWeatherPage from "./WeatherPage.styled";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { citiesList } from "../components/cities";

const WeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  if (isModalOpen) {
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    });
  }

  const cities = citiesList;

  return (
    <div>
      <StyledWeatherPage>
        <div className="city-list">
          {cities.map((el) => {
            return (
              <Card
                data={el}
                key={uid()}
                setCurrentWeather={setCurrentWeather}
              />
            );
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
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Modal
      </button>
      {isModalOpen ? <Modal openModal={setIsModalOpen} /> : null}
    </div>
  );
};

export default WeatherPage;
