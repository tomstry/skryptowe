'use strict';

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
    let sum = 0;
    if(!isNaN(parseInt(str))){
        sum += parseInt(str);
    }
    return sum;
}

let msg = window.prompt('podaj input');
cyfry(msg);
litery(msg);
suma(msg);