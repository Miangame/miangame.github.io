/**
* Implenta NumeroPrimo que pida un número e indique si es primo o no.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let esPrimo = function(numero) {
		let contador = 2;

	  	while (contador != numero){
	    	if (numero % contador == 0)
	      		return "El numero " + numero + " no es primo";
	    	contador++;
	  	}

	  return "El numero " + numero + " es primo";
	}

	let numero;
	do {
		numero = prompt("Introduzca un número para saber si es primo: ");
	} while(isNaN(numero) || numero == null);

	console.log(esPrimo(numero));
}