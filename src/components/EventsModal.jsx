import { format } from 'date-fns'
import React from 'react'
import { useState } from 'react'
import ReactModal from 'react-modal'
import "../App.css"
import ColorPallete from './ColorPallete'


const EventsModal = ({day}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }
  return (
    <>
    <button className="add-event-btn opacity-0 absolute bg-none border-none rounded-[50%] w-6 h-6 flex justify-center items-center right-0 top-0 text-xl cursor-pointer text-[#333] hover:bg-[#f1f3f4] hover:opacity-75" onClick={openModal}>+</button>
     <ReactModal
     className="modal"
     overlayClassName="overlay"
     parentSelector={() => document.querySelector("#root")}
     isOpen={isModalOpen}
     onRequestClose={closeModal}
     preventScroll={true}
     contentLabel='Modal'
     
     >
        <div>
            <div className='modal-title'>
                <div className='modal-title'>{format(day, "dd/M/yy")}
                    <button className='close-btn' onClick={closeModal}>&times;</button>
                </div>
                <form>
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder='Add title'/>
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" name="all-day" id="all-day" />
              <label htmlFor="all-day">All Day?</label>
            </div>
            <div className="row">
              <div className="form-group">
                <label htmlFor="start-time">Start Time: </label>
                <input type="time" name="start-time" id="start-time" />
              </div>
              <div className="form-group">
                <label htmlFor="end-time">End Time: </label>
                <input type="time" name="end-time" id="end-time" />
              </div>
            </div>
            <div className="form-group ">
              <ColorPallete />
            </div>
            <div className="row">
              <button className="btn btn-success" type="submit">Add</button>
              <button className="btn btn-delete" type="button">Delete</button>
            </div>
          </form>
            </div>
        </div>
     </ReactModal>
     </>
  )
}

export default EventsModal