/**
 * Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
 * Introduce 10 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
 * Eliminar 10 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");
    let cadena = "";

    //Creamos el array
    let array = [];

    //Declaramos las variables para controlar la eficiencia
    let tiempo1;
    let tiempo2;
    let tiempoPush;
    let tiempoUnshift;
    let tiempoPop;
    let tiempoShift;

    /*-----push()-----*/
    tiempo1 = performance.now();
    for (let i = 0; i < 10; i++) {
        array.push(i);
    }
    tiempo2 = performance.now();

    tiempoPush = tiempo2 - tiempo1;
    cadena += "<h4>Eficiencia del push(): </h4>" + tiempoPush;

    /*-----unshift()-----*/
    array = []
    tiempo1 = performance.now();
    for (let i = 0; i < 10; i++) {
        array.unshift(i);
    }
    tiempo2 = performance.now();

    tiempoUnshift = tiempo2 - tiempo1;
    cadena += "<h4>Eficiencia del unshift(): </h4>" + tiempoUnshift;

    if (tiempoPush < tiempoUnshift) {
        cadena += "<h3>push() es más eficiente que unshift()</h3>";
    } else if (tiempoPush > tiempoUnshift) {
        cadena += "<h3>unshift() es más eficiente que push()</h3>";
    } else {
        cadena += "<h3>Ambos son iguales de eficientes</h3>";
    }

    /*-----pop()-----*/
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    tiempo1 = performance.now();
    for (let i = 0; i < 10; i++) {
        array.pop();
    }
    tiempo2 = performance.now();

    tiempoPop = tiempo2 - tiempo1;
    cadena += "<h4>Eficiencia del pop(): </h4>" + tiempoPop;

    /*-----shift()-----*/
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    tiempo1 = performance.now();
    for (let i = 0; i < 10; i++) {
        array.shift();
    }
    tiempo2 = performance.now();

    tiempoShift = tiempo2 - tiempo1;
    cadena += "<h4>Eficiencia del shift(): </h4>" + tiempoShift;

    if (tiempoPop < tiempoShift) {
        cadena += "<h3>pop() es más eficiente que shift()</h3>";
    } else if (tiempoPop > tiempoShift) {
        cadena += "<h3>shift() es más eficiente que pop()</h3>";
    } else {
        cadena += "<h3>Ambos son iguales de eficientes</h3>";
    }

    /*------El más eficiente de todos------*/
    if (tiempoPush < tiempoShift && tiempoPush < tiempoUnshift && tiempoPush < tiempoPop)
        cadena += "<h3>push() es el más eficiente de todos</h3>";
    else if (tiempoShift < tiempoPush && tiempoShift < tiempoUnshift && tiempoShift < tiempoPop)
        cadena += "<h3>shift() es el más eficiente de todos</h3>";
    else if (tiempoPop < tiempoPush && tiempoPop < tiempoUnshift && tiempoPop < tiempoShift)
        cadena += "<h3>pop() es el más eficiente de todos</h3>";
    else
        cadena += "<h3>unshift() es el más eficiente de todos</h3>";

    parrafo.innerHTML = cadena;
}