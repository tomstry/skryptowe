function getDataTime() {
    const area = document.getElementById('area').value;
    const location = document.getElementById('location').value;
    document.getElementById('remote').innerText = 'Downloading data';

    fetch(`https://worldtimeapi.org/api/timezone/${area}/${location}`)
      .then(response => response.json())
      .then(data => {
          if(data.error) {
              document.getElementById('remote').innerText = 'The server is overloaded';
          }
          else {
              const dateTime = new Date(data.datetime).toLocaleString();
              document.getElementById('remote').innerText = dateTime;
          }
    
    fetch('http://localhost:3001/')
          .then(response => response.text())
          .then(data => {
            const parse = new DOMParser();
            const doc = parse.parseFromString(data, 'text/html');
            const date = doc.getElementById('date').textContent;
            const time = doc.getElementById('time').textContent;
            document.getElementById('local').innerText = `${date} ${time}`;
          })
  });
}