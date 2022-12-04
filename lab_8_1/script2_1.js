let napis = '';
while(true){
    let msg = window.prompt(napis);
    let numbers = cyfry(msg);
    let letters = litery(msg);
    let sum = suma(msg);
    napis += (msg + '\n');
    napis += (numbers + ' ' + letters + ' '+ sum
    + '\n');
    document.getElementById('txt').innerText += (msg + '\n');
    document.getElementById('txt').innerText += (numbers + ' ' + letters + ' '+ sum
    + '\n');
}