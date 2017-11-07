/**
 * Implementa el método esFecha() que devuelva si el argumento es una fecha o no.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let fecha = document.getElementById("entradaFecha");
    let boton = document.getElementById("boton");

    let parrafo = document.getElementById("parrafo");

    let esFecha = function (argumento) {
        return !isNaN(Date.parse(argumento));
    }

    let mostrar = function () {
        parrafo.innerHTML = fecha.value + " -> " + esFecha(fecha.value);
    }

    boton.onclick = mostrar;
}