import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: '#18181A',
          position: 'fixed',
          top: 60,

        },
        content: {
          position: 'absolute',
          border: 'none',
          background: '#333',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '12px',
          outline: 'none',
          padding: '20px'
        }
      }}
    >
      <button className="absolute right-0 p-1 m-2 top-0 bg-white bg-opacity-10 rounded-lg" onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 18L12 12M12 12L18 6M12 12L6 6M12 12L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg></button>
      {children}
    </Modal>
  );
};

export default CustomModal;
