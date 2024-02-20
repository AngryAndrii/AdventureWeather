import { uid } from "uid";
import Card from "../components/cityCard/CityCard";
import StyledWeatherPage from "./WeatherPage.styled";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { citiesList } from "../components/cities";
import CurWeatherDisplay from "../components/curWeatherDisplay/CurWeatherDisplay";

const WeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [cardSLide, setCardSlide] = useState(0);
  let citiesToShow;

  const cities = JSON.parse(localStorage.getItem("savedCities"));

  if (cities != null) {
    citiesToShow = cities;
  } else {
    citiesToShow = citiesList;
  }

  if (isModalOpen) {
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    });
  }

  const handleRightClick = (event) => {
    console.log(citiesList.length);
    if (-cities.length * 130 >= -(cities.length + 1) * 130) {
      setCardSlide((prev) => prev - 130);
    }
    return;
  };
  const handleLeftClick = (event) => {
    if (cardSLide < 0) {
      setCardSlide((prev) => prev + 130);
    }
    return;
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
          {!currentWeather && <p>please select city</p>}
          {currentWeather && <CurWeatherDisplay curWeather={currentWeather} />}
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
