/**
* Implementa PorLineas que visualice los números del 0 al 100 separados por comas.
* Cada múltiplo de 7 ha de comenzar en una línea nueva
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let escribirLineas = function () {
		let cadena = "";
		for (let i = 0; i <= 100; i++) {
			
			if (i % 7 == 0) {
				cadena += "\n";
			}

			cadena += i + ", ";
			
		}
		
		console.log(cadena);
	}

	escribirLineas();
}