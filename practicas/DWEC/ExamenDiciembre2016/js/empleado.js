{
    Empleado = function (nombre, fecha, dni) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.dni = dni;
    }

    Empleado.prototype.crearVentana = function () {
        let fechaActual = new Date();
        let anioActual = fechaActual.getFullYear();
        let fechaFinAnio = new Date("12/31/" + anioActual);
        let diasRestantes = Math.floor((fechaFinAnio - fechaActual) / 1000 / 3600 / 24);

        let contenido = "<h1>Miguel Ángel Gavilán Merino</h1>" +
            "<p>Nombre: " + this.nombre + " </p>" +
            "<p>Fecha: " + this.fecha + " </p>" +
            "<p>DNI: " + this.dni + " </p>" +
            "<p>Días hasta fin de año: " + diasRestantes + "</p>";

        let nuevaVentana = window.open("", "DatosEmpleado");
        nuevaVentana.document.write(contenido);
        nuevaVentana.document.close();
    }
}