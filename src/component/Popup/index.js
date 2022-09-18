import React from "react";
import Modal from "react-modal";
import "./style.css";
const Popup = ({ curr, modalOpen, setModalOpen }) => {
  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: {},
        content: {
          position: "absolute",
          top: 100,
          left: 300,
          right: 300,
          bottom: 100,
          borderRadius: 30,
          backgroundColor: "rgb(205 154 171)",
        },
      }}
    >
      <div className="modal_cont">
        <h4>Book Title : </h4>
        <div>{curr?.title}</div>
        <h4>Author :</h4>
        <div>{curr?.author}</div>
        <h4>Description :</h4>
        <div>{curr?.description}</div>
      </div>
      <br />
      <button className="modal_btn" onClick={() => setModalOpen(false)}>
        Close
      </button>
    </Modal>
  );
};

export default Popup;
