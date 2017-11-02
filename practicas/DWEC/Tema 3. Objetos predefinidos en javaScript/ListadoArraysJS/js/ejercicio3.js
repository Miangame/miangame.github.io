/**
 * Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let coches = ["renault", "mercedes", "seat", "fiat"];
    let cadena = new String("Hola a todos");

    let parrafo = document.getElementById("parrafo");

    parrafo.innerHTML = "¿Es 'coches' un array? = " + Array.isArray(coches) +
        "<br>¿Es 'cadena' un array? = " + Array.isArray(cadena);
}