import { useContext, useLayoutEffect, useState } from "react";
import getFunction from "../api/fetch";
import StyledCard from "./CityCard.styled";
import { Context } from "../../weatherPage/WeatherPage";

const Card = ({ data }) => {
  const { name } = data;
  const [currentWeather, setCurrentWeather] = useContext(Context);

  const handleCardClick = async (event) => {
    const queryCity = event.target.id;
    try {
      const data = await getFunction(queryCity);
      console.log(data);
      const { address, days } = data;
      const { icon, datetime, temp } = days[0];
      setCurrentWeather({ address, icon, datetime, temp });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledCard
      id={name}
      onClick={(event) => {
        handleCardClick(event);
      }}
    ></StyledCard>
  );
};

export default Card;
