/**
* Implementa MediaPositivos que calcule la media de una serie de números positivos,
* introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let calcularMedia = function () {
		let suma = 0;
		let contador = 0;
		let numero;
		let media;
		do {
			numero = parseInt(prompt("Introduzca un número: "));

			if (isNaN(numero) || numero < 0) {
				return "Error al introducir números";
			}

			if (numero != 0) {
				contador ++;
			}
			
			suma += numero;
			media = suma / contador;

		} while (numero != 0);

		return media;
	}


	console.log("La media de los números introducidos es: " + calcularMedia());
}