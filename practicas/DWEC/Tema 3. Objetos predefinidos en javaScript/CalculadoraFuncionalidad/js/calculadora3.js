{
    let calculadora = {
        acumulado: undefined,

        display: undefined,

        operacion: undefined,

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
}