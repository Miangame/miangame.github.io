/**
 * Crea una función que elimine todos los undefined de un array.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");
    let cadena = "";

    let borrarUndefined = function (array) {

        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] == 'undefined') {
                array.splice(array[i], 1);
                i--;
            }
        }
    }

    let crearArray = function () {
        let array = [];
        array.length = 5;
        array.push("Hola");
        array.push(4);
        array.push(true);
        return array;
    }


    let array = crearArray();

    cadena += "Array inicial:<br>";
    cadena += array;

    borrarUndefined(array);
    cadena += "<br><br>Array final:<br>";
    cadena += array;

    parrafo.innerHTML = cadena;
}