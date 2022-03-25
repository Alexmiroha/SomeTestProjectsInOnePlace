import React from 'react';
import s from './Day.module.css'

export const Day = (props) => {
    const className = `${s.day} ${props.day.value === 'padding' ? `${s.padding}` : ''} ${props.day.isCurrentDay ? `${s.currentDay}` : ''}`;
    return (
      <div onClick={props.onClick} className={className}>
          {props.day.value === 'padding' ? '' : props.day.value}

          {props.day.event && <div className={s.event}>{props.day.event.title}</div>}
      </div>
    )
}