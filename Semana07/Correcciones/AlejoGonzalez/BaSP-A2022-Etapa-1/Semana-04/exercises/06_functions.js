console.log('--EXERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
// el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a');

function suma (num1, num2) {
    return num1 + num2;
};
var result = suma(5,10);

console.log(result);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
// de no ser un número, mostrar una alerta aclarando que uno de los 
// parámetros tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b');

function suma (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('One of the parameters is NaN');
        return NaN;
    }
    return num1 + num2;
};
var result2 = suma(10,16);
var resultNaN = suma('sfa', 10);

console.log(result2);
console.log(resultNaN);

// c. Aparte, crear una función validate Integer que reciba un 
// número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c');

function validateInteger (num) {
    if (Number.isInteger(num)) {
        return true;
    } else {
        return false;
    }
};
var result3 = validateInteger(15);
var result4 = validateInteger(15.12);

console.log(result3);
console.log(result4);

// d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta
// con el error y retornar el número convertido a entero (redondeado).

console.log('-Exercise 6.d');

function suma (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('One of the parameters is NaN');
        return NaN;
    }
    if (!validateInteger(num1)) {
        alert('This number is not integer');
        return Math.floor(num1);
    }
    if (!validateInteger(num2)) {
        alert('This number is not integer');
        return Math.round(num2);
    }
    return num1 + num2;
};

console.log(suma(10,5));
console.log(suma(10,5.60));
console.log(suma(10.10,5));

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla 
// dentro de la función suma probando que todo siga funcionando igual.

console.log('-Exercise 6.e');

function validateInteger2 (num1, num2) {
    if (!validateInteger(num1)) {
        alert('This number is not integer');
        return Math.round(num1);
    } else if (!validateInteger(num2)) {
        alert('This number is not integer');
        return Math.round(num2);
    } else {
        return false;
    }
};

function suma (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert('One of the parameters is NaN');
        return NaN;
    }
    var isInteger = validateInteger2(num1,num2)
    if (isInteger) {
        return isInteger;
    } else {
        return num1 + num2;
    }
};

console.log(suma(10,5));
console.log(suma(10.5,5));


