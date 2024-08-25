import React from 'react';
import classes from './StylingRows.module.css'

const RowDate = (props) => {
    return (
        <div className={props.checkCurrDateInSchedule(props.date) == 0 ? `${classes.schedule_date} ${classes.dateActive} ${classes.body}` : `${classes.schedule_date} ${classes.dateUnactive} ${classes.body}`}>
            <div className={`${classes.weekDayName}`}>
                {props.dayWeekName}
            </div>
            <div className={`${classes.currentDate}`}>
                {props.date}
            </div>
            <div className={`${classes.todayEntry}`}>
            {props.checkCurrDateInSchedule(props.date) == 0 ? "Сегодня" : ""}
            </div>
        </div>
    )
}


export default RowDate;