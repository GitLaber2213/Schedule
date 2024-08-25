import React from 'react';
import classes from "./MobileScheduleTable.module.css"
import MobileTableBody from "./MobileTableBody";
import MobileRowDate from "./MobileTableRows/MobileRowDate";


const MobileScheduleTable = (props) => {
    return (
        <>
            <MobileRowDate checkCurrDateInSchedule={props.checkCurrDateInSchedule} dayWeekName={props.dayWeekName} date={props.date} />
            <table className={classes.schedule_table}>
                <MobileTableBody date={props.date} checkCurrParTime={props.checkCurrParTime} pars={props.pars}/>
            </table >
        </>
    )
}

export default MobileScheduleTable;