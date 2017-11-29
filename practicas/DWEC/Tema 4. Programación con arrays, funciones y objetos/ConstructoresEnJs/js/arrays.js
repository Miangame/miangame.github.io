/**
 * Extender el objeto Array para que permita añadir nuevos elementos al final del array.
 * Incluir la opción de controlar si se permiten elementos duplicados o no.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    Array.prototype.anadir = function (numero, bandera = true) {
        let repetido = false;

        if (!bandera) {
            this.forEach(element => {
                if (element === numero) {
                    repetido = true;
                }
            });
        }

        if (!repetido) {
            this.push(numero);
        }
    }

    let array = [0, 1, 2];

    let parrafo = document.getElementById("parrafo");
    let cadena = "";
    cadena += "Array = [" + array + "]<br><br>";

    array.anadir(3);

    cadena += "Si hacemos array.anadir(3); <br><br> Array = [" + array + "]<br><br>";

    array.anadir(3);

    cadena += "Si hacemos otra vez array.anadir(3); <br><br> Array = [" + array + "]<br><br>Podemos añadir elementos repetidos.<br><br>";

    array.anadir(3, false);

    cadena += "Si hacemos array.anadir(3, false); <br><br> Array = [" + array + "]<br><br>Ya no permite elementos duplicados";

    parrafo.innerHTML = cadena;
}