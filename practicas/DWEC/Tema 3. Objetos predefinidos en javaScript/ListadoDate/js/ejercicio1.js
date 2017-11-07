/**
 * ¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let d = new Date();
    let d2 = new Date(Date.now());
    let d3 = new Date("11/05/2017");
    let d4 = new Date(2017, 11-1, 5, 0, 0, 0, 0);

    let lista = document.createElement("ul");
    let elemento;
    let texto;

    elemento = document.createElement("li");
    texto = document.createTextNode("Con new Date() -> " + d);
    elemento.appendChild(texto);
    lista.appendChild(elemento);
    
    elemento = document.createElement("li");
    texto = document.createTextNode("Con new Date(1509870037601) -> " + d2);
    elemento.appendChild(texto);
    lista.appendChild(elemento);

    elemento = document.createElement("li");
    texto = document.createTextNode("Con new Date('11/05/2017') -> " + d3);
    elemento.appendChild(texto);
    lista.appendChild(elemento);

    elemento = document.createElement("li");
    texto = document.createTextNode("Con new Date(2017, 11, 5, 0, 0, 0, 0) -> " + d4);
    elemento.appendChild(texto);
    lista.appendChild(elemento);

    document.body.appendChild(lista);
}