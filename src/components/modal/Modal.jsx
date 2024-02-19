import { useState } from "react";
import StyledModal from "./Modal.styled";
import { RxCross1 } from "react-icons/rx";
import Form from "./form/Form";
import { avaliableCities, citiesList } from "../cities";

const Modal = ({ openModal }) => {
  const closeFunction = () => {
    openModal(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const selectCity = event.target[0].value;
    const newCity = avaliableCities.find((el) => {
      return el.name === selectCity;
    });
    if (
      citiesList.find((el) => {
        return el.name === selectCity;
      }) === undefined
    ) {
      citiesList.push(newCity);
      localStorage.setItem("savedCities", JSON.stringify(citiesList));
      closeFunction();
    } else {
      console.log("this city already in list, please select new");
    }
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
