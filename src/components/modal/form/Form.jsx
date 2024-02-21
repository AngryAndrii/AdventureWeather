import { useState } from "react";
import { avaliableCities } from "../../cities";
import { uid } from "uid";
import { dateChanger } from "./dateChanger";

const Form = ({ submitHandler }) => {
  let todayDate = new Date();
  let todayDate2 = new Date();
  const datePlus15 = todayDate2.setDate(todayDate.getDate() + 15);
  const createdDate = new Date(datePlus15);

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="city-select">City</label>

        <select name="cities" id="city-select">
          <option value="">Please select a city</option>
          {avaliableCities.map((el) => {
            return (
              <option key={uid()} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="start-date-select">Start date</label>
        <input
          type="date"
          min={dateChanger(todayDate)}
          max={dateChanger(createdDate)}
          id="start-date-select"
        />
        <label htmlFor="end-date-select"></label>
        <input
          type="date"
          id="end-date-select"
          min={dateChanger(todayDate)}
          max={dateChanger(createdDate)}
        />
        <button type="submit">Submit!</button>
      </form>
    </>
  );
};

export default Form;
