import styled from "styled-components";

export const StyledLongWeather = styled.div`
  width: 560px;
  margin-top: 100px;
  overflow: hidden;

  ul {
    padding: 0;
    margin: 0;
  }

  .days-list {
    display: flex;
    flex-direction: row;
    padding-left: 0;
    column-gap: 10px;
  }

  .day-li {
    padding: 0;
    margin: 0;
  }

  .item-ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-container {
    width: 25px;
    height: 25px;
  }

  img {
    width: 100%;
  }

  .day {
    font-size: 10px;
    font-weight: 500;
  }

  .min-max {
    font-size: 10px;
    font-weight: 400;
  }
`;
