const express = require('express');
const logger = require('morgan');
/************* */
const app_3000 = express();
app_3000.use(logger('dev'));
app_3000.use(express.static(__dirname));
app_3000.get('/', function (req, res) {
    res.send(`
        <!doctype html>
        <html>
            <head>
                <title> Server3000</title>
            </head>
            <body>
                <form>
                    <label for="area">Area</label><br>
                    <input type="text" name="area" id="area"><br>
                    <label for="location">Location</label><br>
                    <input type="text" name="location" id="location"><br>
                    <button type="button" onClick="getDataTime()">POBIERZ</button>
                </form>
                <h1>Remote</h1>
                <div id='remote'>
                    Remote date and time
                </div>
                <!-- ***************** -->
                <h1>Local</h1>
                <div id='local'>
                    Local date and time
                </div>
                <script src="./script.js"></script>
            </body>
        </html>
    `);
});
app_3000.listen(3000, function () {
    console.log('The application is available on port 3000');
});
/************* */
const app_3001 = express();
app_3001.use(logger('dev'));
app_3001.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app_3001.get('/', function (req, res) {
    const date = new Date().toDateString();
    const time = new Date().toTimeString();
    res.send(`
        <div>
            <span id="date">${date}</span>
            <span id="time">${time}</span>
        </div>
    `);
});
app_3001.listen(3001, function () {
    console.log('The application is available on port 3001');
});
/************* */
console.log("To stop the server, press 'CTRL + C'");