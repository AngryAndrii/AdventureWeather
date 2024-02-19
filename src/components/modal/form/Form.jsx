import { useState } from "react";

const Form = ({ submitHandler }) => {
  //   const [value, setValue] = useState("");

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="pet-select">Choose a pet:</label>

        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="paris">paris</option>
          <option value="california">california</option>
          <option value="poltava">poltava</option>
          <option value="antalya">antalya</option>
          <option value="bern">bern</option>
          <option value="berlin">berlin</option>
        </select>
        <button type="submit">Submit!</button>
      </form>
    </>
  );
};

export default Form;
