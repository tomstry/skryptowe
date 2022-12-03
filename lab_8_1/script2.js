'use strict';

let sumall = 0;

function cyfry(str){
    let sum = 0;
    let splitStr = str.split('');
    for (let num of splitStr) {
        if(!isNaN(num)){
            sum += parseInt(num);
        }
    }
    return sum;
}

function litery(str){
    let sum = 0;
    let splitStr = str.split('');
    for (let num of splitStr) {
        if(isNaN(num)){
            sum += 1;
        }
    }
    return sum;
}

function suma(str){
    if(!isNaN(parseInt(str))){
        sumall += parseInt(str);
    }
    return sumall;
}
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