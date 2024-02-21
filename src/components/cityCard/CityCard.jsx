import { uid } from "uid";
import getFunction from "../api/fetch";
import StyledCard from "./CityCard.styled";
import { useRef, useState } from "react";

const Card = ({ data, setCurrentWeather }) => {
  const { name, image, startDate, endDate } = data;

  const handleCardClick = async (event) => {
    const queryCity = event.currentTarget.id;
    try {
      const data = await getFunction(queryCity);
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
    >
      <div className="image-container">
        <img src={image} width={130} height={80} alt={name} />
      </div>
      <p className="name">{name}</p>
      <div className="date-container">
        <p className="start">{startDate}</p>
        <p className="end">{endDate}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
