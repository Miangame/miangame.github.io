{
    let gatito = function (nombre, raza, fechaNacimiento) {
        this.nombre = nombre;
        this.raza = raza;
        this.fechaNacimiento = fechaNacimiento;
        this.peso = obtenerPeso(this.raza);
        this.estado = "jugando";
        this.edad = calcularEdad(this.fechaNacimiento);
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

    let calcularEdad = function (fecha) {
        let fechaActual = new Date();

        if (!esFecha(fecha) || fecha > fechaActual)
            throw new FechaException("No es una fecha.");

        let anio = fechaActual.getFullYear() - fecha.getFullYear();
        let dia = fechaActual.getDay() - fecha.getDay();
        let mes = fechaActual.getMonth() - fecha.getMonth();

        if (anio === 0 && mes === 0) {
            return dia + " días";
        } else if (anio === 0 && mes !== 0) {
            return mes + " meses y " + dia + " días";
        } else {
            return anio + " años, " + mes + " meses y " + dia + " días";
        }
    }

    let esFecha = function (fecha) {
        return !isNaN(Date.parse(fecha));
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

    let nuevaVentana = function (object) {

        let nuevaVentana;
        let contenido = "";
        contenido += '<html>'
            + '<head>'
            + '<title>Nuevo Gatito</title>'
            + '<script defer type="text/javascript" src="js/gatito.js"></script>'
            + '<link rel="stylesheet" href="css/style.css">'
            + '</head>'
            + '<body>'
            + '<main>'
            + '<div id="principal">'
            + '<h1>Tu nuevo gatito</h1>'
            + '<div id="divImg"><img id="imagenes" src="images/jugando.gif"></img></div>'
            + '<div id="tabla"></div>'
            + '<div id="botones">'
            + '<p id="aviso"></p>'
            + '<input type="button" value="Jugar" id="jugar">'
            + '<input type="button" value="Dar Comida" id="comer">'
            + '<input type="button" value="Dormir" id="dormir">'
            + '</div>'
            + '<main>'
            + '</body>'
            + '</html>';
        nuevaVentana = window.open('', '', ' top="0", left="0" width=1000px,height=800px');
        nuevaVentana.document.open();
        nuevaVentana.document.gatito = object;
        nuevaVentana.document.write(contenido);
        nuevaVentana.document.close();
    }


    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let fechaNac = document.getElementById('fechaNac');
    let boton = document.getElementById('crearGato');
    let errorNombre = document.getElementById('errorNombre');
    let errorFecha = document.getElementById('errorFecha');

    let comprobarNombre = function () {
        let patronNombre = /^[A-Za-záéíóúÁÉÍÓÚÑñ]{2,}/;

        if (!patronNombre.test(nombre.value)) {
            errorNombre.innerHTML = "El nombre no es correcto";
        } else {
            errorNombre.innerHTML = "";
        }
    }

    let comprobarFecha = function () {
        try {
            calcularEdad(new Date(fechaNac.value));
            errorFecha.innerHTML = "";
        } catch (fechaException) {
            errorFecha.innerHTML = "La fecha no es correcta";
        }
    }

    nombre.addEventListener("blur", comprobarNombre);
    fechaNac.addEventListener("blur", comprobarFecha);

    let crearGato = function () {

        let fechaNacimiento = new Date(fechaNac.value);

        comprobarNombre();
        comprobarFecha();

        if (nombre.value == "") {
            error.innerHTML = "Debes introducir un nombre";
        } else {
            try {
                let gato = new gatito(nombre.value, raza.value, fechaNacimiento);
                nuevaVentana(gato);
            } catch (fechaException) {
                error.innerHTML = "La fecha no es correcta!";
            }

        }

    };

    boton.addEventListener("click", crearGato);

}