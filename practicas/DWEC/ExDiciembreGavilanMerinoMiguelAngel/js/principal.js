/**
 * @author Miguel Ángel Gavilán Merino
 */

{
    let ventanaEj1;
    let ventanaEj2;

    let generarVentanaEj1 = function () {
        let nuevaVentana = window.open("", "Ejercicio1");
        let contenido;

        contenido =
            "<html>" +
            "<head>" +
            "<meta charset='UTF-8'>" +
            "<title>Miguel Ángel Gavilán Merino</title>" +
            "<link rel='stylesheet' href='css/estilos.css'>" +
            "<script src='js/fecha.js'></script>" +
            "</head>" +
            "<body>" +
            "<noscript>El navegador no soporta JavaScript</noscript>" +
            "</body>" +
            "</html>";

        nuevaVentana.document.write(contenido);
        nuevaVentana.document.close();
    };

    let generarVentanaEj2 = function () {
        let nuevaVentana = window.open("formulario.html", "Ejercicio2");
    }

    let init = function () {
        ventanaEj1 = document.getElementById("inputEj1");
        ventanaEj2 = document.getElementById("inputEj2");

        ventanaEj1.addEventListener("click", generarVentanaEj1);
        ventanaEj2.addEventListener("click", generarVentanaEj2);
    };

    window.onload = init;
}