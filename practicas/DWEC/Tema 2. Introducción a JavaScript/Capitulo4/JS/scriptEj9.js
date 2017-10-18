/**
* Definir una función que muestre información sobre una cadena de texto que se le pasa como
* argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
* sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

{
let infoCadena = function (cadena) {
	if (cadena === cadena.toUpperCase()) 
		return "La cadena está formada solo por mayúsculas";
	if(cadena === cadena.toLowerCase())
		return "La cadena está formada solo por minúsculas";

	return "La cadena está formada por mayúsculas y minúsculas";
	
}

alert(infoCadena(prompt("Introduzca una cadena: ")));
}