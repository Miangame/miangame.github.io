/**
 * Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento.  
 * En caso de tener menos de un año, indicar días y meses transcurridos. Indicar errores.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");

    let fecha = new Date("Nov 20, 1994");

    let calcularEdad = function (fecha) {
        if (!esFecha(fecha))
            throw new FechaException("No es una fecha.");
        let fechaActual = new Date();
        if (fecha.getFullYear() === fechaActual.getFullYear()) {
            let dia = fechaActual.getDate() - fecha.getDate();
            let mes = fechaActual.getMonth() - fecha.getMonth();
            return "Han transcurrido: " + dia + " dias y " + mes + " meses."
        } else {
            if (fechaActual.getMonth() < fecha.getMonth())
                return "Edad: " + ((fechaActual.getFullYear() - fecha.getFullYear()) - 1);
            else if (fechaActual.getMonth() === fechaActual.getMonth() && fechaActual.getDay() < fecha.getDay())
                return "Edad: " + ((fechaActual.getFullYear() - fecha.getFullYear()) - 1);
            else
                return "Edad: " + (fechaActual.getFullYear() - fecha.getFullYear());
        }

    }

    let esFecha = function (fecha) {
        return !isNaN(Date.parse(fecha));
    }

    let FechaException = function (aviso) {
        this.aviso = aviso;
        this.nombre = "FechaException";
    }


    try {
        parrafo.innerHTML = calcularEdad(fecha) + " años";
    } catch (fechaException) {
        parrafo.innerHTML = fechaException.aviso;
    }
}