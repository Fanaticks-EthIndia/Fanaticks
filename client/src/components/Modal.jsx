import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root"); 

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <button onClick={onClose}>X</button>
      {children}
    </Modal>
  );
};

export default CustomModal;
