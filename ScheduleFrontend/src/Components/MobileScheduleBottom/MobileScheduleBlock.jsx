import React from 'react';
import classes from './MobileScheduleBlock.module.css'
import MobileScheduleTable from './MobileScheduleTableComponents/MobileScheduleTable';


const MobileScheduleBlock = (props) => {
    return (
        <div className={classes.schedule_block}>
            <div className={classes.schedule_block_container}>
                {props.schedule.listParsWithSelectedParameters.map(el => <MobileScheduleTable checkCurrParTime={props.checkCurrParTime} checkCurrDateInSchedule={props.checkCurrDateInSchedule} dayWeekName={el.dayWeekName} date={el.date} pars={el.pars} />)}
            </div >
        </div >
    );
}

export default MobileScheduleBlock;