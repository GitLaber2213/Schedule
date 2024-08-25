import React from 'react';
import classes from './ScheduleTable.module.css'
import TableBody from './ScheduleTableComponents/TableBody';
import TableHeaders from './ScheduleTableComponents/TableHeaders';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const ScheduleTable = (props) => {
    return (
        <div className={classes.schedule_block}>
            <div>
                <table className={classes.schedule_table}>
                    {isEmpty(props.schedule.listParsWithSelectedParameters) ? `` : <TableHeaders />}
                    {props.schedule.listParsWithSelectedParameters.map(el => isEmpty(el.pars) ? `` : <TableBody checkCurrParTime={props.checkCurrParTime}
                        checkCurrDateInSchedule={props.checkCurrDateInSchedule}
                        dayWeekName={el.dayWeekName}
                        date={el.date}
                        pars={el.pars}  />)}
                </table>
            </div >
        </div >
    );
}

export default ScheduleTable;