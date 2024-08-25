import React from 'react';
import MobileRowDate from "./MobileTableRows/MobileRowDate";
import MobileTableRow from "./MobileTableRows/MobileTableRow";
import classes from "./MobileTableBody.module.css"


const MobileTableBody = (props) => {
    return (
        <tbody className={classes.tableBody}>
            {props.pars.map(el => <MobileTableRow
                date={props.date}
                checkCurrParTime={props.checkCurrParTime}
                paraNum={el.paraNum}
                time={el.time}
                loadType ={el.loadType}
                subjectName={el.subjectName}
                subGroup={el.subGroup}
                prep={el.prep}
                group={el.group}
                aud={el.aud}
                area={el.area}
            />)}
        </tbody >
    );
}

export default MobileTableBody;