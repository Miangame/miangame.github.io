/**
 * Crea  una función que devuelva un array con cada uno de los argumentos.
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

    parrafo.innerHTML = creaArrayConArgumentos("argumento1", "argumento2", "argumento3");

}