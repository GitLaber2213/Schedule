import React from 'react';
import classes from './ButtonsMenu.module.css'


const ButtonsMenu = (props) => {
  return (
    <div className={classes.main_container}>
      <div className={classes.schedule_header}>
        <button onClick={() => {props.groupingScheduleClick(props.group, props.groupingNames[0].group)}}><span>По группе</span><i></i></button>
        <button onClick={() => {props.groupingScheduleClick(props.prepod, props.groupingNames[1].prepod)}}><span>По преподавателю</span><i></i></button>
        <button onClick={() => {props.groupingScheduleClick(props.aud, props.groupingNames[2].aud)}}><span>По аудитории</span><i></i></button>
      </div>
    </div>
  );
}

export default ButtonsMenu;