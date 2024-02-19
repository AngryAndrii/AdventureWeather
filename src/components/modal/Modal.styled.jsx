import styled from "styled-components";

const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  .box {
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    outline: 1px solid black;
  }
  .close-button {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 5px;
    right: 5px;
  }
`;

export default StyledModal;
