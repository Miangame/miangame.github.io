{
    let tabla = document.getElementById("tabla");
    let controles = document.getElementById("botones");
    let botones = document.getElementsByTagName("input");
    let imagen = document.getElementById("imagenes");
    let jugar = document.getElementById("jugar");
    let dormir = document.getElementById("dormir");
    let comer = document.getElementById("comer");

    let generarTabla = function () {
        return '<table>'
            + '<tr><td><p>Nombre: </p></td><td><p>' + document.gatito.nombre + '</p></td></tr>'
            + '<tr><td><p>Raza: </p></td><td><p>' + document.gatito.raza + '</p></td></tr>'
            + '<tr><td><p>Edad: </p></td><td><p>' + document.gatito.edad + '</p></td></tr>'
            + '<tr><td><p>Peso: </p></td><td><p id="p">' + document.gatito.peso + 'Kg</p></td></tr>'
            + '<tr><td><p>Estado: </p></td><td><p id="estado">' + document.gatito.estado + '</p></td></tr>'
            + '</table>';
    }


    jugar.addEventListener("click", function () {
        document.gatito.jugar();
        actualizarDatos();
    });

    dormir.addEventListener("click", function () {
        document.gatito.dormir();
        actualizarDatos();
    });

    comer.addEventListener("click", function () {
        document.gatito.comer();
        actualizarDatos();
    });

    let getImagen = function (estado) {
        let imagen = "";

        if (estado === "jugando") {
            imagen = "images/jugando.gif";
        } else if (estado === "durmiendo") {
            imagen = "images/durmiendo.gif";
        } else if (estado === "comiendo") {
            imagen = "images/comiendo.gif";
        } else {
            imagen = "images/muerto.gif";
        }

        return imagen;
    }

    let actualizarDatos = function () {
        let peso = document.getElementById("p");
        let estado = document.getElementById("estado");
        let aviso = document.getElementById("aviso");
        peso.innerHTML = document.gatito.peso + "Kg";
        estado.innerHTML = document.gatito.estado;

        if (document.gatito.peso === 2 || document.gatito.pesopeso === 14) {
            aviso.innerHTML = "Cuidado! el gatito va a morir!"
        }

        if (document.gatito.estado == "muerto") {
            botones[0].setAttribute("disabled", "");
            botones[1].setAttribute("disabled", "");
            botones[2].setAttribute("disabled", "");
            aviso.innerHTML = "";
        }
        imagen.src = getImagen(document.gatito.estado);
    }

    tabla.innerHTML += generarTabla();
}