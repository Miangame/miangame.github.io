/**
 * Crea el método incrementaDias() que incremente/decremente los días indicados. 
 * Admitirá como primer argumento un entero positivo/negativo que reperesente el número de días. 
 * El resto de argumentos representarán una fecha, similar a los argumentos del constructor Date(). 
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let fecha = document.getElementById("entradaFecha");
    let boton = document.getElementById("boton");
    let parrafo = document.getElementById("parrafo");

    let arrayElementosFecha;

    let incrementaDias = function (numero, dia, mes, anio) {
        if (!isNaN(Date.parse(mes / dia / anio))) {
            return;
        }
        return new Date(anio, (mes - 1), (dia + numero), 0, 0, 0, 0);
    }

    let mostrar = function () {
        arrayElementosFecha = fecha.value.split(",");
        parrafo.innerHTML = incrementaDias(parseInt(arrayElementosFecha[0]), parseInt(arrayElementosFecha[1]), arrayElementosFecha[2], arrayElementosFecha[3]);
    }

    boton.onclick = mostrar;
}