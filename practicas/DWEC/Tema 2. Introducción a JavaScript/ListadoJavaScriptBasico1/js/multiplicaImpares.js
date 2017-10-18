/**
* Implementa MultiplicaImpares que multiplique los 20
* primeros números impares y muestre el resultado en pantalla
*
* Autor: Miguel Ángel Gavilán Merino
*/


{
	let multiplicaImpares = function () {
		let contador = 1;
		let multiplicacion = 1;

		do {
			if (contador % 2 == 0) {
				multiplicacion = multiplicacion * contador;
			}

			contador ++;
		} while (contador != 20);

		return multiplicacion;
	}

	console.log("La multiplicacion de los 20 primeros números impares es: " + multiplicaImpares());
}