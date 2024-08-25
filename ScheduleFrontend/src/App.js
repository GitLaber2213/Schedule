import React from 'react';
import './App.css';
import ButtonsMenu from './Components/ScheduleHead/ButtonsMenu.jsx';
import Calendar from './Components/ScheduleMiddle/Calendar/Calendar';
import GroupSelector from './Components/ScheduleMiddle/GroupSelector/GroupSelector';
import DisplayMonitoring from './DisplayMonitoring.jsx';

function App(props) {
  return (
    <div>
      <ButtonsMenu group={props.state.scheduleGrouping.group} 
        prepod={props.state.scheduleGrouping.prepod}
        aud={props.state.scheduleGrouping.aud}
        groupingNames={props.state.scheduleGrouping.groupingNames}
        groupingScheduleClick={props.groupingScheduleClick}
      />

      <div className="container_block_selector">
          <GroupSelector textInSelect={props.state.scheduleGrouping.textInSelect} 
            selectGroupingTextChange={props.selectGroupingTextChange} 
            returnGroupingSchedule={props.returnGroupingSchedule}
          />
          <Calendar 
            weekDaysNames={props.state.weekDaysNames}
            GetMonth={props.GetMonth}
            getColorWeek={props.getColorWeek}
            currMonth={props.currMonth}
            currYear={props.currYear}
            dateArray={props.dateArray}
            incrementMonthsClick={props.incrementMonthsClick} 
            decrementMonthsClick={props.decrementMonthsClick} 
            getCurrentMonthClick={props.getCurrentMonthClick}
            calendarRender={props.calendarRender}
            clickDateOnCalendarTable={props.clickDateOnCalendarTable}
          />
      </div>

      <DisplayMonitoring schedule={props.state.schedule} 
        checkCurrDateInSchedule={props.checkCurrDateInSchedule} 
        checkCurrParTime={props.checkCurrParTime}
      />
    </div>
  );
}

export default App;
