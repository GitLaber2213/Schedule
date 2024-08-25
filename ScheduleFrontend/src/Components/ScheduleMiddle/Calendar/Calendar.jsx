import React from 'react';
import { checkActiveScheduleInCalendarTable, clickWeekOnCalendarTable } from '../../../Redux/State';
import classes from './Calendar.module.css'
import CalendarHeader from './CalendarComponents/CalendarHeader';
import CalendarSelector from './CalendarComponents/CalendarSelector';

const Calendar = (props) => {
    let firstWeek = props.dateArray.splice(0,7),
    secondWeek = props.dateArray.splice(0,7),
    thirdWeek = props.dateArray.splice(0,7),
    fourthWeek = props.dateArray.splice(0,7),
    fifthWeek = props.dateArray.splice(0,7),
    sixthWeek = props.dateArray.splice(0,7);
    
    props.calendarRender();
    return (
        <div className={classes.calendar}>
            <CalendarHeader currMonth={props.GetMonth(props.currMonth)} currYear={props.currYear} />

            <table className={classes.calendar_table}>
                <thead>
                    <tr className={classes.grid_table_headers}>
                        {props.weekDaysNames.map(el => <th key={el.weekDayName}>{el.weekDayName}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td onClick={() => {clickWeekOnCalendarTable(firstWeek)}} className={props.getColorWeek(firstWeek) === 0 ? `${classes.grid_num_weeks} ${classes.blue}` : `${classes.grid_num_weeks} ${classes.red}`}>{">"}</td>
                        {firstWeek.map(el => <td onClick={() => {props.clickDateOnCalendarTable(el)}} key={el} className={checkActiveScheduleInCalendarTable(el) === 0 ? (el <= 15 ? `${classes.grid_num_day}` : `${classes.grid_num_day} ${classes.unactive}`) : (el >= 15 ? `${classes.grid_num_day} ${classes.unactive}` : `${classes.grid_num_day} ${classes.noPar}`) }>{el}</td>)}
                    </tr>
                    <tr>
                        <td onClick={() => {clickWeekOnCalendarTable(secondWeek)}} className={props.getColorWeek(secondWeek) === 0 ? `${classes.grid_num_weeks} ${classes.blue}` : `${classes.grid_num_weeks} ${classes.red}`}>{">"}</td>
                        {secondWeek.map(el => <td onClick={() => {props.clickDateOnCalendarTable(el)}} key={el} className={checkActiveScheduleInCalendarTable(el) === 0 ? `${classes.grid_num_day}` : `${classes.noPar} ${classes.grid_num_day}`}>{el}</td>)}
                    </tr>
                    <tr>
                        <td onClick={() => {clickWeekOnCalendarTable(thirdWeek)}} className={props.getColorWeek(thirdWeek) === 0 ? `${classes.grid_num_weeks} ${classes.blue}` : `${classes.grid_num_weeks} ${classes.red}`}>{">"}</td>
                        {thirdWeek.map(el => <td onClick={() => {props.clickDateOnCalendarTable(el)}} key={el} className={checkActiveScheduleInCalendarTable(el) === 0 ? `${classes.grid_num_day}` : `${classes.noPar} ${classes.grid_num_day}`}>{el}</td>)}
                    </tr>
                    <tr>
                        <td onClick={() => {clickWeekOnCalendarTable(fourthWeek)}} className={props.getColorWeek(fourthWeek) === 0 ? `${classes.grid_num_weeks} ${classes.blue}` : `${classes.grid_num_weeks} ${classes.red}`}>{">"}</td>
                        {fourthWeek.map(el => <td onClick={() => {props.clickDateOnCalendarTable(el)}} key={el} className={checkActiveScheduleInCalendarTable(el) === 0 ? `${classes.grid_num_day}` : `${classes.noPar} ${classes.grid_num_day}`}>{el}</td>)}
                    </tr>
                    <tr>
                        <td onClick={() => {clickWeekOnCalendarTable(fifthWeek)}} className={props.getColorWeek(fifthWeek) === 0 ? `${classes.grid_num_weeks} ${classes.blue}` : `${classes.grid_num_weeks} ${classes.red}`}>{">"}</td>
                        {fifthWeek.map(el => <td onClick={() => {props.clickDateOnCalendarTable(el)}} key={el} className={ checkActiveScheduleInCalendarTable(el) === 0 ? (el >= 15 ? `${classes.grid_num_day}` : `${classes.unactive} ${classes.grid_num_day}`) : (el <= 15 ? `${classes.unactive} ${classes.grid_num_day}` : ` ${classes.grid_num_day} ${classes.noPar}`)}>{el}</td>)}
                    </tr>
                    <tr>
                        <td onClick={() => {clickWeekOnCalendarTable(sixthWeek)}} className={props.getColorWeek(sixthWeek) === 0 ? `${classes.grid_num_weeks} ${classes.blue}` : `${classes.grid_num_weeks} ${classes.red}`}>{">"}</td>
                        {sixthWeek.map(el => <td onClick={() => {props.clickDateOnCalendarTable(el)}} key={el} className={checkActiveScheduleInCalendarTable(el) === 0 ? (el >= 15 ? `${classes.grid_num_day}` : ` ${classes.grid_num_day} ${classes.unactive}`) : (el <= 15 ? `${classes.grid_num_day} ${classes.unactive} ` : ` ${classes.grid_num_day} ${classes.noPar}`) }>{el}</td>)}
                    </tr>
                </tbody>
            </table>
            
            <CalendarSelector   
                incrementMonthsClick={props.incrementMonthsClick}
                getCurrentMonthClick={props.getCurrentMonthClick}
                decrementMonthsClick={props.decrementMonthsClick}
                currMonth={props.currMonth}
            />

        </div>

    );
}

export default Calendar;