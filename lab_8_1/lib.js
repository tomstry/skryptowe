const button = document.getElementById('submit');
const txt = document.getElementById('books');
let txtval = '';
button.addEventListener('click', function(){
    txtval = txt.value;
    console.log(txtval);
});

