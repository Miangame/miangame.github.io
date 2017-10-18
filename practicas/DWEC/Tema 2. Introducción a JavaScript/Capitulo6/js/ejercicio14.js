/**
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
 * contenidos
 * 3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del
 * primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:
 * propiedad innerHTML)
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    function muestraOculta(id) {
        let elemento = document.getElementById('contenidos_' + id);
        let enlace = document.getElementById('enlace_' + id);

        if (elemento.style.display == "block" || elemento.style.display == "") {
            elemento.style.display = "none";
            enlace.innerHTML = 'Mostrar más';
        } else {
            elemento.style.display = "block";
            enlace.innerHTML = 'Ocultar';
        }
    }
}