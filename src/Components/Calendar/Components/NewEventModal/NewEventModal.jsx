import React, {useState} from 'react';
import s from './NewEventModal.module.css'

export const NewEventModal = ({onSave, onClose}) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)


    return (
        <>
            <div className={s.newEventModal} id="newEventModal">
                <h2>New Event</h2>
                <input
                    className={error ? `${s.error}` : `${s.input}`}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    id="eventTitleInput"
                    placeholder="Event title"
                />

                <button
                    onClick={() => {
                        if (title) {
                            setError(false);
                            onSave(title);
                        } else {
                            setError(true)
                        }
                    }}
                    className={s.saveButton}
                    id="saveButton">Save
                </button>
                <button
                    onClick={onClose}
                    className={s.cancelButton}
                    id="cancelButton">Cancel
                </button>
            </div>

            <div className={s.modalBackDrop} id="modalBackDrop" onClick={onClose}></div>

        </>
    )
}
