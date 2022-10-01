console.log('-----Exercise 01: VARIABLES AND OPERATORS.-----');

/* a- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la 
    suma de ambos números en una 3er variable. */

console.log('-----Excercise 01-a:-----');

var a = 13;
var b = 5;
var c = a + b;

console.log('Addition result: ' + c);

/* b- Crear dos variables de tipo String y concatenarlas 
    guardando el resultado en una 3er variable. */

console.log('-----Excercise 01-b:-----');

var part1 = 'This is ';
var part2 = 'a string.';
var text = part1 + part2;

console.log('Concatenation: ' + text);

/* c- Crear dos variables de tipo String y sumar el largo de cada variable 
    (cantidad de letras del string) guardando el resultado de la suma en una 3er variable 
    (utilizar length). */

console.log('-----Excercise 01-c:-----');

var lengthVar1 = 'length';
var lenghtVar2 = 'variable';
var lengthAdditionVar = lengthVar1.length + lenghtVar2.length;

console.log('Addition of the lengths: ' + lengthAdditionVar);