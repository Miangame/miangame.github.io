/**
* Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
* secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
* (menor que 1), que lo indique.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let generarSecuencia = function (numero) {
		if (numero < 1 || isNaN(numero) || numero == null || numero%1 != 0) {
			console.log("El número introducido no es correcto");
			return;
		}

		for (let i = 1; i <= numero; i++) {
			console.log(i);
		}
	}

	generarSecuencia(prompt("Introduzca un número para generar la secuencia: "));
}