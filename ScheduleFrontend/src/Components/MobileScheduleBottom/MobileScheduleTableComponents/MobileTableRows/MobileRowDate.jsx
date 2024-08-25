import React from 'react';
import classes from './MobileRowDate.module.css'

const MobileRowDate = (props) => {
    return (
        <div className={props.checkCurrDateInSchedule(props.date) == 0 ? `${classes.schedule_date} ${classes.dateActive}` : `${classes.schedule_date} ${classes.dateUnactive}`}>
            <div class={`${classes.weekDayName}`}>
                {props.dayWeekName}
            </div>
            <div class={`${classes.currentDate}`}>
                {props.date}
            </div>
            <div class={`${classes.todayEntry}`}>
                {props.checkCurrDateInSchedule(props.date) == 0 ? "Сегодня" : ""}
            </div>
        </div>
    )
}


export default MobileRowDate;