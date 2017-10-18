/**
* Implementa PirámideDos que mediante un bucle for visualice una pirámide del siguiente
* tipo
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let generarPiramide = function() {
		let cadena = "";
		for (let i = 1; i < 10; i++) {
			cadena += i;
			
			console.log(cadena);
		}
	}

	generarPiramide();
}