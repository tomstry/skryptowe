// No use of any template system
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

app.get('/json/:name', async function(req, res){
  let js = JSON.parse(readFile(req.params.name));

  str = '<table border=1><tr><th>x</th><th>Operation</th><th>y</th><th> Result </th></tr>';

  for(let param of js){
    str += '<tr><td>' + param.x + '</td><td>' + param.op + '</td><td>' + param.y + '</td><td>' + eval('' + param.x + param.op + param.y) + '</td></tr>';
  }

  str += '</table>';
  res.send(str);
})

// Determining the contents of the middleware stack
app.use(logger('dev'));                            // Place an HTTP request recorder on the stack — each request will be logged in the console in 'dev' format
// app.use(express.static(__dirname + '/public')); // Place the built-in middleware 'express.static' — static content (files .css, .js, .jpg, etc.) will be provided from the 'public' directory

// *** Route definitions ***

// The first route
app.get('/', function (req, res) {
  res.send(sum(x,y));
//   res.send(`
// <!DOCTYPE html>
// <html lang="en" data-bs-theme="dark">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
//       crossorigin="anonymous">
//     <title>Your first page</title>
//   </head>
//   <body>
//     <main class="container">
//       <h1>Hello World</h1>
//       <p>${sum(x,y)}</p>
//     </main>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
//       crossorigin="anonymous">
//     </script>
//   </body>
// </html>
// `); // Send a response to the browser
});

// The application is to listen on port number 3000
app.listen(3000, function () {
  console.log('The application is available on port 3000');
});