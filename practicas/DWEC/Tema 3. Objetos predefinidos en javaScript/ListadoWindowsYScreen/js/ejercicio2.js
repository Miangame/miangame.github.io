/**
 * El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. Muéstralos reaccionando al evento scroll sobre window.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let div = document.getElementById("medidas");

    let mostrarMedidas = function () {
        div.innerHTML = "scrollX: " + window.scrollX + "<br>scrollY: " + window.scrollY;
    }

    window.onscroll = mostrarMedidas;
}