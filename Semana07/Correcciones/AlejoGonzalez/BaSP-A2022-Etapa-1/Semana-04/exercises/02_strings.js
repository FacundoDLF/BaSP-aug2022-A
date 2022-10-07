console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir
// todo el texto en mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a');

var stringToMayus = 'abcdefghijk';
var stringMayus = stringToMayus.toUpperCase();

console.log(stringMayus);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
// string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b');

var stringToSub = 'abcdefghijk';
var stringSub = stringToSub.substring(0,5);

console.log(stringSub);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
// 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c');

var stringToSub2 = 'abcdefghijk';
var stringSub2 = stringToSub2.substring(stringToSub2.length - 3,stringToSub2.length);

console.log(stringSub2);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
// mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
// (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.d');

var string1 = 'abcdefghijk';
var string2 = string1.substring(0,1).toUpperCase() + string1.substring(1,string1.length)

console.log(string2);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
// del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e');

var string3 = 'abcdef ghijk';
var index = string3.indexOf(' ');

console.log(index);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
// palabras en mayúscula y las demás letras en minúscula
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f');

var string4 = 'abcdefghijk lmnopqrstu';
var index2 = string4.indexOf(' ');
var string5 = string4.substring(0,1).toUpperCase() + string4.substring(1,index2 - 1) + string4.substring(index2, index2 + 1)
+ string4.substring(index2 + 1, string4.length);

console.log(string5);