let contador;
let contadorLinea;
let $divIzqda;
let $circulosRellenar;
let $circulosComprobar;
let $pantallaNueva;

let aniadirCirculo = function () {
    for (let i = 0; i < $circulosRellenar.length; i++) {
        if ($circulosRellenar[i].style.backgroundColor == "" || $circulosRellenar[i].style.backgroundColor == "transparent") {
            switch (this.id) {
                case "circuloRojo":
                    $circulosRellenar[i].style = "background-color: red;";
                    break;

                case "circuloBlanco":
                    $circulosRellenar[i].style = "background-color: white;";
                    break;

                case "circuloNegro":
                    $circulosRellenar[i].style = "background-color: black;";
                    break;

                case "circuloVerde":
                    $circulosRellenar[i].style = "background-color: green;";
                    break;

                case "circuloAzul":
                    $circulosRellenar[i].style = "background-color: blue;";
                    break;

                case "circuloAmarillo":
                    $circulosRellenar[i].style = "background-color: yellow;";
                    break;

                case "circuloMarron":
                    $circulosRellenar[i].style = "background-color: brown;";
                    break;

                case "circuloNaranja":
                    $circulosRellenar[i].style = "background-color: orange;";
                    break;
            }
            $circulosRellenar[i].addEventListener("click", quitarColor);
            break;
        }
    }
    contador++;
}

/**
     * Quita el color de un círculo
     */
let quitarColor = function () {
    this.style = "background-color: transparent;";
    this.removeEventListener("click", quitarColor);
    contador--;
}

/**
 * Elimina los eventos de una línea
 */
let quitarEventoLineaAnterior = function () {
    for (let i = 0; i < $circulosRellenar.length; i++) {
        $circulosRellenar[i].removeEventListener("click", quitarColor);
        $circulosRellenar[i].style.pointerEvents = "none";
    }
}

let crearNuevaLinea = function () {
    quitarEventoLineaAnterior();

    let contenido = "<div id='filaRellenar' class='intento" + contadorLinea + "'>" +
        "<div class='circuloRellenar circuloRellenar" + contadorLinea + "'></div>" +
        "<div class='circuloRellenar circuloRellenar" + contadorLinea + "'></div>" +
        "<div class='circuloRellenar circuloRellenar" + contadorLinea + "'></div>" +
        "<div class='circuloRellenar circuloRellenar" + contadorLinea + "'></div>" +
        "<div class='circuloComprobar circuloComprobar" + contadorLinea + "'></div>" +
        "<div class='circuloComprobar circuloComprobar" + contadorLinea + "'></div>" +
        "<div class='circuloComprobar circuloComprobar" + contadorLinea + "'></div>" +
        "<div class='circuloComprobar circuloComprobar" + contadorLinea + "'></div>" +
        "</div>";

    $divIzqda.append(contenido);

    $(".intento" + contadorLinea).animate({
        'margin-bottom': '0px'
    }, 600);

    contador = 0;
    $circulosRellenar = $(".circuloRellenar" + contadorLinea);
    $circulosComprobar = $(".circuloComprobar" + contadorLinea);

    contadorLinea++;
}

/**
     * Comprueba que los colores seleccionados son los de la secuencia generada aleatoriamente
     */
let comprobar = function () {
    let arrayColoresComprobar = [];
    let contador2 = 0;

    $circulosRellenar.each(function (indice, circulo) {
        switch (circulo.style.backgroundColor) {
            case "red":
                arrayColoresComprobar.push("rojo");
                break;
            case "white":
                arrayColoresComprobar.push("blanco");
                break;
            case "black":
                arrayColoresComprobar.push("negro");
                break;
            case "green":
                arrayColoresComprobar.push("verde");
                break;
            case "blue":
                arrayColoresComprobar.push("azul");
                break;
            case "yellow":
                arrayColoresComprobar.push("amarillo");
                break;
            case "brown":
                arrayColoresComprobar.push("marron");
                break;
            case "orange":
                arrayColoresComprobar.push("naranja");
                break;
        }
    });

    if (contador >= 4) {
        objetoComprobar = masterMind.comprobar(arrayColoresComprobar);

        if (objetoComprobar.enSuSitio > 0) {
            while (contador2 < objetoComprobar.enSuSitio) {
                $circulosComprobar[contador2].style.backgroundColor = "black";
                contador2++;
            }
        }

        if (contador2 == 4) {
            $pantallaNueva.css("display", "block");
        }

        if (objetoComprobar.esta > 0) {
            for (let i = 0; i < objetoComprobar.esta; i++) {
                $circulosComprobar[contador2].style.backgroundColor = "white";
                contador2++;
            }
            contador2 = 0;
        }

        if (contador2 != 4) {
            crearNuevaLinea();
        }

        $divIzqda.scrollTop(0);
    }
}

$(function () {
    masterMind.init();
    masterMind.mostrar();

    contadorLinea = 0;
    contador = 0;

    $circulosRellenar = $(".circuloRellenar");
    $circulosComprobar = $(".circuloComprobar");

    $divIzqda = $("#izquierda");
    $pantallaNueva = $("#pantallaFin");

    $(".circulo").on("click", aniadirCirculo);

    $("#check").on("click", comprobar);

    $("#salir").on("click", function () {
        window.close();
    });

    $("#reiniciar").on("click", function () {
        init();
        $pantallaNueva.style = "display: none;"
    });

    crearNuevaLinea();
});