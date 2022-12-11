'use strict';

const input = document.getElementById('counter');
const spansTags = Array.from(document.getElementsByTagName('span'));

input.value = 10;
spansTags.forEach(span => {span.textContent = input.value});

setInterval(function(){
    let count = parseInt(input.value);
    if(count<=0 || isNaN(count)){
        return;
    }
    input.value = --count;
    console.log(count);
    spansTags.forEach(span => {span.textContent = input.value});
},1000);