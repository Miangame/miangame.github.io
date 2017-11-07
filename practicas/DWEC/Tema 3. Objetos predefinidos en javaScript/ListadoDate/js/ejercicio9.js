/**
 * Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");
    let fecha = new Date();

    let calculaFinAnio = function (fecha) {
        if (!esFecha(fecha))
            throw new FechaException("No es una fecha.");
        let diasHastaFinAnio = 0;
        let fechaUltimoDia;
        for (let i = fecha.getMonth(); i < 12; i++) {
            if (i == fecha.getMonth()) {
                fechaUltimoDia = new Date(fecha.getFullYear(), i + 1, 0);
                diasHastaFinAnio += fechaUltimoDia.getDate() - fecha.getDate();
            } else if (i == 11)
                diasHastaFinAnio += 31;
            else {
                fechaUltimoDia = new Date(fecha.getFullYear(), i + 1, 0);
                diasHastaFinAnio += fechaAux.getDate();
            }
        }
        return diasHastaFinAnio;
    }

    let esFecha = function (fecha) {
        return !isNaN(Date.parse(fecha));
    }

    //Crea excepción
    let FechaException = function (aviso) {
        this.aviso = aviso;
        this.nombre = "FechaException";
    }

    try {
        parrafo.innerHTML = "Número de días hasta fin de año es: " + calculaFinAnio(fecha);
    } catch (fechaException) {
        parrafo.innerHTML = fechaException.aviso;
    }

}