import { useState } from "react";
import { avaliableCities } from "../../cities";
import { uid } from "uid";

const Form = ({ submitHandler }) => {
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
        <button type="submit">Submit!</button>
      </form>
    </>
  );
};

export default Form;
