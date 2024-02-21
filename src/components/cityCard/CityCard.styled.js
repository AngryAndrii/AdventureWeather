import styled from "styled-components";

const StyledCard = styled.div`
  width: 130px;
  height: 170px;

  border: 1px solid #28227d;

  &:is(:hover, :focus) {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }

  &.selected {
    color: red;
  }

  .image-container {
    width: 100%;
    height: 80px;
    overflow: hidden;
  }
`;

export default StyledCard;
