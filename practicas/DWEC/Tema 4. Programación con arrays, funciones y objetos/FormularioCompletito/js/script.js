/**
 * Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript.
 * Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares.
 *
 * Asegúrate de validar lo siguiente:
 * Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
 * Tipo de dato introducido (numérico...)
 * Dirección de correo válida
 * Número de DNI válido
 * Fecha válida
 * Número de teléfono
 * Número de cuenta corriente
 * URL
 * Asegúrate de que:
 *
 * Al perder el foco de cada control se comprueba su validación.
 * Los errores los muestras mediante css.
 * Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    //Boton enviar
    let btnEnviar = document.getElementById("enviar");

    //Validar nombre
    let nombre = document.getElementById("nombre");
    let errorNHermanoserrorNombre = document.getElementById("errorNombre");

    //Validar número de hermanos
    let nHermanos = document.getElementById("nHermanos");
    let errorNHermanos = document.getElementById("errorNHermanos");

    //Validar correo
    let correo = document.getElementById("correo");
    let patronCorreo = /\w+([\._-]?\w+)*@\w+([\._-]?\w+)*\.\w{2,3}$/;
    let errorCorreo = document.getElementById("errorCorreo");

    //validar dni
    let dni = document.getElementById("dni");
    let errorDni = document.getElementById("errorDni");

    //Validar fecha
    let fecha = document.getElementById("fecha");
    let errorFecha = document.getElementById("errorFecha");

    //Validar telefono
    let telefono = document.getElementById("nTelefono");
    let errorTelefono = document.getElementById("errorNTelefono");

    //Validar cuenta
    let cuenta = document.getElementById("nCuenta");
    let errorCuenta = document.getElementById("errorNCuenta");

    //Validar url
    let url = document.getElementById("url");
    let errorUrl = document.getElementById("errorUrl");

    //Validar curso
    let curso = document.getElementById("curso");
    let errorCurso = document.getElementById("errorCurso");

    //Validar asignaturas
    let asignaturas = document.getElementsByClassName("asignatura");
    let errorAsignaturas = document.getElementById("errorAsignatura");

    //Validar términos de uso
    let terminos = document.getElementById("terminosUso");
    let errorTerminos = document.getElementById("errorTerminosUso");

    //Array donde almaceno los errores de las validaciones
    let validaciones = [];

    //Almaceno los patrones de las validaciones
    let patrones = {
        nombre: /^[A-Za-záéíóúÁÉÍÓÚÑñ]{2,}/,
        nHermanos: /^[0-9]+/,
        correo: /\w+([\._-]?\w+)*@\w+([\._-]?\w+)*\.\w{2,3}$/,
        dni: /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i,
        fecha: /^(.*)[\/\-](.*)[\/\-](.*)$/,
        telefono: /^(\+\d{2,3})?[6789]\d{8}$/,
        cuenta: /^[A-Z]{2}\d{2}[ \-]?\d{4}[ \-]?\d{4}[ \-]?\d{2}[ \-]?\d{10}$/,
        url: /^(http[s]?:\/\/)?\w+\d*(\.\w+)*\.\w{2,3}$/
    }

    //Almaceno los mensajes de las validaciones
    let mensajes = {
        nombre: "Por favor introduzca un nombre válido!",
        nHermanos: "Por favor introduzca un número válido!",
        correo: "Por favor introduzca un correo válido!",
        dni: "Por favor introduzca un dni válido!",
        fecha: "Por favor introduzca una fecha válida!",
        telefono: "Por favor introduzca un teléfono válido!",
        cuenta: "Por favor introduzca una cuenta válida!",
        url: "Por favor introduzca una URL válida!"
    }

    //Asigno un error al elemento pasado por parametro
    let setError = function (elemento, elementoError, mensaje) {
        elementoError.innerHTML = mensaje;
        elementoError.style = "color: rgb(239, 21, 174); font-weight: bold";
        elemento.style = "border-color: red; border-width: 2px;";
    }

    //Quito el error del elemento pasado por parametro
    let quitarError = function (elemento, elementoError) {
        elementoError.innerHTML = "";
        elemento.style = "border-color: white";
    }

    //Realiza la validación del elemento pasado por parametro
    let validar = function (elemento, elementoError, patron, mensaje) {
        if (!patron.test(elemento.value)) {
            setError(elemento, elementoError, mensaje);
            validaciones.push(elemento);
        } else {
            quitarError(elemento, elementoError);
        }
    }

    //Validación dni
    let validarDni = function () {
        let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        let patron = /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i;
        let letra;
        let numeroDni;
        let indiceLetra;
        errorDni.style = "color: rgb(239, 21, 174); font-weight: bold";
        dni.style = "border-color: red; border-width: 2px;";

        if (dni === '') {
            errorDni.innerHTML = " Introduce DNI";
            validaciones.push(dni);
        } else {
            if (!patron.test(dni.value)) {
                errorDni.innerHTML = " Formato incorrecto";
                validaciones.push(dni);
            } else {
                letra = dni.value.match(patron)[2];
                numeroDni = dni.value.match(patron)[1];
                indiceLetra = parseInt(numeroDni % 23);

                if (letra.toUpperCase() !== letras[indiceLetra]) {
                    errorDni.innerHTML = " Letra incorrecta";
                    validaciones.push(dni);
                } else {
                    quitarError(dni, errorDni);
                }
            }
        }
    }

    //Validar fecha
    let validarFecha = function () {
        let date = fecha.value;
        let arrayFecha = date.split("/");
        let dia = parseInt(arrayFecha[0]);
        let mes = parseInt(arrayFecha[1]) - 1;
        let anio = parseInt(arrayFecha[2]);

        let fechaComprobar = new Date(anio, mes, dia);

        if (dia != fechaComprobar.getDate() || mes != fechaComprobar.getMonth() || anio != fechaComprobar.getFullYear()) {
            setError(fecha, errorFecha, mensajes.fecha);
            validaciones.push(fecha);
        } else {
            quitarError(fecha, errorFecha);
        }
    }

    //Validacion curso
    let validarCurso = function () {
        if (curso.value === "seleccionar") {
            setError(curso, errorCurso, "Por favor escoja un curso!");
            validaciones.push(curso);
        } else {
            quitarError(curso, errorCurso);
        }
    }

    //Validar asignaturas
    let validarAsignaturas = function () {
        let contador = 0;

        for (let i = 0; i < asignaturas.length; i++) {
            if (asignaturas[i].checked) {
                contador++;
            }

        }

        if (contador < 2) {
            setError(asignaturas, errorAsignaturas, "Por favor escoja al menos 2 asignaturas!");
        } else {
            quitarError(asignaturas, errorAsignaturas);
        }
    }

    //Validar términos de uso
    let validarTerminos = function () {
        if (!terminos.checked) {
            setError(terminos, errorTerminos, "Debe aceptar nuestros términos de uso!");
        } else {
            quitarError(terminos, errorTerminos);
        }
    }

    nombre.addEventListener("blur", function () {
        validar(nombre, errorNombre, patrones.nombre, mensajes.nombre);
    });

    nHermanos.addEventListener("blur", function () {
        validar(nHermanos, errorNHermanos, patrones.nHermanos, mensajes.nHermanos);
    });

    correo.addEventListener("blur", function () {
        validar(correo, errorCorreo, patrones.correo, mensajes.correo);
    });

    dni.addEventListener("blur", validarDni);

    fecha.addEventListener("blur", validarFecha);

    telefono.addEventListener("blur", function () {
        validar(telefono, errorTelefono, patrones.telefono, mensajes.telefono);
    });

    cuenta.addEventListener("blur", function () {
        validar(cuenta, errorCuenta, patrones.cuenta, mensajes.cuenta);
    });

    url.addEventListener("blur", function () {
        validar(url, errorUrl, patrones.url, mensajes.url);
    });

    curso.addEventListener("blur", validarCurso);

    btnEnviar.addEventListener("click", function () {
        validar(nombre, errorNombre, patrones.nombre, mensajes.nombre);
        validar(nHermanos, errorNHermanos, patrones.nHermanos, mensajes.nHermanos);
        validar(correo, errorCorreo, patrones.correo, mensajes.correo);
        validarDni();
        validarFecha();
        validar(telefono, errorTelefono, patrones.telefono, mensajes.telefono);
        validar(cuenta, errorCuenta, patrones.cuenta, mensajes.cuenta);
        validar(url, errorUrl, patrones.url, mensajes.url);
        validarCurso();
        validarAsignaturas();
        validarTerminos();
        validaciones[0].focus();
        validaciones = [];
    });
}