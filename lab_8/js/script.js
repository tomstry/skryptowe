const txt = document.getElementById('txt');
const num = document.getElementById('num');
const button = document.getElementById('button');
button.addEventListener('click',function(){
    document.getElementById('content').innerText += (txt.value + ' ' + num.value + '\n');
})