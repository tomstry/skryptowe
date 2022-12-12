'use strict';

let books = {
    'Potop': {
        author: 'Henryk Sienkiewicz',
        title: 'Potop',
        amount: 1,
        url: 'https://i.postimg.cc/GmCDgYPY/potop-b-iext121505387.jpg',
    },
    'Lalka': {
        author: 'Bolesław Prus',
        title: 'Lalka',
        amount: 3,
        url: 'https://i.postimg.cc/MHT1W83S/lalka.jpg',
    },
    'Pan Tadeusz': {
        title: 'Pan Tadeusz',
        author: 'Adam Mickiewicz',
        amount: 5,
        url: 'https://i.postimg.cc/6pRn6ccy/pan-tadeusz-b-iext103751689.jpg',
    },
};

let readers = []

function validateInputBorrow(){
    const cmd = document.getElementById('data').value;    
    const cmdParse = cmd.split(';');
    
    if(books[cmdParse[1]] == null){
        console.log('Nie ma takiej książki w zbiorze');
        return false;
    }else if(isNaN(cmdParse[2])){
        console.log('Ilość książek nie jest liczbą');
        return false;
    }else if(books[cmdParse[1]].amount < cmdParse[2]){
        console.log('Nie ma tylu książek na stanie');
        return false;
    }else if(cmdParse.length != 3){
        console.log('zła liczba argumentów');
        return false;
    }

    return cmdParse;
}

function validateInputReturn(){
    const cmd = document.getElementById('data').value;    
    const cmdParse = cmd.split(';');
        
    if(books[cmdParse[1]] == null){
        console.log('Nie ma takiej książki w zbiorze');
        return false;
    }else if(isNaN(cmdParse[2])){
        console.log('Ilość książek nie jest liczbą');
        return false;
    }else if(cmdParse.length != 3){
        console.log('zła liczba argumentów');
        return false;
    };
    return cmdParse;
};

function initActions(){
    document.getElementById('wypo').addEventListener('click',function(){
        if( validateInputBorrow()){
            borrowbook(validateInputBorrow());
        }
    });

    document.getElementById('zwrot').addEventListener('click', function(){
        if(validateInputReturn()){
            returnbook(validateInputReturn());
        }
    });

    document.getElementById('readers').addEventListener('click', function(){
        console.log(readers);
    });

    document.getElementById('lib').addEventListener('click', function(){
        console.log(books);
    });
};

function borrowbook(parseStr){
    const readerName = parseStr[0];
    const bookName = parseStr[1];
    const amountBooks = parseInt(parseStr[2]);

    books[bookName].amount -= amountBooks;
    if(!readers.find(reader => reader.name == readerName)){
        readers.push({
            name: readerName,
            books: [{
                title: bookName,
                amount: amountBooks,
            }],
        })
        updateChart(wykres);
    }else{
        const index = readers.findIndex(reader => reader.name == readerName);
        if(readers[index].books.find(book => book.title == bookName)){
            const bookIndex = readers[index].books.findIndex(book => book.title == bookName);
            readers[index].books[bookIndex].amount += amountBooks;
        }else{
            readers[index].books.push({
                title: bookName,
                amount: amountBooks,
            });
        };
        updateChart(wykres);
    };
};

function returnbook(parseStr){
    const readerName = parseStr[0];
    const bookName = parseStr[1];
    const amountBooks = parseInt(parseStr[2]);

    if(!readers.find(reader => reader.name == readerName)){
        console.log('nie ma takiego czytelnika');
    }else{
        const index = readers.findIndex(reader => reader.name == readerName); //szukanie indexu czytelnika
        const bookIndex = readers[index].books.findIndex(book => book.title == bookName); //szukanie indexu książki 
        if(!readers[index].books.find(book => book.title == bookName)){
            console.log('czytelnik nie wypożyczył tej książki');
        }else{
            if((readers[index].books[bookIndex].amount - amountBooks) < 0){
                console.log('nie można zwrócić więcej książek niż wypożyczono')
            }else{
                readers[index].books[bookIndex].amount -= amountBooks;
                books[bookName].amount += amountBooks;
                if(readers[index].books[bookIndex].amount == 0){
                    readers[index].books.splice(bookIndex,1);
                }
                updateChart(wykres);
            }
        }
    }
};
const ctx = document.getElementById('chart');

const wykres = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Potop','Lalka','Pan Tadeusz'],
        datasets: [{
        data: [books['Potop'].amount,books['Lalka'].amount,books['Pan Tadeusz'].amount],
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
});

const canva = document.getElementById('cover');
let c = canva.getContext('2d');

let img = new Image();
img.src = books['Potop'].url;
img.onload = function(){
    c.drawImage(img,35,0,250,400);
}
let img2 = new Image();
img2.src = books['Lalka'].url;
img2.onload = function(){
    c.drawImage(img2,290,0,250,400);
}
let img3 = new Image();
img3.src = books['Pan Tadeusz'].url;
img3.onload = function(){
    c.drawImage(img3,545,0,300,400);
}

function updateChart(chart){
    chart.data.datasets[0].data.splice(0,3);
    chart.data.datasets[0].data.push(books['Potop'].amount);
    chart.data.datasets[0].data.push(books['Lalka'].amount);
    chart.data.datasets[0].data.push(books['Pan Tadeusz'].amount);
    chart.update();
}
updateChart(wykres);
initActions();
