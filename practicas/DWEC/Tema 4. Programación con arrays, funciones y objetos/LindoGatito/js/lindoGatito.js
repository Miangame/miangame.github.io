{
    let gatito = function (nombre, raza, fechaNacimiento) {
        this.nombre = nombre;
        this.raza = raza;
        this.fechaNacimiento = fechaNacimiento;
        this.peso = obtenerPeso();
        this.estado = "jugando";
    }

    gatito.prototype.comer = function () {
        this.peso += 1;
        this.estado = "comiendo";
        this.comprobarVida();
    }

    gatito.prototype.jugar = function () {
        this.peso -= 1;
        this.estado = "jugando";
        this.comprobarVida();
    }

    gatito.prototype.dormir = function () {
        this.estado = "durmiendo";
    }

    gatito.prototype.comprobarVida = function () {
        if (this.peso < 1 || this.peso > 15) {
            this.estado = "muerto";
        }
    }

    let obtenerPeso = function (raza) {
        let peso = 0;
        if (raza === "Persa") {
            peso = 4;
        }
        else if (raza === "Siames") {
            peso = 3;
        }
        else if (raza === "Bengala") {
            peso = 7;
        }
        else {
            peso = 5;
        }

        return peso;
    }

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

    let nuevaVentana = function (object) {

        var nuevaVentana;
        var contenido = "";
        contenido += '<html>'
            + '<head>'
            + '<title>Nuevo Gatito</title>'
            + '<script type="text/javascript" src="js/MiGatito.js"></script>'
            + '</head>'
            + '<body id="newbody">'
            + '<div id="principal">'
            + '<h1 id="newh1">Tu nuevo gatito</h1>'
            + '<div id="divimg"><img id="imgs" src="images/jugando.gif"></img></div>'
            + '<div id="tabla"></div>'
            + '<div id="controles">'
            + '<input type="button" value="Jugar" id="jugar">'
            + '<input type="button" value="Dar Comida" id="comer">'
            + '<input type="button" value="Dormir" id="dormir">'
            + '</div>'
            + '</body>'
            + '</html>';
        nuevaVentana = window.open('', '', ' top="0", left="0" width=800px,height=800px');
        nuevaVentana.document.open();
        nuevaVentana.document.gatito = object;
        nuevaVentana.document.write(contenido);
        nuevaVentana.document.close();
    }


    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let fechaNac = document.getElementById('fechaNac');
    let boton = document.getElementById('newbtn');
    let error = document.getElementById('error');

    boton.onclick = function () {
        let fechaNacimiento = new Date(fechaNac.value);
        console.log(fechaNacimiento);
        if (nombre.value == "") {
            error.innerHTML = "Debes introducir un nombre";
        }
        else if (fechaNacimiento == "Invalid Date") {
            error.innerHTML = "Introduce el formato de la fecha correctamente 'YYYY/mm/dd'";
        }
        else {
            let gato = new Gatito(nombre.value, raza.value, fechaNac.value);
            nuevaVentana(gato);
        }
    }
}