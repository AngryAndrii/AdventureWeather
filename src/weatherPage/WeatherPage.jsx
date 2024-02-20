import { uid } from "uid";
import Card from "../components/cityCard/CityCard";
import StyledWeatherPage from "./WeatherPage.styled";
import { useEffect, useLayoutEffect, useState } from "react";
import Modal from "../components/modal/Modal";
import { citiesList } from "../components/cities";
import CurWeatherDisplay from "../components/curWeatherDisplay/CurWeatherDisplay";
import ArrowButtons from "../components/buttons";
import ModalButton from "../components/modal/ModalButton";

const WeatherPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [cardSLide, setCardSlide] = useState(0);
  const [cities, setCities] = useState(citiesList);

  useEffect(() => {
    let getCities = JSON.parse(localStorage.getItem("savedCities"));
    setCities(getCities);
  }, []);

  if (isModalOpen) {
    document.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    });
  }

  const handleRightClick = (event) => {
    console.log(citiesList.length);
    // if (-cities.length * 130 >= -(cities.length + 1) * 130) {
    setCardSlide((prev) => prev - 140);
    // }
    return;
  };
  const handleLeftClick = (event) => {
    if (cardSLide < 0) {
      setCardSlide((prev) => prev + 140);
    }
    return;
  };

  return (
    <div>
      <StyledWeatherPage $props={cardSLide}>
        <div className="left-container">
          <section className="slider-section">
            <div className="sliderContainer">
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
            </div>
            <ArrowButtons
              handleLeftClick={handleLeftClick}
              handleRightClick={handleRightClick}
            />
          </section>
          <ModalButton setIsModalOpen={setIsModalOpen} />
        </div>

        <div className="current-weather">
          {!currentWeather && (
            <p className="alert-message">Please choose a city!</p>
          )}
          {currentWeather && <CurWeatherDisplay curWeather={currentWeather} />}
        </div>
      </StyledWeatherPage>
      {isModalOpen ? <Modal openModal={setIsModalOpen} /> : null}
    </div>
  );
};

export default WeatherPage;
