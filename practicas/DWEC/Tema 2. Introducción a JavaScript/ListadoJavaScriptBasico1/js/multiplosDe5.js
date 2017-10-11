/**
* Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	for (let i = 0; i < 7; i++) {
		let numero;
		do {
			numero = prompt("Introduzca un número: ");
		} while (isNaN(numero));
		
		if ((numero % 5) === 0) {
			console.log("El número " + numero + " es múltiplo de 5");
		} else {
			console.log("El número " + numero + " no es múltiplo de 5");
		}
	}
}