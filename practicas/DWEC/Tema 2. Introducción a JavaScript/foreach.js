{
	let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
	let mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	let listaDiaSemana = document.getElementById("listaDiaSemana");
	let listaMesesAnio = document.getElementById("listaMesesAnio");
	
	let appendChildElementos = (elemento, texto) => {
		var li = document.createElement("li")

		li.appendChild(document.createTextNode(texto));
		elemento.appendChild(li);
	}

	

	diasSemana.forEach(dia => {
		appendChildElementos(listaDiaSemana, dia);
	});

	mesesAnio.forEach(mes => {
		appendChildElementos(listaMesesAnio, mes);
	});

}