/**
 * @author Miguel Ángel Gavilán Merino
 */

{
    let nombre;
    let primerAp;
    let segundoAp;
    let fecha;

    let errorNombre;
    let errorPrimerAp;
    let errorSegundoAp;
    let errorFecha;

    let botonCrear;
    let botonLimpiar;

    let arrayErrores = [];
    let error = false;

    let patrones = {
        campo: [/\w{3,}/, "Debe tener una longitud mínima de 3 carácteres"],
        fecha: [/^\d\d[\-]\d\d[\-]\d\d\d\d$/, "El formato no es correcto"]
    }

    let validador = {
        test: function (patron, elemento) {
            if (patron[0].test(elemento.value)) {
                arrayErrores.push("bien");
                return "";
            }
            arrayErrores.push("error");
            return patron[1];
        },
        testFecha: function (fecha) {
            if (validador.test(patrones.fecha, fecha) != "") {
                return validador.test(patrones.fecha, fecha);
            }

            let valorFecha = fecha.value.trim();
            let arrayFecha = valorFecha.split("-");
            let dia = parseInt(arrayFecha[0]);
            let mes = parseInt(arrayFecha[1]) - 1;
            let anio = parseInt(arrayFecha[2]);

            let fechaValidar = new Date(anio, mes, dia);

            if (dia != fechaValidar.getDate() || mes != fechaValidar.getMonth() || anio != fechaValidar.getFullYear()) {
                arrayErrores.push("error");
                return 'La fecha no es correcta.';
            } else {
                arrayErrores.push("bien");
                return '';
            }
        }
    };

    let validarCampos = function (elemento, errorElemento) {
        errorElemento.innerHTML = validador.test(patrones.campo, elemento);
    }

    let validarFecha = function (elemento, errorElemento) {
        errorElemento.innerHTML = validador.testFecha(fecha);
    }

    let comprobarTodo = function () {
        validarCampos(nombre, errorNombre);
        validarCampos(primerAp, errorPrimerAp);
        validarCampos(segundoAp, errorSegundoAp);
        validarFecha(fecha, errorFecha);
    }

    let crearAlumno = function () {
        comprobarTodo();
        for (let i = 0; i < arrayErrores.length; i++) {
            if (arrayErrores[i] != "bien") {
                error = true;
                break;
            } else {
                error = false;
            }

        }

        if (!error) {

            let alumno = new Alumno(nombre.value, primerAp.value, segundoAp.value, fecha.value);
            alumno.mostrar();

        }

        arrayErrores = [];
    }

    let limpiarFormulario = function () {
        nombre.value = "";
        primerAp.value = "";
        segundoAp.value = "";
        fecha.value = "";
        arrayErrores = [];
    }

    let init = function () {
        nombre = document.getElementById("nombre");
        primerAp = document.getElementById("primerAp");
        segundoAp = document.getElementById("segundoAp");
        fecha = document.getElementById("fechaNac");

        errorNombre = document.getElementById("errorNombre");
        errorPrimerAp = document.getElementById("errorPrimerAp");
        errorSegundoAp = document.getElementById("errorSegundoAp");
        errorFecha = document.getElementById("errorFecha");

        botonCrear = document.getElementById("crearAlumno");
        botonLimpiar = document.getElementById("limpiarForm");

        nombre.addEventListener("blur", validarCampos.bind(null, nombre, errorNombre));
        primerAp.addEventListener("blur", validarCampos.bind(null, primerAp, errorPrimerAp));
        segundoAp.addEventListener("blur", validarCampos.bind(null, segundoAp, errorSegundoAp));
        fecha.addEventListener("blur", validarFecha.bind(null, fecha, errorFecha));

        botonCrear.addEventListener("click", crearAlumno);
        botonLimpiar.addEventListener("click", limpiarFormulario);
    }

    window.onload = init;
}

