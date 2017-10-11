{
	let valores = [true, 5, false, "hola", "adios", 2]; //Array con distintos elementos

	if (valores[3].length > valores[4].length) {
		console.log("\'" + valores[3] + "\' es mayor");
	} else {
		console.log("\'" + valores[4] + "\' es mayor");
	}

	console.log(valores[0] && valores[2]);
	console.log(valores[0] || valores[2]);

	console.log(valores[1]+valores[5]);
	console.log(valores[1]-valores[5]);
	console.log(valores[1]*valores[5]);
	console.log(valores[1]/valores[5]);
	console.log(valores[1]%valores[5]);
}
