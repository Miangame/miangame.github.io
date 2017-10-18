{
	let numero = prompt("Introduce el número para calcular el factorial");
	let resultado = 1;

	for (let i = 1; i <= numero; i++) {
		resultado = resultado * i;
	}

	console.log("El resultado es: " + resultado);
}