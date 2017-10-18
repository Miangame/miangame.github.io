/**
* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
* como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
* resultado devuelto por la funció
*/

{
let parImpar = function (numero) {
	if (!numeroValido(numero)) 
		return "El número no es un entero";
	
	if ((numero%2) === 0) 
		return "El número es par";
	return "El número es impar";
	
}

let numeroValido = function (numero) {
	if ((numero % 1) === 0) 
		return true;
	return false;
}

alert(parImpar(prompt("Introduzca un número: ")));
}