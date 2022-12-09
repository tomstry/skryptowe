'use strict';

let books = {
  'Potop': {
    author: 'Henryk Sienkiewicz',
    title: 'Potop',
    amount: 1,
    url: 'ads',
  },
  'Lalka': {
    author: 'Bolesław Prus',
    title: 'Lalka',
    amount: 3,
    url: 'asdd',
  },
  'Pan Tadeusz': {
    title: 'Pan Tadeusz',
    author: 'Adam Mickiewicz',
    amount: 5,
    url: 'dsad',
  },
};

let readers = [];

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
  }
  return cmdParse;
}

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
}

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
    });
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
    }
  }
}

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
        console.log('nie można zwrócić więcej książek niż wypożyczono');
      }else{
        readers[index].books[bookIndex].amount -= amountBooks;
        books[bookName].amount += amountBooks;
        if(readers[index].books[bookIndex].amount == 0){
          readers[index].books.splice(bookIndex,1);
        }
      }
    }
  }
}

initActions();