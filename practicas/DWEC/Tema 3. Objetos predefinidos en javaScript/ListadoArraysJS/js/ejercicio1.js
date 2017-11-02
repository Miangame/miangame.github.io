/**
 * Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let lista = document.getElementById("elementosArray");
    let array = [0, 1, 2, 3, 4];

    let aniadeElemento = function (elemento) {
        let nodo = document.createElement("li");
        nodo.appendChild(document.createTextNode(elemento));
        lista.appendChild(nodo);
    }

    let mostrarArray = function (elemento, indice, array) {
        aniadeElemento("Array[" + indice + "] = " + elemento);
    }

    array.forEach(mostrarArray);
}