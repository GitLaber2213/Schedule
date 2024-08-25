import React from 'react';
import classes from './TableHeaders.module.css'

const TableHeaders = () => {
    return (
        <thead>
            <tr>
                <th className={`${classes.schedule_date} ${classes.header}`}>Дата</th>
                <th className={`${classes.schedule_para} ${classes.header}`}></th>
                <th className={`${classes.schedule_time} ${classes.header}`}>Время</th>
                <th className={`${classes.schedule_discipline} ${classes.header}`}>Дисциплина</th>
                <th className={`${classes.schedule_prep} ${classes.header}`}>Преподаватель</th>
                <th className={`${classes.schedule_group} ${classes.header}`}>Группа</th>
                <th className={`${classes.schedule_aud} ${classes.header}`}>Аудитория</th>
            </tr>
        </thead>
    );
}


export default TableHeaders;