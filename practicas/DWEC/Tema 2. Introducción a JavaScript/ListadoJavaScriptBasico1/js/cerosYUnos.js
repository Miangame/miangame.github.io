/**
* Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
* de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let contarCeros = function () {
		let numero;
		let contador = 0;

		do {
			numero = parseInt(prompt("Introduzca un 0 ó un 1 (2 para salir): "));
			

			switch(numero) {
				case 0:
					contador ++;
					break;

				case 1:
					break;

				case 2:
					break;

				default:
					return "Ha introducido un número inválido"
			}

		} while (numero != 2);

		return contador;
	}


	console.log("El número de ceros de la secuencia: " + contarCeros());
}