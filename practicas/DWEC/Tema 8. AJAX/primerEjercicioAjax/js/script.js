{
    let cajaURL;
    let botonMostrar;
    let contenido;
    let cabeceras;
    let estados;
    let codigo;
    let peticion;
    let tiempoInicial;
    let tiempoFinal;
    let milisegundos;
    let estadosPosibles;

    String.prototype.transformaCaracteresEspeciales = function () {
        return unescape(escape(this).
            replace(/%0A/g, '<br/>').
            replace(/%3C/g, '&lt;').
            replace(/%3E/g, '&gt;'));
    }

    estadosPosibles = ['No inicializado', 'Cargando', 'Cargado', 'Interactivo', 'Completado'];
    tiempoInicial = 0;

    let cargaContenido = function () {

        contenido.innerHTML = "";
        estados.innerHTML = "";
        cabeceras.innerHTML = "";
        codigo.innerHTML = "";

        peticion = new XMLHttpRequest();

        peticion.onreadystatechange = muestraContenido;

        tiempoInicial = new Date();

        peticion.open('GET', cajaURL.value, true);
        peticion.send(null);
    }


    let muestraContenido = function () {
        tiempoFinal = new Date();
        milisegundos = tiempoFinal - tiempoInicial;


        estados.innerHTML += "[" + milisegundos + " mseg.] " + estadosPosibles[peticion.readyState] + "<br/>";

        if (peticion.readyState == 4) {
            if (peticion.status == 200) {
                contenido.innerHTML = peticion.responseText.transformaCaracteresEspeciales();
            }
            muestraCabeceras();
            muestraCodigoEstado();
        }
    }


    let muestraCabeceras = function () {
        cabeceras.innerHTML = peticion.getAllResponseHeaders().transformaCaracteresEspeciales();
    }

    let muestraCodigoEstado = function () {
        codigo.innerHTML = peticion.status + "<br/>" + peticion.statusText;
    }

    let init = function () {

        cajaURL = document.getElementById('cajaURL');
        botonMostrar = document.getElementById('botonMostrar');
        contenido = document.getElementById('bCIzquierda1');
        estados = document.getElementById('bCDerecha1');
        cabeceras = document.getElementById('bCIzquierda2');
        codigo = document.getElementById('bCDerecha2');
        cajaURL.value = location.href;


        botonMostrar.addEventListener("click", cargaContenido);



    }

    window.onload = init;
}