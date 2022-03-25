import React from 'react';
import s from './CalendarHeader.module.css'

export const CalendarHeader = ( {onNext, onBack, dateDisplay} ) => {
    return (
        <div className={s.header} id="header">
            <div id="monthDisplay">
                {dateDisplay}
            </div>
            <div>
                <button className={s.button} onClick={onBack} id="backButton">Previous</button>
                <button className={s.button} onClick={onNext} id="nextButton">Next</button>
            </div>
        </div>
    )
}