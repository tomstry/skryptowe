let azure = Array.from(document.getElementsByClassName('azure'));
let header = document.getElementsByClassName('header')[0];
let aside = document.getElementsByClassName('aside')[0];
let nav = document.getElementsByClassName('nav')[0];
let main = document.getElementsByClassName('main')[0];
let footer= document.getElementsByClassName('footer')[0];
let ul = Array.from(document.getElementsByClassName('ul'));
let ulli = Array.from(document.getElementsByClassName('ulli'));
let h1 = Array.from(document.getElementsByClassName('h1'));
let h2 = Array.from(document.getElementsByClassName('h2'));
let blockquote = document.getElementsByClassName('blockquote')[0];
let asideh1 = document.getElementsByClassName('asideh1')[0];
let flex = document.getElementsByClassName('flex')[0];

function setStyle(){
    main.classList.add('main');
    aside.classList.add('aside');
    nav.classList.add('nav');
    footer.classList.add('footer');
    blockquote.classList.add('blockquote');
    asideh1.classList.add('asideh1');
    header.classList.add('header');
    azure.forEach(elem => {
        elem.classList.add('azure');
    });
    h1.forEach(elem => {
        elem.classList.add('h1');
    });
    h2.forEach(elem => {
        elem.classList.add('h2');
    });
    ul.forEach(elem => {
        elem.classList.add('ul');
    });
    ulli.forEach(elem => {
        elem.classList.add('ulli');
    });
    flex.classList.add('flex');
}

function removeStyle(){
    main.classList.remove("main");
    aside.classList.remove('aside');
    nav.classList.remove('nav');
    footer.classList.remove('footer');
    blockquote.classList.remove('blockquote');
    asideh1.classList.remove('asideh1');
    header.classList.remove('header');
    azure.forEach(elem => {
        elem.classList.remove('azure');
    });
    h1.forEach(elem => {
        elem.classList.remove('h1');
    });
    h2.forEach(elem => {
        elem.classList.remove('h2');
    });
    ul.forEach(elem => {
        elem.classList.remove('ul');
    });
    ulli.forEach(elem => {
        elem.classList.remove('ulli');
    });
    flex.classList.remove('flex');
}