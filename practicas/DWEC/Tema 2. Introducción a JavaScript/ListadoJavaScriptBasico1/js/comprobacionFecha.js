/**
* Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
* fecha es correcta. Si lo fuera, ha de mostrar el día después.
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let dia = parseInt(prompt("Introduzca el día: "));
	let mes= parseInt(prompt("Introduzca el mes: "));
	let anno = parseInt(prompt("Introduzca el año: "));

	let comprobarDatos = function (dia, mes, anno){
		if (isNaN(dia)){
			console.log("El día no es un número.");
			return true;
		}
		if (isNaN(mes)){
			console.log("El mes no es un número.");
			return true;
		}
		if (isNaN(anno)){
			console.log("El año no es un número.");
			return true;
		}
		if (dia <= 0 || dia > 31 || mes <= 0 || mes > 12 || anno < 0)
			return true;
	}

	let error=comprobarDatos(dia,mes,anno);

	let mostrarResultados = function(error){
		if(error) {
			console.log("Valores erróneos en la fecha.");
		} else {
			let fecha = new Date(anno, mes-1, dia, 0, 0, 0, 0);
			fecha.setDate(fecha.getDate() + 1);
			console.log("Día siguiente de la fecha indicada: "+ fecha);
		}
	}

	mostrarResultados(error);

}