console.log('EXERCISE 1: VARIABLES AND OPERATORS');
// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor 
//de la suma de ambos números en una 3er variable.
console.log('Exercise 1.a: ');
var num1 = 6;
var num2 = 14;
var result = num1 + num2;
console.log('Total: ' + result);


// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.//
console.log('Exercise 1.b: ');
var name1 = 'My name is Agustin, '
var lastName = 'my last name is Gatto'
var myString = name1 + lastName;
console.log(myString);

// c. Crear dos variables de tipo String y sumar el largo de cada variable
// (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
console.log('Exercise 1.c: ');
var myVar1 = 'Hello';
var myVar2 = 'Agustin';
var result2 = myVar1.length + myVar2.length;
console.log('The length of both strings is: ' + result2);