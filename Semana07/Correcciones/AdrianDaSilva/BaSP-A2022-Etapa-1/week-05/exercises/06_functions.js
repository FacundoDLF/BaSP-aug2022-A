console.log('-----Exercise 06: FUNCTIONS.-----');

/* a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
    Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
    variable en la consola del navegador. */

console.log('-----Excercise 06-a:-----');

function additionFunction (p1, p2) {
    return p1 + p2;
}

var result = additionFunction (100*Math.random() , 100*Math.random());
console.log('The result of the addition function is: ' + result);

/* b- A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, 
    mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

console.log('-----Excercise 06-b:-----');

function additionFunction2 (p3, p4) {
    if ( (isNaN(p3)) || (isNaN(p4)) ) {
        alert('There is an error in one or more parameters.');
        return NaN;
    } else {
        return p3 + p4;
    }
};

additionFunction2 ('string', 25);
console.log(additionFunction2 (true , 12));
console.log(additionFunction2 (12 , 24));

/* c- Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log('-----Excercise 06-c:-----');

function validateInteger (p5) {
    return Number.isInteger(p5);
}
var a = 10*Math.random().toFixed(2);
var result = validateInteger (a);
console.log(a + ' is integer?: ' + result);

/* d- A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */

console.log('-----Excercise 06-d:-----');

function additionFunction2 (p3 , p4) {
    if ( (isNaN(p3)) || (isNaN(p4)) ) {
        alert('There is an error in one or more parameters.');
        return console.log(NaN);
    } else {
        if ( validateInteger(p3) == false ) {
            alert('There ir a decimal input');
            if ( validateInteger(p4) == false ) {
                return Math.round(p3) + Math.round(p4);
            } else {
                return Math.round(p3) + p4;
            }
        } else {
            if (validateInteger(p4) == false) {
                alert('There ir a decimal input');
                return Math.round(p4) + p3;
            } else {
                return p3 + p4;
            }
        }
    }
};

console.log(additionFunction2(8.3 , 5));
console.log(additionFunction2(8 , 5.4));
console.log(additionFunction2(8.3 , 5.4));
console.log(additionFunction2(8 , 5));

/* e- Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */

console.log('-----Excercise 06-e:-----');

function validationInteger2 (p3 , p4) {
    if ( validateInteger(p3) == false ) {
        alert('There ir a decimal input');
        if ( validateInteger(p4) == false ) {
            return Math.round(p3) + Math.round(p4);
        } else {
            return Math.round(p3) + p4;
        }
    } else {
        if (validateInteger(p4) == false) {
            alert('There ir a decimal input');
            return Math.round(p4) + p3;
        } else {
            return p3 + p4;
        }
    }
};

function additionFunction (p1, p2) {
    validationInteger2 (p1,p2);
};

console.log(additionFunction (3.4 , 5));
console.log(additionFunction (3 , 5.7));
console.log(additionFunction (3.4 , 5.7));
console.log(additionFunction (3 , 5));