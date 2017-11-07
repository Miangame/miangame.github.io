/**
 * Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo' del día actual o de la fecha indicada (similar al constructor)
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let parrafo = document.getElementById("parrafo");

    let diaDeLaSemana = function (anno, mes, dia, horas, minutos, segundos) {
        let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
        let fecha = new Date(anno, mes - 1, dia, horas, minutos, segundos);
        return semana[fecha.getDay()];
    }

    let fechaActual = new Date();
    parrafo.innerHTML = "Hoy es: " + diaDeLaSemana(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDay(), fechaActual.getHours(), 0, 0);

}