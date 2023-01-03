// Application using the 'Pug' template system
const express = require('express'),
    fs = require('fs'),
    logger = require('morgan');
const app = express();
const x = 1;
const y = 2;

function sum(x,y) {
  return x + ' + ' + y + ' = ' + (x + y);
}

function isFile(plik){
  return fs.statSync(plik).isFile();
}

function readFile(plik){
  if(!isFile(plik))
    return null;
  
  return fs.readFileSync(plik, {encoding: 'utf8'});
}


// Configuring the application
app.set('views', __dirname + '/views');               // Files with views can be found in the 'views' directory
app.set('view engine', 'pug');                        // Use the 'Pug' template system
app.locals.pretty = app.get('env') === 'development'; // The resulting HTML code will be indented in the development environment

// Determining the contents of the middleware stack
app.use(logger('dev'));                            // Add an HTTP request recorder to the stack — every request will be logged in the console in the 'dev' format
// app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' — static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory

// *** Route definitions ***

// The first route
app.get('/', function (req, res) {      // The first route
  res.render('index', { sum: sum(x, y) });
});

app.get('/json/:name', function(req,res){
  let js = JSON.parse(readFile(req.params.name));
  
  res.render('json', {json: js})
})

// The application is to listen on port number 3000
app.listen(3000, function () {
    console.log('The application is available on port 3000');
});