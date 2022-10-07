console.log('-----Exercise 02: STRINGS.-----');

/* a- Crear una variable de tipo string con al menos 10 caracteres 
    y convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log('-----Excercise 02-a:-----');

var string1 = 'This is an excerise';
string1 = string1.toUpperCase();

console.log('UpperCase string: ' + string1);

/* b- Crear una variable de tipo string con al menos 10 caracteres y generar un 
    nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable 
    (utilizar substring). */

console.log('-----Excercise 02-b:-----');

var string2 = 'Exercice 02, part b';
var firstFive = string2.substring(0 , 5);

console.log('First five caracters: ' + firstFive);

/* c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
    string con los últimos 3 caracteres guardando el resultado en una nueva variable 
    (utilizar substring). */

console.log('-----Excercise 02-c:-----');

var string3 = 'Exercise-02, part-c';
var lastThree = string3.substring(string3.length - 3 , string3.length);

console.log('Last three characters: ' + lastThree);

/* d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
    string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en 
    una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('-----Excercise 02-d:-----');

var string4 = 'exercise-02, PART-D';
var capitalizedString = 
    string4.substring(0 , 1).toUpperCase() + 
    string4.substring(1 , string4.length).toLowerCase();

console.log('Capitalized string: ' + capitalizedString);

/* e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
    Encontrar la posición del primer espacio en blanco y guardarla en una variable 
    (utilizar indexOf). */

console.log('-----Excercise 02-e:-----');

var string5 = 'Exercise 02, part e';
var firstBlankSpacePosition = string5.indexOf(' ', 0);

console.log('Position of first blank space: ' + firstBlankSpacePosition);

/* f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
    espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un 
    nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras 
    en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('-----Excercise 02-e:-----');

var string6 = 'exercise-number-2 PART-6-OF-6';

var capitalizedString2 = 
    string6.substring(0 , 1).toUpperCase() + 
    string6.substring(1 , string6.indexOf(' ')).toLowerCase() + ' ' + 
    string6.substring(string6.indexOf(' ') + 1, string6.indexOf(' ') + 2).toUpperCase() +
    string6.substring(string6.indexOf(' ') + 2 , string6.length).toLocaleLowerCase();

console.log('Capitalized strings: ' + capitalizedString2);