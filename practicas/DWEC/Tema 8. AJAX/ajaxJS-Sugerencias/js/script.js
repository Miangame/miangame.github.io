{
    let peticion;
    let listaAlumnos;
    let inputBusqueda;

    let cargaContenido = function () {
        peticion = new XMLHttpRequest();

        peticion.onreadystatechange = function () {
            if (peticion.readyState == 4) {
                if (peticion.status == 200) {
                    listaAlumnos.innerHTML = peticion.responseText;
                }
            }
        };

        peticion.open('GET', "alumnos.php", true);
        peticion.send(null);
    };

    let init = function () {
        listaAlumnos = document.getElementById("alumnos");
        inputBusqueda = document.getElementById("inputBusqueda");

        inputBusqueda.addEventListener("keyup", cargaContenido(this.value));
    };

    window.onload = init;
}