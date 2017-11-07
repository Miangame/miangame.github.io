/**
 * Indica la utilidad de Date.now();
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let d = Date.now();

    let parrafo = document.createElement("p");
    let texto = document.createTextNode("Date.now() -> " + d);
    parrafo.appendChild(texto);

    document.body.appendChild(parrafo);
}