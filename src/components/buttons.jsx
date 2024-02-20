import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const ArrowButtons = ({ handleLeftClick, handleRightClick }) => {
  return (
    <div className="arrow-buttons">
      <button
        className="left"
        onClick={() => {
          handleLeftClick();
        }}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className="right"
        onClick={() => {
          handleRightClick();
        }}
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default ArrowButtons;
