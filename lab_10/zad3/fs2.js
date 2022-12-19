const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const fileName = body.split('=')[1];
      
      // Sprawdzenie, czy podana nazwa jest plikiem czy katalogiem
      fs.stat(fileName, (err, stat) => {
        if (err) {
          res.end(`'${fileName}' nie istnieje`);
          return;
        }
        if (stat.isFile()) {
          fs.readFile(fileName,function(err, data){
            res.end(`'${fileName}' jest plikiem a jego zawartosc to:\n '${data.toString()}'`);
          });

        } else if (stat.isDirectory()) {
          res.end(`'${fileName}' jest katalogiem`);
        }
      });
    });
  } else {
    res.end(`
      <!doctype html>
      <html>
      <body>
        <form action="/" method="post">
          <label>Podaj nazwe pliku lub katalogu:</label><br>
          <input type="text" name="name"><br>
          <input type="submit" value="Wyslij">
        </form> 
      </body>
      </html>
    `);
  }
});

server.listen(8000);

