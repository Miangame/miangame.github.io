{
	// Numero de enlaces de la pagina
	let numEnlaces = document.getElementsByTagName("a");
	// Numero de enlaces del tercer párrafo
	let numParrafos = document.getElementsByTagName("p");
	let numEnlacesParrafo = numParrafos[2].getElementsByTagName("a");

	// Numero de enlaces que apuntan a http://prueba
	let contador = 0;
	for (let i = 0; i < numEnlaces.length; i++) {
		if (numEnlaces[i].href == 'http://prueba/' || numEnlaces[i].href == 'http://prueba') {

			contador++;
		}
	}


	let crearElemento = (texto) => {
		let nodo = document.createElement("h2");
		nodo.appendChild(document.createTextNode(texto));
		document.body.appendChild(nodo);
	}

	crearElemento("Número de enlaces: " + numEnlaces.length);
	crearElemento("Dirección del penúltimo enlace: " + numEnlaces[numEnlaces.length - 2]);
	crearElemento("El número de enlaces que apuntan a http://prueba es: " + contador);
	crearElemento("Número de enlaces del tercer nodo: " + numEnlacesParrafo.length);
}	
