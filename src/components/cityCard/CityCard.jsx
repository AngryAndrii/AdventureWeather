import getFunction from "../api/fetch";
import StyledCard from "./CityCard.styled";

const Card = ({ data }) => {
  const { name, image, date } = data;
  const handleCardClick = (event) => {
    const queryCity = event.target.id;
    getFunction(queryCity);
  };
  return (
    <StyledCard
      id={name}
      onClick={(event) => {
        handleCardClick(event);
      }}
    >
      {name}
      {image}
    </StyledCard>
  );
};

export default Card;
