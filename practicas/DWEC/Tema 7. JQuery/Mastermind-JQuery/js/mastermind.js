/**
 * Juego masterMind
 * 
 * @author Miguel Ángel Gavilan Merino
 */

masterMind = (function () {
    let colores = ["rojo", "blanco", "negro", "amarillo", "naranja", "marron", "azul", "verde"];

    let esta;
    let enSuSitio;

    let coloresObjetivo;

    /**
     * Genera un número aleatorio entre 0 y el número de colores disponibles
     */
    let generarAleatorio = function () {
        return Math.floor((Math.random() * colores.length));
    };

    /**
     * Genera una secuencia de colores que se tendrán que adivinar
     */
    let generarColoresObjetivo = function () {
        for (let i = 0; i < 4; i++) {
            coloresObjetivo.push(colores[generarAleatorio()]);
        }
    }

    /**
     * Muestra la secuencia de colores objetivo
     */
    let mostrar = function () {
        console.log(coloresObjetivo);
    }

    /**
     * Comprueba si un array de colores que se pasa por parámetro coincide con la secuencia objetivo
     * 
     * @param {*} arrayIntroducido 
     */
    let comprobar = function (arrayIntroducido) {
        let copiaObjetivo = coloresObjetivo.slice();
        esta = 0;
        enSuSitio = 0;

        arrayIntroducido.forEach(function (element, indice) {
            if (element == copiaObjetivo[indice]) {
                copiaObjetivo[indice] = undefined;
                arrayIntroducido[indice] = 1;
                enSuSitio++;
            }
        });

        arrayIntroducido.forEach(function (element, indice) {
            let indiceOrigen = copiaObjetivo.indexOf(element);
            if (copiaObjetivo.indexOf(arrayIntroducido[indice]) != -1) {
                copiaObjetivo[indiceOrigen] = 0;
                esta++;
            }
        });


        return {
            copiaObjetivo: copiaObjetivo,
            arrayIntroducido: arrayIntroducido,
            enSuSitio: enSuSitio,
            esta: esta
        }
    }

    let init = function () {
        coloresObjetivo = [];
        generarColoresObjetivo();
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobar: comprobar
    };
})();