/**
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
 * Métodos a utilizar:
 * window.open()
 * document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    let abrirVentana = function () {
        let newWindow = window.open('', '', 'width=200,height=100,top=0,left=0');
        newWindow.document.write(
            "<html>"
            + "<head>"
            + "<title>Ventana de prueba</title>"
            + "</head>"
            + "<body>"
            + "Se han utilizado las siguientes propiedades "
            + "<ul>"
            + "<li>width=200</li>"
            + "<li>height=200</li>"
            + "</ul>"
            + "</body>"
            + "</html>");
    }

    let boton = document.getElementById("boton");
    boton.onclick = abrirVentana;
}