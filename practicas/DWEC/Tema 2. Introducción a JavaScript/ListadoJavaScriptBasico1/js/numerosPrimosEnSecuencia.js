/**
* Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números
* primos existen entre el 1 y dicho número.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let esPrimo = function(numero){
		let primo=true;
		for(let i=2;i<numero;i++){
			if(numero%i==0){
				primo=false;
				break;
			}
		} 
		return primo;
	}


	let contador=0;
	let numero = parseInt(prompt("Introduzca un número entero positivo: "));

	if(isNaN(numero) || numero.length == 0 || numero < 0) {
		console.log("Error. No has introducido un número entero positivo");
	} else {
		for(let i=1;i<numero;i++) {
			if(esPrimo(i)) {
				console.log(i);
				contador++;
			}
		}
		console.log("Entre el 1 y el " + numero + " hay " + contador + " números primos");
	}
}