import styled from "styled-components";
import image from "/images/sky.jpg";

const StyledWeatherPage = styled.div`
  display: flex;
  flex-direction: row;

  .sliderContainer {
    position: relative;
    overflow: hidden;
    height: 130px;
    width: 390px;
  }

  .city-list {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0px;
    left: ${(props) => props.$props}px;
    height: 130px;
    outline: 1px solid tomato;
    transition: all 200ms ease-out;
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
