import StyledCard from "./CityCard.styled";

const Card = ({ data }) => {
  const { name, image, date } = data;
  return (
    <StyledCard>
      {name}
      {image}
    </StyledCard>
  );
};

export default Card;
