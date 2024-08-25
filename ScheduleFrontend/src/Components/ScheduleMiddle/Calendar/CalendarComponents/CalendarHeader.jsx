import React from 'react';
import classes from './CalendarHeader.module.css'

const CalendarHeader = (props) => {
    return (
        <div className={classes.container_calendar_header}>
            <p className={classes.calendar_header}>{`${props.currMonth} ${props.currYear}`}</p>
        </div>
    );
}


export default CalendarHeader;

