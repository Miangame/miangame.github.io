/**
 * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let array = ["HOST: " + window.location.host, "HOST-NAME: " + window.location.hostname,
    "PROTOCOLO: " + window.location.protocol, "PATH: " + window.location.pathname,
    "HREF: " + window.location.href];


    let lista = document.createElement("ul");
    let elemento;
    let texto;

    array.forEach(function(value) {
        elemento = document.createElement("li");
        texto = document.createTextNode(value);
    
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    });

    document.body.appendChild(lista);
}