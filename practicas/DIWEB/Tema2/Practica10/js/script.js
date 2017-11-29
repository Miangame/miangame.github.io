window.onload = function () {

    //Recibimos o recogemos el elemento canvas
    var contexto = cargaContextoCanvas("micanvas");


    if (contexto) {
        //Círculo lupa
        contexto.beginPath();
        contexto.lineWidth=3;
        
        contexto.arc(13, 13, 10, Math.PI, Math.PI*4, false);
        contexto.stroke();

        //Palo lupa
        contexto.beginPath();
        contexto.moveTo(19, 19);
        contexto.lineTo(30, 30);
        contexto.stroke();
    }
}

//Recibe un identificador del elemento canvas y carga el canvas
//Devueve el contexto del canvas o FALSE si no ha podido conseguise
function cargaContextoCanvas(idCanvas) {
    var elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext("2d");
        if (contexto) {
            return contexto;
        }
    }
    return false;
}
