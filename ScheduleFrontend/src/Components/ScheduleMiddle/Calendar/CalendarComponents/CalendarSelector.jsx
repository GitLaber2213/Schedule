import React from 'react';
import classes from './CalendarSelector.module.css'


const CalendarSelector = (props) => {
    return (
        <div className={classes.container_calendar_selector}>
            <div className={classes.uncontainer_calendar_selector} >
                <div>
                    <a onClick={ () => {props.decrementMonthsClick()}}>{`<`}</a>
                </div>
                <div>
                    <a onClick={ () => {props.getCurrentMonthClick()}}>=</a>
                </div>
                <div>
                    <a onClick={ () => {props.incrementMonthsClick()}}>{`>`}</a>
                </div>
            </div>
        </div>
    );
}

export default CalendarSelector;


