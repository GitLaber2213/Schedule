import React from 'react';
import classes from './MobileTableRow.module.css'

const MobileTableRow = (props) => {
    return (
        <tr className={props.checkCurrParTime(props.time, props.date) == 0 ? `${classes.row_table} ${classes.timeActive}` : `${classes.row_table}`}>
            <td className={`${classes.schedule_para} ${classes.body}`}>{props.paraNum}</td>
            <td className={`${classes.schedule_time} ${classes.body}`}>{props.time}</td>
            <td>
                <tr>
                    <td className={`${classes.schedule_discipline} ${classes.body}`}>
                        <span className={classes.span}>{props.loadType}</span>
                        {props.subjectName} 
                        {props.subGroup == "" ? '' : <span className={classes.span}>{props.subGroup}</span>}
                    </td>
                </tr>
                <tr>
                    <td className={`${classes.schedule_prep} ${classes.body}`}>
                        {props.prep}
                    </td>
                </tr>
                <tr>
                    <td className={`${classes.schedule_aud} ${classes.body}`}>
                        {props.group} \ {props.aud}  <span className={classes.span}>{props.area}</span>
                    </td>
                </tr>
            </td>
        </tr>
    );
}

export default MobileTableRow;