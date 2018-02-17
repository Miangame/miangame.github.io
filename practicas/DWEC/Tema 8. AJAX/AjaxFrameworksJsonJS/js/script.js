{
    let peticion;
    let titulo;
    let img;
    let descripcion;
    let enlaces;

    let cargarContenido = function (event) {
        event.preventDefault();
        let idElemento = this.id;
        let objJson;

        peticion = new XMLHttpRequest();

        peticion.onreadystatechange = function () {
            if (peticion.readyState == 4) {
                if (peticion.status == 200) {
                    objJson = JSON.parse(peticion.responseText);

                    titulo.innerHTML = objJson.nombre;
                    titulo.setAttribute("href", objJson.url);
                    titulo.style.borderBottom = "3px solid blue";
                    img.setAttribute("src", objJson.imagen);
                    descripcion.innerHTML = objJson.descripcion;
                }
            }
        };

        peticion.open('GET', "frameworks.php?nombre=" + idElemento, true);
        peticion.send(null);

    };

    let init = function () {
        titulo = document.getElementById("titulo");
        img = document.getElementById("img");
        descripcion = document.getElementById("descripcion");
        enlaces = document.getElementsByClassName("enlace");

        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].addEventListener("click", cargarContenido);

        };
    };

    window.onload = init;
}