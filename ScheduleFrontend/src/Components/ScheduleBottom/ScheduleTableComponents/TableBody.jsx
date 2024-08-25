import React from 'react';
import RowDate from "./TableRows/RowDate";
import TableRow from "./TableRows/TableRow";
import classes from "./TableBody.module.css"

const TableBody = (props) => {
    return (
        <tbody className={classes.tableBody}>
            <RowDate checkCurrDateInSchedule={props.checkCurrDateInSchedule} dayWeekName={props.dayWeekName} date={props.date} />
            {props.pars.map(el => <TableRow checkCurrParTime={props.checkCurrParTime} 
                date={props.date} 
                paraNum={el.paraNum} 
                time={el.time} 
                loadType={el.loadType}
                subjectName={el.subjectName} 
                subGroup={el.subGroup} 
                group={el.group}
                prep={el.prep}
                aud={el.aud} 
                area={el.area} />  
            )}
        </tbody >
    );
}

export default TableBody;