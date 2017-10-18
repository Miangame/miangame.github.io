/**
* Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
* palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
* palíndromo complejo: "La ruta nos aporto otro paso natural".
*/

{
let comprobarPalindromo = function (cadena) {
	cadena = cadena.toLowerCase();
	cadena = cadena.replace(/ /g, "");
	let cadenaAlReves = cadena.split("").reverse().join("");
	cadenaAlReves = cadena.toLowerCase();
	cadenaAlReves = cadena.replace(/ /g, "");

	if (cadena === cadenaAlReves) 
		return "Es un palíndromo";
	return "No es un palíndromo";
}

alert(comprobarPalindromo(prompt("Introduzca una cadena:")));

}