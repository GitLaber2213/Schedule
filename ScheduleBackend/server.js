const path = require('path');

const express = require('express')
const app = express();
const port = 8080;

// //Объединение сервера и клиента
// app.use(express.static(path.join(__dirname, '/ScheduleFrontend/build')))
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/ScheduleFrontend/build/index.html')))
// //////////////////////////////


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    express.json();
    next();
});

require('./routes')(app);

app.listen(port, ()=> {
    console.log("work on >>> " + port);
})