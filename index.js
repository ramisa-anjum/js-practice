var name,age,num;
name='ramisa anjum'
age=18
document.write(name +'<br>');
document.write(age+'<br>');

num=20
num= toString(num)
console.log(typeof(num));
console.log(typeof(name));
num='20'
num=parseInt(num);
console.log(typeof(num));
num=6.5967
console.log(num.toFixed());
console.log(num.toFixed(3));
console.log(num.toPrecision(3));


var firstName='Ramisa';
var lastName=' anjum';
fullName=firstName + lastName
document.write(fullName+'<br>');
document.write('my name is '+fullName+'<br>');


document.write(firstName.length+'<br>');
document.write(firstName.charAt(4)+'<br>');
document.write(lastName.toUpperCase()+'<br>');


var text1, text2;
text1='BANGLADESH';
text2=" is a beautiful country"
document.write(text1.concat(text2)+'<br>');


document.write(text1.slice(0,3)+'<br>');
document.write(text1.slice(2,5)+'<br>');
var x=3;
x += 2 
console.log(x);


var number1,number2,result;
number1=parseInt(prompt('enter your value:'));
number2=parseInt(prompt('enter your value:'));
result=number1+number2
document.write('Addition = '+ result +'<br/>');
result=number1-number2
document.write('Subtraction = '+ result +'<br/>');
result=number1*number2
document.write('Multiplication = '+ result +'<br/>');
result=number1/number2
document.write('Division = '+ result +'<br/>');

result=number1+number2
document.write(number1+'+'+number2+'='+result+'<br/>');

var base,height,area;
base=parseInt(prompt('enter your base:'));
height=parseInt(prompt('enter your height:'));
area=base*height
document.write('Area ='+area+'<br/>');

var frn,cels;
frn=parseFloat(prompt('enter fahrenheit:'));
cels=(frn-32)*(5/9);
document.write('celsius = '+cels);



