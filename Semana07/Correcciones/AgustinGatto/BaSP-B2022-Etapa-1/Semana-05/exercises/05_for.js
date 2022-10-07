console.log('EXCERCISE 5: FOR');
//a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando
// un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log('Execise 5.a: ');
var myArrayFor = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
for (var i = 0; i < 5; i++){
    alert(myArrayFor[i]);
}

//b. Al array anterior convertir la primera letra de cada palabra
// en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('Execise 5.b: ');
for (var b = 0; b < myArrayFor.length; b++){
    var oneletter = (myArrayFor[b].substring(1,0)).toUpperCase();
    var oneletterB = (myArrayFor[b].substring(1)).toLowerCase();
    myArrayFor[b] = oneletter + oneletterB;
    alert(myArrayFor[b]);
}

//c. Crear una variable llamada “sentence” que tenga un string vacío,
//luego al array del punto a) recorrerlo con un bucle for para ir guardando
//cada palabra dentro de la variable sentence.
//Al final mostrar una única alerta con la cadena completa.
console.log('Execise 5.c: ');
var sentence = '';
for (var r = 0; r < 5; r++){
    sentence = sentence + myArrayFor[r] + ' ';
    alert(sentence + " C");
}


//d. Crear una array vacío y con un bucle for de 10 repeticiones.
//Llenar el array con el número de la repetición, es decir que al final de la ejecución
//del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
//Mostrar por la consola del navegador el array final (utilizar console.log).
console.log('Exercise 5.d: ')
var myArrayEmpty = [];
    for (var e = 0; e < 10; e++){
    var myNewArray = myArrayEmpty.push([e]);
    console.log(myNewArray);
    };

