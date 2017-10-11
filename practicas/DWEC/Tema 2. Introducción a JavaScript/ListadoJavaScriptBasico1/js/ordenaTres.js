/**
* Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a
* mayor.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{

let ordenaTres=function() {
	do {
		var num1 = parseInt(prompt("Introduzca el primer número: "));
		if(isNaN(num1) || num1 == null) {
			console.log("Introduzca un número");
		}
	} while (isNaN(num1) || num1 == null);

	do {
		var num2=parseInt(prompt("Introduzca el segundo número: "));
		if(isNaN(num2) || num2 == null) {
			console.log("Introduzca un número");
		}
	} while (isNaN(num2) || num2 == null);

	do {
		var num3=parseInt(prompt("Introduzca el tercer número: "));
		if(isNaN(num3) || num3 == null) {
			console.log("Introduzca un número");
		}
	} while (isNaN(num3) || num3 == null);

	if(num1 < num2 && num1 < num3 && num2 < num3){
		return "Los numeros de menor a mayor son: " + num1 + " " + num2 +" " + num3;
	}
	else if(num1 > num2 && num1 > num3 && num2 < num3){
		return "Los numeros de menor a mayor son: " + num1 + " " + num3 +" " + num2;
	}
	else if(num2 < num1 && num2 < num3 && num1 < num3){
		return "Los numeros de menor a mayor son: " + num2 + " " + num1 +" " + num3;
	}
	else if(num2 < num1 && num2 < num3 && num1 > num3){
		return "Los numeros de menor a mayor son: " + num2 + " " + num3 +" " + num1;
	}
	else if(num3 < num1 && num3 < num2 && num1 < num2){
		return "Los numeros de menor a mayor son: " + num3 + " " + num1 +" " + num2;
	}
	else if(num3 < num1 && num3 < num2 && num1 > num2){
		return "Los numeros de menor a mayor son: " + num3 + " " + num2 +" " + num1;
	}
}

	console.log(ordenaTres());
}
