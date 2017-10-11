/**
* Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente
* tipo
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let generarPiramide = function() {
		let cadena = "";
		for (let i = 1; i < 10; i++) {
			for (let j = 1; j <= i; j++) {
				cadena += i;
			}
			console.log(cadena);
			cadena = "";
		}

		console.log("0000000000");
	}

	generarPiramide();
}