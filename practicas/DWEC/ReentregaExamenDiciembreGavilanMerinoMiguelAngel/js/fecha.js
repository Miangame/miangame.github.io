/**
 * @author Miguel Ángel Gavilán Merino
 */

{
    let botonCerrar;
    let divVentanaPadre;

    let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let fecha = new Date();
    let finDeCurso = new Date("12/22/2017");

    let calcularDiaActual = function () {
        let diaActual;
        let mesActual;
        let cadena = "";

        if (fecha.getDay() == 0) {
            diaActual = diasSemana[diasSemana.length - 1];
        } else {
            diaActual = diasSemana[fecha.getDay() - 1];
        }

        mesActual = meses[fecha.getMonth()];

        cadena += diaActual + ", " + fecha.getDate() + " de " + mesActual + " de " + fecha.getFullYear();

        return cadena;
    };

    let calcularDiaFinCurso = function () {
        let cadena = diasSemana[finDeCurso.getDay() - 1] + ", " + finDeCurso.getDate() + " de " + meses[finDeCurso.getMonth()] + " de " + finDeCurso.getFullYear();

        return cadena;
    };

    let calcularNumeroDias = function () {
        let diferenciaFechas = finDeCurso - fecha;
        let diasRestantes = Math.round(diferenciaFechas / 1000 / 3600 / 24);

        return diasRestantes;
    }

    let generarDocumentoEj1 = function () {
        let contenido;

        contenido =
            "<h1>Miguel Ángel Gavilán Merino</h1>" +
            "<p>Hoy es " + calcularDiaActual() + "</p>" +
            "<p>El fin del trimestre será " + calcularDiaFinCurso() + "</p>" +
            "<p>Y solo quedan " + calcularNumeroDias() + " días</p>" +
            "<input type='button' value='Cerrar' id='cerrar'>";

        window.document.write(contenido);
        window.document.close();
    };

    let cerrarVentana = function () {
        divVentanaPadre.innerHTML = "Ventana cerrada";
        window.close();
    }

    let init = function () {
        generarDocumentoEj1();

        botonCerrar = document.getElementById("cerrar");
        divVentanaPadre = window.opener.document.getElementById("mensajeVentanaCerrada");

        botonCerrar.addEventListener("click", cerrarVentana);

    };

    window.onload = init;
}