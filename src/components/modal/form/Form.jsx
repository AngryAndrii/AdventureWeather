import { useState } from "react";
import { avaliableCities } from "../../cities";
import { uid } from "uid";
import { dateChanger } from "./dateChanger";
import { StyledForm } from "./Form.styled";

const Form = ({ submitHandler, setOptionValue }) => {
  const [firstDay, setFirstDay] = useState();
  let todayDate = new Date();
  let todayDate2 = new Date();
  const datePlus15 = todayDate2.setDate(todayDate.getDate() + 15);
  const createdDate = new Date(datePlus15);

  return (
    <StyledForm>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="city-select">
          <span className="star">*</span>City
        </label>
        <select
          required
          name="cities"
          id="city-select"
          onChange={(event) => {
            setOptionValue(event.target.value);
          }}
        >
          <option value="">please, select city</option>
          {avaliableCities.map((el) => {
            return (
              <option key={el.image} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="start-date-select">
          <span className="star">*</span> Start date
        </label>
        <input
          required
          type="date"
          min={dateChanger(todayDate)}
          max={dateChanger(createdDate)}
          id="start-date-select"
          onChange={(event) => {
            setFirstDay(event.target.value);
          }}
        />
        <label htmlFor="end-date-select">
          <span className="star">*</span> End date
        </label>
        <input
          required
          type="date"
          id="end-date-select"
          min={firstDay}
          max={dateChanger(createdDate)}
        />
        <button className="submit-button" type="submit">
          Save
        </button>
      </form>
    </StyledForm>
  );
};

export default Form;
