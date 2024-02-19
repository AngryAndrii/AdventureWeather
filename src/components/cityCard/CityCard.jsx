import { uid } from "uid";
import getFunction from "../api/fetch";
import StyledCard from "./CityCard.styled";

const Card = ({ data, setCurrentWeather }) => {
  const { name, image } = data;

  const handleCardClick = async (event) => {
    const queryCity = event.target.id;
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
      <p>{name}</p>
    </StyledCard>
  );
};

export default Card;
