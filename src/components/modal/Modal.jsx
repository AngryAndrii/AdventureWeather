import { useState } from "react";
import StyledModal from "./Modal.styled";
import { RxCross1 } from "react-icons/rx";
import Form from "./form/Form";

const Modal = ({ openModal }) => {
  //   const [cityValue, setCityValue] = useState("");

  const closeFunction = () => {
    openModal(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const selectCity = event.target[0].value;
    console.log(selectCity);
  };

  return (
    <StyledModal
      id="backdrop"
      onClick={(event) => {
        if (event.target.id == "backdrop") {
          closeFunction();
        }
      }}
    >
      <div className="box" id="box">
        <button
          className="close-button"
          onClick={() => {
            closeFunction();
          }}
        >
          <RxCross1 />
        </button>
        Hello, it is modal
        <Form submitHandler={submitHandler} />
      </div>
    </StyledModal>
  );
};

export default Modal;
