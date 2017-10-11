/**
* Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
* a. Cuántas cifras tiene (7 cifras)
* b. Lo muestre del revés.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	
	do {
		var num = prompt("Introduzca un número entre 0 y 10");
		if(isNaN(num) || num == null || num < 0 || num > 10) {
			console.log("Por favor, introduzca un número entre 0 y 10")
		}
	} while (isNaN(num) || num == null || num < 0 || num > 10);
		
	var numero = num.toString().split("");	

	console.log("El numero " + numero.join("") + " tiene " + numero.length + " dígitos");
	console.log("El número al revés es " + numero.reverse().join(""));
	
}