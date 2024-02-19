import { uid } from "uid";
import Card from "../components/cityCard/CityCard";
import StyledWeatherPage from "./WeatherPage.styled";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { citiesList, dayArr } from "../components/cities";

const WeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});
  const [cardSLide, setCardSlide] = useState(0);
  let citiesToShow;

  const cities = JSON.parse(localStorage.getItem("savedCities"));

  if (cities != null) {
    citiesToShow = cities;
  } else {
    citiesToShow = citiesList;
  }

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

  const handleRightClick = (event) => {
    setCardSlide((prev) => prev - 130);
  };
  const handleLeftClick = (event) => {
    setCardSlide((prev) => prev + 130);
  };

  return (
    <div>
      <StyledWeatherPage $props={cardSLide}>
        <div className="sliderContainer">
          <div className="city-list">
            {citiesToShow.map((el) => {
              return (
                <Card
                  data={el}
                  key={uid()}
                  setCurrentWeather={setCurrentWeather}
                />
              );
            })}
          </div>
        </div>
        <div className="arrow-buttons">
          <button
            className="left"
            onClick={() => {
              handleLeftClick();
            }}
          >
            Left
          </button>
          <button
            className="right"
            onClick={() => {
              handleRightClick();
            }}
          >
            right
          </button>
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
