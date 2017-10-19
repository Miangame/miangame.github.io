/**
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
 * Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 
 * Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let informacion = function (evento) {
        //let evento = elEvento || window.event;

        let posicionX = evento.clientX;
        let posicionY = evento.clientY;

        let tamanoX = window.innerWidth;
        let tamanoY = window.innerHeight;

        let ancho = "";
        let largo = "";

        if (posicionX > tamanoX / 2)
            ancho = "derecha";
        else
            ancho = "izquierda";

        if (posicionY > tamanoY / 2)
            largo = "abajo";
        else
            largo = "arriba";


        muestraInformacion(['Posicion', ancho, largo]);
    }

    let muestraInformacion = function (mensaje) {
        document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
            document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }


    document.onclick = informacion;
}