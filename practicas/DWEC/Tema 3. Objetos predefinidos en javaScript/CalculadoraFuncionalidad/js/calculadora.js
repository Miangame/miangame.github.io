{

    let patron = /btn(.*)/;


    let numero = 0;
    let variable = "";
    let temporal = "";
    let bandera = false;

    let calculadora = {
        acumulado: 0,

        arrayIds: ["btnCE", "btnC", "btnPorc", "btnSuma", "btn7", "btn8", "btn9", "btnResta", "btn4", "btn5", "btn6", "btnMult", "btn1", "btn2", "btn3", "btnDiv", "btn0", "btnCambSig", "btnComa", "btnIgual"],

        crearCalculadora: function () {
            let botones = ["CE", "<-", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+-", ",", "="];

            let contenido = document.createElement("div");
            contenido.className = "calculadora";
            let elemento;
            let input;
            let contador = 0;

            elemento = document.createElement("div");
            input = document.createElement("input");
            input.type = "number";
            input.className = "texto";
            input.setAttribute("disabled", "");
            input.id = "texto";
            input.value = 0;

            elemento.appendChild(input);
            contenido.appendChild(elemento);

            for (let i = 0; i < 5; i++) {
                elemento = document.createElement("div");
                for (let j = 0; j < 4; j++) {
                    input = document.createElement("input");
                    input.type = "button";
                    input.value = botones[contador];
                    input.className = "button";
                    input.id = this.arrayIds[contador];

                    contador++;

                    elemento.appendChild(input);
                }
                contenido.appendChild(elemento);
            }

            document.body.appendChild(contenido);

        }
    }//calculadora

    let calcular = function () {
        let campo = document.getElementById("texto");
        if (variable == "") {
            variable = this.value;
            calculadora.acumulado = numero;

        } else if (numero !== 0) {

            switch (variable) {
                case "+":
                    calculadora.acumulado += numero;
                    campo.value = calculadora.acumulado;
                    break;

                case "-":
                    calculadora.acumulado = calculadora.acumulado - numero;
                    campo.value = calculadora.acumulado;
                    break;

                case "x":
                    calculadora.acumulado *= numero;
                    campo.value = calculadora.acumulado;
                    break;

                case "/":
                    calculadora.acumulado /= numero;
                    campo.value = calculadora.acumulado;
                    break;

            }
        }

        if (variable != "") {
            switch (variable) {
                case "CE":
                    calculadora.acumulado = 0;
                    variable = "";
                    numero = 0;
                    campo.value = 0;
                    bandera = false;
                    break;

                case "<-":
                    if (campo.value.length <= 1) {
                        campo.value = 0;
                    } else {
                        campo.value = campo.value.substring(0, campo.value.length - 1);
                    }
                    break;

                case "%":
                    campo.value = campo.value / 100;
                    variable = "";
                    break;

                case "=":
                    variable = "";
                    break;

                case ",":
                    if (bandera == false) {
                        temporal = numero + ".";
                        bandera = true;
                    }
                    break;

                case "+-":
                    campo.value = campo.value - campo.value * 2;
                    break;
            }

        }

        variable = this.value;
        bandera = false;
        numero = 0;



    }

    let introducir = function () {
        let campo = document.getElementById("texto");
        if (bandera == true) {
            numero = parseFloat(temporal + this.value);
            campo.value = numero;
        } else {
            if (numero == 0) {
                numero = parseFloat(this.value);
                campo.value = numero;
            } else {
                numero = parseFloat(numero + this.value);
                campo.value = numero;
            }
        }
    }

    calculadora.crearCalculadora();

    calculadora.arrayIds.forEach(function (element) {
        if (!isNaN(parseInt(element.match(patron)[1]))) {
            document.getElementById(element).onclick = introducir;
        } else {
            document.getElementById(element).onclick = calcular;
        }

    });
}