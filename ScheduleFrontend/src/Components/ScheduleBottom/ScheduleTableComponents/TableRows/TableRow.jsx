import React from 'react';
import classes from './StylingRows.module.css'

const TableRow = (props) => {
    return (
        <tr className={classes.row_table}>
            <td className={`${classes.schedule_date} ${classes.body}}`}></td>
            <td className={props.checkCurrParTime(props.time, props.date) ? `${classes.schedule_para} ${classes.body}` : `${classes.schedule_para} ${classes.body} ${classes.timeActive}`}>{props.paraNum}</td>
            <td className={props.checkCurrParTime(props.time, props.date) ? `${classes.schedule_time} ${classes.body}` : `${classes.schedule_time} ${classes.body} ${classes.timeActive}`}>{props.time}</td>
            <td className={props.checkCurrParTime(props.time, props.date) ? `${classes.schedule_discipline} ${classes.body}` : `${classes.schedule_discipline} ${classes.body} ${classes.timeActive}`}><span className={classes.span}>{props.loadType}</span>{props.subjectName} {props.subGroup == "" ? '' : <span className={classes.span}>{props.subGroup}</span>}</td>
            <td className={props.checkCurrParTime(props.time, props.date) ? `${classes.schedule_prep} ${classes.body}` : `${classes.schedule_prep} ${classes.body} ${classes.timeActive}`}>{props.prep}</td>
            <td className={props.checkCurrParTime(props.time, props.date) ? `${classes.schedule_prep} ${classes.body}` : `${classes.schedule_prep} ${classes.body} ${classes.timeActive}`}>{props.group}</td>
            <td className={props.checkCurrParTime(props.time, props.date) ? `${classes.schedule_aud} ${classes.body}` : `${classes.schedule_aud} ${classes.body} ${classes.timeActive}`}>{props.aud} <span className={classes.span}>{props.area}</span></td>
        </tr>
    );
}

export default TableRow;