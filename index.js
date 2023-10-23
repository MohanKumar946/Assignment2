function reverse() {
    var value = document.getElementById('textInput').value;
    console.log('Calue check', value);
    var len = value.length;
    var rev = '';
    for (var i=len-1;i>=0;i--) {
        rev += value[i];
    }
    document.getElementById('reversedString').textContent = rev;
}

function palindrome () {

    var num = document.getElementById('palinInput').value;
    console.log('input check', num);
    var real = num;
    var r=0,d=0;
    while(num>0) {
        d = num%10;
        r = r * 10 + d;
        num = parseInt(num/10);
    }

    if( r == real) {
        document.getElementById('palinCheck').textContent = 'The number entered is a Palindrome'
    }
    else {
        document.getElementById('palinCheck').textContent = 'The number entered is  NOT a Palindrome'
    }
}

function billing (subtotal, tip) {

    var subtotal = parseInt(document.getElementById('subtotal').value);
    var tip = parseInt(document.getElementById('tip').value);
    var total =0, tipValue;
    tipValue = (subtotal * tip) / 100;
    total = subtotal + tipValue;
    document.getElementById('total').textContent = `Total bill to be paid is $${total}`
}

