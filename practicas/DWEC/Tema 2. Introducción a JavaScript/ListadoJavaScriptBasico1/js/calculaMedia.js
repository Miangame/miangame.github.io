/**
* Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
* Entonces, que muestre la media
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let calculaMedia = function () {
		let numero;
		let suma = 0;
		let contador = 0;

		do {
			numero = parseInt(prompt("Introduzca un número (negativo para parar)"));

			if (isNaN(numero) || numero == null) {
				return "Ha introducido un número inválido"
			}

			if (numero >= 0) {
				suma += numero
				contador ++;
			}
		}while (numero >= 0);

		console.log("Suma: " + suma);
		console.log("Número de dígitos: " + contador);
		return suma / contador;
	}

	console.log("La media es: " + calculaMedia());
}