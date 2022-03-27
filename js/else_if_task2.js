//1
/*const x = 2;
const y = 5;
x > y ? console.log('х больше чем у') : console.log('х не больше чем у');*/

//2
/*let num = +prompt('Enter any number: ');
 if (num === 0){
    alert('Error: you must enter a number')
}
else if (isNaN(num)){
    alert('Error: you do not enter a number')
}
else if (num %2 === 0) {
    alert('Number ' + num + ' is even')
}
else {
    alert('Number '+ num + ' is odd')
}*/

//3
/*let num = +prompt('Введите число');
let pol;
if (num > 0){
    pol = 'положительное'
}
else if (num<0) {
    pol = 'отрицательное'
}
num = Math.abs(num);
num = String(num);
switch (num.length){
    case 1: numLength = 'однозначное'
        break;
    case 2: numLength = 'двузначное'
        break;
    case 3: numLength = 'трёхзначное'
        break;
    default: numLength = 'более 3-х знаков'
        break;
}
alert('Число ' + num + ' ' + numLength+ ' ' + pol)*/


//4
/*let a = +prompt('Введите первое число: ');
let b = +prompt('Введите второе число: ');
let c = +prompt('Введите третье число: ');

if (a>b && a>c){
    alert('Самое большое число: '+ a)
}
else if (b>a && b>c){
    alert('Самое большое число: '+ b)
}
else {
    alert('Самое большое число: '+ c)
}*/

//5
let a = +prompt('Введите первую сторону треугольника: ');
let b = +prompt('Введите вторую сторону треугольника: ');
let c = +prompt('Введите третью сторону треугольника: ');

if (a+b <= c || a+c <= b || c+b <= a){
    alert('Такой треугольник не может существовать')
}
else {
    alert('Поздравляем! Вы собрали треугольник.')
}