import { FaPlus } from "react-icons/fa6";

const ModalButton = ({ setIsModalOpen }) => {
  return (
    <button
      className="modal-button"
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      <FaPlus style={{ width: 20 }} />
      <p style={{ fontSize: 20 }}>Add Trip</p>
    </button>
  );
};

export default ModalButton;
