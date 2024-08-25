import { rerenderEntireThree } from "../render";

export let state = {
    schedule: {
        maxHourLoad: 36,
        currHourLoad: 0,
        datePars: [],
        listParsWithSelectedParameters: [],
        scheduleInTable: []
    },

    scheduleGrouping: {
        group: [],
        prepod: [],
        aud: [],


        groupingNames: [
            { group: "group" },
            { prepod: "prepod" },
            { aud: "aud" }
        ],
        textInSelect: '',
        activeGrouping: 'group'
    },

    weekDaysNames: [
        { weekDayName: "" },
        { weekDayName: "Пн" },
        { weekDayName: "Вт" },
        { weekDayName: "Ср" },
        { weekDayName: "Чт" },
        { weekDayName: "Пт" },
        { weekDayName: "Сб" },
        { weekDayName: "Вс" },
    ]
}

//GLOBAL VARIABLES
export let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth(),
    currDay = date.getDay(),
    currDate = date.getDate(),
    dateArray = [],
    currGrouping_ = [];


fetch('https://schedule-v7p4.onrender.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        type: 'getSelectorDataReq',
        grouping: state.scheduleGrouping.activeGrouping,
    })
})
    .then(response => response.json())
    .then(data => {
        data.map(el => {
            if (el.group) {
                state.scheduleGrouping.group = el.group.map(item => ({ name: item.name }));
            }
            if (el.prepod) {
                state.scheduleGrouping.prepod = el.prepod.map(item => ({ name: item.name }));
            }
            if (el.aud) {
                state.scheduleGrouping.aud = el.aud.map(item => ({ name: item.name }));
            }
        });
        currGrouping_ = state.scheduleGrouping.group
    });



//CHECK DATE AND TIME IN SCHEDULE TABLE
export const checkCurrDateInSchedule = (inputDate) => {
    let partsDate = inputDate.split(".")
    let day = parseInt(partsDate[0], 10)
    let month = parseInt(partsDate[1], 10)
    let localCurrDate = date.getDate()
    let localCurrMonth = date.getMonth()

    if (day === localCurrDate && month === localCurrMonth + 1)
        return 0
    else
        return 1
}

export const checkCurrParTime = (inputTime, inputDate) => {
    let timeRange = inputTime.split(" - ")
    let startTime = new Date(date.toDateString() + " " + timeRange[0])
    let endTime = new Date(date.toDateString() + " " + timeRange[1])

    if (checkCurrDateInSchedule(inputDate))
        return 1

    if (date >= startTime && date <= endTime)
        return 0
    else
        return 1
}

//FUNCTIONS FOR CALENDAR
export const GetMonth = (currMonth) => {
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    return (months[currMonth]);
}

export const getColorWeek = (dateArray) => {
    let dateArrayConcat = [];

    dateArray.map(el => {
        dateArrayConcat.push(el + "." + currMonth + 1 + "." + currYear);
    })

    fetch('https://schedule-v7p4.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'getColorWeekReq',
            grouping: state.scheduleGrouping.activeGrouping,
            dateArray: dateArrayConcat,
            selector: state.scheduleGrouping.textInSelect,
        })
    })
        // .then(response => response.json())
        // .then(data => {
        //     state.schedule.listParsWithSelectedParameters.length = 0;
        //     data.map(el => state.schedule.listParsWithSelectedParameters.push(el));
        //     rerenderEntireThree(state)
        // })

    if (state.schedule.maxHourLoad >= state.schedule.currHourLoad) {
        return 0;
    }
    else {
        return 1;
    }
}

export const CalendarRender = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 0).getDay(),
        lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(),
        lastDayOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    for (let i = firstDayOfMonth; i > 0; i--) {
        dateArray.push(lastDayOfLastMonth - i + 1);
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        dateArray.push(i);
    }

    for (let i = lastDayOfMonth; i < lastDayOfLastMonth; i++) {

        if (dateArray.length >= 42)
            break;
        else
            dateArray.push(i - lastDayOfMonth + 1);
    }
}

export const incrementMonthsClick = () => {
    currMonth++;

    if (currMonth > 11) {
        currYear++;
        currMonth = 0;
    }

    rerenderEntireThree(state)
}

export const getCurrentMonthClick = () => {
    currMonth = date.getMonth()
    currYear = date.getFullYear()
    rerenderEntireThree(state)
}

export const decrementMonthsClick = () => {
    currMonth--;

    if (currMonth < 0) {
        currYear--;
        currMonth = 11;
    }

    rerenderEntireThree(state)
}

export const checkActiveScheduleInCalendarTable = (calendarDate) => {
    let partsDate = '', result;
    result = state.schedule.datePars.find(el => {
        partsDate = el.split(".");
        return parseInt(partsDate[0], 10) === calendarDate && parseInt(partsDate[1], 10) - 1 === currMonth && parseInt(partsDate[2], 10) === currYear;
    })

    return result ? 0 : 1
}

export const clickDateOnCalendarTable = (calendarDate) => {
    let partsDate = '';
    state.schedule.datePars.map(date => {
        partsDate = date.split(".");

        if (parseInt(partsDate[0], 10) === calendarDate && parseInt(partsDate[1], 10) - 1 === currMonth && parseInt(partsDate[2], 10) === currYear) {

            fetch('https://schedule-v7p4.onrender.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: 'getScheduleInTableReq',
                    grouping: state.scheduleGrouping.activeGrouping,
                    selector: state.scheduleGrouping.textInSelect,
                    date: date
                })
            })
                .then(response => response.json())
                .then(data => {
                    state.schedule.listParsWithSelectedParameters.length = 0;
                    data.map(el => state.schedule.listParsWithSelectedParameters.push(el));
                    rerenderEntireThree(state)
                })
            state.schedule.scheduleInTable.length = 0;
            state.schedule.scheduleInTable.push(date);
        }

    })
    rerenderEntireThree(state)
}

export const clickWeekOnCalendarTable = (dateArray) => {
    let dateArrayConcat = [],
        monthInConcatArr = (currMonth + 1).toString().padStart(2, '0');

    dateArray.map(el => {
        dateArrayConcat.push(el.toString().padStart(2, '0') + "." + monthInConcatArr + "." + currYear);
    })

    fetch('https://schedule-v7p4.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'getWeekScheduleInTableReq',
            grouping: state.scheduleGrouping.activeGrouping,
            selector: state.scheduleGrouping.textInSelect,
            dateArray: dateArrayConcat
        })
    })
        .then(response => response.json())
        .then(data => {
            state.schedule.listParsWithSelectedParameters.length = 0;
            data.map(el => state.schedule.listParsWithSelectedParameters.push(el));
            rerenderEntireThree(state)
        })
    state.schedule.scheduleInTable.length = 0;
    state.schedule.scheduleInTable.push(date);
}


//SCHEDULE GROUPING
export const groupingScheduleClick = (listGrouping, groupingName) => {
    currGrouping_ = listGrouping
    state.scheduleGrouping.activeGrouping = groupingName
    selectGroupingTextChange(listGrouping[0].name)
}

export const returnGroupingSchedule = () => {
    let currGrouping = currGrouping_
    return currGrouping
}

export const selectGroupingTextChange = (newText) => {
    state.scheduleGrouping.textInSelect = newText;
    fetch('https://schedule-v7p4.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'getDateInCalendarReq',
            grouping: state.scheduleGrouping.activeGrouping,
            selector: state.scheduleGrouping.textInSelect,
        })
    })
        .then(response => response.json())
        .then(data => {
            state.schedule.datePars.length = 0;
            data.map(el => {
                state.schedule.datePars.push(el);
            });
            rerenderEntireThree(state)
        })
}
