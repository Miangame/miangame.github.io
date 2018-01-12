/**
 * @author Miguel Ángel Gavilán Merino
 */

{

    let fechaActual = new Date();

    function Alumno(nombre, ap1, ap2, fechaNac) {
        this.nombre = nombre;
        this.ap1 = ap1;
        this.ap2 = ap2;
        this.fechaNac = fechaNac;
        this.edad;
    };

    Alumno.prototype.mostrar = function () {
        let nuevaVentana = window.open("", "InformacionAlumno", "height=200,width=300");
        let contenido;

        let edad;

        try {
            edad = this.calcularEdad() + " años";
        } catch (error) {
            edad = error.mensaje;
        }
        contenido =
            "<p>Nombre:" + this.nombre + "</p>" +
            "<p>Primer apellido:" + this.ap1 + "</p>" +
            "<p>Segundo apellido:" + this.ap2 + "</p>" +
            "<p>Edad: " + edad + "</p>";

        nuevaVentana.document.write(contenido);
    };

    Alumno.prototype.calcularEdad = function () {
        let arrayFecha = this.fechaNac.split("-");

        let anios = fechaActual.getFullYear() - arrayFecha[2];

        if (anios <= 0) {
            throw { mensaje: "No se ha podido calcular la edad" };
        }

        return anios;
    }
}