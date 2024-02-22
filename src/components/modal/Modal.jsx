import { useState } from "react";
import StyledModal from "./Modal.styled";
import { RxCross1 } from "react-icons/rx";
import Form from "./form/Form";
import { avaliableCities, citiesList } from "../cities";

const Modal = ({ openModal, setListChanger }) => {
  const [optionValue, setOptionValue] = useState();
  const closeFunction = () => {
    openModal(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const selectCity = optionValue;
    const startDate = event.target[1].value;
    const endDate = event.target[2].value;

    let newCity = avaliableCities.find((el) => {
      el.startDate = startDate;
      el.endDate = endDate;
      return el.name === selectCity;
    });
    if (
      citiesList.find((el) => {
        return el.name === selectCity;
      }) === undefined
    ) {
      citiesList.push(newCity);
      localStorage.setItem("savedCities", JSON.stringify(citiesList));
      setListChanger((prev) => prev + 1);
      closeFunction();
    } else {
      alert("this city already in list, please select new");
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
        <h3>Create Trip</h3>

        <Form submitHandler={submitHandler} setOptionValue={setOptionValue} />
      </div>
    </StyledModal>
  );
};

export default Modal;
