console.log('EXERCISE 6: FUNCTIONS');
//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
//Ejecutar la función y guardar el resultado en una variable,
//mostrando el valor de dicha variable en la consola del navegador.
console.log('Exercise 6.a: ');
function suma(param1, param2){
    return param1 + param2;
};
var sumaFunction = suma(5, 9);
console.log(sumaFunction);

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
//de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar
//el valor NaN como resultado.
console.log('Exercise 6.b: ');
function suma(param1, param2){
    if (typeof(param1) != 'number'){
        alert('One of the parameters has an error');
        return 'NaN';
    } else if(typeof(param2) != 'number'){
        alert('One of the parameters has an error');
        return 'NaN';
    } else{
        return param1 + param2;
};
};
var sumaVerification = suma(5, 'hola');
console.log(sumaVerification);

//c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva
//verdadero si es un número entero.
console.log('Exercise 6.c: ');
function validate(numer1, numer2){
    if(Number.isInteger(numer1 && numer2)){
        return true;
    } else{
        return false;
    };
};
var myVarOneF = validate(3, 6);
console.log(myVarOneF);

//d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
//y que valide que los números sean enteros.
//En caso que haya decimales mostrar un alerta con el error
//y retornar el número convertido a entero (redondeado).
console.log('Exercise 6.d: ');
function suma(param1, param2){
    if(typeof(param1) != 'number'){
        alert('One of the parameters has an error');
        return console.log('NaN');
    } else if(typeof(param2) != 'number'){
        alert('One of the parameters has an error');
        return console.log('NaN');
    } else if(validate(param1, param2)){
         return console.log(param1 + param2);
    } else{
        alert('There are decimal numbers');
        console.log(Math.round(param1 + param2));
};
};
 suma(6, 10.7);

 //e. Convertir la validación del ejercicio 6d) en una función separada
//y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('Exercise 6.e: ');
function validateTotal(param1, param2){
    if(typeof(param1) != 'number'){
        alert('One of the parameters has an error');
        return console.log('NaN');
    } else if(typeof(param2) != 'number'){
        alert('One of the parameters has an error');
        return console.log('NaN');
    } else if(validate(param1, param2)){
         return console.log(param1 + param2);
    } else{
        alert('There are decimal numbers');
        console.log(Math.round(param1 + param2));
};
};

function suma2(param1, param2){
    if(validateTotal(param1, param2)){
        return param1 + param2;
    } else{
        console.log("Error E");
    };
};
console.log(suma2(5, "hola"));