/**
 * Extender la clase String para que permita truncar una cadena de texto a un tamaño indicado como parámetro. 
 * Modificar la función anterior para que permita definir el texto que indica que la cadena se ha truncado.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    String.prototype.truncar = function (numero, cadena = "") {
        return this.substr(0, numero) + cadena;
    }

    let cadenaEntrada = "Hola mundo";

    let parrafo = document.getElementById("parrafo");
    let cadena = "";
    cadena += "cadena = \"" + cadenaEntrada + "\"<br><br>";

    cadenaEntrada = cadenaEntrada.truncar(6);

    cadena += "Si hacemos cadena.truncar(6); <br><br> cadena = \"" + cadenaEntrada + "\"<br><br>";

    cadenaEntrada = cadenaEntrada.truncar(6, "...");

    cadena += "Si hacemos cadena.truncar(6, \"...\"); <br><br> cadena = \"" + cadenaEntrada + "\"<br><br>";

    parrafo.innerHTML = cadena;
}