/**
 * Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * 
 * @author Miguel Ángel Gavilán Merino
 */


{
    let top = -20;
    let left = -20;
    let abrirVentanas = function () {
        for (let i = 0; i < 5; i++) {
            let newWindow = window.open('', '', 'width=200,height=200,top=' + (top += 20) + ',left=' + (left += 20) + '');
            newWindow.document.write("Ventana " + (i + 1) + "<br><input type='button' id='boton' value='cerrar' onclick=window.close();>");
            newWindow.document.close();
        }

        top = 0;
        left = 0;
    }

    let boton = document.getElementById("boton");
    boton.onclick = abrirVentanas;
}