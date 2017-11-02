/**
 * Indica la diferencia entre los siguientes métodos, y demuestra su uso 
 * con algunos arrays: Array.prototype.forEach(), Array.prototype.every(), 
 * Array.prototype.some() y Array.prototype.filter().
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a"];

    let parrafo = document.getElementById("parrafo");

    let cadena = "";

    cadena += "<h3>forEach:</h3>";
    cadena += "[";
    array.forEach(function (numero) {
        cadena += numero;

        if (numero !== array[array.length - 1]) {
            cadena += ", ";
        }
    });
    cadena += "]";

    cadena += "<h3>every:</h3>";
    cadena += "¿Son todos los elementos un número?: ";
    cadena += array.every(function (numero) {
        return !isNaN(numero);
    });

    cadena += "<h3>some:</h3>";
    cadena += "¿Hay algún elemento String?: ";
    cadena += array.some(function (numero) {
        return isNaN(numero);
    });

    cadena += "<h3>filter:</h3>";
    cadena += "Números menores de 4: ";
    cadena += "[";
    cadena += array.filter(function (numero) {
        return numero < 4;
    });
    cadena += "]";


    parrafo.innerHTML = cadena;
}