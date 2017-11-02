/**
 * Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> y <li> han de 
 * crearse mediante los métodos de document. Explica en cada uno la diferencia con respecto a los demás. 
 * window.outerHeight
 * window.innerHeight
 * window.screen.availHeight
 * window.screen.height
 * window.document.clientHeight
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let listaOrdenada = document.createElement("ol");
    let elemento;
    let texto;

    elemento = document.createElement("li");
    texto = document.createTextNode("window.outerHeight: Muestra la altura de la página completa = " + window.outerHeight);
    elemento.appendChild(texto);
    listaOrdenada.appendChild(elemento);

    elemento = document.createElement("li");
    texto = document.createTextNode("window.innerHeight: Muestra la altura del documento = " + window.innerHeight);
    elemento.appendChild(texto);
    listaOrdenada.appendChild(elemento);

    elemento = document.createElement("li");
    texto = document.createTextNode("window.screen.availHeight: Muestra la altura de la pantalla del usuario menos las interfaces como las barras superior e inferior = " + window.screen.availHeight);
    elemento.appendChild(texto);
    listaOrdenada.appendChild(elemento);

    elemento = document.createElement("li");
    texto = document.createTextNode("window.screen.height: Muestra la altura total de la pantalla del usuario = " + window.screen.height);
    elemento.appendChild(texto);
    listaOrdenada.appendChild(elemento);

    elemento = document.createElement("li");
    texto = document.createTextNode("window.document.clientHeight: Muestra la altura del cliente seleccionado, body en este caso = " + window.document.body.clientHeight);
    elemento.appendChild(texto);
    listaOrdenada.appendChild(elemento);

    document.body.appendChild(listaOrdenada);
}