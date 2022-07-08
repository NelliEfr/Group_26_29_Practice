let num1 = Math.abs(5); // 5
let num2 = Math.abs(-5); // 5

let num3 = Math.max(10, 500, -120, 7); // 500
let num4 = Math.min(10, 500, -120, 7); // -120

let num5 = Math.ceil(4.33); // 5 - округляет вверх
let num6 = Math.floor(4.33); // 4 - округляет вниз
let num7 = Math.round(4.33); // 4 - округляет по правилам математики
let num8 = Math.round(4.73); // 5

let num9 = Math.pow(2, 3); // 8
let num9_1 = Math.sqrt(16);//4

let num10 = Math.random(); // случайное дробное число (от 0 до 1)
let num11 = num10 * 10; //умножаем на 10
let num12 = Math.round(num11); //округляем до целого числа

let random_num = Math.round(Math.random() * 10); // от 0 до 10
let random_num1 = Math.floor(Math.random() * 11); // от 0 до 10

let random_num2 = Math.round(Math.random() * 5); // от 0 до 5 (интервал)
let random_num3 = Math.round(Math.random() * 5 + 1); // от 1 до 6 (сдвигаем интервал на 1)

let a = Math.random() // 0-1
let b = a * 5; //
let c = b + 1;
let d = Math.round(c);

let str = 'hello';
// console.log(str.length); //5
// console.log(str.toUpperCase()); 'HELLO'

let num13 = Math.random();
let num13_fixed = +num13.toFixed(3); // .toFixed() возвращает строку

console.log(num13);
console.log(typeof(num13));

console.log(num13_fixed);
console.log(typeof(num13_fixed));



