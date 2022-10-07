console.log('EXERCISE 2: STRINGS');
//a. Crear una variable de tipo string con al menos 10 caracteres y
// convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('Exercise 2.a: ')
var myVarUp = 'This is a string';
myVarUp = myVarUp.toUpperCase();
console.log(myVarUp);

//b. Crear una variable de tipo string con al menos 10 caracteres y
// generar un nuevo string con los primeros 5 caracteres guardando el
// resultado en una nueva variable (utilizar substring).
console.log('Exercise 2.b: ')
var randomVar = 'abcdefghij';
var subRandomVar = randomVar.substring(0,5);
console.log(subRandomVar);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
// últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('Exercise 2.c: ')
var sectionC = 'abcdefghij';
var subSectionC = sectionC.substring(7,10);
console.log(subSectionC);

// d.Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con la primera letra en mayúscula y las demás en minúscula.
// Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('Exercise 2.d: ')
var sectionD = 'abcdefghij';
var subSectionD = sectionD.substring(0,1).toUpperCase(0);
var subStringD = sectionD.substring(1,9).toLowerCase();
console.log(subSectionD + subStringD);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('Exercise 2.e: ')
var spaceFree = 'abcde fghij';
var spaceFreeE = spaceFree.indexOf(' ');
console.log(spaceFreeE);


//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera
//letra de ambas palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('Exercise 2.f: ')
var sectionF = 'agustin gatto';
var subSectionF = sectionF.substring(0,1).toUpperCase(0);
var subStringF = sectionF.substring(1,8).toLowerCase();

var sectionR = sectionF.substring(8,9).toUpperCase(8);
var subStringR = sectionF.substring(9,13).toLowerCase();
var space = sectionF.indexOf(' ');
console.log(subSectionF + subStringF + sectionR + subStringR + ' the index of the space is: ' + space);

