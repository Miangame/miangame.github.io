/**
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre el enlace se muestre
 * completo el contenido de texto. Además, el enlace debe dejar de mostrarse después de pulsarlo por
 * primera vez. La acción de pinchar sobre un enlace forma parte de los "Eventos" de JavaScript que se
 * ven en el siguiente capítulo. En este ejercicio, sólo se debe saber que al pinchar sobre el enlace, se
 * ejecuta la función llamada muestra().
 */
{
	/**
	 * Muestra el resto del texto y oculta el botón "seguir leyendo"
	 */
	function muestra() {
		document.getElementById("adicional").className = "visible";

		document.getElementById("enlace").className = "oculto";

		document.getElementById("enlace2").className = "visible";
	}

	/**
	 * Oculta el texto y el botón "mostrar menos"
	 */
	function oculta() {
		document.getElementById("adicional").className = "oculto";

		document.getElementById("enlace").className = "visible";

		document.getElementById("enlace2").className = "oculto";
	}
}