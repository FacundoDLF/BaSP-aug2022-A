console.log('-----Exercise 03: ARRAYS.-----');

/* a- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola 
    los meses 5 y 11 (utilizar console.log). */

console.log('-----Excercise 03-a:-----');

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

console.log('5th month: ' + months[4]);
console.log('11th month: ' + months[10]);

/* b- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log('-----Excercise 03-b:-----');

months.sort();
console.log('Alphabeticly sorted array: ' + months);

/* c- Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('-----Excercise 03-c:-----');

months.push('Mes 13');
months.unshift('Mes 0');

console.log('New elements added: ' + months);

/* d- Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log('-----Excercise 03-d:-----');

months.pop('Mes 13');
months.shift('Mes 0');

console.log('New elements deleted: ' + months);

/* e- Invertir el orden del array (utilizar reverse). */

console.log('-----Excercise 03-e:-----');

console.log('Inverted array: ' + months.reverse());

/* g- Unir todos los elementos del array en un único string donde 
    cada mes este separado por un guión - (utilizar join). */

console.log('-----Excercise 03-g:-----');

var monthsString = months.join('-')

console.log(monthsString);

/* f- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

    console.log('-----Excercise 03-f:-----');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var mayToNovemberMonths = months.slice(4 , 11);

console.log('Months from may to november: ' + mayToNovemberMonths);