import { format } from "date-fns";
import React, { useState } from "react";

import ReactModal from "react-modal";
import "../App.css";
import EventForm from "./EventForm";

const EventsModal = ({ day, isModalOpen, setIsModalOpen, children }) => {
  return (
    <>
      {children}
      <ReactModal
        className="modal"
        overlayClassName="overlay"
        parentSelector={() => document.querySelector("#root")}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        preventScroll={true}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        <div>
          <div className="modal-title">
            <div className="modal-title h-10 bg-borderColor flex items-center justify-between px-4 text-grayTwo">
              <h1>{format(day, "iiii, MMMM d")}</h1>
              <button
                className="close-btn text-2xl"
                onClick={() => setIsModalOpen(false)}
              >
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
