import styled from "styled-components";

const StyledCard = styled.div`
  width: 130px;
  height: 170px;
  border: 1px solid #28227d;

  &:is(:hover, :focus) {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }

  .image-container {
    width: 100%;
    height: 80px;
    overflow: hidden;
  }

  p {
    margin: 5px;
  }

  .name {
    font-size: 19px;
    font-weight: 500;
  }

  .start,
  .end {
    font-size: 10px;
  }

  .date-container {
    color: grey;
    padding-top: 5px;
    display: flex;
    flex-direction: row;
  }
`;

export default StyledCard;
