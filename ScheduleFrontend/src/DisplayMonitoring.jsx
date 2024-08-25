import React from 'react';
import { useEffect, useState } from "react";
import MobileScheduleBlock from "./Components/MobileScheduleBottom/MobileScheduleBlock";
import ScheduleTable from "./Components/ScheduleBottom/ScheduleTable";


const DisplayMonitoring = (props) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 865)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            {
                isMobile
                    ?
                    <MobileScheduleBlock schedule={props.schedule} checkCurrDateInSchedule={props.checkCurrDateInSchedule} checkCurrParTime={props.checkCurrParTime}/>
                    :
                    <ScheduleTable schedule={props.schedule} checkCurrDateInSchedule={props.checkCurrDateInSchedule} checkCurrParTime={props.checkCurrParTime}/>
            }
        </>
    )
}


export default DisplayMonitoring;