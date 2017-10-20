/**
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún
 * puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
 * horizontales cuando se haya llegado al máximo número de caracteres
 * 
 * @author Miguel Ángel Gavilán Merino
 */
{
    const MAXIMO_CARACTERES = 100;

    let elementoTexto = document.getElementById("texto");
    let info = document.getElementById("info");

    let limita = function () {

        if (elementoTexto.value.length >= MAXIMO_CARACTERES)
            return false;

        return true
    }

    let actualizaInfo = function () {

        if (elementoTexto.value.length >= MAXIMO_CARACTERES) {
            info.innerHTML = "Máximo " + MAXIMO_CARACTERES + " caracteres";
        }
        else {
            info.innerHTML = "Puedes escribir hasta " + (MAXIMO_CARACTERES - elementoTexto.value.length) + " caracteres adicionales";
        }
    }

    elementoTexto.onkeypress = limita;
    elementoTexto.onkeyup = actualizaInfo;
}