import classes from './GroupSelector.module.css';
import React, {useEffect, useRef } from 'react';

const GroupSelector = (props) => {
    let elementRef = useRef();

    useEffect(() => {
        props.selectGroupingTextChange(elementRef.current.value)
    }, []);

    let onSelectChange = () => {
        props.selectGroupingTextChange(elementRef.current.value)
    }

    return (
        <div className={classes.select_container}>
            <select ref={elementRef} onChange={onSelectChange} value={props.textInSelect} className={classes.select_group}>
                {props.returnGroupingSchedule().map(el => <option key={el.name} value={el.name}>{el.name}</option>)}
            </select>
        </div>
    );
}

export default GroupSelector;