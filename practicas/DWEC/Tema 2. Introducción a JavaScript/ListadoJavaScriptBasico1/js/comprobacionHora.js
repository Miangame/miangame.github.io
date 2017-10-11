/**
* Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
* es correcta. Si lo fuera, ha de mostrar la hora un segundo después
*
* Autor: Miguel Ángel Gavilán Merino
*/

{
	let hora = parseInt(prompt("Introduzca la hora: "));
	let minutos= parseInt(prompt("Introduzca los minutos: "));
	let segundos = parseInt(prompt("Introduzca los segundos: "));

	let comprobarDatos = function (hora,minutos,segundos){
		let flagError=false;

		if(hora<0 || hora>23) {
			return true;
		}

		if(minutos<0 || minutos>59) {
			return true;
		}

		if(segundos<0 || segundos>59) {
			return true;
		}

		if (isNaN(hora) || isNaN(minutos) || isNaN(segundos)) {
			return true;
		}
		return false;
	}

	let error=comprobarDatos(hora,minutos,segundos);

	if(!error) {
		let fecha = new Date(0, 0, 0, hora, minutos, segundos, 0);
		fecha.setSeconds(fecha.getSeconds() + 1);
		console.log("El segundo siguiente de la hora indicada es: " + fecha);
	} else {
		console.log("Se han introducido datos erróneos.");
	}
}