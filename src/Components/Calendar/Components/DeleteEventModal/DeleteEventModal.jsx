import React from 'react';
import s from './DeleteEventModal.module.css'

export const DeleteEventModal = ( {onClose, onDelete, eventText} ) => {
    return (
      <>
          <div className={s.deleteEventModal} id="deleteEventModal">
              <h2>Event</h2>

              <p className={s.eventText} id="eventText">{eventText}</p>

              <button
                  className={s.deleteButton}
                  onClick={onDelete}
                  id="deleteButton">Delete
              </button>
              <button
                  className={s.closeButton}
                  onClick={onClose}
                  id="closeButton">Close
              </button>
          </div>

          <div className={s.modalBackDrop} id="modalBackDrop" onClick={onClose}/>


      </>
    )
}