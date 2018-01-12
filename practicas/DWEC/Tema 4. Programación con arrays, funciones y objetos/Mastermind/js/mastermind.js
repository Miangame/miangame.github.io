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

    let generarAleatorio = function () {
        return Math.floor((Math.random() * colores.length));
    };

    let generarColoresObjetivo = function () {
        for (let i = 0; i < 4; i++) {
            coloresObjetivo.push(colores[generarAleatorio()]);
        }
    }

    let mostrar = function () {
        console.log(coloresObjetivo);
    }

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
            if (copiaObjetivo.indexOf(arrayIntroducido[indice]) != -1) {
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
        coloresObjetivo = ["negro","azul","amarillo","amarillo"];
        //generarColoresObjetivo();
    }

    return {
        init: init,
        mostrar: mostrar,
        comprobar: comprobar
    };
})();