/**
 * Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");

    let crearArray = function (dimension) {
        let array = [];
        for (let i = 0; i < dimension; i++) {
            array.push(i);
        }
        parrafo.innerHTML = "Array = [" + array + "]";
    }

    crearArray(5);

}