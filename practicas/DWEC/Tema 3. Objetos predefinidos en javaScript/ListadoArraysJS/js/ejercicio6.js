/**
 * Crea  una función que devuelva un array con cada uno de los argumentos. 
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");

    let creaArrayConArgumentos = function () {
        let arrayConArgumentos = [];
        for (let i = 0; i < arguments.length; i++)
            arrayConArgumentos.push(arguments[i]);
        return arrayConArgumentos;

    }

    parrafo.innerHTML = creaArrayConArgumentos("argumento1", "argumento2", "argumento3", ["elemento1", "elemento2", "elemento3"]);

}