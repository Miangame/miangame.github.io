/**
 * Indica el formato del parámetro cadena del método Date.parse().
 * 
 * @author Miguel Ángel Gavilán Merino
 */

 {
     let d = Date.parse("November 5, 2017");

     let parrafo = document.createElement("p");
     let texto = document.createTextNode("Date.parse('November 5, 2017'); -> " + d);
     parrafo.appendChild(texto);
     document.body.appendChild(parrafo);
 }