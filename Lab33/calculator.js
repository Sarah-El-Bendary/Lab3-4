const display= document.getElementById('display');
document.getElementById('AC').addEventListener('click',function() {display.value = '';});
document.getElementById('one').addEventListener('click', function() {display.value += '1';});
document.getElementById('two').addEventListener('click', function() {display.value += '2';});
document.getElementById('three').addEventListener('click', function() {display.value += '3';});
document.getElementById('four').addEventListener('click', function() {display.value += '4';});
document.getElementById('five').addEventListener('click', function() {display.value += '5';});
document.getElementById('six').addEventListener('click', function() {display.value += '6';});
document.getElementById('seven').addEventListener('click', function() {display.value += '7';});
document.getElementById('eight').addEventListener('click', function() {display.value += '8';});
document.getElementById('nine').addEventListener('click', function() {display.value += '9';});
document.getElementById('zero').addEventListener('click', function() {display.value += '0';});
document.getElementById('00').addEventListener('click', function() {display.value += '00';});
document.getElementById('dot').addEventListener('click', function() {display.value += '.';});

let num1;
let op;
document.getElementById('plus').addEventListener('click', function(){
    num1=Number(display.value);
    op='+';
    display.value='';
})
document.getElementById('neg').addEventListener('click', function(){
    num1=Number(display.value);
    op='-';
    display.value='';
})
document.getElementById('times').addEventListener('click', function() {
    num1 = Number(display.value);
    op = '*';
    display.value = '';
});

document.getElementById('divide').addEventListener('click', function() {
    num1 = Number(display.value);
    op = '/';
    display.value = '';
});
document.getElementById('res').addEventListener('click', function(){
    let num2=Number(display.value);
    if(op=='+'){
        display.value= num1+num2;
    }
    else if (op == '-')
        display.value = num1 - num2;
    else if (op == '*')
        display.value = num1 * num2;
    else if (op == '/')
        display.value = num1 / num2;
});


