import styled from "styled-components";
import image from "/images/sky.jpg";

const StyledWeatherPage = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #28227d;
  width: 815px;
  height: 500px;
  position: relative;
  padding: 5px;
  overflow: hidden;

  .slider-section {
    display: flex;
    flex-direction: column;
    height: 220px;
  }

  .arrow-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 30px;
  }

  .arrow-buttons button {
    width: 45px;
    height: 25px;
    background-color: #45c5f5;
    border: 1px solid #28227d;
    padding: 4px;
    &:is(:hover) {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
    }
  }

  .sliderContainer {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 410px;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .modal-button {
    margin-left: 10px;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #28227d;
    width: 130px;
    height: 170px;
    &:is(:hover, :focus) {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      cursor: pointer;
    }
  }

  .city-list {
    display: flex;
    flex-direction: row;
    position: absolute;
    column-gap: 10px;
    top: 0px;
    left: ${(props) => props.$props}px;
    height: 130px;
    transition: all 200ms ease-out;
  }

  .alert-message {
    text-align: center;
    margin-top: 100px;
    font-size: 23px;
    font-weight: 400;
  }

  .current-weather {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 110px;
    width: 250px;
    height: 500px;
  }
`;

export default StyledWeatherPage;
