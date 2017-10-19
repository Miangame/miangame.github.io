/**
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún
 * puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
 * horizontales cuando se haya llegado al máximo número de caracteres
 * 
 * @author Miguel Ángel Gavilán Merino
 */
{
    let elemento = document.getElementById("texto");
    let info = document.getElementById("info");

    function limita(evento, maximoCaracteres) {

        let codigoCaracter = evento.charCode || evento.keyCode;
        // Permitir utilizar las teclas con flecha horizontal
        if (codigoCaracter == 37 || codigoCaracter == 39) {
            return true;
        }

        // Permitir borrar con la tecla Backspace y con la tecla Supr.
        if (codigoCaracter == 8 || codigoCaracter == 46) {
            return true;
        } else if (elemento.value.length >= maximoCaracteres) {
            return false;
        } else {
            return true;
        }
    }

    function actualizaInfo(maximoCaracteres) {

        if (elemento.value.length >= maximoCaracteres) {
            info.innerHTML = "Máximo " + maximoCaracteres + " caracteres";
        }
        else {
            info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - elemento.value.length) + " caracteres adicionales";
        }
    }
}