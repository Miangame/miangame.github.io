{
    let h1;
    let informa;
    let raton;
    let salir;
    
    let diaActual = new Date();
    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    let cerrarVentana = function () {
        window.close();
    };

    let mensajeSegunHora = function () {
        let hora = diaActual.getHours();
        let minutos = diaActual.getMinutes();

        if (hora >= 18 && hora <= 23)
            if ((hora == 18 && minutos > 0) || hora > 18)
                return "Son las " + hora + ":" + minutos + " Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
        if (hora >= 0 && hora < 8)
            return "Son las " + hora + ":" + minutos + " Ya es hora de que comiences a trabajar. Hay que levantar el país.";
        if (hora >= 8 && hora <= 18)
            if ((hora == 18 && minutos == 0) || hora < 18)
                return "Son las " + hora + ":" + minutos + " Pronto llegan las vacaciones. Aguanta";
    }

    let informacion = function () {
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        let numeroDiaSemana;
        if (diaActual.getDay() - 1 < 0) {
            numeroDiaSemana = diasSemana.length - 1;
        } else {
            numeroDiaSemana = diaActual.getDay() - 1;
        }
        p.appendChild(document.createTextNode("Hoy es " + diasSemana[numeroDiaSemana]));
        p2.appendChild(document.createTextNode(mensajeSegunHora()));
        document.body.appendChild(p);
        document.body.appendChild(p2);
    };

    let muestraRaton = function (evento) {
        let p = document.createElement("p");
        p.appendChild(document.createTextNode("X:" + evento.clientX + " Y:" + evento.clientY));
        document.body.appendChild(p);

        setTimeout(limpiar.bind(p),2000);
    }

    let limpiar = function () {
        this.innerHTML = "";
    }

    let init = function () {
        h1 = document.createElement("h1");
        informa = document.createElement("input");
        raton = document.createElement("input");
        salir = document.createElement("input");

        h1.appendChild(document.createTextNode("Miguel Ángel Gavilán Merino"));

        informa.type = "button";
        informa.value = "Informa";

        raton.type = "button";
        raton.value = "Raton";

        salir.type = "button";
        salir.value = "Salir";

        document.body.appendChild(h1);
        document.body.appendChild(informa);
        document.body.appendChild(raton);
        document.body.appendChild(salir);

        informa.addEventListener("click", informacion);
        raton.addEventListener("click", muestraRaton.bind(raton));
        salir.addEventListener("click", cerrarVentana);
    }

    window.onload = init;
}