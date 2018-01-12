{
    let nombre;
    let fechaInput;
    let dni;
    let comprobar;
    let boton;

    let errorNombre;
    let errorFechaInput;
    let errorDni;
    let errorComprobar;

    let validaciones = [];

    let patrones = {
        nombre: [/\w{3,}/, 'Mínimo de 3 carácteres'],
        fecha: [/\d\d[-/ ]\d\d[/]\d\d\d/, "Formatos válidos: 20/11/2017, 20 11 2017, 20-11-2017"],
        dni: [/^(\d{8})[- ]?([a-z])$/i, 'Formatos válidos: 12345678Z, 12345678-Z, 12345678 Z']
    };

    let tester = {
        test: function (patron, elemento) {
            if (patron[0].test(elemento.value)) {
                return '';
            }
            validaciones.push(elemento);
            return patron[1];
        },
        testLetraDni: function (dni) {
            let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
            let patron = patrones.dni[0];
            let letra;
            let numeroDni;
            let indiceLetra;

            if (dni.value === '') {
                validaciones.push(dni);
                return " Introduce DNI";
            } else {
                if (!patron.test(dni.value)) {
                    validaciones.push(dni);
                    return " Formato incorrecto";
                } else {
                    letra = dni.value.match(patron)[2];
                    numeroDni = dni.value.match(patron)[1];
                    indiceLetra = parseInt(numeroDni % 23);

                    if (letra.toUpperCase() !== letras[indiceLetra]) {
                        validaciones.push(dni);
                        return " Letra incorrecta";
                    } else {
                        return '';
                    }
                }
            }
        },
        testFecha: function (fecha) {
            let date = fecha.value.trim();
            let arrayFecha = date.split("/");
            let dia = parseInt(arrayFecha[0]);
            let mes = parseInt(arrayFecha[1]) - 1;
            let anio = parseInt(arrayFecha[2]);

            let fechaComprobar = new Date(anio, mes, dia);

            if (dia != fechaComprobar.getDate() || mes != fechaComprobar.getMonth() || anio != fechaComprobar.getFullYear()) {
                validaciones.push(fecha);
                return 'La fecha no es correcta.';
            } else {
                return '';
            }
        }
    };

    let comprobarNombre = function (elemento, errorElemento) {
        errorElemento.innerHTML = tester.test(patrones.nombre, elemento);
    }

    let fecha = function (elemento, errorElemento) {
        errorElemento.innerHTML = tester.testFecha(elemento);
    }

    let comprobarDni = function (elemento, errorElemento) {
        errorElemento.innerHTML = tester.testLetraDni(elemento);
    }

    let comprobarCheck = function (elemento, errorElemento) {
        if (!elemento.checked) {
            validaciones.push(elemento);
            errorElemento.innerHTML = "Activa el check";
        } else {
            errorElemento.innerHTML = "";
        }
    }

    let comprobarTodo = function () {
        validaciones = [];
        comprobarNombre(nombre, errorNombre);
        fecha(fechaInput, errorFechaInput);
        comprobarDni(dni, errorDni);
        comprobarCheck(comprobar, errorComprobar);
    }

    let crearEmpleado = function () {
        comprobarTodo();
        
        if (validaciones.length === 0) {
            let empleado = new Empleado(nombre.value, fechaInput.value, dni.value);
            empleado.crearVentana();
        } else {
            validaciones[0].focus();
        }
    }


    let init = function () {
        nombre = document.getElementById("nombre");
        fechaInput = document.getElementById("fecha");
        dni = document.getElementById("dni");
        comprobar = document.getElementById("condiciones");
        boton = document.getElementById("boton");

        errorNombre = document.getElementById("errorNombre");
        errorFechaInput = document.getElementById("errorFecha");
        errorDni = document.getElementById("errorDni");
        errorComprobar = document.getElementById("errorCondiciones");

        nombre.addEventListener("blur", comprobarNombre.bind(null, nombre, errorNombre));
        fechaInput.addEventListener("blur", fecha.bind(null, fechaInput, errorFechaInput));
        dni.addEventListener("blur", comprobarDni.bind(null, dni, errorDni));

        boton.addEventListener("click", crearEmpleado);
    };

    window.onload = init;
}