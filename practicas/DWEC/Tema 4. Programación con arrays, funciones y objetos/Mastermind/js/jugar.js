{
    let colores;
    let circulosRellenar;
    let contador;
    let contadorLinea;
    let btnComprobar;
    let circulosComprobar;
    let divIzqda;
    let pantallaNueva;
    let btnSalir;
    let btnReiniciar;

    let aniadirCirculo = function (evt) {
        if (contador < 4) {
            switch (this.id) {
                case "circuloRojo":
                    circulosRellenar[contador].style = "background-color: red;";
                    break;

                case "circuloBlanco":
                    circulosRellenar[contador].style = "background-color: white;";
                    break;

                case "circuloNegro":
                    circulosRellenar[contador].style = "background-color: black;";
                    break;

                case "circuloVerde":
                    circulosRellenar[contador].style = "background-color: green;";
                    break;

                case "circuloAzul":
                    circulosRellenar[contador].style = "background-color: blue;";
                    break;

                case "circuloAmarillo":
                    circulosRellenar[contador].style = "background-color: yellow;";
                    break;

                case "circuloMarron":
                    circulosRellenar[contador].style = "background-color: brown;";
                    break;

                case "circuloNaranja":
                    circulosRellenar[contador].style = "background-color: orange;";
                    break;
            }
        }


        contador++;

    }

    let crearNuevaLinea = function () {
        let filaRellenar = document.createElement("div");
        filaRellenar.id = "filaRellenar";

        let nuevoCirculosRellenar = document.createElement("div");
        nuevoCirculosRellenar.id = "circulosRellenar";

        let nuevoCirculosComprobar = document.createElement("div");
        nuevoCirculosComprobar.id = "circulosComprobar";

        let nuevoCirculoRellenar;
        let nuevoCirculoComprobar;

        for (let i = 0; i < 4; i++) {
            nuevoCirculoRellenar = document.createElement("div");
            nuevoCirculoRellenar.classList.add("circuloRellenar");
            nuevoCirculoRellenar.classList.add("circuloRellenar" + contadorLinea);

            nuevoCirculosRellenar.appendChild(nuevoCirculoRellenar);
        }

        for (let i = 0; i < 4; i++) {
            nuevoCirculoComprobar = document.createElement("div");
            nuevoCirculoComprobar.classList.add("circuloComprobar");
            nuevoCirculoComprobar.classList.add("circuloComprobar" + contadorLinea);
            nuevoCirculosComprobar.appendChild(nuevoCirculoComprobar);
        }

        filaRellenar.appendChild(nuevoCirculosRellenar);
        filaRellenar.appendChild(nuevoCirculosComprobar);

        divIzqda.appendChild(filaRellenar);

        contador = 0;
        circulosRellenar = document.getElementsByClassName("circuloRellenar" + contadorLinea);
        circulosComprobar = document.getElementsByClassName("circuloComprobar" + contadorLinea);
        contadorLinea++;
    }

    let comprobar = function () {
        let arrayColoresComprobar = [];
        let contador2 = 0;
        for (let i = 0; i < circulosRellenar.length; i++) {
            if (circulosRellenar[i].style.backgroundColor == "red") {
                arrayColoresComprobar.push("rojo");
            } else if (circulosRellenar[i].style.backgroundColor == "white") {
                arrayColoresComprobar.push("blanco");
            } else if (circulosRellenar[i].style.backgroundColor == "black") {
                arrayColoresComprobar.push("negro");
            } else if (circulosRellenar[i].style.backgroundColor == "green") {
                arrayColoresComprobar.push("verde");
            } else if (circulosRellenar[i].style.backgroundColor == "blue") {
                arrayColoresComprobar.push("azul");
            } else if (circulosRellenar[i].style.backgroundColor == "yellow") {
                arrayColoresComprobar.push("amarillo");
            } else if (circulosRellenar[i].style.backgroundColor == "brown") {
                arrayColoresComprobar.push("marron");
            } else if (circulosRellenar[i].style.backgroundColor == "orange") {
                arrayColoresComprobar.push("naranja");
            }

        }

        if (contador >= 4) {
            objetoComprobar = masterMind.comprobar(arrayColoresComprobar);

            if (objetoComprobar.enSuSitio > 0) {
                while (contador2 < objetoComprobar.enSuSitio) {
                    circulosComprobar[contador2].style = "background-color: black;";
                    contador2++;
                }
            }

            if (contador2 == 4) {
                pantallaNueva.style = "display: block;";
            }

            if (objetoComprobar.esta > 0) {
                for (let i = 0; i < objetoComprobar.esta; i++) {
                    circulosComprobar[contador2].style = "background-color: white;";
                    contador2++;
                }
                contador2 = 0;
            }

            crearNuevaLinea();
            divIzqda.scrollTo(0, 0)
        }
    }

    let reiniciar = function () {
        init();
        pantallaNueva.style = "display: none;"
    }

    let init = function () {
        masterMind.init();
        masterMind.mostrar();
        contador = 0;
        contadorLinea = 0;
        divIzqda = document.getElementById("izquierda");
        colores = document.getElementsByClassName("circulo");
        circulosRellenar = document.getElementsByClassName("circuloRellenar");
        circulosComprobar = document.getElementsByClassName("circuloComprobar");
        btnComprobar = document.getElementById("check");
        pantallaNueva = document.getElementById("pantallaFin");
        btnSalir = document.getElementById("salir");
        btnReiniciar = document.getElementById("reiniciar");

        btnComprobar.addEventListener("click", comprobar);

        btnSalir.addEventListener("click", function () {
            window.close();
        });

        btnReiniciar.addEventListener("click", reiniciar);

        for (let i = 0; i < colores.length; i++) {
            colores[i].addEventListener("click", aniadirCirculo);
        }

        crearNuevaLinea();
    }

    window.onload = init;
}