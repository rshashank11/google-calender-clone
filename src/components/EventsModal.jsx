import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import "../App.css";
import ColorPallete from "./ColorPallete";
import EventForm from "./EventForm";

const EventsModal = ({ day }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <button
        className="add-event-btn opacity-0 absolute bg-none border-none rounded-[50%] w-6 h-6 flex justify-center items-center right-0 top-0 text-xl cursor-pointer text-[#333] hover:bg-[#f1f3f4] hover:opacity-75"
        onClick={openModal}
      >
        +
      </button>
      <ReactModal
        className="modal"
        overlayClassName="overlay"
        parentSelector={() => document.querySelector("#root")}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        preventScroll={true}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <div>
          <div className="modal-title">
            <div className="modal-title h-10 bg-borderColor flex items-center justify-between px-4 text-grayTwo">
              <h1>{format(day, "iiii, MMMM d")}</h1>
              <button className="close-btn text-2xl" onClick={closeModal}>
                &times;
              </button>
            </div>
            <EventForm />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default EventsModal;
