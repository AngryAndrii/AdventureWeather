import { useState } from "react";
import { avaliableCities } from "../../cities";
import { uid } from "uid";

const Form = ({ submitHandler }) => {
  // const todayDate = new Date();
  // console.log(todayDate);
  let todayDate = "2024.02.21";

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
        {/* <label htmlFor="start-date-select">Start date</label>
        <input type="date" min={todayDate} id="start-date-select" />
        <label htmlFor="end-date-select"></label>
        <input type="date" id="end-date-select" /> */}
        <button type="submit">Submit!</button>
      </form>
    </>
  );
};

export default Form;
