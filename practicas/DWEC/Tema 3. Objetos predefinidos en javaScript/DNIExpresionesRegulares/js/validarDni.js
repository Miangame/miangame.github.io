/**
 * Realiza la comprobación del dni.
 * Para ello, crea un formulario con tres campos: nombre, dni y fecha de nacimiento.
 * Al perder el foco de la caja de texto del DNI se realizará la comprobación. Aparecerá un mensaje (Derecha o abajo) en rojo, indicando:
 * formato incorrecto
 * letra incorrecta
 * introduce dni (si está vacío)
 * Utiliza los grupos para capturar el número y la letra. La letra puede estar en mayúscula o minúscula, separado o no por espacio/guión
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let dniIntroducido = document.getElementById("entradaDni");
    let texto = document.getElementById("texto");

    let comprobarDni = function (dni) {
        let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
        let patron = /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i
        let letra;
        let numeroDni;
        let indiceLetra;
        texto.style.color = "red";

        if (dni === '') {
            texto.innerHTML = " Introduce DNI";
        } else {
            if (!patron.test(dni)) {
                texto.innerHTML = " Formato incorrecto";
            } else {
                letra = dni.match(patron)[2];
                numeroDni = dni.match(patron)[1];
                indiceLetra = parseInt(numeroDni % 23);

                if (letra.toUpperCase() !== letras[indiceLetra]) {
                    texto.innerHTML = " Letra incorrecta";
                } else {
                    texto.style.color = "green";
                    texto.innerHTML = " El DNI es correcto";
                }
            }
        }



    }


    dniIntroducido.onblur = function () {
        comprobarDni(dniIntroducido.value);
    };
}