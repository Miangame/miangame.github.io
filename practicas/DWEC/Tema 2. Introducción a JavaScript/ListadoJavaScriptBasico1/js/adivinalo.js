/**
* Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
* entre el 1 y el 100. Mostrará un mensaje:
* a. Para indicar si has acertado (en una nueva ventana)
* b. Para indicar si la solución es mayor o es menor
* Al finalizar, se le preguntará al usuario si quiere repetir el juego.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{

	/*
	* Función por si quiere continuar el usuario
	*/
	let deseaContinuar = function () {
		do {
			switch(prompt("¿Desea continuar? s/n").toLowerCase()) {
				case 's':
					return true;

				case 'n':
					return false;

				default: 
					alert("Introduzca una opción correcta")
			}
		} while (true);
	}

	/*
	* Indica si el número introducido es menor, mayor o igual al número aleatorio
	*/
	let adivinarNumero = function (numero, aleatorio) {
		if (numero < 0 || numero > 100) {
			alert("Ese número no es válido");
		} else { 
			if (numero < aleatorio) {
				alert("El número introducido es menor al elegido");
			} else if (numero > aleatorio){
				alert("El número introducido es mayor al elegido");
			} else {
				alert("Enhorabuena, has acertado!!");
			}
		}
	}

	/*
	* Funcionamiento principal
	*/
	let principal = function() {
		let numero;

		let aleatorio;
		do{
			aleatorio = Math.round(Math.random()*99)+1;
			do{
				do {
					numero = prompt("Introduce un número entre 1 y 100");
				} while (isNaN(numero) || numero <= 0 || numero > 100);
				
				adivinarNumero(numero, aleatorio);
			}while(numero!=aleatorio || numero==null);
		}while(deseaContinuar());
	}

	principal();
	
}