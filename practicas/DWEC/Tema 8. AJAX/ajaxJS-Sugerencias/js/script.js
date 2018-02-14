{
    let peticion;
    let listaAlumnos;
    let inputBusqueda;

    let muestraContenido = function () {
        if (peticion.readyState == 4) {
            if (peticion.status == 200) {
                console.log(peticion.responseText);
                
                listaAlumnos.innerHTML = peticion.responseText;
            }
        }
    }

    let cargaContenido = function () {
        peticion = new XMLHttpRequest();

        peticion.onreadystatechange = muestraContenido;

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