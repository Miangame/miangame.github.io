/**
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
 * Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 
 * Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    function informacion(elEvento) {
        let evento = elEvento || window.event;

        let posicionX = evento.clientX;
        let posicionY = evento.clientY;

        let dimensiones = tamanoVentanaNavegador();
        let tamanoX = dimensiones[0];
        let tamanoY = dimensiones[1];

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

    function muestraInformacion(mensaje) {
        document.getElementById("info").innerHTML = '<h1>' + mensaje[0] + '</h1>';
        for (let i = 1; i < mensaje.length; i++) {
            document.getElementById("info").innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }

    function tamanoVentanaNavegador() {
        let dimensiones = [];

        if (typeof (window.innerWidth) == 'number') {
            // No es IE
            dimensiones = [window.innerWidth, window.innerHeight];
        } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6 en modo estandar (no quirks)
            dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
        } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            //IE en modo quirks
            dimensiones = [document.body.clientWidth, document.body.clientHeight];
        }

        return dimensiones;
    }

    document.onclick = informacion;
}