{
	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

	let numero = prompt("Introduzca el número");
	let letra = prompt("Introduzca la letra");

	letra = letra.toUpperCase();

	if (numero<0 || numero > 99999999) {
		console.log("El número no es válido")
	}else{
		let numero2 = numero%23;
		let letraNueva = letras[numero2];

		if (letra == letraNueva) {
			console.log("El DNI es correcto");
		}else{
			console.log("El DNI no es correcto");
		}
	}
}