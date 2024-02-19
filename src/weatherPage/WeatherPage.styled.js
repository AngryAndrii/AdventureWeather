import styled from "styled-components";
// import image from "../../public/images/sky.jpg";
import image from "/images/sky.jpg";

const StyledWeatherPage = styled.div`
  display: flex;
  flex-direction: row;
  .city-list {
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: 500px;
    outline: 1px solid tomato;
  }
  .current-weather {
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 500px;
    outline: 1px solid tomato;
  }
`;

export default StyledWeatherPage;
