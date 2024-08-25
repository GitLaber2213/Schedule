import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CalendarRender, 
  GetMonth, 
  decrementMonthsClick, 
  incrementMonthsClick, 
  currMonth, 
  currYear, 
  dateArray, 
  getCurrentMonthClick, 
  groupingScheduleClick,
  returnGroupingSchedule, 
  checkCurrDateInSchedule,
  checkCurrParTime,
  selectGroupingTextChange,
  clickDateOnCalendarTable,
  getColorWeek} from './Redux/State';




const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireThree = (state) => {
  
    root.render( 
        <React.StrictMode>
          <App 
            state={state}
            GetMonth={GetMonth}
            currMonth={currMonth}
            currYear={currYear}
            dateArray={dateArray}
            getColorWeek={getColorWeek}
            incrementMonthsClick={incrementMonthsClick} 
            decrementMonthsClick={decrementMonthsClick} 
            getCurrentMonthClick={getCurrentMonthClick}
            groupingScheduleClick={groupingScheduleClick}
            calendarRender={CalendarRender}
            returnGroupingSchedule={returnGroupingSchedule}
            checkCurrDateInSchedule={checkCurrDateInSchedule}
            checkCurrParTime={checkCurrParTime}
            selectGroupingTextChange={selectGroupingTextChange}
            clickDateOnCalendarTable={clickDateOnCalendarTable}
          />
        </React.StrictMode>
    )
}