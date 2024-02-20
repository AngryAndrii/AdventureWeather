import styled from "styled-components";

const StyleCurWeatherDisplay = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  p::first-letter {
    text-transform: uppercase;
  }

  .day {
    font-size: 25px;
    font-weight: 700;
  }

  .temp-img-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 15px;
  }

  .icon {
    width: 80px;
  }

  .temp {
    font-size: 20px;
    font-weight: 500;
  }

  .address {
    font-size: 25px;
    font-weight: 600;
  }
`;

export default StyleCurWeatherDisplay;
