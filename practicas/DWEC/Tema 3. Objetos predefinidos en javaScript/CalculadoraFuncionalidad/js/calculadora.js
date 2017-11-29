/**
 * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora mediante los métodos del objeto predefinido document.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let contadorComas = 0;

    let calculadora = {
        "acumulado": 0,

        "arrayIds": ["btnCE", "btnC", "btnPorc", "btnSuma", "btn7", "btn8", "btn9", "btnResta", "btn4", "btn5", "btn6", "btnMult", "btn1", "btn2", "btn3", "btnDiv", "btn0", "btnCambSig", "btnComa", "btnIgual"],

        "crearcalculadora": function () {
            let botones = ["CE", "<-", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+-", ",", "="];

            let contenido = document.createElement("div");
            contenido.className = "calculadora";
            let elemento;
            let input;
            let contador = 0;

            elemento = document.createElement("div");
            input = document.createElement("input");
            input.type = "text";
            input.setAttribute("disabled", "");
            input.className = "texto";
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
    }//crearcalculadora()

    let asignarComportamiento = function () {
        let numero = this.value;
        let campo = document.getElementById("texto");

        switch (numero) {
            case "+":
                calculadora.acumulado += parseFloat(campo.value);
                numero = calculadora.acumulado;
                campo.value = numero;
                break;

            case "-":
                calculadora.acumulado = parseFloat(campo.value) - parseFloat(calculadora.acumulado);
                numero = calculadora.acumulado;
                campo.value = numero;
                break;

            case "x":
                if (calculadora.acumulado === 0) {
                    calculadora.acumulado = 1;
                }

                calculadora.acumulado *= parseFloat(campo.value);
                numero = calculadora.acumulado;
                campo.value = numero;
                break;

            case "/":
                calculadora.acumulado = parseFloat(campo.value) / parseFloat(calculadora.acumulado);
                campo.value = numero;
                break;

            case "CE":
                calculadora.acumulado = 0;
                contadorComas = 0;
                campo.value = 0;
                break;

            case "<-":
                break;

            case "%":
                break;

            case "=":
                break;

            case ",":
                if (contadorComas < 1) {
                    if (campo.value === 0) {
                        campo.value = 0 + ".";
                    } else {
                        campo.value = campo.value + ".";
                    }
                }
                contadorComas++;
                break;

            case "+-":
                campo.value = -campo.value;
                break;

            default:
                if (campo.value == "0") {
                    campo.value = numero;
                } else {
                    campo.value += numero;
                }

                break;
        }

    }

    let calcularResultado = function () {


    }




    calculadora.crearcalculadora();

    calculadora.arrayIds.forEach(function (element) {
        document.getElementById(element).onclick = asignarComportamiento;
    });
}