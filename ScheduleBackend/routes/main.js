const fs = require('fs');
const bodyParser = require('body-parser');

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function getParsList(el, selectorData, grouping) {
    let pars = []
    switch (grouping) {
        case "group":
            el.pars.map(gr => {
                if (gr.group === selectorData) {
                    pars.push(gr);
                }
            })
            break;
        case "prepod":
            el.pars.map(pr => {
                if (pr.prep === selectorData) {
                    pars.push(pr);
                }
            })
            break;
        case "aud":
            el.pars.map(au => {
                if (au.aud === selectorData) {
                    pars.push(au);
                }
            })
            break;
    }
    return pars;
}

function getDateList(el, grouping, selectorData) {
    let dates = []
    switch (grouping) {
        case "group":
            el.pars.map(gr => {
                if (gr.group === selectorData) {
                    dates.push(el.date);
                }
            })
            break;
        case "prepod":
            el.pars.map(pr => {
                if (pr.prep === selectorData) {
                    dates.push(el.date);
                }
            })
            break;
        case "aud":
            el.pars.map(au => {
                if (au.aud === selectorData) {
                    dates.push(el.date);
                }
            })
            break;
    }

    return dates;
}

function getWeekHours(el, grouping, selectorData) {
    let hours = 0;
    console.log(hours);
    switch (grouping) {
        case "group":
            el.pars.map(gr => {
                if (gr.group === selectorData) {
                    hours += gr.loadTypeHours;
                    console.log(gr.loadTypeHours);
                }
            })
            break;
        case "prepod":
            el.pars.map(pr => {
                if (pr.prep === selectorData) {
                    console.log("prep");
                }
            })
            break;
        case "aud":
            el.pars.map(au => {
                if (au.aud === selectorData) {
                    console.log("aud");
                }
            })
            break;
    }

}

function getDateInJSON(jsonData, grouping, selectorData) {
    let dates, result, filtersDates, specialDates;

    let jsonObj = JSON.parse(jsonData);
    result = jsonObj.map(el => {
        dates = getDateList(el, grouping, selectorData);
        return dates;
    });

    filtersDates = result.flat(1).filter(date => date.length > 0);
    specialDates = filtersDates.reduce((acc, item) => {
        if (acc.includes(item)) {
            return acc;
        }
        return [...acc, item]
    }, []);

    return specialDates;
}

function getSelectedSchedule(selectorData, grouping, date, jsonData) {
    let pars,
        selectedSchedule = [],
        jsonObj = JSON.parse(jsonData);

    jsonObj.map(el => {
        if (el.date === date) {

            pars = getParsList(el, selectorData, grouping);

            selectedSchedule.push({
                dayWeekName: el.dayWeekName,
                date: el.date,
                pars: pars,
            })
        }
    });
    return selectedSchedule;
}

function getWeekSelectedSchedule(selectorData, grouping, dateArray, jsonData) {
    let pars,
        selectedSchedule = [],
        jsonObj = JSON.parse(jsonData);

    dateArray.map(el => {
        jsonObj.map(e => {
            if (e.date === el) {
                
                pars = getParsList(e, selectorData, grouping);
                if (isEmpty(pars) === false) {
                    selectedSchedule.push({
                        dayWeekName: e.dayWeekName,
                        date: e.date,
                        pars: pars,
                    })
                }
            }
        });
    })

    return selectedSchedule;
}

function getColorWeek(jsonData, dateArray, selectorData, grouping) {
    let jsonObj = JSON.parse(jsonData);

    dateArray.map(el => {
        jsonObj.map(e => {
            if(e.date === el) {
                getWeekHours(e, selectorData, grouping)
            }
        })
    })
}

function getSelectorData(jsonData) {
    jsonObj = JSON.parse(jsonData);
    return jsonObj;
}

module.exports = function (app) {
    app.use(bodyParser.json());

    app.post('/', (req, res) => {
        const jsonState = fs.readFileSync('files/State.json');
        const jsonSelector = fs.readFileSync('files/Selector.json');
        const receivedData = req.body.type;

        switch (receivedData) {
            case "getDateInCalendarReq":
                res.json(getDateInJSON(jsonState, req.body.grouping, req.body.selector));
                break;
            case "getScheduleInTableReq":
                res.json(getSelectedSchedule(req.body.selector, req.body.grouping, req.body.date, jsonState));
                break;
            case "getSelectorDataReq":
                res.json(getSelectorData(jsonSelector));
                break;
            case "getWeekScheduleInTableReq":
                res.json(getWeekSelectedSchedule(req.body.selector, req.body.grouping, req.body.dateArray, jsonState));
                break;
            case "getColorWeekReq":
                res.json(getColorWeek(jsonState, req.body.dateArray, req.body.selector, req.body.grouping));    
            break;

        }
    });
}