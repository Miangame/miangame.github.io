/**
* Implementa ProductoPotencias que calcule y visualice el producto de las potencias de
* 2 entre 0 y 10.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let calcularPotencias = function () {
		let producto = 1;
		for (let i = 0; i <= 10; i++) {
			console.log("2^" + i + " = " + Math.pow(2, i));

			producto = producto * Math.pow(2, i);
		}

		console.log("El producto de las potencias de 2 es: " + producto);
	}

	calcularPotencias();
}