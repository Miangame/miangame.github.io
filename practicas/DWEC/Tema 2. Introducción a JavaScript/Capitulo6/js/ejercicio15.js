/**
 * Completar el código JavaScript proporcionado para que:
 *
 * 1. Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página:
 * Información que se muestra para los eventos del ratón
 * Para mostrar los mensajes, utilizar la función muestraInformacion() deduciendo su funcionamiento a partir de su código fuente.
 * 2. Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada:
 * 3. Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser 
 * amarillo (#FFFFCC) y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). 
 * Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
 * 
 * @author Miguel Ángel Gavilán Merino
 */

{
    function informacion() {
      let evento =  window.event;
      switch(evento.type) {
        case 'mousemove':
          document.getElementById('info').style.backgroundColor = '#FFFFFF';
          let xRelativa, yRelativa, xAbsoluta, yAbsoluta;
            xAbsoluta = evento.pageX;
            yAbsoluta = evento.pageY;
            xRelativa = evento.clientX;
            yRelativa = evento.clientY;
          muestraInformacion(['Ratón', 'Navegador ['+xRelativa+', '+yRelativa+']', 'Pagina ['+xAbsoluta+', '+yAbsoluta+']']);
          break;
        case 'keypress':
          document.getElementById('info').style.backgroundColor = '#CCE6FF';
          let caracter = evento.charCode || evento.keyCode;
          let letra = String.fromCharCode(caracter);
          let codigo = letra.charCodeAt(0);
          muestraInformacion(['Teclado', 'Carácter ['+letra+']', 'Código ['+codigo+']']);
          break;
        case 'click':
          document.getElementById('info').style.backgroundColor = '#FFFFCC';
          break;
      }
    }
     
    function muestraInformacion(mensaje) {
      document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
      for(let i=1; i<mensaje.length; i++) {
        document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
      }
    }
     
    document.onmousemove = informacion;
    document.onkeypress = informacion;
    document.onclick = informacion;
}
     